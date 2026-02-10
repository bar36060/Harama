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

            {/* Mobile Menu - Full Screen Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[100] md:hidden">
                    {/* Backdrop with Blur */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-xl animate-menu-fade-in"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />

                    {/* Menu Content (Drawer from Right) */}
                    <div className="absolute top-0 right-0 h-full w-[80%] max-w-[400px] glass-menu shadow-2xl animate-menu-slide-in flex flex-col p-8 pt-24 overflow-y-auto">
                        {/* Close Button Inside Menu */}
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-6 left-6 p-2 text-white/70 hover:text-white transition-colors"
                            aria-label="סגור תפריט"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Navigation Links */}
                        <nav className="flex flex-col gap-6 mb-12">
                            {navItems.map((item, index) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-3xl font-bold text-white/90 hover:text-[#2E7CC4] transition-all duration-300 transform hover:translate-x-[-8px] text-right"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Secondary Info / CTA */}
                        <div className="mt-auto space-y-8">
                            <div className="border-t border-white/10 pt-8">
                                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button
                                        variant="primary"
                                        className="w-full bg-[#2E7CC4] hover:bg-[#1A5A9C] text-white py-4 text-lg font-bold rounded-xl shadow-xl shadow-blue-500/20"
                                    >
                                        קבל הצעת מחיר
                                    </Button>
                                </Link>
                            </div>

                            {/* Contact Summary in Menu */}
                            <div className="text-right space-y-2 text-white/50 text-sm">
                                <p>מעוניינים בייעוץ מקצועי?</p>
                                <a href="tel:03-1234567" className="block text-white font-medium dir-ltr">03-1234567</a>
                            </div>
                        </div>

                        {/* Decorative Background Glow */}
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#2E7CC4]/10 blur-[100px] rounded-full pointer-events-none" />
                    </div>
                </div>
            )}
        </header>
    );
}
