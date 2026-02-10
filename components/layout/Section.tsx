"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type SectionVariant = "hero" | "default" | "band" | "wave" | "grid" | "glow";
type SectionPadding = "tight" | "normal" | "loose";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    as?: React.ElementType;
    variant?: SectionVariant;
    padding?: SectionPadding;
    dividerTop?: boolean;
    dividerBottom?: boolean;
    children: React.ReactNode;
    containerSize?: "default" | "small" | "fluid";
    containerClassName?: string;
    background?: React.ReactNode;
    overlay?: React.ReactNode;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
    (
        {
            as: Component = "section",
            variant = "default",
            padding = "normal",
            dividerTop = false,
            dividerBottom = false,
            children,
            containerSize = "default",
            className,
            containerClassName,
            background,
            overlay,
            ...props
        },
        ref
    ) => {
        // Padding logic (Responsive) - Reduced for compact layout
        const paddingClasses = {
            tight: "py-8 md:py-10",
            normal: "py-10 md:py-14 lg:py-18",
            loose: "py-14 md:py-18 lg:py-24",
        };

        // Container width logic
        const containerClasses = {
            default: "max-w-[1280px]",
            small: "max-w-[960px]",
            fluid: "max-w-full px-4 md:px-8",
        };

        return (
            <Component
                ref={ref as any}
                className={cn(
                    "relative w-full overflow-hidden transition-colors duration-500 isolate",
                    paddingClasses[padding],
                    className
                )}
                {...props}
            >
                {/* === Background Layers === */}
                {/* 1. Base Background */}
                <div className="absolute inset-0 -z-30 transition-opacity duration-700">
                    {variant === "hero" && <div className="absolute inset-0" />} {/* Hero handles its own bg usually */}
                    {variant === "band" && <div className="absolute inset-0 bg-[#151B2E]/60 backdrop-blur-sm" />}
                    {variant === "wave" && <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2E7CC4]/5 to-transparent opacity-30" />}
                    {variant === "glow" && (
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(46,124,196,0.08),transparent_50%)]" />
                    )}
                </div>

                {/* 2. Custom Background (e.g. Image/Canvas) */}
                {background && <div className="absolute inset-0 -z-20">{background}</div>}

                {/* 3. Textures / Noise / Grids */}








                {/* === Content === */}
                <div
                    className={cn(
                        "relative z-10 mx-auto px-6 md:px-8",
                        containerClasses[containerSize],
                        containerClassName
                    )}
                >
                    {children}
                </div>

                {/* Full Width Overlay (For UI Controls etc) */}
                {overlay && (
                    <div className="absolute inset-0 z-20 pointer-events-none">
                        {/* Reset pointer events for children */}
                        <div className="w-full h-full relative [&>*]:pointer-events-auto">
                            {overlay}
                        </div>
                    </div>
                )}
            </Component>
        );
    }
);

Section.displayName = "Section";
