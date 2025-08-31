"use client";
import React from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';
import {Github, ExternalLink} from 'lucide-react';

export default function Projects() {
    const projects = [
        {
            title: "Portfolio Webseite",
            description: "Dies ist meine persönliche Portfolio-Webseite, auf der ich mich und meine Projekte präsentiere. Entwickelt habe ich sie" +
                " mit Next.js, Tailwind CSS, HTML und JavaScript und gehostet über Vercel.",
            image: "/Portfolio.png",
            technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion", "HTML5"],
            github: "https://github.com/Hari-Gian/PortfolioWebseite",
            live: "https://harigian.com"
        },
        {
            title: "NoteTrack (1. Platz beim KSH Hackathon)",
            description: "NoteTrack ist eine Webanwendung, die Schüler:innen hilft, ihre Prüfungen und Noten im Blick zu behalten." +
                        " Man trägt Prüfungen ein und bekommt Erinnerungen, um Noten einzutragen. So behält man leicht den Überblick über seine Noten.",
            image: "/NoteTrack.png",
            technologies: ["TypeScript", "JavaScript", "Tailwind CSS"],
            github: "https://github.com/danielecitran/NoteTrack",
            live: "https://note-track-deploy.vercel.app"
        },
        {
            title: "PRWR Facharbeit",
            description: "Dieses Gruppenprojekt entstand im Rahmen eines Schulauftrags und vergleicht Start-ups in Zürich " +
                "mit dem Silicon Valley. Die Website wurde mit HTML, Tailwind CSS und JavaScript umgesetzt und erhielt dank" +
                " ihrer Umsetzung und der ausführlichen Dokumentation die Note 5.5.",
            image: "/PRWRFacharbeit.png",
            technologies: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
            github: "https://github.com/Hari-Gian/PRWR_Facharbeit",
            live: "https://start-up-szene-zh-vs-sv.vercel.app/"
        },
        {
            title: "Login System",
            description: "LoginSystem ist ein einfaches Webprojekt, das die Benutzeranmeldung und -authentifizierung ermöglicht." +
                " Es verwendet Node.js und Express für das Backend, HTML, CSS und JavaScript für die Benutzeroberfläche sowie" +
                " MySQL (über XAMPP) als Datenbank ",
            image: "/LoginSystem.png",
            technologies: ["HTML5", "CSS", "JavaScript", "Node.js", "MySql"],
            github: "https://github.com/Hari-Gian/LoginSystem",
            live: ""
        },
        {
            title: "Wetter Webseite",
            description: "Eine Wetter-Website, die aktuelle Wetterdaten anzeigt, entwickelt mit HTML, CSS, Python und Flask.",
            image: "/WetterBild.png",
            technologies: ["HTML5", "CSS", "Python", "Flask"],
            github: "https://github.com/Hari-Gian/Weather-website",
            live: ""
        },
        {
            title: "Lern APP",
            description: "Eine Lern-App zur Verbesserung deiner Englischkenntnisse mit drei Schwierigkeitsstufen, entwickelt im Rahmen eines Coding-Contests bei Andeo.",
            image: "/LernAPP.png",
            technologies: ["JavaScript", "PostgreSQL", "HTML5", "Tailwind CSS", "Node.js"],
            github: "https://github.com/Hari-Gian/LernApp",
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
                        <h2 className="text-5xl font-bold mb-3 text-white">Projekte</h2>
                        <p className="text-white text-xl ">
                            Meine relevantesten Projekte
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
                                    <div className="w-full md:w-1/3 flex-shrink-0">
                                        <div
                                            className="relative aspect-[4/3] md:h-48 lg:h-56 w-full">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="object-cover w-full h-full rounded-xl"
                                            />
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