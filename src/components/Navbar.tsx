"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks, footerContent } from "../data/content";
import Logo from "./Logo";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "glass py-3 shadow-lg shadow-black/5 dark:shadow-black/20"
                : "bg-transparent py-5"
                }`}
        >
            <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="relative group flex items-center gap-2.5" id="nav-logo">
                    <Logo className="w-8 h-8 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
                    <span className="text-xl font-medium tracking-wide flex items-center gap-1.5">
                        <span className="text-zinc-900 dark:text-white transition-colors">{footerContent.logo.highlight}</span>
                        <span className="text-zinc-500 dark:text-zinc-400 font-light group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                            {footerContent.logo.rest}
                        </span>
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300" />
                </a>

                {/* Desktop links & Theme Toggle */}
                <div className="hidden md:flex items-center gap-4">
                    <ul className="flex items-center gap-1 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-zinc-200/50 dark:border-zinc-800/50">
                        {navLinks.desktop.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="relative px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4 pl-2 border-l border-zinc-200 dark:border-zinc-800">
                        <ThemeToggle />
                        <a
                            href="#contact"
                            className="px-5 py-2.5 text-sm font-medium rounded-full bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
                            id="nav-hire-btn"
                        >
                            Let&apos;s Talk
                        </a>
                    </div>
                </div>

                {/* Mobile toggle */}
                <div className="flex md:hidden items-center gap-4">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors p-2"
                        id="nav-mobile-toggle"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden glass-light border-t border-zinc-200/50 dark:border-zinc-800/50"
                        id="nav-mobile-menu"
                    >
                        <ul className="px-6 py-4 grid grid-cols-2 gap-2">
                            {navLinks.mobile.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={() => setIsMobileOpen(false)}
                                        className="block py-3 px-4 rounded-xl text-zinc-600 dark:text-zinc-400 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm font-medium"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
