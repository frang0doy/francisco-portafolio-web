"use client"

import Link from "next/link";

import { itemsNavbar } from "@/data";

import { MotionTransition } from "./transition-component";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const router = usePathname()

    return (
        <MotionTransition position="right" className="fixed z-40 right-6 top-1/3">
            <nav>
                <div className="flex flex-col items-center justify-center gap-4 px-4 py-6 rounded-full bg-white/15 backdrop-blur-sm">
                    {itemsNavbar.map((item) => (
                        <div
                            key={item.id}
                            className="group relative"
                        >
                            <div
                                className={`p-3 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${router === item.link && 'bg-secondary'}`}
                            >
                                <Link 
                                    href={item.link}
                                    aria-label={item.title}
                                    title={item.title}
                                >
                                    {item.icon}
                                </Link>
                            </div>
                            {/* Tooltip */}
                            <div className="absolute right-16 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                <div className="bg-darkGray/95 border border-lightGray/50 rounded-lg px-3 py-2 text-sm text-secondary backdrop-blur-sm">
                                    {item.title}
                                    <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 border-4 border-transparent border-l-darkGray/95"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </nav>
        </MotionTransition>
    );
}

export default Navbar;