"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { useScroll } from "framer-motion";

// Small 2D Perlin-style noise (fast enough for ribbon sampling)
function makeNoise2D(seed = 1337) {
    const perm = new Uint8Array(512);
    const p = new Uint8Array(256);

    let s = seed >>> 0;
    const rand = () => {
        // xorshift32
        s ^= s << 13; s >>>= 0;
        s ^= s >> 17; s >>>= 0;
        s ^= s << 5; s >>>= 0;
        return (s & 0xffffffff) / 0xffffffff;
    };

    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1));
        const tmp = p[i];
        p[i] = p[j];
        p[j] = tmp;
    }
    for (let i = 0; i < 512; i++) perm[i] = p[i & 255];

    const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const grad = (hash: number, x: number, y: number) => {
        const h = hash & 7;
        const u = h < 4 ? x : y;
        const v = h < 4 ? y : x;
        return ((h & 1) ? -u : u) + ((h & 2) ? -2.0 * v : 2.0 * v);
    };

    return (x: number, y: number) => {
        const X = Math.floor(x) & 255;
        const Y = Math.floor(y) & 255;

        const xf = x - Math.floor(x);
        const yf = y - Math.floor(y);

        const u = fade(xf);
        const v = fade(yf);

        const aa = perm[X + perm[Y]];
        const ab = perm[X + perm[Y + 1]];
        const ba = perm[X + 1 + perm[Y]];
        const bb = perm[X + 1 + perm[Y + 1]];

        const x1 = lerp(grad(aa, xf, yf), grad(ba, xf - 1, yf), u);
        const x2 = lerp(grad(ab, xf, yf - 1), grad(bb, xf - 1, yf - 1), u);

        // Normalize-ish to [-1, 1]
        return lerp(x1, x2, v) * 0.5;
    };
}

function prefersReducedMotion(): boolean {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

type BorealisBackgroundProps = {
    className?: string;
    intensity?: number; // 0.6–1.2 recommended
};

export function BorealisBackground({ className, intensity = 1 }: BorealisBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const rafRef = useRef<number | null>(null);
    const lastT = useRef<number>(0);
    const scrollRef = useRef<number>(0);
    const reduceMotionRef = useRef<boolean>(false);

    const { scrollYProgress } = useScroll();

    const noise2D = useMemo(() => makeNoise2D(20260209), []);

    useEffect(() => {
        const unsub = scrollYProgress.on("change", (v) => {
            scrollRef.current = Math.min(1, Math.max(0, v));
        });
        return () => unsub();
    }, [scrollYProgress]);

    useEffect(() => {
        reduceMotionRef.current = prefersReducedMotion();

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        let w = 0, h = 0, dpr = 1;

        const resize = () => {
            const rect = canvas.getBoundingClientRect();
            w = Math.max(1, Math.floor(rect.width));
            h = Math.max(1, Math.floor(rect.height));
            dpr = Math.min(2, window.devicePixelRatio || 1); // cap for perf

            canvas.width = Math.floor(w * dpr);
            canvas.height = Math.floor(h * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        resize();
        window.addEventListener("resize", resize, { passive: true });

        const visibilityHandler = () => {
            // stop burning CPU in background tabs
            if (document.hidden && rafRef.current) cancelAnimationFrame(rafRef.current);
            if (!document.hidden) {
                lastT.current = performance.now();
                rafRef.current = requestAnimationFrame(tick);
            }
        };
        document.addEventListener("visibilitychange", visibilityHandler);

        const clear = () => {
            ctx.clearRect(0, 0, w, h);
        };

        // Draw a single aurora ribbon
        const drawRibbon = (t: number, idx: number, focusY: number, focusStrength: number) => {
            const points = 140; // keep modest
            const baseY = h * (0.18 + idx * 0.22);

            // Make ribbons subtly “follow” scroll
            const scrollOffset = (scrollRef.current - 0.5) * h * 0.22;
            const y0 = baseY + scrollOffset;

            // Local intensity boosts around scroll focus window
            const yDist = Math.abs(y0 - focusY);
            const localBoost = Math.exp(-(yDist * yDist) / (2 * (h * 0.22) * (h * 0.22)));

            const ribbonAlpha = (0.10 + 0.10 * localBoost) * focusStrength;
            const amp = (16 + 28 * localBoost) * intensity;
            const thickness = (26 + 34 * localBoost) * intensity;

            // Gradient across width
            const g = ctx.createLinearGradient(0, 0, w, 0);
            g.addColorStop(0.0, "rgba(46,124,196,0.00)");
            g.addColorStop(0.25, "rgba(46,124,196,0.65)");
            g.addColorStop(0.55, "rgba(74,148,217,0.55)");
            g.addColorStop(0.85, "rgba(46,124,196,0.35)");
            g.addColorStop(1.0, "rgba(46,124,196,0.00)");

            ctx.save();
            ctx.globalAlpha = ribbonAlpha;
            ctx.globalCompositeOperation = "lighter";
            ctx.strokeStyle = g;
            ctx.lineWidth = thickness;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.shadowColor = "rgba(46,124,196,0.28)";
            ctx.shadowBlur = 28;

            ctx.beginPath();
            for (let i = 0; i <= points; i++) {
                const x = (i / points) * w;

                // noise space
                const nx = x * 0.0022;
                const ny = (y0 + idx * 100) * 0.0016;

                const n1 = noise2D(nx + t * 0.06, ny + t * 0.02);
                const n2 = noise2D(nx * 1.8 + t * 0.03, ny * 1.7 - t * 0.015);

                const wave = Math.sin(x * 0.006 + t * 0.9 + idx) * 0.6;
                const y = y0 + (n1 * 0.9 + n2 * 0.6 + wave) * amp;

                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.restore();

            // Add a thin “core” (very subtle)
            ctx.save();
            ctx.globalAlpha = ribbonAlpha * 0.45;
            ctx.globalCompositeOperation = "lighter";
            ctx.strokeStyle = "rgba(255,255,255,0.18)";
            ctx.lineWidth = Math.max(1.2, thickness * 0.06);
            ctx.shadowColor = "rgba(74,148,217,0.25)";
            ctx.shadowBlur = 10;

            ctx.beginPath();
            for (let i = 0; i <= points; i++) {
                const x = (i / points) * w;
                const nx = x * 0.0022;
                const ny = (y0 + idx * 100) * 0.0016;
                const n = noise2D(nx + t * 0.06, ny + t * 0.02);
                const y = y0 + n * amp * 0.7;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.restore();
        };

        const drawFocusGlow = (focusY: number, focusStrength: number) => {
            const x = w * 0.62; // slight bias to match RTL composition (content right)
            const r = Math.max(w, h) * 0.65;

            const glow = ctx.createRadialGradient(x, focusY, 0, x, focusY, r);
            glow.addColorStop(0.0, `rgba(46,124,196,${0.18 * focusStrength})`);
            glow.addColorStop(0.35, `rgba(74,148,217,${0.10 * focusStrength})`);
            glow.addColorStop(1.0, "rgba(10,14,26,0.0)");

            ctx.save();
            ctx.globalCompositeOperation = "lighter";
            ctx.fillStyle = glow;
            ctx.fillRect(0, 0, w, h);
            ctx.restore();
        };

        const tick = (now: number) => {
            const dt = now - lastT.current;
            lastT.current = now;

            // If reduced motion, keep it almost static
            const t = reduceMotionRef.current ? 0 : now * 0.001;

            // Optional frame skip for low-end devices
            if (!reduceMotionRef.current && dt < 14) {
                rafRef.current = requestAnimationFrame(tick);
                return;
            }

            clear();

            // Scroll-following focus window
            const focusY = scrollRef.current * h;
            const focusStrength = 0.85; // keep restrained

            drawFocusGlow(focusY, focusStrength);

            // Draw 3–4 ribbons
            drawRibbon(t, 0, focusY, focusStrength);
            drawRibbon(t, 1, focusY, focusStrength);
            drawRibbon(t, 2, focusY, focusStrength);

            rafRef.current = requestAnimationFrame(tick);
        };

        lastT.current = performance.now();
        rafRef.current = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("resize", resize);
            document.removeEventListener("visibilitychange", visibilityHandler);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [noise2D, intensity]);

    return (
        <div
            aria-hidden="true"
            className={[
                "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
                className ?? "",
            ].join(" ")}
        >
            {/* Base night gradient */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(1200px 700px at 70% 10%, rgba(46,124,196,0.10), rgba(10,14,26,0) 60%), linear-gradient(180deg, #0A0E1A 0%, #0A0E1A 55%, #0F1420 100%)",
                }}
            />
            {/* Aurora canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-80" />

        </div>
    );
}
