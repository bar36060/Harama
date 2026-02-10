"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export const NeonPathSystem = () => {
    const { scrollYProgress } = useScroll();

    // "Excited" Spring Physics - Faster, bouncier
    const pathLength = useSpring(scrollYProgress, {
        stiffness: 400,
        damping: 30,
        restDelta: 0.001
    });

    // "Head" Physics - Slightly ahead/different for organic feel
    const headPos = useSpring(scrollYProgress, {
        stiffness: 200, damping: 20
    });

    // We use a fixed-ish height simulation for the SVG viewBox to make sure curves are nice
    // ViewBox 0 0 100 800 (Where 800 is "long page height units")
    // This allows us to use relative coordinates

    // The "Snake" Path: Zig-zags down the center, left, right to guide the eye
    // Starts Top Right (Near Header Button) -> Middle Left (Stats) -> Middle Right (Solutions) -> ...
    const snakePath = "M 95 0 C 80 100, 20 200, 20 400 C 20 600, 80 800, 80 1000 C 80 1200, 10 1400, 10 1600 C 10 1800, 90 2000, 90 2200";

    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden min-h-screen">
            <svg
                className="w-full h-full absolute inset-0 opacity-60"
                viewBox="0 0 100 2200"
                preserveAspectRatio="none"
            >
                {/* 1. Ambient Glow Path (Thick, Blurred, Purple/Blue) */}
                <motion.path
                    d={snakePath}
                    fill="none"
                    stroke="url(#gradientAmbient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    style={{ pathLength, opacity: 0.3 }}
                    filter="url(#glowBlur)"
                />

                {/* 2. Secondary Beam (Medium, Cyan) */}
                <motion.path
                    d={snakePath}
                    fill="none"
                    stroke="#4A94D9"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    style={{ pathLength, opacity: 0.6 }}
                />

                {/* 3. Core "Hot" Beam (Thin, White/Bright Blue) */}
                <motion.path
                    d={snakePath}
                    fill="none"
                    stroke="#fff"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    style={{ pathLength, opacity: 0.9 }}
                    filter="url(#glowBright)"
                />

                {/* Defs for gradients and filters */}
                <defs>
                    <linearGradient id="gradientAmbient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#2E7CC4" stopOpacity="0" />
                        <stop offset="30%" stopColor="#2E7CC4" stopOpacity="1" />
                        <stop offset="70%" stopColor="#7C3AED" stopOpacity="1" />
                        <stop offset="100%" stopColor="#2E7CC4" stopOpacity="0" />
                    </linearGradient>

                    <filter id="glowBlur" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    <filter id="glowBright" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
            </svg>

            {/* The "Living" Head - A Glow Orb that follows the tip? 
                (Hard to calculate exact tip position on SVG path without JS logic for getPointAtLength.
                 Instead, we use a separate "falling star" effect loosely coupled or just rely on the drawing path tip)
            */}

            {/* Ambient Background Pulse (Behind specific sections) */}
            <motion.div
                className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-blue-900/10 rounded-full blur-[100px]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div
                className="absolute top-[60%] right-[10%] w-[40vw] h-[40vw] bg-purple-900/10 rounded-full blur-[100px]"
                animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
                transition={{ duration: 12, repeat: Infinity, delay: 2 }}
            />
        </div>
    );
};
