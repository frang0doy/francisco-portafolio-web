"use client"

import { socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";

const Header = () => {
    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10">
            <header>
                <div className="container justify-between max-w-6xl mx-auto md:flex">
                    <Link href='/' aria-label="Ir al inicio">
                        <h1 className="my-3 text-4xl font-bold text-center md:text-left">
                            Francisco 
                            <span className="text-secondary">Godoy</span>
                        </h1>
                    </Link>
                    <div className="flex items-center justify-center gap-7">
                        {socialNetworks.map(({ logo, src, id }) => (
                            <Link
                                key={id}
                                href={src}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visitar perfil en ${src.includes('linkedin') ? 'LinkedIn' : src.includes('wa.me') ? 'WhatsApp' : src.includes('instagram') ? 'Instagram' : 'Red social'}`}
                                className="transition-all duration-300 hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-darkBg rounded"
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