"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
    const projects = [
        {
            title: "bla bla",
            description: "bla bla",
            image: "/project1.jpg",
            technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
            github: "https://github.com/yourusername/project1",
            live: "https://project1.com"
        },
        {
            title: "bla bla",
            description: "bla bla",
            image: "/project2.jpg",
            technologies: ["React", "Firebase", "Tailwind CSS"],
            github: "https://github.com/yourusername/project2",
            live: "https://project2.com"
        },
        {
            title: "bla bla",
            description: "bla bla",
            image: "/project3.jpg",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
            github: "https://github.com/yourusername/project3",
            live: "https://project3.com"
        }
    ];

    return (
        <div id="projects" className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl font-bold mb-4 text-gray-100">My Projects</h2>
                        <p className="text-gray-200 max-w-2xl mx-auto">
                            Here are some of my recent projects. Each one was built with a focus on
                            performance, user experience, and clean code.
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="space-y-16">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/20 transition-colors"
                            >
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Project Image */}
                                    <div className="relative h-48 md:h-full">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover rounded-lg"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-lg"></div>
                                    </div>

                                    {/* Project Content */}
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
                                        <p className="text-gray-300 mb-4">{project.description}</p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-200"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className="flex gap-4">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-300 hover:text-white transition-colors"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-300 hover:text-white transition-colors"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
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