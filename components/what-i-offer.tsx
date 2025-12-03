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
        <section className="py-24 px-4 bg-sectionGray">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                        Lo que ofrezco como desarrollador
                    </h2>
                    <motion.p
                        className="text-base text-secondary leading-relaxed max-w-3xl font-normal"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                    >
                        Ofrezco un servicio completo e integral de desarrollo web, abarcando todos los pasos desde el prototipado inicial hasta la configuración de dominio y hosting. 
                        Trabajo con las tecnologías más modernas como React, Vue.js, Angular, .NET/C# y SQL Server para crear soluciones web escalables, funcionales y de alto rendimiento.
                    </motion.p>
                </motion.div>

                <div className="space-y-6 mb-12 max-w-2xl">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-4 border-b border-lightGray/10 pb-4"
                            initial={{ 
                                opacity: 0, 
                                x: -30,
                                y: 10
                            }}
                            whileInView={{ 
                                opacity: 1, 
                                x: 0,
                                y: 0
                            }}
                            transition={{ 
                                duration: 0.5, 
                                delay: index * 0.1,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ 
                                x: 8, 
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="w-1 h-1 bg-white/40 flex-shrink-0"></div>
                            <span className="text-secondary text-sm font-normal">{service}</span>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="flex"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <motion.a 
                        href="mailto:franciscogodoy_@hotmail.com"
                        className="inline-flex items-center gap-2 px-10 py-3 bg-white text-black hover:bg-secondary hover:text-white transition-all duration-300 text-sm font-medium"
                        whileHover={{ opacity: 0.9 }}
                        whileTap={{ scale: 0.98 }}
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

