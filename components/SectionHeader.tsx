interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    viewAllLink?: {
        label: string;
        href: string;
    };
    align?: "right" | "center";
    className?: string;
}

export default function SectionHeader({
    title,
    subtitle,
    viewAllLink,
    align = "right",
    className = "",
}: SectionHeaderProps) {
    return (
        <div
            className={`
        flex items-start justify-between gap-6 mb-12
        ${align === "center" ? "text-center flex-col items-center" : "text-right"}
        ${className}
      `}
        >
            <div className={`${align === "center" ? "mx-auto" : ""} max-w-[720px]`}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-100 mb-4">
                    {title}
                </h2>
                {subtitle && (
                    <p className="text-lg text-neutral-300 leading-relaxed">
                        {subtitle}
                    </p>
                )}
            </div>

            {viewAllLink && align === "right" && (
                <a
                    href={viewAllLink.href}
                    className="
            inline-flex items-center gap-2 text-accent-primary
            hover:text-accent-light transition-colors duration-200
            whitespace-nowrap mt-2
          "
                >
                    {viewAllLink.label}
                    <svg
                        className="w-5 h-5 flip-rtl"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </a>
            )}
        </div>
    );
}
