"use client"

import { motion } from 'framer-motion';
import { skillsData } from '@/data';
import TechIcon from './tech-icon';

const ToolsSection = () => {
    // Combinar todas las habilidades en una sola lista
    const allTools = skillsData.flatMap(category => category.skills);

    return (
        <section className="py-24 px-4 bg-black">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
                        Herramientas de mi día a día
                    </h2>
                </motion.div>

                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {allTools.map((tool, index) => (
                        <motion.div
                            key={tool.name}
                            className="flex flex-col items-center justify-center p-6 bg-mediumGray border border-lightGray/20 hover:border-white/30 transition-all duration-500 cursor-pointer group"
                            initial={{ 
                                opacity: 0, 
                                y: 20,
                                x: -15
                            }}
                            whileInView={{ 
                                opacity: 1, 
                                y: 0,
                                x: 0
                            }}
                            transition={{ 
                                duration: 0.5, 
                                delay: index * 0.04,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ 
                                y: -4,
                                transition: { duration: 0.3 }
                            }}
                            title={tool.name}
                        >
                            <div className="mb-4 flex items-center justify-center">
                                <TechIcon name={tool.name} className="w-10 h-10 text-white/60 group-hover:text-white transition-colors duration-500" />
                            </div>
                            <span className="text-xs text-secondary text-center font-normal">
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

