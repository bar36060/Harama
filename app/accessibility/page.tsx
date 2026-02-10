import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingPhoneCTA from "@/components/FloatingPhoneCTA";

export default function AccessibilityPage() {
    return (
        <>
            <Header />
            <main className="pt-24">
                <section className="py-20">
                    <div className="container max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            הצהרת נגישות
                        </h1>

                        <div className="prose prose-invert max-w-none space-y-8 text-neutral-300">
                            <p className="text-lg">
                                עודכן לאחרונה: פברואר 2026
                            </p>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">מחויבותנו לנגישות</h2>
                                <p>
                                    הרמה מחויבת להנגשת האתר שלה עבור כלל המשתמשים, כולל אנשים עם
                                    מוגבלויות. אנו שואפים לעמוד בתקן הישראלי (ת״י 5568) ובהנחיות
                                    WCAG 2.1 ברמה AA.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">תכונות נגישות באתר</h2>
                                <ul className="list-disc list-inside space-y-2 mr-4">
                                    <li>שפה עברית מלאה עם כיווניות RTL</li>
                                    <li>ניווט מקלדת מלא (Tab, Enter, חצים)</li>
                                    <li>טקסטים אלטרנטיביים לכל התמונות</li>
                                    <li>ניגודיות גבוהה בין טקסט לרקע</li>
                                    <li>גופנים ברורים וקריאים (Heebo)</li>
                                    <li>כפתורים ולינקים עם אזורי לחיצה מספיקים</li>
                                    <li>תמיכה בהגדלת טקסט בדפדפן</li>
                                    <li>מבנה סמנטי תקין (כותרות, רשימות)</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">טכנולוגיות מסייעות</h2>
                                <p>האתר תומך בטכנולוגיות הבאות:</p>
                                <ul className="list-disc list-inside space-y-2 mr-4">
                                    <li>קוראי מסך (NVDA, JAWS, VoiceOver)</li>
                                    <li>ניווט מקלדת</li>
                                    <li>הגדלת טקסט בדפדפן</li>
                                    <li>מצב ניגודיות גבוהה של המערכת</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">קיצורי מקלדת מומלצים</h2>
                                <div className="bg-base-elevated p-6 rounded-[var(--radius-lg)]">
                                    <ul className="space-y-2">
                                        <li><kbd className="px-2 py-1 bg-base-deep rounded text-sm">Tab</kbd> - מעבר בין אלמנטים</li>
                                        <li><kbd className="px-2 py-1 bg-base-deep rounded text-sm">Enter</kbd> - הפעלת לינקים וכפתורים</li>
                                        <li><kbd className="px-2 py-1 bg-base-deep rounded text-sm">Esc</kbd> - סגירת תפריטים</li>
                                        <li><kbd className="px-2 py-1 bg-base-deep rounded text-sm">Ctrl +</kbd> / <kbd className="px-2 py-1 bg-base-deep rounded text-sm">Ctrl -</kbd> - הגדלה/הקטנה של טקסט</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">מגבלות ידועות</h2>
                                <p>
                                    למרות מאמצינו, ייתכן שחלקים מסוימים באתר עדיין אינם נגישים
                                    באופן מלא. אנו עובדים באופן שוטף לשיפור הנגישות.
                                </p>
                                <p className="mt-4">
                                    מגבלות ידועות כוללות:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mr-4">
                                    <li>תמונות רקע דקורטיביות ללא תיאור</li>
                                    <li>סרטוני וידאו (ככל שיתווספו) ללא כתוביות</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">משוב ותלונות</h2>
                                <p>
                                    נשמח לקבל משוב על נגישות האתר. אם נתקלתם בבעיית נגישות או יש
                                    לכם הצעות לשיפור, אנא צרו קשר:
                                </p>
                                <div className="bg-base-elevated p-6 rounded-[var(--radius-lg)] mt-4">
                                    <p className="mb-2">
                                        <strong>רכז נגישות:</strong> יוסי כהן
                                    </p>
                                    <p className="mb-2">
                                        <strong>דוא״ל:</strong>{" "}
                                        <a
                                            href="mailto:accessibility@harama.co.il"
                                            className="text-accent-primary hover:text-accent-light"
                                        >
                                            accessibility@harama.co.il
                                        </a>
                                    </p>
                                    <p>
                                        <strong>טלפון:</strong> 03-1234567
                                    </p>
                                </div>
                                <p className="mt-4 text-sm">
                                    אנו מתחייבים לטפל בכל פנייה בנושא נגישות תוך 7 ימי עסקים.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">תאריך בדיקה אחרון</h2>
                                <p>
                                    בדיקת נגישות אחרונה בוצעה בפברואר 2026 על ידי צוות פיתוח פנימי.
                                </p>
                            </section>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <FloatingPhoneCTA />
        </>
    );
}
