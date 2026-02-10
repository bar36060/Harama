"use client";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SolutionsSection() {
    return (
        <Section variant="band" padding="loose" className="overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* Content Side (Right visually) */}
                <div className="order-2 lg:order-2 text-right">
                    <Reveal variant="fadeRight">
                        <div className="flex items-center gap-4 mb-6">

                            <span className="text-[#2E7CC4] text-sm font-semibold tracking-wider uppercase">תחום התמחות</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2E7CC4] mb-8 leading-[1.1]">
                            פתרונות ביצוע <br />
                            <span className="text-white">
                                לפרויקטים מורכבים
                            </span>
                        </h2>

                        <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed mb-10 max-w-xl ml-auto">
                            מחפירות עומק ועד תשתיות מים וביוב, דרך סלילת כבישים ופיתוח שטחים —
                            <br className="hidden md:block" />
                            אנו מספקים מעטפת ביצועית מלאה, המשלבת דיוק הנדסי, עוצמה טכנולוגית ועמידה בלתי מתפשרת בלוחות זמנים.
                        </p>

                        <Link
                            href="/about"
                            className="group inline-flex items-center gap-3 text-white font-medium border-b border-[#2E7CC4]/30 pb-1 hover:border-[#2E7CC4] transition-all"
                        >
                            <span className="text-lg group-hover:text-[#2E7CC4] transition-colors">למד עוד על היכולות שלנו</span>
                            <div className="w-8 h-8 rounded-full bg-[#2E7CC4]/10 flex items-center justify-center group-hover:bg-[#2E7CC4] group-hover:text-white transition-colors">
                                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            </div>
                        </Link>
                    </Reveal>
                </div>

                {/* Images Side (Left visually) - "Messy but Organized" Collage */}
                <div className="order-1 lg:order-1 relative h-[600px] w-full flex items-center justify-center lg:justify-start perspective-[1000px]">
                    {/* Decorative Background Blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/10 blur-3xl rounded-full -z-10" />

                    <div className="relative w-full max-w-[550px] h-[550px]">

                        {/* Image 1: Back Base - Slight Rotation */}
                        <motion.div
                            initial={{ opacity: 0, rotate: -6, x: -50 }}
                            whileInView={{ opacity: 1, rotate: -3, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="absolute top-0 right-[5%] w-[70%] h-[60%] z-0"
                        >
                            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-[#0F1420]">
                                <img
                                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                                    alt="Construction"
                                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                                />
                            </div>
                        </motion.div>

                        {/* Image 2: Front Overlap - Counter Rotation - "Messy" feel */}
                        <motion.div
                            initial={{ opacity: 0, rotate: 6, y: 50 }}
                            whileInView={{ opacity: 1, rotate: 2, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute bottom-[10%] left-[5%] w-[65%] h-[55%] z-10"
                        >
                            <div className="w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-[#151a25]">
                                <img
                                    src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=800&q=80"
                                    alt="Engineering"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>

                        {/* Image 3: Small Accent - Top Left - "Pinned" look */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="absolute top-[10%] left-0 w-[40%] h-[35%] z-20"
                        >
                            <div className="w-full h-full rounded-xl overflow-hidden shadow-xl border-2 border-[#2E7CC4]/30 bg-[#1a202c]">
                                <img
                                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                                    alt="Site View"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Floating Tech Badge */}
                        <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-[20%] right-[10%] z-30 bg-[#2E7CC4] text-white px-6 py-3 rounded-full shadow-lg shadow-blue-500/30"
                        >
                            <span className="font-bold tracking-wider text-sm">SINCE 2005</span>
                        </motion.div>

                    </div>
                </div>

            </div>
        </Section>
    );
}
