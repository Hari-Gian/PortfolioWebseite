"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export default function AboutMe() {
    const programmingLanguages = [
        {
            name: "JavaScript",
            image: "/Pictures/javascript.png",
        },
        {
            name: "TypeScript",
            image: "/tech/typescript.png",
        },
        {
            name: "Python",
            image: "/tech/python.png",
        },
        {
            name: "Java",
            image: "/tech/java.png",
        },
        {
            name: "HTML/CSS",
            image: "/tech/html-css.png",
        },
        {
            name: "SQL",
            image: "/tech/sql.png",
        },
        {
            name: "React",
            image: "/tech/react.png",
        },
        {
            name: "Node.js",
            image: "/tech/nodejs.png",
        },
        {
            name: "Docker",
            image: "/tech/docker.png",
        }
    ];

    const aboutSections = [
        {
            title: "My Journey",
            text: "Started coding at a young age, fascinated by how technology shapes our world. Every project is a new adventure in problem-solving.",
            image: "/about/journey.jpg",
            imagePosition: "left"
        },
        {
            title: "What I Do",
            text: "I create web applications that are both beautiful and functional. My focus is on building responsive, user-friendly interfaces with clean code.",
            image: "/about/work.jpg",
            imagePosition: "right"
        },
        {
            title: "My Approach",
            text: "I believe in continuous learning and staying up-to-date with the latest technologies. Every challenge is an opportunity to grow and improve.",
            image: "/about/approach.jpg",
            imagePosition: "left"
        }
    ];

    const socialLinks = [
        {
            icon: <Github className="w-6 h-6" />,
            href: "https://github.com/yourusername",
            label: "GitHub"
        },
        {
            icon: <Linkedin className="w-6 h-6" />,
            href: "https://linkedin.com/in/yourusername",
            label: "LinkedIn"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            href: "mailto:your.email@example.com",
            label: "Email"
        }
    ];

    return (
        <div id="about" className="min-h-screen text-black py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl font-bold mb-6 text-black">
                            About Me
                        </h2>
                    </motion.div>

                    {/* About Sections */}
                    <div className="grid grid-cols-1 gap-8 mb-20">
                        {aboutSections.map((section, index) => (
                            <motion.div
                                key={section.title}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: index * 0.2}}
                                viewport={{once: true}}
                                className="group"
                            >
                                <div className="relative rounded-lg p-5 max-w-5xl mx-auto bg-white shadow-lg border border-black/10 hover:border-black/20 transition-all duration-300">
                                    <div className={`flex flex-col md:flex-row items-center gap-7 ${section.imagePosition === 'right' ? 'md:flex-row-reverse' : ''}`}>
                                        <div className="w-full md:w-1/3">
                                            <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden border-2 border-black/10">
                                                <Image
                                                    src={section.image}
                                                    alt={section.title}
                                                    fill
                                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full md:w-2/3">
                                            <h3 className="text-3xl font-bold mb-4 text-black border-b border-black/10 pb-2">
                                                {section.title}
                                            </h3>
                                            <p className="text-black/70 text-lg leading-relaxed">
                                                {section.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Programming Languages Grid */}
                    <div className="mb-12">
                        <h3 className="text-lg font-bold mb-4 text-center text-black border-b border-black/10 pb-2 inline-block">
                            Programming Languages & Tools
                        </h3>
                        <div className="grid grid-cols-5 gap-3 mt-4 max-w-3xl mx-auto">
                            {programmingLanguages.map((lang, index) => (
                                <motion.div
                                    key={lang.name}
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{duration: 0.3, delay: index * 0.1}}
                                    viewport={{ once: true }}
                                    className="group"
                                >
                                    <div className="relative bg-black rounded-sm aspect-square p-2 text-center shadow-sm hover:shadow-lg border border-black/10 hover:border-black/20 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center overflow-hidden">
                                        <motion.div
                                            className="relative w-7 h-7"
                                            whileHover={{ scale: 1.2 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Image
                                                src={lang.image}
                                                alt={lang.name}
                                                fill
                                                className="object-contain invert"
                                            />
                                        </motion.div>
                                        <motion.div
                                            className="absolute inset-0 bg-black/95 flex items-center justify-center"
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            transition={{ duration: 0.15, ease: "easeOut" }}
                                        >
                                            <motion.span
                                                className="font-medium text-white text-[11px] leading-tight"
                                                initial={{ scale: 0.8, opacity: 0 }}
                                                whileHover={{ scale: 1, opacity: 1 }}
                                                transition={{ duration: 0.2, delay: 0.05 }}
                                            >
                                                {lang.name}
                                            </motion.span>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 