"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "left" | "right" | "none";
}

export default function AnimatedSection({
    children,
    className = "",
    delay = 0,
    direction = "up",
}: AnimatedSectionProps) {
    const directionMap = {
        up: { y: 40, x: 0 },
        left: { y: 0, x: -40 },
        right: { y: 0, x: 40 },
        none: { y: 0, x: 0 },
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: directionMap[direction].y,
                x: directionMap[direction].x,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
            }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
                duration: 0.7,
                delay,
                ease: [0.25, 0.4, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
