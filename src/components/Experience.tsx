"use client";

import AnimatedSection from "./AnimatedSection";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { experienceContent, experienceData } from "../data/content";

export default function Experience() {
    return (
        <section id="experience" className="relative py-28">
            <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-10 pointer-events-none" />
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <AnimatedSection>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-12 bg-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm tracking-wider uppercase">
                            {experienceContent.badge}
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-16">
                        {experienceContent.heading.line1} <span className="gradient-text">{experienceContent.heading.highlight}</span>
                    </h2>
                </AnimatedSection>

                <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-3 sm:ml-0 space-y-16">
                    {experienceData.map((exp, index) => (
                        <AnimatedSection key={index} delay={index * 0.2}>
                            <div className="relative pl-8 sm:pl-12 group">
                                {/* Timeline dot */}
                                <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-emerald-500 ring-4 ring-white dark:ring-[#09090b] group-hover:scale-150 dark:group-hover:shadow-[0_0_15px_rgba(16,185,129,0.8)] transition-all duration-300" />

                                {/* Timeline line glow on hover */}
                                <div className="absolute -left-[1px] top-2 bottom-[-4rem] w-[1px] bg-gradient-to-b from-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                        {exp.role}
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm text-zinc-500 font-mono bg-zinc-100 dark:bg-zinc-900 px-3 py-1 rounded-full w-fit border border-zinc-200 dark:border-zinc-800">
                                        <Briefcase size={14} className="text-emerald-500" />
                                        {exp.company}
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 text-sm mb-6 font-mono">
                                    <Calendar size={14} />
                                    {exp.period}
                                </div>

                                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-base sm:text-lg mb-6">
                                    {exp.description}
                                </p>

                                <ul className="space-y-3">
                                    {exp.highlights.map((highlight, i) => (
                                        <li key={i} className="flex items-start gap-3 text-zinc-500 dark:text-zinc-400 text-sm sm:text-base group/item">
                                            <ChevronRight size={16} className="mt-1 shrink-0 text-emerald-400 opacity-50 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
