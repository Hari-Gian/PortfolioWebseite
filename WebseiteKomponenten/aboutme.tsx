"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export default function AboutMe() {
    const programmingLanguages = [
        {
            name: "JavaScript",
            icon: "",
        },
        {
            name: "TypeScript",
            icon: "",
        },
        {
            name: "Python",
            icon: "",
        },
        {
            name: "Java",
            icon: "",
        },
        {
            name: "HTML/CSS",
            icon: "",
        },
        {
            name: "SQL",
            icon: "",
        },
        {
            name: "React",
            icon: "",
        },
        {
            name: "Node.js",
            icon: "",
        },
        {
            name: "Docker",
            icon: "",
        }
    ];

    const aboutSections = [
        {
            title: "My Journey",
            text: "Started coding at a young age, fascinated by how technology shapes our world. Every project is a new adventure in problem-solving.",
            image: "/coding-journey.jpg",
            imagePosition: "left"
        },
        {
            title: "What I Do",
            text: "I create web applications that are both beautiful and functional. My focus is on building responsive, user-friendly interfaces with clean code.",
            image: "/coding-work.jpg",
            imagePosition: "right"
        },
        {
            title: "My Approach",
            text: "I believe in continuous learning and staying up-to-date with the latest technologies. Every challenge is an opportunity to grow and improve.",
            image: "/coding-approach.jpg",
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
        <div id="about" className="min-h-screen text-white py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl font-bold mb-6 text-white">
                            About Me
                        </h2>
                    </motion.div>

                    {/* About Sections */}
                    <div className="grid grid-cols-1 gap-8 mb-20">
                        {aboutSections.map((section, index) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="relative rounded-lg p-6 bg-gradient-to-b from-black to-black/60 border border-white/75 transition-all duration-300">
                                    <div className={`flex flex-col md:flex-row items-center gap-8 ${section.imagePosition === 'right' ? 'md:flex-row-reverse' : ''}`}>
                                        <div className="w-full md:w-1/3">
                                            <div className="relative h-50 md:h-50 rounded-lg overflow-hidden border-2 border-white/50">
                                                <Image
                                                    src={section.image}
                                                    alt={section.title}
                                                    fill
                                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                                />
                                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </div>
                                        </div>
                                        <div className="w-full md:w-2/3">
                                            <h3 className="text-3xl font-bold mb-4 text-white border-b border-zinc-800 pb-2">
                                                {section.title}
                                            </h3>
                                            <p className="text-zinc-400 text-lg leading-relaxed">
                                                {section.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Programming Languages Grid */}
                    <div className="mb-20">
                        <h3 className="text-3xl font-bold mb-8 text-center text-white border-b border-white/75 pb-2 inline-block">
                            Programming Languages & Tools
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8">
                            {programmingLanguages.map((lang, index) => (
                                <motion.div
                                    key={lang.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group"
                                >
                                    <div className="relative bg-black rounded-lg p-4 text-center border border-white/50 hover:border-zinc-700 transition-all duration-300">
                                        <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">{lang.icon}</div>
                                        <div className="font-medium text-zinc-300 border-t border-zinc-800 pt-2 mt-2">{lang.name}</div>
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