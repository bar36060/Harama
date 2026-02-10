import React, { forwardRef } from "react";
import { cn } from "@/lib/utils"; // Assuming cn exists, or I will create a helper

type BandSize = "hero" | "standard" | "compact";

interface SectionBandProps extends React.HTMLAttributes<HTMLElement> {
    as?: React.ElementType;
    size?: BandSize;
    containerSize?: "default" | "small" | "fluid";
    children: React.ReactNode;
    background?: React.ReactNode; // For absolute positioned backgrounds
    className?: string; // For background colors e.g. bg-[#0F1420]
}

export const SectionBand = forwardRef<HTMLElement, SectionBandProps>(
    ({ as: Component = "section", size = "standard", containerSize = "default", className, background, children, ...props }, ref) => {

        // Robust CSS Variable Mapping
        const paddingStyles = {
            hero: "var(--section-padding-y-hero, 160px)",
            standard: "var(--section-padding-y-desktop, 120px)",
            compact: "var(--section-padding-y-mobile, 88px)",
        };

        const containerStyles = {
            default: "1320px",
            small: "1024px",
            fluid: "100%",
        };

        return (
            <Component
                ref={ref as any}
                className={cn("w-full relative", className)}
                style={{
                    paddingBlock: paddingStyles[size],
                    ...props.style
                }}
                {...props}
            >
                {background}
                <div
                    className="mx-auto relative z-10"
                    style={{
                        width: '100%',
                        maxWidth: '1280px',
                        paddingTop: '50px',
                        paddingBottom: '50px',
                        paddingLeft: '24px',
                        paddingRight: '24px',
                        minHeight: 'fit-content',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                >
                    {children}
                </div>
            </Component>
        );
    }
);

SectionBand.displayName = "SectionBand";
