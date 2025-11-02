import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/95 backdrop-blur-sm">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
                {/* Imagen personal con efectos modernos */}
                <motion.div 
                    className="flex justify-center mb-8 md:mb-0 mt-16 md:mt-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <Image 
                        src="/mi-foto.jpg" 
                        priority 
                        width={350} 
                        height={350} 
                        alt="Francisco Godoy - Desarrollador Full Stack" 
                        className="rounded-full object-cover border border-lightGray/20 hover:border-secondary/30 transition-all duration-200"
                    />
                </motion.div>

                {/* Contenedor de texto y botones mejorado */}
                <motion.div 
                    className="flex flex-col justify-center max-w-lg mt-8 md:mt-0 items-center md:items-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    <h1 className="mb-4 text-4xl leading-tight text-center md:text-left md:text-6xl font-bold tracking-tight">
                        Hola, soy{' '}
                        <span className="text-primary">
                            Francisco Godoy
                        </span>
                    </h1>
                    
                    <div className="text-xl md:text-2xl mb-6 text-center md:text-left">
                        <span className="text-secondary font-medium">
                            Desarrollador Full Stack
                        </span>
                    </div>

                    <p 
                        className="mx-auto mb-8 text-base md:text-lg md:mx-0 text-center md:text-left text-secondary/90 leading-relaxed max-w-xl"
                    >
                        Desarrollador Full Stack con experiencia en tecnologías modernas como React, Vue.js, Angular, 
                        .NET/C#, y SQL Server. Me especializo en crear aplicaciones web escalables y funcionales 
                        que brindan experiencias excepcionales al usuario.
                    </p>

                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 w-full">
                        <a 
                            href="mailto:franciscogodoy_@hotmail.com"
                            aria-label="Contactar por email"
                            className="px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-secondary hover:text-white transition-colors duration-200 flex items-center gap-2 text-base focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-darkBg"
                        >
                            <span>Contacta conmigo</span>
                        </a>

                        <a 
                            href="/Francisco Godoy. Es .pdf.pdf"
                            download="Francisco_Godoy_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Descargar curriculum vitae"
                            className="px-8 py-4 border border-secondary text-secondary font-medium rounded-lg hover:bg-secondary hover:text-black transition-colors duration-200 flex items-center gap-2 text-base focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-darkBg"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Descargar CV</span>
                        </a>
                    </div>

                    {/* Indicador de scroll minimalista */}
                    <div className="flex justify-center mt-12">
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <svg 
                                className="w-6 h-6 text-secondary/60" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                                />
                            </svg>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Introduction;