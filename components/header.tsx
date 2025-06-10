"use client";

import Link from 'next/link';
import React, { useState, useRef, useMemo } from 'react';
import { motion } from "framer-motion";

// Utility function for class names
const cn = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ');
};

// TextShimmer component
interface TextShimmerProps {
    children: React.ReactNode;
    as?: string;
    className?: string;
    duration?: number;
    spread?: number;
}

function TextShimmer({
    children,
    as: Component = 'h1',
    className = '',
    duration = 2,
    spread = 2,
}: TextShimmerProps) {
    const dynamicSpread = useMemo(() => {
        return typeof children === 'string' ? children.length * spread : 10 * spread;
    }, [children, spread]);

    return (
        <motion.h1
            className={cn(
                'relative inline-block bg-[length:250%_100%,auto] bg-clip-text',
                'text-transparent [--base-color:#a1a1aa] [--base-gradient-color:#000]',
                '[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))] [background-repeat:no-repeat,padding-box]',
                'font-bold text-4xl hover:scale-105 transition-transform duration-300 tracking-tight',
                className
            )}
            initial={{ backgroundPosition: '100% center', opacity: 0, scale: 0.95 }}
            animate={{ backgroundPosition: '0% center', opacity: 1, scale: 1 }}
            transition={{
                repeat: Infinity,
                duration,
                ease: 'linear',
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 }
            }}
            style={{
                // @ts-ignore
                '--spread': `${dynamicSpread}px`,
                backgroundImage: `var(--bg), linear-gradient(var(--base-color), var(--base-color))`,
            }}
        >
            {children}
        </motion.h1>
    );
}

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
            <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <a
                    href="#home"
                    className="hover:opacity-80 transition-opacity"
                >
                    <TextShimmer duration={4} spread={2}>
                        Hari Gian
                    </TextShimmer>
                </a>

                {/* Mobile toggle */}
                <button
                    onClick={handleNav}
                    className="sm:hidden p-2 z-20 text-white hover:text-pink-400 transition-colors"
                >
                    <div className={`w-6 h-0.5 mb-1 bg-current transition-all ${nav ? "rotate-45 translate-y-1.5" : ""}`} />
                    <div className={`w-6 h-0.5 mb-1 bg-current transition-all ${nav ? "opacity-0" : ""}`} />
                    <div className={`w-6 h-0.5 bg-current transition-all ${nav ? "-rotate-45 -translate-y-1.5" : ""}`} />
                </button>

                {/* Desktop Navigation */}
                <ul className="hidden sm:flex space-x-8">
                    {navItems.map(({ label, href }) => (
                        <li key={label}>
                            <a
                                href={href}
                                className="text-gray-300 hover:text-pink-400 transition-colors px-4 py-2 rounded-full hover:bg-gray-800/50"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu */}
            <div
                className={`sm:hidden fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                    nav ? "opacity-100 z-40" : "opacity-0 -z-10"
                }`}
            >
                <ul className="text-center space-y-12">
                    {navItems.map(({ label, href }) => (
                        <li key={label} onClick={handleNav}>
                            <a
                                href={href}
                                className="text-4xl text-gray-300 hover:text-pink-400 transition-colors"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
