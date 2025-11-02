"use client"

import { motion } from 'framer-motion';
import { skillsData } from '@/data';
import TechIcon from './tech-icon';

const SkillsSection = () => {
    return (
        <div className="py-24 px-4 bg-darkGray/30">
            <motion.div
                className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                    Mis{' '}
                    <span className="text-primary">
                        Habilidades Técnicas
                    </span>
                </h2>
                <p className="text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                    Tecnologías y herramientas que domino para crear soluciones web modernas y eficientes
                </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
                {skillsData.map((category, categoryIndex) => (
                    <motion.div
                        key={category.category}
                        className="mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-center mb-10 text-primary">
                            {category.category}
                        </h3>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                            {category.skills.map((skill, skillIndex) => (
                                <motion.div
                                    key={skill.name}
                                    className="group relative"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ 
                                        duration: 0.3, 
                                        delay: (categoryIndex * 0.05) + (skillIndex * 0.02) 
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -2 }}
                                >
                                    <div className="bg-gradient-to-br from-mediumGray/90 to-darkGray/90 backdrop-blur-sm border border-lightGray/30 rounded-lg p-6 text-center hover:border-secondary/40 transition-all duration-200 hover:shadow-lg hover:shadow-white/5">
                                        <div className="mb-4 flex justify-center">
                                            <TechIcon name={skill.name} className="w-12 h-12" />
                                        </div>
                                        <h4 className="font-semibold text-primary text-lg">{skill.name}</h4>
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
