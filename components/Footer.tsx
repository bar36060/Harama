import Link from "next/link";
import { SectionBand } from "@/components/ui/SectionBand";

const footerLinks = {
    about: [
        { label: "אודות", href: "/about" },
        { label: "הצוות שלנו", href: "/about#team" },
        { label: "הציוד שלנו", href: "/about#equipment" },
        { label: "בטיחות", href: "/about#safety" },
    ],
    services: [
        { label: "עבודות עפר וחפירה", href: "/services/earthworks" },
        { label: "תשתיות ופיתוח", href: "/services/infrastructure" },
        { label: "סלילת כבישים", href: "/services/roads" },
    ],
    quick: [
        { label: "פרויקטים", href: "/projects" },
        { label: "צור קשר", href: "/contact" },
        { label: "קבל הצעת מחיר", href: "/contact#quote" },
    ],
    legal: [
        { label: "מדיניות פרטיות", href: "/privacy-policy" },
        { label: "מדיניות קובצי Cookie", href: "/cookies-policy" },
        { label: "הגדרות Cookie", href: "#", onClick: "openCookieSettings" },
    ],
};

export default function Footer() {
    return (
        <SectionBand
            as="footer"
            size="compact"
            className="bg-base-deepest border-t border-neutral-600"
        >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                {/* Company Info */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4">הרמה</h3>
                    <p className="text-neutral-300 mb-6 leading-relaxed">
                        20 שנות ניסיון בעבודות עפר, תשתיות וסלילה בפריסה ארצית
                    </p>
                    <div className="space-y-2 text-sm text-neutral-400">
                        <p>טלפון: 03-1234567</p>
                        <p>דוא״ל: info@harama.co.il</p>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">שירותים</h4>
                    <ul className="space-y-2">
                        {footerLinks.services.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">קישורים מהירים</h4>
                    <ul className="space-y-2">
                        {footerLinks.quick.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        {footerLinks.about.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">משפטי</h4>
                    <ul className="space-y-2">
                        {footerLinks.legal.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-neutral-600 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
                <p>© 2026 הרמה. כל הזכויות שמורות.</p>
                <div className="flex gap-6">
                    <Link href="/contact#quote" className="hover:text-white transition-colors">
                        קבל הצעת מחיר
                    </Link>
                    <Link href="/accessibility" className="hover:text-white transition-colors">
                        הצהרת נגישות
                    </Link>
                </div>
            </div>
        </SectionBand>
    );
}
