"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-10 h-10 rounded-full border border-zinc-200/50 dark:border-zinc-800 flex items-center justify-center p-2" />;
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative w-10 h-10 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-colors"
            aria-label="Toggle theme"
        >
            <div className="relative w-5 h-5 flex items-center justify-center">
                <motion.div
                    initial={false}
                    animate={{ scale: isDark ? 0 : 1, opacity: isDark ? 0 : 1, rotate: isDark ? -90 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute"
                >
                    <Sun size={20} className="text-amber-500" />
                </motion.div>
                <motion.div
                    initial={false}
                    animate={{ scale: isDark ? 1 : 0, opacity: isDark ? 1 : 0, rotate: isDark ? 0 : 90 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute"
                >
                    <Moon size={20} className="text-emerald-400" />
                </motion.div>
            </div>
        </button>
    );
}
