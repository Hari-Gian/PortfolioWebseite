"use client";
import React, {useState} from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';
import {FaPython, FaJs, FaHtml5, FaCss3Alt, FaJava, FaReact, FaDocker, FaAws} from 'react-icons/fa';
import {SiNextdotjs, SiTailwindcss, SiMysql, SiMongodb, SiTypescript} from 'react-icons/si';
import {IconType} from 'react-icons';

interface Tech {
    name: string;
    icon: IconType;
    color: string;
}

interface Categories {
    [key: string]: Tech[];
}

export default function AboutMe() {
    const aboutSections = [
        {
            title: "Unihockey",
            text: "Ich spiele Unihockey seit fast 10 Jahren und gehe seitdem regelmässig zwei- bis drei mal pro Woche ins Training. " +
                "Ich liebe diesen Sport, da ich es mir spass macht und auch anstrengend  und herausfordernd ist. ",
            image: "/UnihockeyBild.png",
            imagePosition: "left"
        },
        {
            title: "Gym",
            text: "Ich gehe ein- bis zweimal pro Woche neben dem Unihockey ins Fitnessstudio. Dabei trainiere ich meistens mit Freunden, sodass wir uns gegenseitig unterstützen und motivieren können.",
            image: "/GymBild.jpg",
            imagePosition: "left"
        },
        {
            title: "Mit Freunden etwas unternehmen",
            text: "In meiner Freizeit treffe ich mich oft mit Freunden, zum Beispiel zum Wandern, da mir soziale Kontakte wichtig sind.",
            image: "/SozialBild.jpg",
            imagePosition: "left"
        }
    ];

    const technologies: Tech[] = [
        {name: 'HTML5', icon: FaHtml5, color: '#E34F26'},
        {name: 'CSS3', icon: FaCss3Alt, color: '#1572B6'},
        {name: 'JavaScript', icon: FaJs, color: '#F7DF1E'},
        {name: 'TypeScript', icon: SiTypescript, color: '#3178C6'},
        {name: 'React', icon: FaReact, color: '#61DAFB'},
        {name: 'Next.js', icon: SiNextdotjs, color: '#000000'},
        {name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4'},
        {name: 'Python', icon: FaPython, color: '#3776AB'},
        {name: 'Java', icon: FaJava, color: '#007396'},
        {name: 'MySQL', icon: SiMysql, color: '#4479A1'},
        {name: 'MongoDB', icon: SiMongodb, color: '#47A248'},
        {name: 'Docker', icon: FaDocker, color: '#2496ED'},
        {name: 'AWS', icon: FaAws, color: '#FF9900'},
    ];

    return (
        <div id="about" className="min-h-screen text-black py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl font-bold mb-6 text-white">
                            About Me
                        </h2>
                    </motion.div>

                    {/* About Sections */}
                    <div className="space-y-20 mb-20">
                        {aboutSections.map((section, index) => (
                            <motion.div
                                key={section.title}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: index * 0.2}}
                                viewport={{once: true}}
                                className="group max-w-4xl mx-auto"
                            >
                                <div className="relative">
                                    {/* Main Content */}
                                    <div
                                        className="relative bg-transparent rounded-xl overflow-hidden border-2 border-white/25 shadow-lg shadow-black">
                                        <div
                                            className={`flex flex-col ${section.imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                            {/* Section Image */}
                                            <div className="w-full md:w-1/3 relative">
                                                <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
                                                    <img
                                                        src={section.image}
                                                        alt={section.title}
                                                        className="object-cover transition-all duration-700 w-full h-full"
                                                    />
                                                    <div
                                                        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
                                                </div>
                                            </div>
                                            {/* Section Info */}
                                            <div className="w-full md:w-2/3 p-9 flex flex-col justify-center relative">
                                                <div
                                                    className="absolute top-1/2 -translate-y-1/2 left-0 w-1 h-full bg-gradient-to-b from-white to-white/10"></div>
                                                <div className="mb-5">
                                                    <h3 className="text-2xl font-bold text-white mb-3">
                                                        {section.title}
                                                    </h3>
                                                    <div className="w-100 h-0.25 bg-white"></div>
                                                </div>
                                                <p className="text-white/90 text-base leading-relaxed tracking-wide">
                                                    {section.text}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* programmiersprachen */}
                    <div className="mb-12">
                        <h3 className="text-xl font-bold mb-4 text-center text-white border-b border-white pb-2 w-full">
                            Programming Languages & Tools
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 max-w-4xl mx-auto">
                            {technologies.map((tech, index) => {
                                const Icon = tech.icon;
                                return (
                                    <motion.div
                                        key={tech.name}
                                        initial={{opacity: 0, y: 20}}
                                        whileInView={{opacity: 1, y: 0}}
                                        transition={{duration: 0.3, delay: index * 0.1}}
                                        viewport={{once: true}}
                                        className="bg-transparent rounded-lg p-4 flex flex-col items-center justify-center shadow-lg shadow-black/50 border-1 border-white/25"
                                    >
                                        <Icon className="w-8 h-8 mb-2 text-white "
                                        />
                                        <span className="text-white text-sm font-medium">
                                            {tech.name}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}