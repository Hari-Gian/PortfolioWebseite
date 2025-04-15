"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [textColor, setTextColor] = useState('black');
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <div
      className={`fixed left-0 top-0 w-full z-10 ${isScrolled ? '' : 'border-b border-gray-200 bg-gray-50 shadow-sm'}`}
    >
      <div className={`max-w-[1240px] m-auto flex ${isScrolled ? 'justify-center' : 'justify-between'} items-center p-6`}>
        {!isScrolled && (
          <Link href="/">
            <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl hover:scale-105 transition-transform duration-300 tracking-tight">
              Hari Gian
            </h1>
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
        <div className={`hidden sm:block ${isScrolled ? 'bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg' : ''}`}>
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
