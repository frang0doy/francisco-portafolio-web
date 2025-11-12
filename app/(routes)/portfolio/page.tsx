"use client"

import Image from "next/image";
import Link from "next/link";

import { dataPortfolio } from "@/data";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";
import { motion } from 'framer-motion';

const PortfolioPage = () => {
    return (
        <ContainerPage>
            <TransitionPage />
            <div className="flex flex-col justify-center h-full">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <h1 className="text-4xl leading-tight text-center md:text-5xl md:mb-6 font-bold tracking-tight">
                        <span className="text-primary">
                            Mis proyectos
                        </span>
                    </h1>
                </motion.div>

                <div className="relative z-10 grid max-w-7xl gap-6 mx-auto mt-12 md:grid-cols-2 lg:grid-cols-3">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>

                {/* Call to action */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <p className="text-secondary mb-6 text-base md:text-lg">
                        ¿Te interesa trabajar conmigo en tu próximo proyecto?
                    </p>
                    <Link
                        href="mailto:franciscogodoy_@hotmail.com"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-secondary hover:text-white transition-colors duration-200 text-base"
                    >
                        <span>Hablemos de tu proyecto</span>
                    </Link>
                </motion.div>
            </div>
        </ContainerPage>
    );
}

export default PortfolioPage;
