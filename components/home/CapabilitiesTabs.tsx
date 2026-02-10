"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AnimatedWords } from "@/components/motion/AnimatedWords";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

// Types
export interface CapabilityTab {
    id: string;
    label: string;
    title: string;
    description: string;
    image: string;
    bullets: string[];
    cta: { text: string; href: string };
}

interface CapabilitiesTabsProps {
    tabs: CapabilityTab[];
}

export function CapabilitiesTabs({ tabs }: CapabilitiesTabsProps) {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const activeContent = tabs.find((t) => t.id === activeTab) || tabs[0];

    return (
        <div>
            {/* Content Panel with Tabs Inside */}
            <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10">
                {/* Tabs Navigation at Top */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 p-4 md:p-6 border-b border-white/10 bg-white/5 backdrop-blur-sm">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "relative px-6 py-2.5 rounded-full text-sm md:text-base font-medium transition-colors duration-300 z-10",
                                activeTab === tab.id ? "text-white" : "text-neutral-400 hover:text-white"
                            )}
                        >
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="activeTabPill"
                                    className="absolute inset-0 bg-[#2E7CC4] rounded-full -z-10 shadow-[0_0_20px_rgba(46,124,196,0.3)]"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="p-8 md:p-12 lg:p-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeContent.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                        >
                            {/* Left: Content (RTL: Right side visually) */}
                            <div className="order-2 lg:order-1 text-right">
                                {/* Typewriter Headline */}
                                <div className="mb-6 min-h-[4rem]">
                                    <AnimatedWords
                                        text={activeContent.title}
                                        className="text-3xl md:text-5xl font-bold font-heading text-white leading-tight"
                                    />
                                </div>

                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-lg text-neutral-300 leading-relaxed mb-8"
                                >
                                    {activeContent.description}
                                </motion.p>

                                {/* Staggered Bullets */}
                                <ul className="grid gap-4 mb-10">
                                    {activeContent.bullets.map((bullet, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 + idx * 0.1 }}
                                            className="flex items-center gap-3 text-neutral-200 font-medium"
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-[#2E7CC4] flex-shrink-0" />
                                            {bullet}
                                        </motion.li>
                                    ))}
                                </ul>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <Button size="lg" className="group">
                                        {activeContent.cta.text}
                                        <ArrowLeft className="mr-2 w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
                                    </Button>
                                </motion.div>
                            </div>

                            {/* Right: Image (RTL: Left side visually) */}
                            <div className="order-1 lg:order-2 relative h-[300px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                                <motion.div
                                    initial={{ scale: 1.1, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.7 }}
                                    className="w-full h-full relative"
                                >
                                    <Image
                                        src={activeContent.image}
                                        alt={activeContent.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    {/* Inner Glow Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#05080F]/80 via-transparent to-transparent" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
