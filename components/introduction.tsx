import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                {/* Imagen personal centrada y tamaño ajustado */}
                <div className="flex justify-center mb-8 md:mb-0 mt-16 md:mt-0">
                    <Image 
                        src="/mi-foto.jpg" 
                        priority 
                        width={300} 
                        height={300} 
                        alt="Foto personal" 
                        className="rounded-full object-cover"
                    />
                </div>

                {/* Contenedor de texto y botones */}
                <div className="flex flex-col justify-center max-w-md mt-8 md:mt-0 items-center md:items-start">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
                        Técnico Superior en Programación<br />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8 text-center md:text-left">
                        Como desarrollador fullstack, trabajo con Net/c# , Javascript, react , vue , angular y sql Server. Trabajo en proyectos propios para seguir capacitándome, me defino como una persona con ganas de aprender y desafiarme día a día, listo para un nuevo reto.
                    </p>

                    {/* Contenedor de los botones, centrado horizontalmente */}
                    <div className="flex flex-row items-center justify-center gap-6 mt-5 w-full">
                        {/* Botón Contacta conmigo - Enlace mailto */}
                        <a 
                            href="mailto:franciscogodoy_@hotmail.com" 
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary"
                        >
                            Contacta conmigo
                        </a>

                        {/* Botón Descarga mi CV - Enlace al archivo en la carpeta public */}
                        <a 
                            href="/Currículum- Francisco Godoy .pdf.pdf"  // Ruta relativa del archivo
                            download 
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary"
                        >
                            Descargar mi CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
