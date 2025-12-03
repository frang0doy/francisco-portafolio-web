"use client"

import { useState, useEffect } from 'react';

interface TechIconProps {
    name: string;
    className?: string;
}

// Mapeo de nombres de tecnologías a slugs de simple-icons
const techSlugMap: { [key: string]: string } = {
    "React": "react",
    "Vue.js": "vuedotjs",
    "Angular": "angular",
    "Next.js": "nextdotjs",
    "JavaScript": "javascript",
    "HTML5": "html5",
    "Tailwind CSS": "tailwindcss",
    ".NET/C#": "dotnet",
    "Node.js": "nodedotjs",
    "Python": "python",
    "PHP": "php",
    "SQL Server": "microsoftsqlserver",
    "MySQL": "mysql",
    "Git": "git",
    "Docker": "docker",
    "AWS": "amazonaws",
    "Figma": "figma",
    "Firebase": "firebase",
};

const TechIcon = ({ name, className = "w-8 h-8" }: TechIconProps) => {
    const [svgContent, setSvgContent] = useState<string | null>(null);
    const [hasError, setHasError] = useState(false);
    
    // Obtener el slug de la tecnología
    const slug = techSlugMap[name];
    
    useEffect(() => {
        if (!slug) {
            setHasError(true);
            return;
        }

        // Cargar el SVG desde el CDN
        const iconUrl = `https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/${slug}.svg`;
        
        fetch(iconUrl)
            .then(response => {
                if (!response.ok) {
                    console.warn(`Failed to load icon for ${name} (${slug})`);
                    throw new Error('Failed to load');
                }
                return response.text();
            })
            .then(svg => {
                // Asegurar que el SVG tenga las clases correctas
                const svgWithClass = svg.replace('<svg', `<svg class="${className}"`);
                setSvgContent(svgWithClass);
            })
            .catch((error) => {
                console.error(`Error loading icon for ${name}:`, error);
                setHasError(true);
            });
    }, [slug, className, name]);
    
    if (!slug || hasError) {
        // Si no hay slug o hay error, crear un icono genérico
        return (
            <div className={`${className} bg-white rounded flex items-center justify-center text-black text-xs font-bold border-2 border-white`}>
                {name.charAt(0)}
            </div>
        );
    }

    if (!svgContent) {
        // Mostrar un placeholder mientras carga
        return (
            <div className={`${className} bg-mediumGray rounded animate-pulse`}></div>
        );
    }

    // Renderizar el SVG directamente
    return (
        <div 
            className="flex items-center justify-center"
            dangerouslySetInnerHTML={{ __html: svgContent }}
        />
    );
};

export default TechIcon;