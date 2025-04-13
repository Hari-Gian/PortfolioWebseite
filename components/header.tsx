"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false); // Zustand für das mobile Menü
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav); // Toggle für das mobile Menü
  };

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
          Hari Gian
        </h1>

        {/* Desktop Menu */}
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex space-x-4">
          {[
            { label: 'Home', href: '#home' },
            { label: 'Projects', href: '#projects' },
            { label: 'About Me', href: '#aboutme' },
            { label: 'Contact', href: '#contact' },
          ].map(({ label, href }) => (
            <li key={label}>
              <Link href={href}>
                <button className="whitespace-nowrap bg-purple-500 text-white font-semibold text-lg px-6 py-2 rounded-full shadow-md hover:bg-purple-600 hover:border-2 hover:border-purple-700 transition duration-150 ease-in-out transform hover:scale-105">
                  {label}
                </button>
              </Link>
            </li>
          ))}
        </ul>


        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            {[
              { label: 'Home', href: '#home' },
              { label: 'Projects', href: '#projects' },
              { label: 'About Me', href: '#aboutme' },
              { label: 'Contact', href: '#contact' },
            ].map(({ label, href }) => (
              <li
                onClick={handleNav} // Menü nach Klick schließen
                className="p-4 text-4xl hover:text-gray-500"
                key={label}
              >
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
