"use client";

import AnimatedSection from "./AnimatedSection";
import { techStackContent } from "../data/content";

export default function TechStack() {
    return (
        <section id="stack" className="relative overflow-hidden border-y border-zinc-200/50 bg-zinc-50/50 py-24 dark:border-zinc-800/50 dark:bg-zinc-900/20">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-50 dark:opacity-30" />
            <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-500/70 to-transparent" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-5xl px-6">
                <AnimatedSection>
                    <div className="mb-12 text-center">
                        <span className="mb-3 block font-mono text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
                            {techStackContent.badge}
                        </span>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
                            {techStackContent.heading.replace(/Room$/, "")}
                            <span className="gradient-text">Room</span>
                        </h2>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {techStackContent.stack.map((tech, i) => {
                        const Icon = tech.icon;
                        return (
                            <AnimatedSection key={tech.name} delay={i * 0.05}>
                                <div className="group relative flex h-full flex-col items-center gap-4 overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/80 px-4 py-7 text-center shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_16px_40px_rgba(16,185,129,0.14)] dark:border-zinc-800 dark:bg-zinc-950/70">
                                    <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-400 dark:text-zinc-600">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/15 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-[0_0_24px_rgba(16,185,129,0.45)] dark:text-emerald-400">
                                        <Icon size={24} strokeWidth={1.5} />
                                    </span>
                                    <span className="text-sm font-medium text-zinc-800 dark:text-zinc-100">{tech.name}</span>
                                    <span className="absolute inset-x-8 bottom-0 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
                                </div>
                            </AnimatedSection>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
