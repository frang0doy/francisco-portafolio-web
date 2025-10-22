import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-gradient-to-br from-darkBg/80 via-darkBg/60 to-darkBg/40 backdrop-blur-sm">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2 gap-8">
                {/* Imagen personal con efectos modernos */}
                <motion.div 
                    className="flex justify-center mb-8 md:mb-0 mt-16 md:mt-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-xl"></div>
                        <Image 
                            src="/mi-foto.jpg" 
                            priority 
                            width={350} 
                            height={350} 
                            alt="Francisco Godoy - Desarrollador Full Stack" 
                            className="relative rounded-full object-cover border-4 border-secondary/30 shadow-2xl hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full animate-pulse"></div>
                    </div>
                </motion.div>

                {/* Contenedor de texto y botones mejorado */}
                <motion.div 
                    className="flex flex-col justify-center max-w-lg mt-8 md:mt-0 items-center md:items-start"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <h1 className="mb-5 text-3xl leading-tight text-center md:text-left md:text-5xl font-bold">
                            Hola, soy{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                                Francisco Godoy
                            </span>
                        </h1>
                        
                        <div className="text-xl md:text-2xl mb-6 text-center md:text-left">
                            <span className="text-secondary font-semibold">
                                Desarrollador Full Stack
                            </span>
                        </div>
                    </motion.div>

                    <motion.p 
                        className="mx-auto mb-6 text-lg md:text-xl md:mx-0 text-center md:text-left text-gray-300 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        Desarrollador Full Stack con experiencia en tecnologías modernas como React, Vue.js, Angular, 
                        .NET/C#, y SQL Server. Me especializo en crear aplicaciones web escalables y funcionales 
                        que brindan experiencias excepcionales al usuario.
                    </motion.p>

                    {/* Botones mejorados con efectos */}
                    <motion.div 
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 w-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <a 
                            href="mailto:franciscogodoy_@hotmail.com" 
                            className="group px-6 py-3 bg-gradient-to-r from-secondary to-primary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                        >
                            <span>Contacta conmigo</span>
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>

                        <a 
                            href="/Francisco Godoy. Es .pdf.pdf"
                            download="Francisco_Godoy_CV.pdf"
                            target="_blank"
                            className="group px-6 py-3 border-2 border-secondary text-secondary font-semibold rounded-xl hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Descargar CV</span>
                        </a>
                    </motion.div>

                    {/* Indicador de scroll - Solo flecha */}
                    <motion.div 
                        className="flex justify-center mt-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="cursor-pointer"
                        >
                            <svg 
                                className="w-8 h-8 text-secondary hover:text-primary transition-colors" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                                />
                            </svg>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default Introduction;