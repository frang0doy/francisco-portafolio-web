"use client"

import Image from "next/image";
import { socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";

const Header = () => {
    return (
        <MotionTransition position="bottom" className="fixed z-40 inline-block w-full top-0 left-0 bg-white/80 backdrop-blur-md border-b border-lightGray shadow-sm">
            <header>
                <div className="container justify-between items-center max-w-7xl mx-auto px-4 md:px-6 py-4 md:flex">
                    <Link href='/' aria-label="Ir al inicio" className="flex items-center gap-4">
                        <div className="relative">
                            <Image 
                                src="/mi-foto.jpg" 
                                width={60} 
                                height={60} 
                                alt="Francisco Godoy" 
                                className="rounded-full object-cover w-12 h-12 md:w-14 md:h-14 border-2 border-lightGray"
                            />
                        </div>
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold">
                                Francisco 
                                <span className="text-secondary"> Godoy</span>
                            </h1>
                            <p className="text-sm text-secondary hidden md:block">Desarrollador Full Stack</p>
                        </div>
                    </Link>
                    <div className="flex items-center justify-center gap-6 mt-4 md:mt-0">
                        {socialNetworks.map(({ logo, src, id }) => (
                            <Link
                                key={id}
                                href={src}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visitar perfil en ${src.includes('linkedin') ? 'LinkedIn' : src.includes('wa.me') ? 'WhatsApp' : src.includes('instagram') ? 'Instagram' : 'Red social'}`}
                                className="transition-all duration-300 hover:text-secondary hover:scale-110 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-white rounded"
                            >
                                {logo}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>
        </MotionTransition>
    );
}

export default Header;