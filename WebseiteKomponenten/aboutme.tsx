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

    const technologiesFilter = [
        {name: 'HTML5', icon: FaHtml5, category: "Frontend"},
        {name: 'CSS3', icon: FaCss3Alt, category: "Frontend"},
        {name: 'JavaScript', icon: FaJs, category: "Frontend"},
        {name: 'TypeScript', icon: SiTypescript, category: "Frontend"},
        {name: 'React', icon: FaReact, category: "Frontend"},
        {name: 'Next.js', icon: SiNextdotjs, category: "Frontend"},
        {name: 'Tailwind CSS', icon: SiTailwindcss, category: "Frontend"},
        {name: 'Python', icon: FaPython, category: "Backend"},
        {name: 'Java', icon: FaJava, category: "Backend"},
        {name: 'MySQL', icon: SiMysql, category: "Database"},
        {name: 'MongoDB', icon: SiMongodb, category: "Database"},
        {name: 'Docker', icon: FaDocker, category: "DevOps"},
        {name: 'AWS', icon: FaAws, category: "DevOps"},
    ]

    // Zustand für Filter
    const [filter, setFilter] = useState("All");
    const categories = ["All", "Frontend", "Backend", "Database", "DevOps"];

    // Gefilterte Technologien
    const filteredTechnologies =
        filter === "All"
            ? technologiesFilter
            : technologiesFilter.filter((tech) => tech.category === filter);

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
                                    <div
                                        className="relative bg-transparent rounded-xl overflow-hidden border-2 border-white/25 hover:border-white/50 shadow-lg shadow-black">
                                        <div
                                            className={`flex flex-col ${section.imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
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

                    {/* Gefilterte Technologien */}
                    <div className="mb-12">
                        <h3 className="text-xl font-semibold text-center text-white border-b border-white/75 pb-1 w-fit mx-auto">
                            Programming Languages & Tools
                        </h3>

                        <div className="flex justify-center mt-6 mb-12">
                            <select
                                className="bg-transparent border border-white/50 text-white px-4 py-2 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                            >
                                {categories.map((cat) => (
                                    <option
                                        key={cat}
                                        value={cat}
                                        className="bg-black text-white"
                                    >
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </div>


                        <div
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 max-w-4xl mx-auto w-full">
                            {filteredTechnologies.map((tech, index) => {
                                const Icon = tech.icon;
                                return (
                                    <motion.div
                                        key={tech.name}
                                        initial={{opacity: 0, y: 20}}
                                        whileInView={{opacity: 1, y: 0}}
                                        transition={{duration: 0.3, delay: index * 0.1}}
                                        viewport={{once: true}}
                                        className="bg-transparent rounded-lg p-4 flex flex-col items-center justify-center shadow-lg shadow-black/50 border border-white/25 hover:border-white transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1"
                                    >
                                        <Icon className="w-8 h-8 mb-2 text-white"/>
                                        <span className="text-white text-sm font-medium">
                                            {tech.name}
                                        </span>
                                    </motion.div>
                                )
                                    ;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
