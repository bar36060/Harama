"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingPhoneCTA from "@/components/FloatingPhoneCTA";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        location: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement form submission
        console.log("Form submitted:", formData);
        alert("הטופס נשלח בהצלחה! נחזור אליך בהקדם.");
    };

    return (
        <>
            <Header />
            <main className="pt-24">
                {/* Hero */}
                <section className="py-20 bg-base-deep">
                    <div className="container">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            צור קשר
                        </h1>
                        <p className="text-xl text-neutral-300 max-w-3xl">
                            נשמח לדבר על הפרויקט הבא שלך
                        </p>
                    </div>
                </section>

                {/* Contact Form + Info */}
                <section className="py-20">
                    <div className="container">
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Form */}
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-8">
                                    השאירו פרטים
                                </h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-200 mb-2">
                                            שם מלא *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) =>
                                                setFormData({ ...formData, name: e.target.value })
                                            }
                                            className="w-full px-4 py-3 bg-base-elevated border border-neutral-600 rounded-md text-white placeholder-neutral-500 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-colors"
                                            placeholder="יוסי כהן"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-neutral-200 mb-2">
                                            טלפון *
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) =>
                                                setFormData({ ...formData, phone: e.target.value })
                                            }
                                            className="w-full px-4 py-3 bg-base-elevated border border-neutral-600 rounded-md text-white placeholder-neutral-500 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-colors"
                                            placeholder="050-1234567"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-neutral-200 mb-2">
                                            דוא״ל (אופציונלי)
                                        </label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({ ...formData, email: e.target.value })
                                            }
                                            className="w-full px-4 py-3 bg-base-elevated border border-neutral-600 rounded-md text-white placeholder-neutral-500 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-colors"
                                            placeholder="email@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-neutral-200 mb-2">
                                            סוג השירות *
                                        </label>
                                        <select
                                            required
                                            value={formData.service}
                                            onChange={(e) =>
                                                setFormData({ ...formData, service: e.target.value })
                                            }
                                            className="w-full px-4 py-3 bg-base-elevated border border-neutral-600 rounded-md text-white focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-colors"
                                        >
                                            <option value="">בחר שירות</option>
                                            <option value="earthworks">עבודות עפר וחפירה</option>
                                            <option value="infrastructure">תשתיות ופיתוח</option>
                                            <option value="roads">סלילת כבישים ואספלט</option>
                                            <option value="other">אחר</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-neutral-200 mb-2">
                                            מיקום הפרויקט *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.location}
                                            onChange={(e) =>
                                                setFormData({ ...formData, location: e.target.value })
                                            }
                                            className="w-full px-4 py-3 bg-base-elevated border border-neutral-600 rounded-md text-white placeholder-neutral-500 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-colors"
                                            placeholder="תל אביב"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-neutral-200 mb-2">
                                            פרטים נוספים
                                        </label>
                                        <textarea
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({ ...formData, message: e.target.value })
                                            }
                                            className="w-full px-4 py-3 bg-base-elevated border border-neutral-600 rounded-md text-white placeholder-neutral-500 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-colors resize-none"
                                            placeholder="ספרו לנו עוד על הפרויקט שלכם..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full text-lg shadow-xl shadow-blue-500/20"
                                    >
                                        שלח הודעה
                                    </Button>
                                </form>
                            </div>

                            {/* Contact Info */}
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-8">
                                    פרטי התקשרות
                                </h2>

                                <div className="space-y-6">
                                    <div className="bg-base-elevated p-6 rounded-[var(--radius-lg)]">
                                        <h3 className="font-semibold text-white mb-2">טלפון</h3>
                                        <a
                                            href="tel:03-1234567"
                                            className="text-accent-primary hover:text-accent-light text-xl"
                                        >
                                            03-1234567
                                        </a>
                                    </div>

                                    <div className="bg-base-elevated p-6 rounded-[var(--radius-lg)]">
                                        <h3 className="font-semibold text-white mb-2">דוא״ל</h3>
                                        <a
                                            href="mailto:info@harama.co.il"
                                            className="text-accent-primary hover:text-accent-light"
                                        >
                                            info@harama.co.il
                                        </a>
                                    </div>

                                    <div className="bg-base-elevated p-6 rounded-[var(--radius-lg)]">
                                        <h3 className="font-semibold text-white mb-2">כתובת</h3>
                                        <p className="text-neutral-300">
                                            רחוב הדוגמה 123
                                            <br />
                                            תל אביב, 6789012
                                        </p>
                                    </div>

                                    <div className="bg-base-elevated p-6 rounded-[var(--radius-lg)]">
                                        <h3 className="font-semibold text-white mb-2">שעות פעילות</h3>
                                        <p className="text-neutral-300">
                                            ראשון - חמישי: 07:00 - 17:00
                                            <br />
                                            שישי: 07:00 - 13:00
                                        </p>
                                    </div>
                                </div>
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
