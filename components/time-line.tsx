"use client"

import { dataAboutPage } from "@/data";
import { motion } from "framer-motion";

const TimeLine = () => {
    return (
        <div className="w-full max-w-4xl mx-auto py-12">
            <div className="relative">
                {/* Línea vertical central */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-lightGray/30 transform md:-translate-x-1/2"></div>

                {/* Items de la línea de tiempo */}
                <div className="space-y-12">
                    {dataAboutPage.map((data, index) => (
                        <motion.div
                            key={data.id}
                            className={`relative flex flex-col md:flex-row md:items-start gap-6 md:gap-8 ${
                                index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            {/* Contenedor del contenido */}
                            <div className={`flex-1 md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                <div className="bg-gradient-to-br from-mediumGray/90 to-darkGray/90 border border-lightGray/30 rounded-lg p-6 hover:border-secondary/40 transition-all duration-200 hover:shadow-lg hover:shadow-white/5">
                                    {/* Fecha */}
                                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-lightGray/20 text-secondary border border-lightGray/50 ${
                                        index % 2 === 0 ? 'md:ml-auto md:block' : ''
                                    }`}>
                                        {data.date}
                                    </div>

                                    {/* Título */}
                                    <h3 className="text-xl font-bold text-primary mb-2 leading-tight">
                                        {data.title}
                                    </h3>

                                    {/* Subtítulo */}
                                    <div className="text-lg font-semibold text-secondary mb-3">
                                        {data.subtitle}
                                    </div>

                                    {/* Descripción */}
                                    {data.description && (
                                        <p className="text-sm text-secondary/80 leading-relaxed">
                                            {data.description}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Punto central */}
                            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-darkBg z-10"></div>

                            {/* Espacio vacío para el lado opuesto en desktop */}
                            <div className="hidden md:block flex-1 md:w-5/12"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TimeLine;