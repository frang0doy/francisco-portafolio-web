"use client"

import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import { motion } from 'framer-motion';

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            <div className="grid items-center justify-items-start min-h-screen max-w-6xl gap-8 mx-auto md:grid-cols-2 py-20">
                <motion.div 
                    className="max-w-[500px] mt-28 w-full container mx-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <motion.h1 
                        className="text-4xl leading-tight text-center md:text-left md:text-5xl md:mb-8 font-bold tracking-tight"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        Mis{' '}
                        <span className="text-primary">
                            servicios.
                        </span>
                    </motion.h1>
                    
                    <motion.p 
                        className="mb-8 text-base md:text-lg text-secondary leading-relaxed max-w-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    >
                        Ofrezco un servicio completo e integral de desarrollo web, abarcando todos los pasos desde el prototipado inicial hasta la configuración de dominio y hosting. 
                        Trabajo con las tecnologías más modernas como React, Vue.js, Angular, .NET/C# y SQL Server para crear soluciones web escalables, funcionales y de alto rendimiento.
                    </motion.p>

                    <motion.div
                        className="space-y-4 mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <span className="text-gray-300">Prototipado y diseño UI/UX profesional</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <span className="text-gray-300">Desarrollo completo Frontend y Backend</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <span className="text-gray-300">Configuración de dominio y hosting</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <span className="text-gray-300">Optimización SEO y rendimiento</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <span className="text-gray-300">Mantenimiento y soporte continuo</span>
                        </div>
                    </motion.div>

                    <motion.a 
                        href="mailto:franciscogodoy_@hotmail.com"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-secondary hover:text-white transition-colors duration-200 text-base"
                    >
                        <span>Contacta conmigo</span>
                    </motion.a>
                </motion.div>

                {/* SLIDER mejorado */}
                <motion.div 
                    className="flex justify-center w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    <div className="relative">
                        <SliderServices />
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default ServicesPage;
