"use client";

import AnimatedSection from "./AnimatedSection";
import { ExternalLink } from "lucide-react";
import { writingContent } from "../data/content";

export default function Writing() {
    return (
        <section id="writing" className="relative py-28 bg-white dark:bg-zinc-950/50">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <AnimatedSection>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-12 bg-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm tracking-wider uppercase">
                            {writingContent.badge}
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-16">
                        {writingContent.heading.line1} <span className="gradient-text">{writingContent.heading.highlight}</span>
                    </h2>
                </AnimatedSection>

                <div className="space-y-6">
                    {writingContent.contributions.map((item, i) => (
                        <AnimatedSection key={i} delay={i * 0.15}>
                            <a href={item.link} target={item.link.startsWith("http") ? "_blank" : "_self"} rel="noreferrer" className="group block">
                                <div className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-lg hover:border-emerald-500/30 dark:hover:border-emerald-500/30">
                                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <item.icon size={20} className="text-emerald-600 dark:text-emerald-400" />
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                                {item.title}
                                            </h3>
                                            <div className="flex items-center gap-3">
                                                <span className="text-xs font-mono px-3 py-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full text-zinc-500 dark:text-zinc-400 font-semibold">
                                                    {item.type}
                                                </span>
                                                <span className="text-sm font-mono text-zinc-400 dark:text-zinc-500">
                                                    {item.date}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                                            {item.description}
                                        </p>

                                        <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-2 transition-transform duration-300">
                                            Read more <ExternalLink size={14} />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
