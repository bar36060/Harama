"use client";

import React, { useEffect, useRef, useState } from "react";

export function CursorHalo() {
    const [isMounted, setIsMounted] = useState(false);
    const haloRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsMounted(true);

        // Check for touch device or reduced motion
        const isTouch = window.matchMedia("(hover: none)").matches;
        const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (isTouch || isReduced) return;

        const moveCursor = (e: MouseEvent) => {
            if (haloRef.current) {
                // Direct transform is more performant than state for rapid movements
                haloRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            }
        };

        window.addEventListener("pointermove", moveCursor, { passive: true });

        return () => {
            window.removeEventListener("pointermove", moveCursor);
        };
    }, []);

    if (!isMounted) return null;

    return (
        <div
            ref={haloRef}
            className="pointer-events-none fixed top-0 left-0 -z-10 mix-blend-screen hidden lg:block"
            style={{
                width: "600px",
                height: "600px",
                // Center the glow on the cursor
                marginTop: "-300px",
                marginLeft: "-300px",
                background: `radial-gradient(circle, rgba(46,124,196,0.08) 0%, rgba(46,124,196,0) 60%)`,
                willChange: "transform",
                // Fallback hidden
            }}
        />
    );
}
