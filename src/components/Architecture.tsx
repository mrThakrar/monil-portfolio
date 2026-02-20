"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { architectureContent } from "../data/content";

export default function Architecture() {
    return (
        <section id="architecture" className="relative py-28 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
            <div className="absolute inset-0 bg-dot-pattern opacity-30 dark:opacity-10" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <AnimatedSection>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-12 bg-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm tracking-wider uppercase">
                            {architectureContent.badge}
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                        {architectureContent.heading.line1} <span className="gradient-text">{architectureContent.heading.highlight}</span>
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mb-16 text-lg">
                        {architectureContent.description}
                    </p>
                </AnimatedSection>

                <div className="grid lg:grid-cols-2 gap-10">
                    {architectureContent.diagrams.map((diagram, i) => (
                        <AnimatedSection key={diagram.title} delay={i * 0.2}>
                            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-2xl hover:border-emerald-500/30 dark:hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-500 group">
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{diagram.title}</h3>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{diagram.description}</p>
                                </div>

                                {/* Abstract Diagram UI */}
                                <div className="relative w-full aspect-[4/3] bg-zinc-50 dark:bg-[#09090b] rounded-2xl border border-zinc-100 dark:border-zinc-800/50 overflow-hidden">
                                    <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-20" />

                                    {/* SVG Edges */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                                        <defs>
                                            <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                                                <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
                                            </linearGradient>
                                        </defs>
                                        <g className="opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                                            {diagram.edges.map((edge, j) => {
                                                const from = diagram.nodes[edge.from];
                                                const to = diagram.nodes[edge.to];
                                                // Approximations for simple straight lines
                                                return (
                                                    <motion.line
                                                        key={j}
                                                        x1={`calc(${from.x} + 20px)`}
                                                        y1={`calc(${from.y} + 20px)`}
                                                        x2={`calc(${to.x} + 20px)`}
                                                        y2={`calc(${to.y} + 20px)`}
                                                        stroke="url(#edgeGradient)"
                                                        strokeWidth="2"
                                                        strokeDasharray="4 4"
                                                        initial={{ pathLength: 0 }}
                                                        whileInView={{ pathLength: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1.5, delay: 0.5 + j * 0.2 }}
                                                    />
                                                );
                                            })}
                                        </g>
                                    </svg>

                                    {/* DOM Nodes */}
                                    {diagram.nodes.map((node, j) => (
                                        <motion.div
                                            key={j}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.2 + (j * 0.1) }}
                                            className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
                                            style={{ left: node.x, top: node.y, zIndex: 2 }}
                                        >
                                            <div className={`w-3 h-3 rounded-full ${node.highlight ? "bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] ring-4 ring-emerald-500/20" : "bg-zinc-400 dark:bg-zinc-600"}`} />
                                            <span className="text-[10px] font-mono whitespace-nowrap bg-white/80 dark:bg-zinc-900/80 backdrop-blur px-2 py-1 rounded text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800">
                                                {node.label}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
