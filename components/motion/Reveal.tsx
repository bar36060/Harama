"use client";

import React, { useRef } from "react";
import { motion, useInView, UseInViewOptions } from "framer-motion";
import { revealVariants } from "@/lib/motion";

interface RevealProps {
    children: React.ReactNode;
    variant?: "fadeIn" | "fadeUp" | "fadeUpSm" | "fadeRight" | "fadeLeft" | "scaleUp";
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
    amount?: UseInViewOptions["amount"];
    fullWidth?: boolean;
}

export function Reveal({
    children,
    variant = "fadeUp",
    delay = 0,
    duration,
    className = "",
    once = true,
    amount = 0.2,
    fullWidth = false,
}: RevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={revealVariants[variant]}
            transition={{ delay, duration }} // Override defaults if provided
            className={className}
            style={{ width: fullWidth ? "100%" : "auto" }}
        >
            {children}
        </motion.div>
    );
}
