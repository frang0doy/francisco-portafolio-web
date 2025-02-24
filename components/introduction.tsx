import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width="800" height="800" alt="Avatar" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10"> Tecnico Superior en Programacion<br />
                        
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                        Como desarrollador fullstack, trabajo con Net/c# , Javascript, react , vue , angular y sql Server. Trabajo en proyectos propios para seguir capacitandome, me defino como una persona con ganas de aprender y desafiarme dia a dia, listo para un nuevo reto.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        {/* Botón Ver Proyectos */}
                       

                        {/* Botón Contacta conmigo - Enlace mailto */}
                        <a 
                            href="mailto:franciscogodoy_@hotmail.com" 
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary"
                        >
                            Contacta conmigo
                        </a>

                        {/* Botón Descarga mi CV - Enlace al archivo */}
                        <a href="https://drive.google.com/uc?export=download&id=1iMbGfvl7xLpgax0A--PSr0Gu5bK_J64w" download className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
    Descargar mi CV
</a>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
