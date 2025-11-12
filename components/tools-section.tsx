"use client"

import { motion } from 'framer-motion';
import { skillsData } from '@/data';
import TechIcon from './tech-icon';

const ToolsSection = () => {
    // Combinar todas las habilidades en una sola lista
    const allTools = skillsData.flatMap(category => category.skills);

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
                        Herramientas de mi día a día
                    </h2>
                </motion.div>

                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {allTools.map((tool, index) => (
                        <motion.div
                            key={tool.name}
                            className="flex flex-col items-center justify-center p-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-200 shadow-lg cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ 
                                duration: 0.4, 
                                delay: index * 0.03,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ y: -4, scale: 1.05 }}
                            title={tool.name}
                        >
                            <div className="mb-3 flex items-center justify-center">
                                <TechIcon name={tool.name} className="w-10 h-10 text-white" />
                            </div>
                            <span className="text-sm text-white text-center font-medium">
                                {tool.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToolsSection;

