import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingPhoneCTA from "@/components/FloatingPhoneCTA";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main className="pt-24">
                {/* Hero */}
                <section className="py-20 bg-base-deep">
                    <div className="container">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            השירותים שלנו
                        </h1>
                        <p className="text-xl text-neutral-300 max-w-3xl">
                            פתרונות מלאים לעבודות עפר, תשתיות וסלילה - מתכנון ועד ביצוע
                        </p>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20">
                    <div className="container">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Service 1 */}
                            <a
                                href="/services/earthworks"
                                className="group block bg-base-elevated rounded-[var(--radius-lg)] overflow-hidden border border-transparent hover:border-accent-primary hover:-translate-y-0.5 transition-all duration-220"
                            >
                                <div className="h-56 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80"
                                        alt="עבודות עפר"
                                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-320"
                                    />
                                </div>
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold text-white mb-3">
                                        עבודות עפר וחפירה
                                    </h2>
                                    <p className="text-neutral-300 mb-4">
                                        חפירות עומק, פינוי עודפי עפר, ועיבוד קרקע לפרויקטים מורכבים
                                    </p>
                                    <span className="text-accent-primary font-medium">לפרטים →</span>
                                </div>
                            </a>

                            {/* Service 2 */}
                            <a
                                href="/services/infrastructure"
                                className="group block bg-base-elevated rounded-[var(--radius-lg)] overflow-hidden border border-transparent hover:border-accent-primary hover:-translate-y-0.5 transition-all duration-220"
                            >
                                <div className="h-56 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                                        alt="תשתיות"
                                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-320"
                                    />
                                </div>
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold text-white mb-3">
                                        תשתיות ופיתוח
                                    </h2>
                                    <p className="text-neutral-300 mb-4">
                                        תשתיות מים, ביוב, חשמל ותקשורת לפרויקטי תשתית עירוניים
                                    </p>
                                    <span className="text-accent-primary font-medium">לפרטים →</span>
                                </div>
                            </a>

                            {/* Service 3 */}
                            <a
                                href="/services/roads"
                                className="group block bg-base-elevated rounded-[var(--radius-lg)] overflow-hidden border border-transparent hover:border-accent-primary hover:-translate-y-0.5 transition-all duration-220"
                            >
                                <div className="h-56 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                                        alt="סלילה"
                                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-320"
                                    />
                                </div>
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold text-white mb-3">
                                        סלילת כבישים ואספלט
                                    </h2>
                                    <p className="text-neutral-300 mb-4">
                                        סלילה, אספלט ושיקום כבישים לפרויקטים עירוניים ואזוריים
                                    </p>
                                    <span className="text-accent-primary font-medium">לפרטים →</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-base-deep">
                    <div className="container text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            צריכים הצעת מחיר?
                        </h2>
                        <p className="text-xl text-neutral-300 mb-8">
                            ספרו לנו על הפרויקט שלכם ונחזור אליכם בהקדם
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="text-lg px-12 shadow-xl shadow-blue-500/20">
                                צור קשר
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
            <FloatingPhoneCTA />
        </>
    );
}
