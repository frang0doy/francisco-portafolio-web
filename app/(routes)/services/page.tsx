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
                        Ofrezco servicios completos de desarrollo web, desde el diseño hasta la implementación. 
                        Utilizo las tecnologías más modernas como React, Vue.js, Angular, .NET/C#, y SQL Server 
                        para crear aplicaciones web escalables, funcionales y visualmente atractivas.
                    </motion.p>

                    <motion.div
                        className="space-y-4 mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
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
                    className="flex justify-center md:justify-start"
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
