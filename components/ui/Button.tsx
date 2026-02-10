"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = {
    primary: "bg-[#2E7CC4] text-white hover:bg-[#4A94D9] shadow-lg shadow-[#2E7CC4]/20 border border-white/10",
    secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10",
    outline: "bg-transparent border border-white/30 text-white hover:bg-white/10 hover:border-white",
    ghost: "bg-transparent text-white hover:bg-white/5",
    danger: "bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20",
};

const sizeVariants = {
    sm: "!h-10 !px-6 text-sm",
    md: "!h-14 !px-8 text-base",
    lg: "!h-16 !px-10 text-lg",
    icon: "!h-12 !w-12 p-0 flex items-center justify-center",
};

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    variant?: keyof typeof buttonVariants;
    size?: keyof typeof sizeVariants;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, leftIcon, rightIcon, children, ...props }, ref) => {
        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={cn(
                    "relative inline-flex items-center justify-center rounded-lg font-bold tracking-wide transition-all duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7CC4]",
                    "disabled:pointer-events-none disabled:opacity-50",
                    buttonVariants[variant],
                    sizeVariants[size],
                    className
                )}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
                {children}
                {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}

                {/* Premium Glow Effect for Primary */}
                {variant === 'primary' && (
                    <span className="absolute inset-0 rounded-lg bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay" />
                )}

                {/* Subtle Inner Border for Depth */}
                <span className="absolute inset-0 rounded-lg border border-white/5 pointer-events-none" />
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
