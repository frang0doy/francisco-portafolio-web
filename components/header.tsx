"use client"

import Image from "next/image";
import { socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";

const Header = () => {
    return (
        <MotionTransition position="bottom" className="fixed z-40 inline-block w-full top-0 left-0 bg-black/80 backdrop-blur-md border-b border-lightGray/10">
            <header>
                <div className="container justify-between items-center max-w-7xl mx-auto px-4 md:px-6 py-5 md:flex">
                    <Link href='/' aria-label="Ir al inicio" className="flex items-center gap-4">
                        <div className="relative">
                            <Image 
                                src="/mi-foto.jpg" 
                                width={50} 
                                height={50} 
                                alt="Francisco Godoy" 
                                className="rounded-full object-cover w-10 h-10 md:w-12 md:h-12 border border-white/20"
                            />
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
                                Francisco 
                                <span className="text-secondary"> Godoy</span>
                            </h1>
                            <p className="text-xs text-secondary hidden md:block font-normal">Desarrollador Full Stack</p>
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
                                className="transition-all duration-300 hover:text-white text-secondary focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black rounded"
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