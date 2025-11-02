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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <h1 className="text-4xl leading-tight text-center md:text-left md:text-5xl md:mt-10 font-bold tracking-tight mb-6">
                        Toda mi{' '}
                        <span className="text-primary">
                            Educación y Experiencia
                        </span>
                    </h1>
                    <p className="text-secondary text-base md:text-lg mt-4 max-w-2xl mx-auto md:mx-0 md:text-left leading-relaxed">
                        Un recorrido por mi formación académica y experiencia profesional en el desarrollo de software
                    </p>
                </motion.div>

                <TimeLine />
            </ContainerPage>
        </>
    );
}

export default AboutMePage;
