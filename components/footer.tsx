"use client"

import { motion } from 'framer-motion';
import { socialNetworks } from '@/data';

const Footer = () => {
    return (
        <footer className="py-8 px-4 bg-gray-900 text-white border-t border-gray-700">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()}. Desarrollado por Francisco Godoy
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex gap-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        {socialNetworks.map((social) => (
                            <a
                                key={social.id}
                                href={social.src}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-300 hover:scale-110 transition-all duration-200"
                                aria-label={`Enlace a ${social.src}`}
                            >
                                {social.logo}
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

