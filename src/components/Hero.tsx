"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileDown } from "lucide-react";
import { useEffect, useState } from "react";
import { heroContent, contactInfo } from "../data/content";

export default function Hero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Animated background grid */}
            <div className="absolute inset-0 bg-grid opacity-60 dark:opacity-40" />

            {/* 3D Parallax Orbs */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                    scale: [1, 1.05, 1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-400/20 dark:bg-emerald-500/10 rounded-full blur-[100px] sm:blur-[120px]"
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0],
                    scale: [1, 1.05, 1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-1/4 -right-32 w-80 h-80 bg-teal-400/20 dark:bg-emerald-500/5 rounded-full blur-[80px] sm:blur-[100px]"
            />



            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                {/* Status badge with ping */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm"
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400 font-mono font-medium">
                        {heroContent.badge}
                    </span>
                </motion.div>

                {/* Headline with staggered reveal */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                    className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.05] mb-6 text-zinc-900 dark:text-white"
                >
                    {heroContent.heading.line1}{" "}
                    <span className="gradient-text">{heroContent.heading.highlight}</span>
                    <br />
                    {heroContent.heading.line2}
                    <span className="text-emerald-500">.</span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-4 leading-relaxed font-medium"
                >
                    {heroContent.description.start}
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-500/10 px-1 rounded">{heroContent.description.highlight1}</span>{heroContent.description.middle}
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-500/10 px-1 rounded">{heroContent.description.highlight2}</span>
                    {heroContent.description.end}
                </motion.p>

                {/* Values Prop via terminal typing effect simulation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.75 }}
                    className="inline-block bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 mb-10 font-mono text-sm text-zinc-500 dark:text-zinc-400 shadow-sm"
                >
                    <span className="text-emerald-500 mr-2">$</span>
                    {heroContent.terminalQuote}
                </motion.div>

                {/* Magnetic CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#projects"
                        className="group flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white hover:bg-emerald-600 font-bold rounded-full transition-all duration-300 shadow-lg shadow-emerald-500/25 w-full sm:w-auto justify-center"
                    >
                        Explore Systems
                        <ArrowDown
                            size={18}
                            strokeWidth={2.5}
                            className="group-hover:translate-y-1 transition-transform"
                        />
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={contactInfo.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-8 py-4 rounded-full border-2 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 bg-white/50 dark:bg-transparent w-full sm:w-auto justify-center"
                    >
                        <FileDown size={18} strokeWidth={2} />
                        <span className="font-semibold">Download CV</span>
                    </motion.a>
                </motion.div>

            </div>
        </section>
    );
}
