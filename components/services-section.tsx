"use client"

import { motion } from 'framer-motion';
import { serviceData } from '@/data';

const ServicesSection = () => {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
                        Qué hago
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {serviceData.map((service, index) => (
                        <motion.div
                            key={index}
                            className="p-6 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-200 shadow-lg cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.4, 
                                delay: index * 0.1,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ y: -4, scale: 1.02 }}
                        >
                            <div className="mb-4 text-4xl text-white">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">
                                {service.title}
                            </h3>
                            <p className="text-gray-200 leading-relaxed">
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

