"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import {
    Mail,
    Linkedin,
    Github,
    FileDown,
    ArrowUpRight,
    Send,
    Terminal,
} from "lucide-react";
import { contactInfo } from "../data/content";

export default function Contact() {
    const [hoverState, setHoverState] = useState(false);

    return (
        <section
            id="contact"
            className="relative py-28 bg-white dark:bg-transparent overflow-hidden"
        >
            <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-10 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <AnimatedSection>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-px w-12 bg-emerald-500" />
                                <span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm tracking-wider uppercase">
                                    Next Steps
                                </span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-white mb-6 tracking-tight">
                                Let&apos;s Build Something <br />
                                <span className="gradient-text">Exceptional</span>
                            </h2>
                            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-10 max-w-lg">
                                Whether you are scaling an existing platform or architecting a
                                new microservice ecosystem from scratch, I&apos;m ready to
                                engineer the solution.
                            </p>

                            {/* Terminal Contact Window */}
                            <div className="w-full rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl mb-10 group hover:border-emerald-500/50 transition-colors duration-500">
                                <div className="bg-zinc-950 px-4 py-3 flex items-center gap-2 border-b border-zinc-800">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    <span className="ml-2 font-mono text-xs text-zinc-500 flex items-center gap-2">
                                        <Terminal size={12} /> setup-contact.sh
                                    </span>
                                </div>
                                <div className="p-6 font-mono text-sm leading-loose">
                                    <div className="text-emerald-400">$ whoami</div>
                                    <div className="text-zinc-300 mb-4">
                                        Monil Thakrar - Senior Backend Engineer
                                    </div>

                                    <div className="text-emerald-400">$ cat contact.json</div>
                                    <div className="text-zinc-300">
                                        <span className="text-blue-400">&#123;</span>
                                        <br />
                                        &nbsp;&nbsp;
                                        <span className="text-teal-300">
                                            &quot;email&quot;
                                        </span>:{" "}
                                        <a
                                            href="mailto:monil.thakrar.work@gmail.com"
                                            className="text-amber-300 hover:underline"
                                        >
                                            &quot;Monil.Thakrar.work@gmail.com&quot;
                                        </a>
                                        ,<br />
                                        &nbsp;&nbsp;
                                        <span className="text-teal-300">
                                            &quot;status&quot;
                                        </span>:{" "}
                                        <span className="text-amber-300">
                                            &quot;Available for opportunities&quot;
                                        </span>
                                        <br />
                                        <span className="text-blue-400">&#125;</span>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                    <AnimatedSection delay={0.2} direction="left">
                        <div className="glass shadow-2xl rounded-3xl p-8 sm:p-12 relative overflow-hidden group border border-zinc-200 dark:border-zinc-800">
                            {/* Dynamic hover glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <Send
                                className="text-emerald-500 mb-8 w-12 h-12"
                                strokeWidth={1.5}
                            />

                            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-8">
                                Initiate Handshake
                            </h3>

                            <div className="flex flex-col gap-4">
                                <motion.a
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onMouseEnter={() => setHoverState(true)}
                                    onMouseLeave={() => setHoverState(false)}
                                    className="relative overflow-hidden w-full group/btn flex items-center justify-between px-8 py-5 bg-zinc-900 dark:bg-zinc-800 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
                                >
                                    {/* Sweep hover effect */}
                                    <div className="absolute inset-0 bg-emerald-600 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300 ease-out z-0 pointer-events-none" />
                                    <span className="relative z-10 flex items-center gap-3 text-lg">
                                        <Mail size={20} />
                                        Email Me Directly
                                    </span>
                                    <ArrowUpRight
                                        size={24}
                                        className={`relative z-10 transition-transform duration-300 ${hoverState ? "translate-x-1 -translate-y-1 text-white" : "text-zinc-500"}`}
                                    />
                                </motion.a>

                                <div className="grid grid-cols-2 gap-4">
                                    <motion.a
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        href="https://linkedin.com/in/monilthakrar"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-center gap-3 p-4 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl font-semibold text-zinc-700 dark:text-zinc-300 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-colors group/social"
                                    >
                                        <Linkedin size={20} className="text-blue-500" />
                                        LinkedIn
                                    </motion.a>

                                    <motion.a
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        href="https://github.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-center gap-3 p-4 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl font-semibold text-zinc-700 dark:text-zinc-300 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-colors group/social"
                                    >
                                        <Github
                                            size={20}
                                            className="text-zinc-900 dark:text-white"
                                        />
                                        GitHub
                                    </motion.a>
                                </div>

                                <a
                                    href={contactInfo.resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 flex items-center justify-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
                                >
                                    <FileDown size={16} />
                                    Download Complete Resume (PDF)
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
