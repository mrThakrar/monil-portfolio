"use client";

import { useRef, useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { metricsContent } from "../data/content";

function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
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
            {prefix}{count}{suffix}
        </span>
    );
}

export default function Metrics() {
    return (
        <section id="metrics" className="relative py-24 bg-zinc-950 text-white overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase font-semibold mb-3 block">
                            {metricsContent.badge}
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                            {metricsContent.heading}
                        </h2>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-zinc-800">
                    {metricsContent.metrics.map((metric, i) => (
                        <AnimatedSection key={metric.label} delay={i * 0.15} direction="up" className="text-center px-4">
                            <div className={`text-4xl sm:text-5xl font-black mb-3 ${metric.color} tracking-tighter`}>
                                <AnimatedCounter target={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
                            </div>
                            <div className="text-sm text-zinc-400 font-mono leading-snug">
                                {metric.label}
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
