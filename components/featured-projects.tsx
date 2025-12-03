"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { dataPortfolio } from '@/data';
import ProjectItem from './project-item';

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
                    {featuredProjects.map((project, index) => (
                        <ProjectItem
                            key={project.id}
                            project={project}
                            index={index}
                            imageLoading={imageLoading[project.id]}
                            onImageLoad={() => setImageLoading(prev => ({ ...prev, [project.id]: false }))}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FeaturedProjects;

