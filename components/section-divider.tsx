"use client"

import { motion } from 'framer-motion';

interface SectionDividerProps {
    className?: string;
}

const SectionDivider = ({ className = "" }: SectionDividerProps) => {
    return (
        <motion.div
            className={`w-full flex justify-center py-8 ${className}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </motion.div>
    );
};

export default SectionDivider;

