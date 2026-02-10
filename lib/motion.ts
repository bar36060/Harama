import { Variants, Easing } from "framer-motion";

export const EASINGS = {
    easeOutQuart: [0.25, 1, 0.5, 1] as [number, number, number, number],
    easeOutCubic: [0.33, 1, 0.68, 1] as [number, number, number, number],
    easeInOutCubic: [0.65, 0, 0.35, 1] as [number, number, number, number],
};

export const DURATIONS = {
    micro: 0.2,
    standard: 0.3,
    reveal: 0.6, // Slower for grand reveals
};

export const revealVariants: Record<string, Variants> = {
    fadeIn: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: DURATIONS.reveal, ease: EASINGS.easeOutCubic }
        },
    },
    fadeUp: {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: DURATIONS.reveal, ease: EASINGS.easeOutCubic }
        },
    },
    fadeUpSm: {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: DURATIONS.standard, ease: EASINGS.easeOutCubic }
        },
    },
    fadeRight: {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: DURATIONS.reveal, ease: EASINGS.easeOutCubic }
        },
    },
    fadeLeft: {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: DURATIONS.reveal, ease: EASINGS.easeOutCubic }
        },
    },
    scaleUp: {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: DURATIONS.reveal, ease: EASINGS.easeOutCubic }
        },
    },
};

export const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};
