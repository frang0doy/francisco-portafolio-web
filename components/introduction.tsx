import { motion } from 'framer-motion';
import { Mail, Download } from 'lucide-react';

const Introduction = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-20 pt-32 bg-black text-white">
            <div className="z-20 max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >
                    <h1 className="text-5xl md:text-7xl font-semibold mb-8 tracking-tight">
                        Francisco Godoy
                    </h1>
                    
                    <p className="text-lg md:text-xl text-secondary leading-relaxed mb-16 max-w-2xl mx-auto font-normal">
                        Desarrollo aplicaciones web escalables y funcionales integrando tecnologías modernas, 
                        con foco en experiencias simples y útiles.
                    </p>

                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.a 
                            href="mailto:franciscogodoy_@hotmail.com"
                            aria-label="Contactar por email"
                            className="flex items-center gap-2 px-10 py-3 bg-white text-black font-medium rounded-sm hover:bg-secondary hover:text-white transition-all duration-300 text-sm"
                            whileHover={{ opacity: 0.9 }}
                            whileTap={{ scale: 0.98 }}
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
                            className="flex items-center gap-2 px-10 py-3 border border-white/20 text-white font-medium rounded-sm hover:border-white/40 hover:bg-white/5 transition-all duration-300 text-sm"
                            whileHover={{ opacity: 0.9 }}
                            whileTap={{ scale: 0.98 }}
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