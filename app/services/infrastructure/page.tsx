import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingPhoneCTA from "@/components/FloatingPhoneCTA";
import infrastructureData from "@/data/services/infrastructure.json";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function InfrastructurePage() {
    return (
        <>
            <Header />
            <main className="pt-24">
                {/* Hero */}
                <section
                    className="relative py-32 bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(rgba(10, 14, 26, 0.85), rgba(10, 14, 26, 0.7)), url('${infrastructureData.featuredImage.url}')`,
                    }}
                >
                    <div className="container">
                        <div className="max-w-3xl">
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                {infrastructureData.title}
                            </h1>
                            <p className="text-2xl text-neutral-200 mb-8">
                                {infrastructureData.description}
                            </p>
                            <Link href="/contact">
                                <Button size="lg" className="text-lg px-8 shadow-xl shadow-blue-500/20">
                                    קבל הצעת מחיר
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* What We Offer */}
                <section className="py-20">
                    <div className="container">
                        <div className="max-w-4xl">
                            <h2 className="text-3xl font-bold text-white mb-8">מה אנחנו מציעים</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {infrastructureData.bulletPoints.map((point, index) => (
                                    <div
                                        key={index}
                                        className="bg-base-elevated p-6 rounded-[var(--radius-lg)]"
                                    >
                                        <div className="w-12 h-12 bg-accent-primary/20 rounded-full flex items-center justify-center mb-4">
                                            <svg
                                                className="w-6 h-6 text-accent-primary"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-white font-medium">{point}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="py-20 bg-base-deep">
                    <div className="container">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">
                            התהליך שלנו
                        </h2>
                        <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8">
                            {[
                                { num: "01", title: "תכנון", desc: "סקר מערכות קיימות והערכת צרכים" },
                                { num: "02", title: "תיאום", desc: "תיאום עם רשויות וקבלת אישורים" },
                                { num: "03", title: "ביצוע", desc: "התקנה והנחת תשתיות חדשות" },
                                { num: "04", title: "בדיקות", desc: "בקרת איכות ובדיקות מערכת" },
                            ].map((step) => (
                                <div key={step.num} className="text-center">
                                    <div className="text-5xl font-extrabold text-accent-primary mb-4">
                                        {step.num}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-neutral-300">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section className="py-20">
                    <div className="container">
                        <h2 className="text-3xl font-bold text-white mb-8">פרויקטים קשורים</h2>
                        <p className="text-neutral-300 mb-6">
                            ראו דוגמאות לפרויקטי תשתיות שביצענו
                        </p>
                        <a
                            href="/projects"
                            className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-light font-medium"
                        >
                            לכל הפרויקטים
                            <svg className="w-5 h-5 flip-rtl" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-base-deep border-t-2 border-accent-primary">
                    <div className="container text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            צריכים תשתיות?
                        </h2>
                        <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
                            צרו קשר עכשיו לקבלת הצעת מחיר מפורטת לפרויקט שלכם
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="text-lg px-8 shadow-xl shadow-blue-500/20">
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
