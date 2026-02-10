import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingPhoneCTA from "@/components/FloatingPhoneCTA";

export default function PrivacyPolicyPage() {
    return (
        <>
            <Header />
            <main className="pt-24">
                <section className="py-20">
                    <div className="container max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            מדיניות פרטיות
                        </h1>

                        <div className="prose prose-invert max-w-none space-y-8 text-neutral-300">
                            <p className="text-lg">
                                עודכן לאחרונה: פברואר 2026
                            </p>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">כללי</h2>
                                <p>
                                    הרמה ("החברה", "אנחנו") מתחייבת להגן על פרטיות המשתמשים באתר. מדיניות
                                    פרטיות זו מסבירה אילו נתונים אנו אוספים, כיצד אנו משתמשים בהם,
                                    ואיך אתם יכולים לשלוט בפרטיות שלכם.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">מידע שאנו אוספים</h2>
                                <h3 className="text-xl font-semibold text-white mb-3">מידע שאתם מספקים</h3>
                                <ul className="list-disc list-inside space-y-2 mr-4">
                                    <li>שם מלא</li>
                                    <li>מספר טלפון</li>
                                    <li>כתובת דוא״ל (אופציונלי)</li>
                                    <li>מיקום פרויקט</li>
                                    <li>פרטים נוספים שתבחרו לשתף</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-white mb-3 mt-6">מידע טכני</h3>
                                <ul className="list-disc list-inside space-y-2 mr-4">
                                    <li>כתובת IP</li>
                                    <li>סוג דפדפן ומכשיר</li>
                                    <li>דפים שביקרתם באתר</li>
                                    <li>זמן השהייה בדפים</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">שימוש במידע</h2>
                                <p>אנו משתמשים במידע שנאסף עבור:</p>
                                <ul className="list-disc list-inside space-y-2 mr-4">
                                    <li>מענה לפניות ובקשות להצעות מחיר</li>
                                    <li>שיפור השירות והאתר שלנו</li>
                                    <li>ניתוח שימוש באתר (באמצעות Google Analytics)</li>
                                    <li>שליחת עדכונים שיווקיים (רק אם נתתם הסכמה)</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">שיתוף מידע</h2>
                                <p>
                                    אנו לא משתפים את המידע האישי שלכם עם צדדים שלישיים, למעט במקרים
                                    הבאים:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mr-4">
                                    <li>כאשר נדרש על פי חוק</li>
                                    <li>עם ספקי שירות (כגון אחסון ואנליטיקה) שפועלים בהוראתנו</li>
                                    <li>בהסכמתכם המפורשת</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">קובצי Cookie</h2>
                                <p>
                                    אנו משתמשים בקובצי Cookie לשיפור חווית הגלישה. לפרטים נוספים, ראו את{" "}
                                    <a href="/cookies-policy" className="text-accent-primary hover:text-accent-light">
                                        מדיניות ה-Cookies
                                    </a>
                                    .
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">זכויותיכם</h2>
                                <p>יש לכם זכות:</p>
                                <ul className="list-disc list-inside space-y-2 mr-4">
                                    <li>לדעת איזה מידע אנו מחזיקים עליכם</li>
                                    <li>לבקש תיקון או מחיקה של המידע</li>
                                    <li>לבטל הסכמה לשימוש במידע</li>
                                    <li>להגיש תלונה לרשות להגנת הפרטיות</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">אבטחת מידע</h2>
                                <p>
                                    אנו נוקטים באמצעי אבטחה סבירים כדי להגן על המידע שלכם, אך שום
                                    שיטת העברה או אחסון אינה מאובטחת ב-100%.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">יצירת קשר</h2>
                                <p>
                                    לשאלות בנושא פרטיות, צרו קשר:
                                    <br />
                                    דוא״ל:{" "}
                                    <a
                                        href="mailto:privacy@harama.co.il"
                                        className="text-accent-primary hover:text-accent-light"
                                    >
                                        privacy@harama.co.il
                                    </a>
                                    <br />
                                    טלפון: 03-1234567
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
