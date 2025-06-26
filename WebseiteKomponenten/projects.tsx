"use client";
import React from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';
import {Github, ExternalLink} from 'lucide-react';

export default function Projects() {
    const projects = [
        {
            title: "Portfolio Webseite",
            description: "bla bla",
            image: "/Portfolio.png",
            technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion", "HTML5"],
            github: "https://github.com/Hari-Gian/PortfolioWebseite",
            live: "https://portfolio-webseite-1.vercel.app/"
        },
        {
            title: "bla bla",
            description: "bla bla",
            image: "/project2.jpg",
            technologies: ["React", "Firebase", "Tailwind CSS"],
            github: "https://github.com/yourusername/project2",
            live: ""
        },
        {
            title: "bla bla",
            description: "bla bla",
            image: "/project3.jpg",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
            github: "https://github.com/yourusername/project3",
            live: ""
        }
    ];

    return (
        <div id="projects" className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-20"
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        <h2 className="text-5xl font-bold mb-3 text-white">Projects</h2>
                        <p className="text-white text-xl ">
                            A showcase of my professional work and technical expertise.
                        </p>
                    </motion.div>

                    {/* Projects List */}
                    <div className="space-y-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{opacity: 0, x: -20}}
                                whileInView={{opacity: 1, x: 0}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                                viewport={{once: true}}
                                className="group"
                            >
                                <div
                                    className="flex flex-col md:flex-row gap-8 p-8  border-2 border-white/25 hover:border-white/50 transition-all duration-300 relative bg-transparent backdrop-blur-sm rounded-xl shadow-lg shadow-black">
                                    {/* Project Image */}
                                    <div className="w-full md:w-1/3 relative">
                                        <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="object-cover transition-all duration-700 w-full h-full"
                                            />
                                            <div
                                                className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <div className="flex-grow">
                                        <div
                                            className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                            <div className="w-full">
                                                <h3 className="text-xl font-medium text-white mb-2">{project.title}</h3>
                                                <div className="h-[0.25] w-full bg-white mb-2"/>
                                                <div className="flex items-center gap-2 text-sm text-white">
                                                </div>
                                            </div>
                                            <div className="flex gap-5">
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white/75 hover:text-white transition-colors duration-300"
                                                >
                                                    <Github className="w-6 h-6"/>
                                                </a>
                                                {project.live && (
                                                    <a
                                                        href={project.live}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-white/75 hover:text-white transition-colors duration-300"
                                                    >
                                                        <ExternalLink className="w-6 h-6"/>
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <p className="text-white text-sm mb-5 leading-relaxed">{project.description}</p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-white/75 text-gray text-xs rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}