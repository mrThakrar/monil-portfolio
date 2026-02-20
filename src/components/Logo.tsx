import React from "react";

export default function Logo({ className = "w-8 h-8", colored = true }: { className?: string, colored?: boolean }) {
    return (
        <svg
            className={className}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#0d9488" />
                </linearGradient>
            </defs>

            {/* Outer Hexagon */}
            <path
                d="M50 5 L90 28 L90 72 L50 95 L10 72 L10 28 Z"
                stroke={colored ? "url(#logo-gradient)" : "currentColor"}
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="drop-shadow-sm"
            />

            {/* Inner M */}
            <path
                d="M30 70 V35 L50 55 L70 35 V70"
                stroke={colored ? "url(#logo-gradient)" : "currentColor"}
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Node connecting dots */}
            <circle cx="30" cy="35" r="4" fill={colored ? "#10b981" : "currentColor"} />
            <circle cx="50" cy="55" r="4" fill={colored ? "#0d9488" : "currentColor"} />
            <circle cx="70" cy="35" r="4" fill={colored ? "#10b981" : "currentColor"} />
        </svg>
    );
}
