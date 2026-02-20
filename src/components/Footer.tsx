"use client";

import { Heart, ArrowUp } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { footerContent } from "../data/content";
import Logo from "./Logo";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">

                    {/* Logo */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="flex items-center gap-2.5">
                            <Logo className="w-8 h-8 drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
                            <span className="text-xl font-medium tracking-wide flex items-center gap-1.5">
                                <span className="text-zinc-900 dark:text-white">{footerContent.logo.highlight}</span>
                                <span className="text-zinc-500 dark:text-zinc-400 font-light">{footerContent.logo.rest}</span>
                            </span>
                        </div>
                        <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest font-semibold">
                            {footerContent.subtitle}
                        </span>
                    </div>

                    {/* Social icons */}
                    <div className="flex items-center justify-center gap-4">
                        {footerContent.socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith("http") ? "_blank" : undefined}
                                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                                aria-label={link.label}
                            >
                                <link.icon size={20} strokeWidth={2} />
                            </a>
                        ))}
                    </div>

                    {/* Controls */}
                    <div className="flex flex-col md:items-end items-center gap-4">
                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                            <button
                                onClick={scrollToTop}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                                aria-label="Scroll to top"
                            >
                                <ArrowUp size={20} />
                            </button>
                        </div>
                        <p className="text-xs text-zinc-500 font-mono flex items-center gap-1">
                            © {new Date().getFullYear()} {footerContent.copyrightName}. Engineered with
                            <Heart size={12} className="text-emerald-500 fill-emerald-500" />
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
}
