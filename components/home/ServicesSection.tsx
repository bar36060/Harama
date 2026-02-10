"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import earthworksData from "@/data/services/earthworks.json";
import infrastructureData from "@/data/services/infrastructure.json";
import roadsData from "@/data/services/roads.json";

interface Service {
    id: string;
    title: string;
    slug: string;
    shortSummary: string;
    featuredImage: {
        url: string;
        alt: string;
    };
    order: number;
}

const services: Service[] = [
    earthworksData,
    infrastructureData,
    roadsData,
].sort((a, b) => a.order - b.order);

export default function ServicesSection() {
    const [activeService, setActiveService] = useState<Service>(services[0]);

    return (
        <Section variant="default" padding="tight">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

                {/* Right Column: Service List (RTL) */}
                <div className="order-2 lg:order-1 flex flex-col justify-center">
                    <Reveal className="w-full">
                        <div className="mb-8 text-center lg:text-right px-4 md:px-0">
                            <div className="text-sm font-semibold text-[#2E7CC4] mb-2 tracking-wide">
                                השירותים שלנו
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4 leading-tight">
                                פתרונות ביצוע <br className="hidden md:block" /> פרימיום
                            </h2>
                            <p className="text-base md:text-lg text-neutral-400 max-w-md mx-auto lg:mr-0">
                                מעטפת ביצועית המשלבת ציוד מתקדם, הנדסה מדויקת וניסיון של עשרות שנים.
                            </p>
                        </div>
                    </Reveal>

                    <div className="space-y-2">
                        {services.map((service, index) => (
                            <Reveal key={service.id} delay={index * 0.1} variant="fadeLeft">
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="group block relative"
                                    onMouseEnter={() => setActiveService(service)}
                                >
                                    <div
                                        className={cn(
                                            "relative p-6 md:p-8 rounded-2xl transition-all duration-500 border border-transparent",
                                            activeService.id === service.id
                                                ? "bg-white/5 border-white/10 shadow-[0_0_30px_-10px_rgba(46,124,196,0.3)]"
                                                : "hover:bg-white/[0.02]"
                                        )}
                                    >
                                        <div className="flex items-center justify-between">
                                            <h3 className={cn(
                                                "text-2xl md:text-3xl font-bold transition-colors duration-300",
                                                activeService.id === service.id ? "text-white" : "text-neutral-500 group-hover:text-neutral-300"
                                            )}>
                                                {service.title}
                                            </h3>
                                            <ArrowLeft className={cn(
                                                "w-6 h-6 transition-all duration-300 opacity-0 -translate-x-4",
                                                activeService.id === service.id ? "opacity-100 translate-x-0 text-[#2E7CC4]" : ""
                                            )} />
                                        </div>

                                        <div className={cn(
                                            "grid transition-all duration-500 ease-out overflow-hidden",
                                            activeService.id === service.id ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                                        )}>
                                            <div className="overflow-hidden">
                                                <p className="text-neutral-400 leading-relaxed text-base md:text-lg pl-8">
                                                    {service.shortSummary}
                                                </p>
                                                <span className="inline-block mt-4 text-sm font-medium text-[#2E7CC4] border-b border-[#2E7CC4]/30 pb-0.5">
                                                    למידע נוסף
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* Left Column: Image Preview (sticky on desktop) */}
                <div className="order-1 lg:order-2 lg:sticky lg:top-32 h-[350px] lg:h-[450px] rounded-3xl overflow-hidden relative shadow-2xl border border-white/10 bg-[#05080F]">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={activeService.id}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.7, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <Image
                                src={activeService.featuredImage.url}
                                alt={activeService.featuredImage.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                            />
                            {/* Gradients */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#05080F] via-transparent to-transparent opacity-60" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#05080F]/40 via-transparent to-transparent" />

                            {/* Floating Label */}
                            <div className="absolute bottom-8 right-8 z-10 glass-card px-6 py-3 rounded-full text-white/90 font-medium text-sm backdrop-blur-md border border-white/10">
                                {activeService.title}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </Section>
    );
}
