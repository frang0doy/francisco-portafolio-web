"use client"

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const WhatIOffer = () => {
    const services = [
        "Prototipado y diseño UI/UX profesional",
        "Desarrollo completo Frontend y Backend",
        "Configuración de dominio y hosting",
        "Optimización SEO y rendimiento",
        "Mantenimiento y soporte continuo"
    ];

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
                        Lo que ofrezco como desarrollador
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        Ofrezco un servicio completo e integral de desarrollo web, abarcando todos los pasos desde el prototipado inicial hasta la configuración de dominio y hosting. 
                        Trabajo con las tecnologías más modernas como React, Vue.js, Angular, .NET/C# y SQL Server para crear soluciones web escalables, funcionales y de alto rendimiento.
                    </p>
                </motion.div>

                <div className="space-y-4 mb-8 max-w-2xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center justify-center gap-4"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                                duration: 0.4, 
                                delay: index * 0.1,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <div className="w-2 h-2 bg-gray-800 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-800 text-lg font-medium">{service}</span>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <motion.a 
                        href="mailto:franciscogodoy_@hotmail.com"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-all duration-200 text-base shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Mail className="w-4 h-4" />
                        Contacta conmigo
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default WhatIOffer;

