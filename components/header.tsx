"use client";

import Link from 'next/link';
import React, { useState, useEffect, useRef, useMemo } from 'react';
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
    const [textColor, setTextColor] = useState('#000000');
    const [isScrolled, setIsScrolled] = useState(false);
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 10) {
                setTextColor('#1a365d');
                setIsScrolled(true);
            } else {
                setTextColor('black');
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', changeColor);
        return () => {
            window.removeEventListener('scroll', changeColor);
        };
    }, []);

    const handleNav = () => {
        setNav(!nav);
    };

    interface TabProps {
        children: React.ReactNode;
        href: string;
    }

    const Tab = ({ children, href }: TabProps) => {
        const ref = useRef<HTMLLIElement>(null);

        return (
            <li
                ref={ref}
                onMouseEnter={() => {
                    if (!ref.current || !ref.current.parentElement) return;
                    const parentRect = ref.current.parentElement.getBoundingClientRect();
                    const rect = ref.current.getBoundingClientRect();

                    setPosition({
                        left: rect.left - parentRect.left,
                        width: rect.width,
                        opacity: 1,
                    });
                }}
                className="relative z-10 block cursor-pointer px-3 py-1.5 text-sm uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
            >
                <Link href={href}>{children}</Link>
            </li>
        );
    };

    interface CursorProps {
        position: {
            left: number;
            width: number;
            opacity: number;
        };
    }

    const Cursor = ({ position }: CursorProps) => {
        return (
            <motion.li
                initial={{ width: 0, left: 0, opacity: 0 }}
                animate={{
                    left: position.left,
                    width: position.width,
                    opacity: position.opacity,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute z-0 h-10 rounded-full bg-black md:h-12"
                style={{ top: '50%', transform: 'translateY(-50%)' }}
            />
        );
    };

    const navItems = [
        { label: "Home", href: "#home", duration: 4, spread: 2 },
        { label: "Projects", href: "#projects", duration: 4, spread: 2 },
        { label: "About Me", href: "#aboutme", duration: 4, spread: 2 },
        { label: "Contact", href: "#contact", duration: 4, spread: 2 },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-10 ${!isScrolled && "bg-black border-b shadow-sm "}`}>
            <div
                className={`max-w-6xl mx-auto flex items-center ${isScrolled ? "justify-center" : "justify-between"} p-6`}>
                {/* Logo */}
                {!isScrolled && (
                    <a
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = "/";
                        }}
                    >
                        <TextShimmer duration={3} spread={1.5}>
                            Hari Gian
                        </TextShimmer>
                    </a>

                )}

                {/* Mobile toggle */}
                {!isScrolled && (
                    <button onClick={handleNav} className="sm:hidden p-2 z-20">
                    <div
                            className={`w-6 h-0.5 mb-1 bg-current transition-all ${nav ? "rotate-45 translate-y-1.5" : ""}`}/>
                        <div className={`w-6 h-0.5 mb-1 bg-current transition-all ${nav ? "opacity-0" : ""}`}/>
                        <div
                            className={`w-6 h-0.5 bg-current transition-all ${nav ? "-rotate-45 -translate-y-1.5" : ""}`}/>
                    </button>
                )}

                {/* Desktop Navigation */}
                <div className="hidden sm:block">
                    {isScrolled ? (
                        <ul
                            className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white px-4 py-2"
                            onMouseLeave={() => setPosition((pv) => ({...pv, opacity: 0}))}
                        >
                            {navItems.map(({label, href}) => (
                                <Tab key={label} href={href}>{label}</Tab>
                            ))}
                            <Cursor position={position}/>
                        </ul>
                    ) : (
                        <ul className="flex space-x-8" style={{color: textColor}}>
                            {navItems.map(({label, href, duration, spread}) => (
                                <li key={label} className="px-2">
                                    <Link href={href}>
                                        <span className="inline-block px-6 py-2 rounded-full hover:bg-gray-300 hover:text-white transition-all duration-300 ease-in-out">
                                            <TextShimmer
                                                duration={duration}
                                                spread={spread}
                                                className="text-[1.5rem] font-bold"
                                            >
                                                {label}
                                            </TextShimmer>
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>


            {/* Mobile Menu */}
            <div
                className={`sm:hidden fixed inset-0 bg-gray-50/95 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${nav ? "opacity-100 z-10" : "opacity-0 -z-10"}`}>
                <ul className="text-center space-y-12">
                    {navItems.map(({label, href, duration, spread}) => (
                        <li key={label} onClick={handleNav} className="hover:text-purple-500 transition-colors py-3">
                            <Link href={href}>
                                <TextShimmer
                                    duration={duration}
                                    spread={spread}
                                    className="text-5xl font-medium"
                                >
                                    {label}
                                </TextShimmer>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
