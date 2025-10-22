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
            className="group relative overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-secondary/50 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: id * 0.1 }}
            whileHover={{ y: -5 }}
        >
            {/* Imagen del proyecto */}
            <div className="relative overflow-hidden rounded-t-2xl">
                <Image
                    src={image}
                    alt={title}
                    width={400} 
                    height={250} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay con botones */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {showCodeButton && urlGithub && (
                        <Link
                            href={urlGithub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        >
                            <Github className="w-5 h-5 text-white" />
                        </Link>
                    )}
                    <Link
                        href={urlDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-secondary/80 backdrop-blur-sm rounded-full hover:bg-secondary transition-colors"
                    >
                        <ExternalLink className="w-5 h-5 text-white" />
                    </Link>
                </div>
            </div>

            {/* Contenido del proyecto */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                    {title}
                </h3>
                
                {description && (
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {description}
                    </p>
                )}

                {/* Tecnologías utilizadas */}
                {technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {technologies.map((tech, index) => (
                            <span 
                                key={index}
                                className="px-2 py-1 text-xs bg-secondary/20 text-secondary rounded-full border border-secondary/30"
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
                        className={`flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary to-primary hover:from-secondary/80 hover:to-primary/80 text-white rounded-lg transition-all text-sm font-medium ${showCodeButton ? 'flex-1' : 'w-full'}`}
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