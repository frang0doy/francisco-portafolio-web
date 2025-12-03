"use client"

import { motion } from 'framer-motion';
import { serviceData } from '@/data';

const ServicesSection = () => {
    return (
        <section className="py-24 px-4 bg-sectionGray">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
                        Qué hago
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceData.map((service, index) => (
                        <motion.div
                            key={index}
                            className="p-8 bg-mediumGray border border-lightGray/20 hover:border-white/30 transition-all duration-500 cursor-pointer group"
                            initial={{ 
                                opacity: 0, 
                                x: -30,
                                y: 20
                            }}
                            whileInView={{ 
                                opacity: 1, 
                                x: 0,
                                y: 0
                            }}
                            transition={{ 
                                duration: 0.6, 
                                delay: index * 0.1,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ 
                                y: -4,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="mb-6 text-3xl text-white/60 group-hover:text-white transition-colors duration-500">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-white tracking-tight">
                                {service.title}
                            </h3>
                            <p className="text-secondary leading-relaxed text-sm font-normal">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;

