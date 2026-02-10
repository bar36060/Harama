"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export const NeonScrollLine = () => {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Right Side "Alive" Beam */}
            <motion.div
                className="absolute top-0 right-[5%] w-[2px] h-full bg-blue-900/20"
            >
                <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[40vh] bg-gradient-to-b from-[#2E7CC4] via-[#4A94D9] to-transparent opacity-40 blur-[40px] rounded-full"
                    style={{
                        top: useSpring(scrollYProgress, { stiffness: 50, damping: 20 }).get() * 80 + "%",
                        scale: useSpring(scrollYProgress, { stiffness: 50, damping: 20 }).get() * 0.5 + 1
                    }}
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Core Hot Beam */}
                <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[4px] bg-gradient-to-b from-[#60A5FA] to-[#2E7CC4] shadow-[0_0_30px_#2E7CC4]"
                    style={{
                        height: "100%",
                        scaleY,
                        originY: 0
                    }}
                />
            </motion.div>

            {/* Ambient Blue Glow in bottom left for balance */}
            <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#1A5A9C] rounded-full blur-[120px] opacity-10" />
        </div>
    );
};
