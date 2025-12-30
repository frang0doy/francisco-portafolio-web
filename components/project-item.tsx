"use client"

import { useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectItemProps {
    project: {
        id: number;
        title: string;
        description: string;
        image: string;
        technologies?: string[];
        showCodeButton?: boolean;
        urlGithub?: string;
        urlDemo: string;
    };
    index: number;
    imageLoading: boolean;
    onImageLoad: () => void;
}

const ProjectItem = ({ project, index, imageLoading, onImageLoad }: ProjectItemProps) => {
    const projectRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: projectRef,
        offset: ["start end", "end start"]
    });

    // Eliminamos el efecto parallax para mantener la alineación
    const imageY = useTransform(scrollYProgress, [0, 1], [0, 0]);
    const contentY = useTransform(scrollYProgress, [0, 1], [0, 0]);

    return (
        <motion.div
            key={project.id}
            ref={projectRef}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-16`}
            style={{ alignItems: 'flex-start' }}
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
                style={{ y: imageY, alignSelf: 'flex-start' }}
            >
                <div className="relative overflow-hidden group aspect-video rounded-xl border border-lightGray/20 hover:border-secondary/40 transition-all duration-500 shadow-2xl hover:shadow-secondary/10 w-full">
                    {imageLoading && (
                        <div className="absolute inset-0 bg-mediumGray rounded-xl"></div>
                    )}
                    {/* Overlay de gradiente sutil */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-xl" />
                    
                    {/* Borde brillante en hover */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-secondary/0 via-secondary/20 to-secondary/0 blur-sm" />
                    </div>
                    
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={450}
                        className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ${
                            imageLoading ? 'opacity-0' : 'opacity-100'
                        }`}
                        loading="lazy"
                        onLoad={onImageLoad}
                    />
                </div>
            </motion.div>

            {/* Contenido del proyecto */}
            <motion.div 
                className="flex-1 space-y-6"
                style={{ y: contentY, alignSelf: 'flex-start' }}
            >
                <div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight leading-tight">
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
};

export default ProjectItem;



