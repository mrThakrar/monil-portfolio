"use client";

import { useRef, useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { aboutContent } from "../data/content";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let current = 0;
                    const step = target / 40;
                    const interval = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            setCount(target);
                            clearInterval(interval);
                        } else {
                            setCount(Math.floor(current));
                        }
                    }, 40);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
}

export default function About() {
    return (
        <section id="about" className="relative py-28 overflow-hidden bg-zinc-50 dark:bg-transparent">
            <div className="absolute inset-0 bg-dot-pattern opacity-40 dark:opacity-20 mix-blend-multiply dark:mix-blend-normal" />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <AnimatedSection>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-12 bg-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm tracking-widest uppercase font-semibold">
                            {aboutContent.badge}
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-white mb-12 tracking-tight">
                        {aboutContent.heading.line1} <span className="gradient-text">{aboutContent.heading.highlight}</span><br />
                        {aboutContent.heading.line2}
                    </h2>
                </AnimatedSection>

                <div className="grid lg:grid-cols-12 gap-10 items-center">
                    {/* Bio Section */}
                    <AnimatedSection className="lg:col-span-7" delay={0.1} direction="left">
                        <div className="glass rounded-3xl p-8 sm:p-10 hover:shadow-2xl hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/20 transition-all duration-500 border border-zinc-200 dark:border-zinc-800">
                            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg sm:text-xl mb-6 font-medium">
                                {aboutContent.paragraphs[0].text}
                                <span className="text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-500/10 px-1 rounded">
                                    {aboutContent.paragraphs[0].highlight}
                                </span>
                                {aboutContent.paragraphs[0].end}
                            </p>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg mb-8">
                                {aboutContent.paragraphs[1].text}
                                <strong className="text-zinc-900 dark:text-white font-semibold">{aboutContent.paragraphs[1].highlight1}</strong>{aboutContent.paragraphs[1].middle1}
                                <strong className="text-zinc-900 dark:text-white font-semibold">
                                    {aboutContent.paragraphs[1].highlight2}
                                </strong>
                                {aboutContent.paragraphs[1].middle2}
                                <strong className="text-zinc-900 dark:text-white font-semibold">{aboutContent.paragraphs[1].highlight3}</strong>{aboutContent.paragraphs[1].end}
                            </p>

                            <div className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-400 to-teal-600" />
                                <p className="text-zinc-500 dark:text-zinc-400 italic font-mono text-sm pl-4">
                                    {aboutContent.quote}
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Stats Grid */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6 relative">
                        {/* Decorative background blur for stats */}
                        <div className="absolute inset-0 bg-emerald-500/5 dark:bg-emerald-500/10 blur-3xl -z-10 rounded-full" />

                        {aboutContent.stats.map((stat, i) => (
                            <AnimatedSection key={stat.label} delay={0.15 + i * 0.1} direction="up">
                                <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-md rounded-3xl p-6 text-center group border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/20">
                                    <div className="w-12 h-12 mx-auto mb-4 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl flex items-center justify-center group-hover:bg-emerald-100 dark:group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <stat.icon
                                            className="text-emerald-600 dark:text-emerald-400"
                                            size={24}
                                            strokeWidth={2}
                                        />
                                    </div>
                                    <div className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white mb-2 tracking-tight">
                                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-mono font-medium uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
