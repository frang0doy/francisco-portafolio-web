"use client"

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { dataPortfolio } from '@/data';
import SkeletonLoader from './skeleton-loader';

const FeaturedProjects = () => {
    // Mostrar todos los proyectos
    const featuredProjects = dataPortfolio;
    const [imageLoading, setImageLoading] = useState<{ [key: number]: boolean }>(
        featuredProjects.reduce((acc, project) => {
            acc[project.id] = true;
            return acc;
        }, {} as { [key: number]: boolean })
    );

    return (
        <section className="py-16 px-4 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                        Mis proyectos
                    </h2>
                </motion.div>

                <div className="space-y-24">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-8 items-start`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.6, 
                                delay: index * 0.1,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {/* Imagen del proyecto */}
                            <div className="flex-1 w-full">
                                <div className="relative overflow-hidden rounded-lg group aspect-video">
                                    {imageLoading[project.id] && (
                                        <div className="absolute inset-0">
                                            <SkeletonLoader />
                                        </div>
                                    )}
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={800}
                                        height={450}
                                        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                                            imageLoading[project.id] ? 'opacity-0' : 'opacity-100'
                                        }`}
                                        loading="lazy"
                                        onLoad={() => setImageLoading(prev => ({ ...prev, [project.id]: false }))}
                                    />
                                </div>
                            </div>

                            {/* Contenido del proyecto */}
                            <div className="flex-1 space-y-4">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="text-gray-200 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tecnologías */}
                                {project.technologies && project.technologies.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 text-sm bg-white/10 text-white rounded-full border border-white/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Botones */}
                                <div className="flex gap-4 pt-2">
                                    {project.showCodeButton && project.urlGithub && (
                                        <motion.div
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Link
                                                href={project.urlGithub}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg transition-all duration-200 text-sm font-medium shadow-lg hover:shadow-xl"
                                            >
                                                <Github className="w-4 h-4" />
                                                Código
                                            </Link>
                                        </motion.div>
                                    )}
                                    <motion.div
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link
                                            href={project.urlDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-gray-200 rounded-lg transition-all duration-200 text-sm font-medium shadow-lg hover:shadow-xl"
                                        >
                                            Ver proyecto
                                            <ExternalLink className="w-4 h-4" />
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FeaturedProjects;

