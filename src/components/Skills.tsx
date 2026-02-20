"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useRef } from "react";
import { skillsContent } from "../data/content";

// Interactive Tilt Card
const TiltCard = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct * 200);
        y.set(yPct * 200);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, perspective: 1000 }}
            className="h-full"
        >
            {children}
        </motion.div>
    );
};

export default function Skills() {
    return (
        <section id="skills" className="relative py-28 overflow-hidden bg-white dark:bg-transparent">
            <div className="absolute inset-0 bg-dot-pattern opacity-40 dark:opacity-20 mix-blend-multiply dark:mix-blend-normal" />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <AnimatedSection>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-12 bg-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm tracking-wider uppercase">
                            {skillsContent.badge}
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                        {skillsContent.heading.line1} <span className="gradient-text">{skillsContent.heading.highlight}</span>
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mb-16">
                        {skillsContent.description}
                    </p>
                </AnimatedSection>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillsContent.categories.map((category, i) => (
                        <AnimatedSection key={category.title} delay={i * 0.1}>
                            <TiltCard>
                                <div className="bg-white/80 dark:bg-zinc-900/50 backdrop-blur-md rounded-2xl p-6 h-full border border-zinc-200 dark:border-zinc-800 shadow-sm transition-colors duration-500 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10 dark:hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] group">
                                    {/* Category header */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-100 dark:group-hover:bg-emerald-500/20 transition-colors">
                                            <category.icon
                                                size={18}
                                                className="text-emerald-600 dark:text-emerald-400"
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                        <h3 className="font-bold text-zinc-900 dark:text-white text-base">
                                            {category.title}
                                        </h3>
                                    </div>

                                    {/* Skills list */}
                                    <div className="space-y-2">
                                        {category.skills.map((skill, j) => (
                                            <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 + j * 0.05 }}
                                                className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-all group/skill cursor-default dark:hover:shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:scale-[1.02]"
                                            >
                                                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover/skill:text-zinc-900 dark:group-hover/skill:text-white transition-colors">
                                                    {skill.name}
                                                </span>
                                                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-500 group-hover/skill:text-emerald-600 dark:group-hover/skill:text-emerald-400 transition-colors">
                                                    {skill.level}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </TiltCard>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
