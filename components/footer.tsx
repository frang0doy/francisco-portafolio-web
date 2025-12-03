"use client"

import { motion } from 'framer-motion';
import { socialNetworks } from '@/data';

const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-black text-white border-t border-lightGray/10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-secondary text-sm font-normal">
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
                                className="text-secondary hover:text-white transition-all duration-300"
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

