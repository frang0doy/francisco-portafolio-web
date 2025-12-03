"use client"

import { useState, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from 'framer-motion';
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
        <section className="py-24 px-4 bg-black text-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
                        Mis proyectos
                    </h2>
                </motion.div>

                <div className="space-y-32">
                    {featuredProjects.map((project, index) => {
                        const projectRef = useRef<HTMLDivElement>(null);
                        const { scrollYProgress } = useScroll({
                            target: projectRef,
                            offset: ["start end", "end start"]
                        });

                        const imageY = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? -50 : 50]);
                        const contentY = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? 50 : -50]);

                        return (
                        <motion.div
                            key={project.id}
                            ref={projectRef}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-16 items-start`}
                            initial={{ 
                                opacity: 0, 
                                y: 30,
                                x: index % 2 === 0 ? -30 : 30
                            }}
                            whileInView={{ 
                                opacity: 1, 
                                y: 0,
                                x: 0
                            }}
                            transition={{ 
                                duration: 0.7, 
                                delay: index * 0.15,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {/* Imagen del proyecto */}
                            <motion.div 
                                className="flex-1 w-full"
                                style={{ y: imageY }}
                            >
                                <div className="relative overflow-hidden group aspect-video">
                                    {imageLoading[project.id] && (
                                        <div className="absolute inset-0 bg-mediumGray"></div>
                                    )}
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={800}
                                        height={450}
                                        className={`w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-700 ${
                                            imageLoading[project.id] ? 'opacity-0' : 'opacity-100'
                                        }`}
                                        loading="lazy"
                                        onLoad={() => setImageLoading(prev => ({ ...prev, [project.id]: false }))}
                                    />
                                </div>
                            </motion.div>

                            {/* Contenido del proyecto */}
                            <motion.div 
                                className="flex-1 space-y-6"
                                style={{ y: contentY }}
                            >
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="text-secondary leading-relaxed text-sm font-normal">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tecnologías */}
                                {project.technologies && project.technologies.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 text-xs bg-mediumGray text-secondary border border-lightGray/30 font-normal"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Botones */}
                                <div className="flex gap-3 pt-4">
                                    {project.showCodeButton && project.urlGithub && (
                                        <motion.div
                                            whileHover={{ opacity: 0.8 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Link
                                                href={project.urlGithub}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-2.5 bg-mediumGray hover:bg-lightGray border border-lightGray/30 text-white transition-all duration-300 text-xs font-medium"
                                            >
                                                <Github className="w-3.5 h-3.5" />
                                                Código
                                            </Link>
                                        </motion.div>
                                    )}
                                    <motion.div
                                        whileHover={{ opacity: 0.8 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Link
                                            href={project.urlDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-2.5 bg-white text-black hover:bg-secondary hover:text-white transition-all duration-300 text-xs font-medium"
                                        >
                                            Ver proyecto
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default FeaturedProjects;

