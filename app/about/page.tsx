import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingPhoneCTA from "@/components/FloatingPhoneCTA";

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="pt-24">
                {/* Hero */}
                <section className="py-20 bg-base-deep">
                    <div className="container">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            אודות הרמה
                        </h1>
                        <p className="text-xl text-neutral-300 max-w-3xl">
                            20 שנות ניסיון בעבודות עפר, תשתיות וסלילה בכל רחבי הארץ
                        </p>
                    </div>
                </section>

                {/* Story */}
                <section className="py-20">
                    <div className="container">
                        <div className="max-w-4xl">
                            <h2 className="text-3xl font-bold text-white mb-6">הסיפור שלנו</h2>
                            <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                                <p>
                                    הרמה הוקמה בשנת 2005 על ידי צוות מקצועי בעל ניסיון עשיר בתחום
                                    עבודות עפר ותשתיות. מאז התחלנו, ביצענו מאות פרויקטים בהיקפים
                                    שונים - מפרויקטים קטנים ועד פרויקטי ענק ברחבי הארץ.
                                </p>
                                <p>
                                    אנחנו מאמינים בעבודה איכותית, בטיחותית ומקצועית. צוות המפעילים
                                    שלנו עובר הדרכות שוטפות, ואנחנו משקיעים בציוד מתקדם ומתוחזק
                                    ברמה הגבוהה ביותר.
                                </p>
                                <p>
                                    היום, הרמה היא אחת מהחברות המובילות בתחום, עם צוות של 50+
                                    עובדים, 60+ יחידות ציוד כבד, ורצף של פרויקטים מוצלחים שמדברים
                                    בעד עצמם.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="py-20 bg-base-deep">
                    <div className="container">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">
                            הערכים המנחים אותנו
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-base-elevated p-8 rounded-[var(--radius-lg)]">
                                <div className="w-12 h-12 bg-accent-primary/20 rounded-full flex items-center justify-center mb-6">
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
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    בטיחות ללא פשרות
                                </h3>
                                <p className="text-neutral-300">
                                    תקני בטיחות מחמירים, הדרכות שוטפות, ובקרה רציפה בכל אתר
                                </p>
                            </div>

                            <div className="bg-base-elevated p-8 rounded-[var(--radius-lg)]">
                                <div className="w-12 h-12 bg-accent-primary/20 rounded-full flex items-center justify-center mb-6">
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
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">דיוק ובקרה</h3>
                                <p className="text-neutral-300">
                                    ציוד מתקדם, סקרים מדויקים, ובקרת איכות בכל שלב
                                </p>
                            </div>

                            <div className="bg-base-elevated p-8 rounded-[var(--radius-lg)]">
                                <div className="w-12 h-12 bg-accent-primary/20 rounded-full flex items-center justify-center mb-6">
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
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    עמידה בזמנים
                                </h3>
                                <p className="text-neutral-300">
                                    מחויבות מלאה ללוח הזמנים, דיווחים שוטפים, ותקשורת ישירה
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-20">
                    <div className="container">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-5xl font-extrabold text-white mb-2">20+</div>
                                <div className="text-neutral-400">שנות ניסיון</div>
                            </div>
                            <div>
                                <div className="text-5xl font-extrabold text-white mb-2">480+</div>
                                <div className="text-neutral-400">פרויקטים</div>
                            </div>
                            <div>
                                <div className="text-5xl font-extrabold text-white mb-2">98%</div>
                                <div className="text-neutral-400">עמידה בלו״ז</div>
                            </div>
                            <div>
                                <div className="text-5xl font-extrabold text-white mb-2">60+</div>
                                <div className="text-neutral-400">יחידות ציוד</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <FloatingPhoneCTA />
        </>
    );
}
