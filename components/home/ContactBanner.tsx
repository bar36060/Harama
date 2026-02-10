"use client";

import { useState } from "react";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";

export default function ContactBanner() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        location: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement form submission
        console.log("Form submitted:", formData);
    };

    return (
        <Section variant="default" padding="loose" className="bg-[#0A0E1A]">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                {/* Content Side (Right in RTL) */}
                <div className="lg:col-span-5 pt-8">
                    <Reveal delay={0.1}>
                        <div className="text-[#2E7CC4] font-medium tracking-wide mb-4">
                            צור קשר
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            מוכנים להתחיל את הפרויקט הבא?
                        </h2>
                        <p className="text-lg text-neutral-300 mb-10 leading-relaxed">
                            הצוות המקצועי שלנו זמין לכל שאלה. השאירו פרטים ונחזור אליכם עם ייעוץ ראשוני והצעת מחיר מסודרת - ללא התחייבות.
                        </p>
                    </Reveal>

                    <div className="space-y-8">
                        <Reveal delay={0.2}>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#2E7CC4]/10 rounded-lg flex items-center justify-center flex-shrink-0 text-[#2E7CC4]">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-1">טלפון</h3>
                                    <a href="tel:03-1234567" className="text-neutral-300 hover:text-[#2E7CC4] transition-colors dir-ltr block text-right">
                                        03-1234567
                                    </a>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#2E7CC4]/10 rounded-lg flex items-center justify-center flex-shrink-0 text-[#2E7CC4]">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-1">אימייל</h3>
                                    <a href="mailto:info@harama.co.il" className="text-neutral-300 hover:text-[#2E7CC4] transition-colors">
                                        info@harama.co.il
                                    </a>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.4}>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#2E7CC4]/10 rounded-lg flex items-center justify-center flex-shrink-0 text-[#2E7CC4]">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-1">שעות פעילות</h3>
                                    <p className="text-neutral-300">
                                        ראשון - חמישי, 08:00 - 18:00
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* Form Side (Left in RTL) */}
                <div className="lg:col-span-7">
                    <Reveal delay={0.5} variant="fadeLeft" className="w-full">
                        <form onSubmit={handleSubmit} className="bg-[#151B2E] rounded-3xl border border-[#2D3748] shadow-2xl" style={{ padding: '40px', marginBottom: '40px' }}>
                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                                        שם מלא
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className="w-full bg-[#0A0E1A] border border-[#2D3748] rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-[#2E7CC4] focus:ring-1 focus:ring-[#2E7CC4] transition-all"
                                        style={{ paddingTop: '16px', paddingBottom: '16px', paddingLeft: '24px', paddingRight: '24px', marginBottom: '16px' }}
                                        placeholder="ישראל ישראלי"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-2">
                                        טלפון
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        required
                                        className="w-full bg-[#0A0E1A] border border-[#2D3748] rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-[#2E7CC4] focus:ring-1 focus:ring-[#2E7CC4] transition-all"
                                        style={{ paddingTop: '16px', paddingBottom: '16px', paddingLeft: '24px', paddingRight: '24px', marginBottom: '16px' }}
                                        placeholder="050-0000000"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                                        אימייל
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="w-full bg-[#0A0E1A] border border-[#2D3748] rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-[#2E7CC4] focus:ring-1 focus:ring-[#2E7CC4] transition-all"
                                        style={{ paddingTop: '16px', paddingBottom: '16px', paddingLeft: '24px', paddingRight: '24px', marginBottom: '16px' }}
                                        placeholder="email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="location" className="block text-sm font-medium text-neutral-300 mb-2">
                                        מיקום הפרויקט
                                    </label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        value={formData.location}
                                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                        className="w-full bg-[#0A0E1A] border border-[#2D3748] rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-[#2E7CC4] focus:ring-1 focus:ring-[#2E7CC4] transition-all"
                                        style={{ paddingTop: '16px', paddingBottom: '16px', paddingLeft: '24px', paddingRight: '24px', marginBottom: '16px' }}
                                        placeholder="עיר / אזור"
                                    />
                                </div>
                            </div>

                            <div className="mb-8">
                                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                                    פרטי הפרויקט
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    className="w-full bg-[#0A0E1A] border border-[#2D3748] rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-[#2E7CC4] focus:ring-1 focus:ring-[#2E7CC4] transition-all"
                                    style={{ paddingTop: '16px', paddingBottom: '16px', paddingLeft: '24px', paddingRight: '24px', marginBottom: '16px' }}
                                    placeholder="ספר לנו על הפרויקט..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#2E7CC4] hover:bg-[#1A5A9C] text-white rounded-lg font-bold text-lg shadow-lg shadow-[#2E7CC4]/20 hover:shadow-[#2E7CC4]/40 transition-all duration-300 transform hover:-translate-y-0.5"
                                style={{ paddingTop: '16px', paddingBottom: '16px', paddingLeft: '24px', paddingRight: '24px', marginTop: '24px' }}
                            >
                                שליחת פרטים לקבלת הצעה
                            </button>
                        </form>
                    </Reveal>
                </div>
            </div>
        </Section>
    );
}
