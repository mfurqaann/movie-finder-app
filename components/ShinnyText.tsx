'use client'

import { motion } from 'framer-motion'

export default function ShinyText({ children }: { children: React.ReactNode }) {
    return (
        <motion.span
            className="relative font-bold text-2xl md:text-3xl bg-gradient-to-r from-slate-500 via-white to-slate-500 bg-[length:200%_100%] bg-clip-text text-transparent"
            animate={{
                backgroundPosition: ['200% 0', '0% 0'] // bergerak dari kanan ke kiri
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut'
            }}
        >
            {children}
        </motion.span>
    )
}
