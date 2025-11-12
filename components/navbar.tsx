"use client"

import { itemsNavbar } from "@/data";
import { MotionTransition } from "./transition-component";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "services", "portfolio", "offer", "tools"];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <>
            {/* Navbar Desktop */}
            <MotionTransition position="right" className="hidden md:block fixed z-40 right-6 top-1/2 transform -translate-y-1/2">
                <nav>
                    <div className="flex flex-col items-center justify-center gap-3 px-3 py-4 rounded-2xl bg-gray-100/80 backdrop-blur-md border border-gray-300 shadow-lg">
                    {itemsNavbar.map((item) => {
                        const sectionId = item.link.replace("#", "");
                        const isActive = activeSection === sectionId;
                        
                        return (
                            <div
                                key={item.id}
                                className="group relative"
                            >
                                <div
                                    className={`p-2.5 transition-all duration-200 rounded-xl cursor-pointer ${
                                        isActive 
                                            ? 'bg-gray-800 shadow-md' 
                                            : 'hover:bg-gray-200'
                                    }`}
                                >
                                    <a 
                                        href={item.link}
                                        onClick={(e) => handleClick(e, item.link)}
                                        aria-label={item.title}
                                        title={item.title}
                                        className={`block ${
                                            isActive ? 'text-white' : 'text-gray-700'
                                        }`}
                                    >
                                        {item.icon}
                                    </a>
                                </div>
                                {/* Tooltip */}
                                <div className="absolute right-14 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                                    <div className="bg-gray-800 text-white rounded-lg px-3 py-2 text-xs shadow-lg">
                                        {item.title}
                                        <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    </div>
                </nav>
            </MotionTransition>

            {/* Navbar Mobile */}
            <MotionTransition position="bottom" className="md:hidden fixed z-40 bottom-0 left-0 right-0">
                <nav className="bg-gray-100/95 backdrop-blur-md border-t border-gray-300 shadow-lg">
                    <div className="flex items-center justify-around px-4 py-3 max-w-md mx-auto">
                        {itemsNavbar.map((item) => {
                            const sectionId = item.link.replace("#", "");
                            const isActive = activeSection === sectionId;
                            
                            return (
                                <div
                                    key={item.id}
                                    className="flex flex-col items-center"
                                >
                                    <div
                                        className={`p-2 transition-all duration-200 rounded-lg cursor-pointer ${
                                            isActive 
                                                ? 'bg-gray-800' 
                                                : 'hover:bg-gray-200'
                                        }`}
                                    >
                                        <a 
                                            href={item.link}
                                            onClick={(e) => handleClick(e, item.link)}
                                            aria-label={item.title}
                                            title={item.title}
                                            className={`block ${
                                                isActive ? 'text-white' : 'text-gray-700'
                                            }`}
                                        >
                                            {item.icon}
                                        </a>
                                    </div>
                                    <span className={`text-xs mt-1 ${isActive ? 'text-gray-800 font-semibold' : 'text-gray-600'}`}>
                                        {item.title}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </nav>
            </MotionTransition>
        </>
    );
}

export default Navbar;