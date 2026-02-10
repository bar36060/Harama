"use client";

import { useState, useEffect, useRef } from "react";
import { Section } from "@/components/layout/Section";
import yearsData from "@/data/stats/years.json";
import projectsData from "@/data/stats/projects-completed.json";
import onTimeData from "@/data/stats/on-time-percentage.json";
import equipmentData from "@/data/stats/equipment.json";

interface Stat {
    id: string;
    label: string;
    value: number | string;
    prefix?: string;
    suffix?: string;
    animate: boolean;
    order: number;
}

const stats: Stat[] = [yearsData, projectsData, onTimeData, equipmentData].sort(
    (a, b) => a.order - b.order
);

const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

export default function StatsSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);

                    // Only animate stats with animate: true
                    stats.forEach((stat) => {
                        if (stat.animate && typeof stat.value === "number") {
                            animateValue(stat.id, stat.value);
                        }
                    });
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    const animateValue = (id: string, endValue: number) => {
        const duration = 1000; // 900-1200ms range, using 1000ms
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutCubic(progress);
            const currentValue = Math.floor(easedProgress * endValue);

            setAnimatedValues((prev) => ({ ...prev, [id]: currentValue }));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    };

    return (
        <Section
            ref={sectionRef}
            variant="band"
            padding="tight"
            className=""
        >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {stats.map((stat) => {
                    const displayValue =
                        stat.animate && typeof stat.value === "number"
                            ? animatedValues[stat.id] || 0
                            : stat.value;

                    return (
                        <div
                            key={stat.id}
                            className="relative flex flex-col items-center justify-center text-center p-6 aspect-square rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:bg-white/10 transition-colors duration-300"
                        >
                            <div className="text-4xl md:text-6xl font-extrabold font-heading text-white mb-2 tabular-nums leading-none tracking-tight">
                                {stat.prefix}
                                {displayValue}
                                {stat.suffix && (
                                    <span className="text-[#2E7CC4] ml-1">{stat.suffix}</span>
                                )}
                            </div>
                            <div className="text-lg font-medium text-neutral-200">
                                {stat.label}
                            </div>
                            {/* Small blue accent line - centered */}
                            <div className="w-12 h-1 bg-[#2E7CC4] mt-4 rounded-full" />
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}
