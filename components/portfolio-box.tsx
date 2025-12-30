import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string
        image: string
        urlGithub: string
        urlDemo: string
        technologies?: string[]
        description?: string
        showCodeButton?: boolean
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { id, title, image, urlDemo, urlGithub, technologies = [], description = "", showCodeButton = true } = data

    return (
        <motion.div
            key={id}
            className="group relative overflow-hidden bg-gradient-to-br from-mediumGray/90 to-darkGray/90 backdrop-blur-sm border border-lightGray/30 rounded-lg hover:border-secondary/40 transition-all duration-200 hover:shadow-lg hover:shadow-white/5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: id * 0.05 }}
            whileHover={{ y: -2 }}
        >
            {/* Imagen del proyecto */}
            <div className="relative overflow-hidden rounded-t-2xl border-b border-lightGray/20 group-hover:border-secondary/40 transition-colors duration-300">
                {/* Contenedor de imagen con efectos */}
                <div className="relative overflow-hidden aspect-video">
                    <Image
                        src={image}
                        alt={title}
                        width={400} 
                        height={250} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay de gradiente mejorado */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Efecto de brillo en hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full" 
                         style={{ transition: 'transform 0.7s ease-in-out, opacity 0.3s ease-in-out' }} />
                    
                    {/* Overlay con botones mejorado */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                        {showCodeButton && urlGithub && (
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href={urlGithub}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg border border-white/20"
                                >
                                    <Github className="w-5 h-5 text-white" />
                                </Link>
                            </motion.div>
                        )}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href={urlDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-secondary/80 backdrop-blur-md rounded-full hover:bg-secondary transition-all duration-300 shadow-lg border border-secondary/30"
                            >
                                <ExternalLink className="w-5 h-5 text-white" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Contenido del proyecto */}
            <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors leading-tight">
                    {title}
                </h3>
                
                {description && (
                    <p className="text-secondary/80 text-sm leading-relaxed line-clamp-3">
                        {description}
                    </p>
                )}

                {/* Tecnologías utilizadas */}
                {technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {technologies.map((tech, index) => (
                            <span 
                                key={index}
                                className="px-2 py-1 text-xs bg-lightGray/30 text-secondary rounded-full border border-lightGray/50"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                {/* Botones de acción */}
                <div className="flex gap-3">
                    {showCodeButton && urlGithub && (
                        <Link
                            href={urlGithub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm font-medium"
                        >
                            <Github className="w-4 h-4" />
                            Código
                        </Link>
                    )}

                    <Link
                        href={urlDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 px-4 py-2 bg-white text-black hover:bg-secondary hover:text-white rounded-lg transition-all text-sm font-medium ${showCodeButton ? 'flex-1' : 'w-full'}`}
                    >
                        <Eye className="w-4 h-4" />
                        Ver
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

export default PortfolioBox