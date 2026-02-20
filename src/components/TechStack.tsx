"use client";

import AnimatedSection from "./AnimatedSection";
import { techStackContent } from "../data/content";

export default function TechStack() {
    return (
        <section id="stack" className="relative py-24 border-y border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-50/50 dark:bg-zinc-900/20 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
                <AnimatedSection>
                    <span className="text-emerald-600 dark:text-emerald-500 font-mono text-xs uppercase tracking-widest font-semibold mb-3 block">
                        {techStackContent.badge}
                    </span>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                        {techStackContent.heading}
                    </h2>
                </AnimatedSection>
            </div>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                {/* Left fade */}
                <div className="absolute left-0 top-0 z-10 h-full w-[150px] bg-gradient-to-r from-zinc-50 dark:from-[#09090b] to-transparent pointer-events-none" />
                {/* Right fade */}
                <div className="absolute right-0 top-0 z-10 h-full w-[150px] bg-gradient-to-l from-zinc-50 dark:from-[#09090b] to-transparent pointer-events-none" />

                <div className="flex w-[200%] gap-8 animate-marquee whitespace-nowrap group hover:[animation-play-state:paused]">
                    {[...techStackContent.stack, ...techStackContent.stack, ...techStackContent.stack].map((tech, i) => (
                        <div
                            key={`${tech.name}-${i}`}
                            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all duration-300 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10 cursor-default"
                        >
                            <tech.icon className="text-zinc-400 dark:text-zinc-500 group-hover/card:text-emerald-500 transition-colors" size={20} />
                            <span className="text-zinc-700 dark:text-zinc-300 font-semibold">{tech.name}</span>
                        </div>
                    ))}
                </div>

                {/* Reverse marquee */}
                <div className="flex w-[200%] gap-8 animate-marquee whitespace-nowrap group hover:[animation-play-state:paused] mt-6" style={{ animationDirection: "reverse" }}>
                    {[...techStackContent.stack, ...techStackContent.stack, ...techStackContent.stack].reverse().map((tech, i) => (
                        <div
                            key={`rev-${tech.name}-${i}`}
                            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all duration-300 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10 cursor-default"
                        >
                            <tech.icon className="text-zinc-400 dark:text-zinc-500 group-hover/card:text-emerald-500 transition-colors" size={20} />
                            <span className="text-zinc-700 dark:text-zinc-300 font-semibold">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
