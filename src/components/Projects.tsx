"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Database } from "lucide-react";
import { useRef } from "react";
import { projectsContent } from "../data/content";

export default function Projects() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={containerRef} id="projects" className="relative py-28 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-10 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <AnimatedSection>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-12 bg-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm tracking-wider uppercase">
                            {projectsContent.badge}
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                        {projectsContent.heading.line1} <span className="gradient-text">{projectsContent.heading.highlight}</span>
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mb-16">
                        {projectsContent.description}
                    </p>
                </AnimatedSection>

                <motion.div style={{ y: y1 }} className="space-y-12 lg:space-y-24">
                    {projectsContent.projects.map((project) => (
                        <AnimatedSection key={project.title} delay={0.1}>
                            <div
                                className={`group relative bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden transition-all duration-500 shadow-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl hover:border-transparent dark:hover:border-transparent`}
                            >
                                {/* Dynamic Glowing Border */}
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />
                                <div className="absolute inset-0 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 group-hover:border-transparent z-0 transition-all duration-500" />
                                <div className={`absolute inset-[1px] rounded-[23px] bg-white dark:bg-zinc-900 z-10`} />

                                {/* Border accent strip */}
                                <div className={`absolute top-0 left-0 w-2 h-full ${project.bgAccent} z-20`} />

                                <div className="relative z-20 p-8 sm:p-12 pl-12 sm:pl-16">
                                    {/* Header */}
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-8 border-b border-zinc-100 dark:border-zinc-800">
                                        <div className="flex items-center gap-5 mb-4 md:mb-0">
                                            <div
                                                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shrink-0 border border-zinc-200/50 dark:border-zinc-700/50`}
                                            >
                                                <project.icon
                                                    size={24}
                                                    className={project.textColor}
                                                    strokeWidth={2}
                                                />
                                            </div>
                                            <div>
                                                <h3 className={`text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-1 transition-colors delay-100`}>
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400">
                                                    {project.concept}
                                                </p>
                                            </div>
                                        </div>
                                        <span className="text-sm font-mono text-zinc-600 dark:text-zinc-400 px-4 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 shadow-sm w-fit font-semibold">
                                            {project.year}
                                        </span>
                                    </div>

                                    <div className="grid lg:grid-cols-3 gap-8">
                                        {/* Technical Highlight */}
                                        <div className="lg:col-span-2">
                                            <div className="flex items-center gap-2 mb-3">
                                                <Database
                                                    size={16}
                                                    className="text-emerald-500"
                                                    strokeWidth={2}
                                                />
                                                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest font-bold">
                                                    Engineering Highlight
                                                </span>
                                            </div>
                                            <p className="text-zinc-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed font-medium">
                                                {project.highlight}
                                            </p>
                                        </div>

                                        {/* Keywords */}
                                        <div>
                                            <div className="flex flex-wrap gap-2">
                                                {project.keywords.map((keyword) => (
                                                    <span
                                                        key={keyword}
                                                        className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-950`}
                                                    >
                                                        {keyword}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
