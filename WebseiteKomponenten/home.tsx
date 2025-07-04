"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center text-white relative">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Profile Picture */}
                    <motion.div
                        className="mb-8"
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.5}}
                    >
                        <div className="relative w-60 h-60 mx-auto rounded-full overflow-hidden border-4 border-white">
                            <div className="absolute inset-0 bg-black/10"></div>
                            <div className="relative w-full h-full flex items-center justify-center text-white">
                                <span className="text-4xl "></span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Introduction Text */}
                    <motion.div
                        className="space-y-6"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white">
                            Hari Gian
                        </h1>
                        <h2 className="text-2xl text-white/80">
                            Schüler an der Informatikmittelschule (IMS)
                        </h2>
                        <p className="text-white/65 max-w-2xl text-xl mx-auto">
                            Ich bin 17 Jahre alt, gehe aktuell an die IMS und interessiere mich besonders für
                            Fullstack-Entwicklung und vieles mehr.
                        </p>
                    </motion.div>

                    {/* Down Arrow */}
                    <motion.div
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{
                            duration: 1,
                            delay: 0.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            repeatDelay: 0.1
                        }}
                    >
                        <a href="#about" className="text-white/75 hover:text-black/50 transition-colors">
                            <ArrowDown className="w-10 h-10"/>
                        </a>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
