"use client"

import ContainerPage from "@/components/container-page";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";
import { motion } from 'framer-motion';

const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-3xl leading-tight text-center md:text-left md:text-5xl md:mt-10 font-bold">
                        Toda mi{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                            Educación y Experiencia
                        </span>
                    </h1>
                    <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto md:mx-0 md:text-left">
                        Un recorrido por mi formación académica y experiencia profesional en el desarrollo de software
                    </p>
                </motion.div>

                <TimeLine />
            </ContainerPage>
        </>
    );
}

export default AboutMePage;
