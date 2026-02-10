interface SectionBandProps {
    size: "large" | "standard" | "compact" | "none";
    className?: string;
    children: React.ReactNode;
    debug?: boolean; // Temporary: show visual outlines
}

/**
 * SectionBand Wrapper - Enforces consistent vertical rhythm
 * 
 * Size variants:
 * - large: 140px desktop (hero, contact)
 * - standard: 120px desktop (services, projects, capabilities)
 * - compact: 96px desktop (stats, values)
 * - none: No padding (for full-bleed sections)
 */
export default function SectionBand({ size, className = "", children, debug = false }: SectionBandProps) {
    const paddingClasses = {
        large: "py-[140px] md:py-[120px] sm:py-16",
        standard: "py-[120px] md:py-24 sm:py-16",
        compact: "py-24 md:py-18 sm:py-12",
        none: "",
    };

    const debugClasses = debug ? "outline outline-2 outline-red-500 outline-offset-[-2px]" : "";

    return (
        <div className={`${paddingClasses[size]} ${debugClasses} ${className}`.trim()}>
            {children}
        </div>
    );
}
