"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface NavItem {
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { label: "שירותים", href: "/services" },
    { label: "פרויקטים", href: "/projects" },
    { label: "אודות", href: "/about" },
    { label: "צור קשר", href: "/contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Compact mode after 60px scroll (subtle, not hide/reveal)
            setIsScrolled(window.scrollY > 60);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-[280ms] ease-out
        ${isScrolled
                    ? "bg-[#0A0E1A]/95 backdrop-blur-md border-b border-[#1A2238]"
                    : "bg-gradient-to-b from-black/40 to-transparent border-b border-transparent"
                }
        h-16 md:h-20
      `}
        >
            <div className="container max-w-[1440px] h-full">
                <div className="flex items-center justify-between h-full">
                    {/* Logo (Right side in RTL) */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 group"
                    >
                        <span className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#2E7CC4] transition-colors duration-200">
                            הרמה
                        </span>
                    </Link>

                    {/* Desktop Navigation (Center-Right) */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="
                  text-neutral-300 hover:text-white
                  transition-colors duration-200
                  text-base font-medium
                  relative
                  after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5
                  after:bg-[#2E7CC4] after:transition-all after:duration-200
                  hover:after:w-full
                "
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button + Mobile Menu (Left side in RTL) */}
                    <div className="flex items-center gap-4">
                        <Link href="/contact">
                            <Button
                                variant="primary"
                                className="hidden md:inline-flex bg-[#2E7CC4] hover:bg-[#4A94D9] text-white shadow-[0_0_20px_rgba(46,124,196,0.5)] border border-white/10"
                            >
                                קבל הצעת מחיר
                            </Button>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-white hover:text-[#2E7CC4] transition-colors duration-200"
                            aria-label="תפריט ניווט"
                            aria-expanded={isMobileMenuOpen}
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Slide Down */}
            {isMobileMenuOpen && (
                <div
                    className="
            lg:hidden bg-[#151B2E] border-t border-[#2D3748]
            animate-[slideDown_280ms_ease-out]
          "
                >
                    <nav className="container max-w-[1440px] py-6 flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="
                  text-neutral-300 hover:text-white
                  transition-colors duration-200
                  py-2 text-base font-medium
                "
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="
                mt-4 px-6 py-3 bg-[#2E7CC4] text-white
                rounded-md text-center font-medium
                hover:bg-[#4A94D9] transition-colors duration-200
              "
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            קבל הצעת מחיר
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
