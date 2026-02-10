"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingPhoneCTA from "@/components/FloatingPhoneCTA";

export default function CookiesPolicyPage() {
    return (
        <>
            <Header />
            <main className="pt-24">
                <section className="py-20">
                    <div className="container max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            מדיניות קובצי Cookie
                        </h1>

                        <div className="prose prose-invert max-w-none space-y-8 text-neutral-300">
                            <p className="text-lg">
                                עודכן לאחרונה: פברואר 2026
                            </p>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">מה הם קובצי Cookie?</h2>
                                <p>
                                    קובצי Cookie הם קבצי טקסט קטנים שנשמרים במכשיר שלכם כאשר אתם
                                    מבקרים באתר. הם עוזרים לנו לזכור את העדפותיכם ולשפר את חווית
                                    הגלישה שלכם.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">סוגי ה-Cookies שאנו משתמשים בהם</h2>

                                <div className="bg-base-elevated p-6 rounded-[var(--radius-lg)] mb-6">
                                    <h3 className="text-xl font-semibold text-white mb-3">1. Cookies הכרחיים</h3>
                                    <p className="mb-2">
                                        <strong>מטרה:</strong> נדרשים לתפקוד בסיסי של האתר
                                    </p>
                                    <p className="mb-2">
                                        <strong>משך חיים:</strong> Session / 1 שנה
                                    </p>
                                    <p className="mb-2">
                                        <strong>ניתן לחסום:</strong> לא (האתר לא יעבוד כראוי בלעדיהם)
                                    </p>
                                    <p>
                                        <strong>דוגמאות:</strong> העדפות Cookie, מזהה Session
                                    </p>
                                </div>

                                <div className="bg-base-elevated p-6 rounded-[var(--radius-lg)] mb-6">
                                    <h3 className="text-xl font-semibold text-white mb-3">2. Cookies ניתוח וסטטיסטיקה</h3>
                                    <p className="mb-2">
                                        <strong>מטרה:</strong> עוזרים לנו להבין כיצד משתמשים באתר
                                    </p>
                                    <p className="mb-2">
                                        <strong>משך חיים:</strong> עד שנתיים
                                    </p>
                                    <p className="mb-2">
                                        <strong>ניתן לחסום:</strong> כן
                                    </p>
                                    <p className="mb-2">
                                        <strong>דוגמאות:</strong> Google Analytics (_ga, _gid)
                                    </p>
                                    <p>
                                        <strong>מידע נאסף:</strong> דפים שביקרתם, זמן ביקור, מכשיר,
                                        מיקום גיאוגרפי כללי
                                    </p>
                                </div>

                                <div className="bg-base-elevated p-6 rounded-[var(--radius-lg)] mb-6">
                                    <h3 className="text-xl font-semibold text-white mb-3">3. Cookies שיווק</h3>
                                    <p className="mb-2">
                                        <strong>מטרה:</strong> משמשים להצגת תוכן ופרסומות רלוונטיים
                                    </p>
                                    <p className="mb-2">
                                        <strong>משך חיים:</strong> עד שנה
                                    </p>
                                    <p className="mb-2">
                                        <strong>ניתן לחסום:</strong> כן
                                    </p>
                                    <p>
                                        <strong>דוגמאות:</strong> Facebook Pixel, Google Ads
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">ניהול העדפות Cookie</h2>
                                <p className="mb-4">
                                    אתם יכולים לשלוט בהעדפות ה-Cookie שלכם בכל עת:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mr-4">
                                    <li>
                                        <button
                                            onClick={() => {
                                                localStorage.removeItem("cookieConsent");
                                                window.location.reload();
                                            }}
                                            className="text-accent-primary hover:text-accent-light underline"
                                        >
                                            לחצו כאן לפתיחת הגדרות Cookie
                                        </button>
                                    </li>
                                    <li>שנו את ההגדרות בדפדפן שלכם (ראו הוראות למטה)</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">חסימת Cookies בדפדפן</h2>
                                <p className="mb-4">רוב הדפדפנים מאפשרים לכם לחסום Cookies:</p>
                                <ul className="list-disc list-inside space-y-2 mr-4">
                                    <li>
                                        <strong>Chrome:</strong> הגדרות → פרטיות ואבטחה → Cookies
                                    </li>
                                    <li>
                                        <strong>Firefox:</strong> הגדרות → פרטיות ואבטחה → Cookies
                                    </li>
                                    <li>
                                        <strong>Safari:</strong> העדפות → פרטיות → Cookies
                                    </li>
                                    <li>
                                        <strong>Edge:</strong> הגדרות → Cookies והרשאות אתר
                                    </li>
                                </ul>
                                <p className="mt-4 text-sm">
                                    שימו לב: חסימת Cookies מסוימים עלולה להשפיע על תפקוד האתר.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">עדכונים למדיניות</h2>
                                <p>
                                    אנו עשויים לעדכן מדיניות זו מעת לעת. שינויים משמעותיים יפורסמו
                                    באתר עם תאריך העדכון.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">יצירת קשר</h2>
                                <p>
                                    לשאלות בנושא Cookies:
                                    <br />
                                    דוא״ל:{" "}
                                    <a
                                        href="mailto:privacy@harama.co.il"
                                        className="text-accent-primary hover:text-accent-light"
                                    >
                                        privacy@harama.co.il
                                    </a>
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
