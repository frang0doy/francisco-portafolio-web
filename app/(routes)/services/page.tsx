"use client"

import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import { motion } from 'framer-motion';

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            <CircleImage />
            <div className="grid items-center justify-center min-h-screen max-w-6xl gap-8 mx-auto md:grid-cols-2 px-4 sm:px-6 py-20">
                <motion.div 
                    className="max-w-[500px] mt-28"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1 
                        className="text-3xl leading-tight text-center md:text-left md:text-5xl md:mb-6 font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Mis{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                            servicios.
                        </span>
                    </motion.h1>
                    
                    <motion.p 
                        className="mb-6 text-lg text-gray-300 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Ofrezco servicios completos de desarrollo web, desde el diseño hasta la implementación. 
                        Utilizo las tecnologías más modernas como React, Vue.js, Angular, .NET/C#, y SQL Server 
                        para crear aplicaciones web escalables, funcionales y visualmente atractivas.
                    </motion.p>

                    <motion.div
                        className="space-y-4 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <span className="text-gray-300">Desarrollo Frontend con React, Vue.js y Angular</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <span className="text-gray-300">Desarrollo Backend con .NET/C# y Node.js</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <span className="text-gray-300">Diseño responsivo y optimización SEO</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <span className="text-gray-300">Integración de APIs y bases de datos</span>
                        </div>
                    </motion.div>

                    <motion.a 
                        href="mailto:franciscogodoy_@hotmail.com"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-primary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300 transform hover:scale-105"
                    >
                        <span>Contacta conmigo</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.a>
                </motion.div>

                {/* SLIDER mejorado */}
                <motion.div 
                    className="flex justify-center md:justify-start"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative">
                        <SliderServices />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/5 to-transparent rounded-2xl pointer-events-none"></div>
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default ServicesPage;
