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
      initial={{ backgroundPosition: '100% center' }}
      animate={{ backgroundPosition: '0% center' }}
      transition={{
        repeat: Infinity,
        duration,
        ease: 'linear',
      }}
      style={{
        // @ts-ignore - Custom CSS variable
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
  const [textColor, setTextColor] = useState('black');
  const [isScrolled, setIsScrolled] = useState(false);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 10) { // Very small threshold for immediate effect
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
          if (!ref.current) return;

          const { width } = ref.current.getBoundingClientRect();
          setPosition({
            width,
            opacity: 1,
            left: ref.current.offsetLeft,
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
        animate={position}
        className="absolute z-0 h-10 rounded-full bg-black md:h-12"
      />
    );
  };

  return (
    <div
      className={`fixed left-0 top-0 w-full z-10 ${isScrolled ? '' : 'border-b border-gray-200 bg-gray-50 shadow-sm'}`}
    >
      <div className={`max-w-[1240px] m-auto flex ${isScrolled ? 'justify-center' : 'justify-between'} items-center p-6`}>
        {!isScrolled && (
          <Link href="/">
            <TextShimmer duration={3} spread={1.5} className="">
              Hari Gian
            </TextShimmer>
          </Link>
        )}

        {/* Mobile Menu Button */}
        {!isScrolled && (
          <div onClick={handleNav} className="sm:hidden cursor-pointer z-20 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <div className={`w-6 h-0.5 ${textColor === 'black' ? 'bg-black' : 'bg-[#1a365d]'} transition-all duration-300 ${nav ? 'rotate-45 translate-y-1' : ''}`}></div>
            <div className={`w-6 h-0.5 ${textColor === 'black' ? 'bg-black' : 'bg-[#1a365d]'} my-1 transition-all duration-300 ${nav ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 ${textColor === 'black' ? 'bg-black' : 'bg-[#1a365d]'} transition-all duration-300 ${nav ? '-rotate-45 -translate-y-1' : ''}`}></div>
          </div>
        )}

        {/* Desktop Menu */}
        {!isScrolled ? (
          <div className="hidden sm:block">
            <ul style={{ color: `${textColor}` }} className="flex space-x-6">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Projects', href: '#projects' },
                { label: 'About Me', href: '#aboutme' },
                { label: 'Contact', href: '#contact' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href}>
                    <button className="relative group px-6 py-2.5 overflow-hidden rounded-full">
                      <span className="relative z-10 text-lg font-medium tracking-wide" style={{ color: textColor }}>
                        {label}
                      </span>
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500/10 to-purple-600/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                      <span className="absolute inset-0 w-full h-full border border-purple-500/20 rounded-full group-hover:border-purple-500/40 transition-colors duration-300"></span>
                      <span className="absolute inset-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300 bottom-0 left-0"></span>
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="hidden sm:block">
            <ul
              className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white px-2 py-1"
              onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
            >
              <Tab href="#home">Home</Tab>
              <Tab href="#projects">Projects</Tab>
              <Tab href="#aboutme">About Me</Tab>
              <Tab href="#contact">Contact</Tab>
              <Cursor position={position} />
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? 'sm:hidden fixed top-0 left-0 w-full h-screen bg-gray-50/95 backdrop-blur-sm flex justify-center items-center ease-in duration-300 z-10'
            : 'sm:hidden fixed top-0 left-[-100%] w-full h-screen bg-gray-50/95 backdrop-blur-sm flex justify-center items-center ease-in duration-300 z-10'
        }
      >
        <ul className="text-center space-y-8">
          {[
            { label: 'Home', href: '#home' },
            { label: 'Projects', href: '#projects' },
            { label: 'About Me', href: '#aboutme' },
            { label: 'Contact', href: '#contact' },
          ].map(({ label, href }) => (
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-purple-500 cursor-pointer transition-colors duration-300"
              style={{ color: textColor }}
              key={label}
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
