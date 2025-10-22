"use client"

import Image from "next/image";
import Link from "next/link";

import { dataPortfolio } from "@/data";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";
import { motion } from 'framer-motion';

const PortfolioPage = () => {
    return (
        <ContainerPage>
            <TransitionPage />
            <CircleImage />
            <div className="flex flex-col justify-center h-full">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-3xl leading-tight text-center md:text-5xl md:mb-5 font-bold">
                        Mis últimos{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                            trabajos realizados
                        </span>
                    </h1>
                    <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
                        Una selección de proyectos que demuestran mi experiencia en desarrollo web moderno
                    </p>
                </motion.div>

                <div className="relative z-10 grid max-w-7xl gap-8 mx-auto mt-8 md:grid-cols-2 lg:grid-cols-3">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>

                {/* Call to action */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <p className="text-gray-300 mb-6">
                        ¿Te interesa trabajar conmigo en tu próximo proyecto?
                    </p>
                    <Link
                        href="mailto:franciscogodoy_@hotmail.com"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-primary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300 transform hover:scale-105"
                    >
                        <span>Hablemos de tu proyecto</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </ContainerPage>
    );
}

export default PortfolioPage;
