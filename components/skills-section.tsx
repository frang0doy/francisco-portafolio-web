"use client"

import { motion } from 'framer-motion';
import { skillsData } from '@/data';
import TechIcon from './tech-icon';

const SkillsSection = () => {
    return (
        <div className="py-16 px-4">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Mis{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                        Habilidades Técnicas
                    </span>
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    Tecnologías y herramientas que domino para crear soluciones web modernas y eficientes
                </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
                {skillsData.map((category, categoryIndex) => (
                    <motion.div
                        key={category.category}
                        className="mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-center mb-8 text-secondary">
                            {category.category}
                        </h3>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {category.skills.map((skill, skillIndex) => (
                                <motion.div
                                    key={skill.name}
                                    className="group relative"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ 
                                        duration: 0.5, 
                                        delay: (categoryIndex * 0.1) + (skillIndex * 0.05) 
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
                                        <div className="mb-4 flex justify-center">
                                            <TechIcon name={skill.name} className="w-12 h-12" />
                                        </div>
                                        <h4 className="font-semibold text-white text-lg">{skill.name}</h4>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
    );
};

export default SkillsSection;
