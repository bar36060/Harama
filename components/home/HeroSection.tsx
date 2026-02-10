"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ChevronRight, ChevronLeft } from "lucide-react"; // RTL icons


interface HeroSlide {
    image: string;
    video?: string; // Optional video path
    alt: string;
    headline: string;
    subtitle: string;
    primaryCTA: { text: string; href: string };
    secondaryCTA: { text: string; href: string };
    bullets: string[];
}

// Curated earthworks/infrastructure/roads imagery
const slides: HeroSlide[] = [
    {
        image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1920&q=80",
        video: "/videos/hero-1.mp4", // Placeholder
        alt: "עבודות חפירה עם כלי חפירה כבדים",
        headline: "מרימים תשתיות מהקרקע",
        subtitle: "20 שנות ניסיון בעבודות חפירה, תשתיות וסלילה בפריסה ארצית — לקבלנים, יזמים ולקוחות פרטיים",
        primaryCTA: { text: "קבל הצעת מחיר", href: "/contact" },
        secondaryCTA: { text: "לפרויקטים", href: "/projects" },
        bullets: ["20 שנות ניסיון", "פריסה ארצית", "ניהול ביצוע מוקפד"],
    },
    {
        image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=1920&q=80",
        video: "/videos/hero-2.mp4", // Placeholder
        alt: "תשתיות כבישים וסלילה",
        headline: "סלילה וכבישים ברמה המקצועית הגבוהה ביותר",
        subtitle: "פתרונות מלאים לסלילת כבישים, חניונים ו דרכי גישה — עם התחייבות למועדים ואיכות",
        primaryCTA: { text: "שירותי סלילה", href: "/services/roads" },
        secondaryCTA: { text: "פרויקטי סלילה", href: "/projects" },
        bullets: ["סלילה ברמה גבוהה", "עמידה בלוחות זמנים", "ציוד מתקדם"],
    },
    {
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80",
        video: "/videos/hero-3.mp4", // Placeholder
        alt: "תשתיות ועבודות אספלט",
        headline: "תשתיות תת-קרקעיות ועבודות עפר",
        subtitle: "ביצוע מקצועי של תשתיות מים וביוב, חפירות עומק ועבודות עפר מורכבות",
        primaryCTA: { text: "שירותי תשתיות", href: "/services/infrastructure" },
        secondaryCTA: { text: "צור קשר", href: "/contact" },
        bullets: ["תשתיות מורכבות", "ציוד כבד מתקדם", "צוותים מיומנים"],
    },
];

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    // Mouse Parallax Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 25, stiffness: 120 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        mouseX.set((clientX - centerX) / centerX * -20); // Move opposite to mouse
        mouseY.set((clientY - centerY) / centerY * -20);
    };


    // Autoplay logic
    useEffect(() => {
        if (!isAutoPlay) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, [isAutoPlay]);

    const handleSlideChange = (index: number) => {
        setCurrentSlide(index);
        setIsAutoPlay(false);
    };

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAutoPlay(false);
    };

    const goToPrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsAutoPlay(false);
    };

    return (
        <Section
            className="h-screen min-h-[700px] flex items-center overflow-hidden relative group"
            onMouseMove={handleMouseMove}
            background={
                <div className="absolute inset-0 z-0">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.0, ease: "easeInOut" }}
                            style={{ x: springX, y: springY }} // Parallax effect
                            className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%]" // Slight overscan for parallax
                        >
                            {slides[currentSlide].video ? (
                                <video
                                    src={slides[currentSlide].video}
                                    poster={slides[currentSlide].image}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <img
                                    src={slides[currentSlide].image}
                                    alt={slides[currentSlide].alt}
                                    className="w-full h-full object-cover"
                                />
                            )}

                            {/* Deep Base Gradient (for text readability) */}
                            <div
                                className="absolute inset-0 z-0"
                                style={{
                                    background: `linear-gradient(to left, rgba(10, 14, 26, 0.95) 0%, rgba(10, 14, 26, 0.6) 50%, rgba(10, 14, 26, 0.2) 100%)`,
                                }}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            }
            overlay={
                <>
                    {/* Prev Button (Right) */}
                    <button
                        onClick={goToPrev}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-l-full border-l border-y border-white/10 bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/10 transition-all hover:scale-110"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Next Button (Left) */}
                    <button
                        onClick={goToNext}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-r-full border-r border-y border-white/10 bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/10 transition-all hover:scale-110"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Pagination Dots (Bottom Center) */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleSlideChange(index)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-[#2E7CC4]" : "w-1.5 bg-white/20 hover:bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>
                </>
            }
        >
            {/* Content */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 w-full" >
                <div className="lg:col-start-1 lg:col-span-8 flex items-center">
                    <div className="max-w-[800px] mr-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                {/* Headline */}
                                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-lg">
                                    {slides[currentSlide].headline}
                                </h1>

                                {/* Subtitle */}
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="text-xl md:text-2xl text-neutral-200 mb-10 leading-relaxed font-light max-w-2xl"
                                >
                                    {slides[currentSlide].subtitle}
                                </motion.p>

                                {/* Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    className="flex flex-wrap gap-4 mb-14"
                                >
                                    <Link href={slides[currentSlide].primaryCTA.href}>
                                        <Button size="lg" className="text-lg px-10 shadow-xl shadow-blue-900/20">
                                            {slides[currentSlide].primaryCTA.text}
                                            <ArrowLeft className="mr-2 h-5 w-5" />
                                        </Button>
                                    </Link>

                                    <Link href={slides[currentSlide].secondaryCTA.href}>
                                        <Button variant="outline" size="lg" className="text-lg px-8 backdrop-blur-md bg-white/5 border-white/20 hover:bg-white/10">
                                            {slides[currentSlide].secondaryCTA.text}
                                        </Button>
                                    </Link>
                                </motion.div>

                                {/* Bullets */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                    className="flex flex-wrap gap-6 text-sm text-neutral-300 font-medium border-t border-white/10 pt-8"
                                >
                                    {slides[currentSlide].bullets.map((bullet, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#2E7CC4] shadow-[0_0_10px_#2E7CC4]" />
                                            {bullet}
                                        </div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div >


        </Section >
    );
}
