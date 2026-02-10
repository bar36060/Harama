/**
 * Band Wrapper Component
 * Provides consistent vertical rhythm across all sections
 */

interface BandProps {
    children: React.ReactNode;
    size?: 'large' | 'standard' | 'compact';
    className?: string;
    background?: 'default' | 'deep' | 'elevated';
}

export default function Band({ children, size = 'standard', className = '', background = 'default' }: BandProps) {
    const sizeClasses = {
        large: 'py-[140px] md:py-[120px] sm:py-20',
        standard: 'py-[120px] md:py-24 sm:py-16',
        compact: 'py-24 md:py-18 sm:py-12',
    };

    const bgClasses = {
        default: '',
        deep: 'bg-[#0F1420]',
        elevated: 'bg-[#151B2E]',
    };

    return (
        <section className={`${sizeClasses[size]} ${bgClasses[background]} ${className}`}>
            {children}
        </section>
    );
}
