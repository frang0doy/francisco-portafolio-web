import { motion } from 'framer-motion';
import { Mail, Download } from 'lucide-react';

const Introduction = () => {
    return (
        <section className="min-h-[70vh] flex items-center justify-center px-4 py-20 pt-32 bg-gray-900 text-white">
            <div className="z-20 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.6,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Portfolio
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-12 max-w-2xl mx-auto">
                        Desarrollo aplicaciones web escalables y funcionales integrando tecnologías modernas, 
                        con foco en experiencias simples y útiles.
                    </p>

                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.a 
                            href="mailto:franciscogodoy_@hotmail.com"
                            aria-label="Contactar por email"
                            className="flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-all duration-200 text-base shadow-lg hover:shadow-xl"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Mail className="w-4 h-4" />
                            Contacta conmigo
                        </motion.a>

                        <motion.a 
                            href="/Francisco Godoy. Es .pdf.pdf"
                            download="Francisco_Godoy_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Descargar curriculum vitae"
                            className="flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-black transition-all duration-200 text-base shadow-lg hover:shadow-xl"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download className="w-4 h-4" />
                            Descargar CV
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Introduction;