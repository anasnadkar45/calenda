"use client"
import { motion } from 'framer-motion'
import { ReactNode } from 'react'


export const Card = ({ children }: { children: ReactNode }) => {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <motion.div
                className="relative bg-secondary rounded-2xl border border-primary/30 shadow-2xl shadow-primary/20 w-full max-w-md mx-auto overflow-hidden"
                initial={{ opacity: 0.8, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
            >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-card to-secondary dark:from-gray-900 dark:to-black opacity-50" />

                {/* Content of the card */}
                <div className="relative p-6 h-auto flex flex-col gap-y-5 z-20">
                    {children}
                </div>

                {/* Inner shadow effect */}
                <div className="absolute inset-0 shadow-[inset_0_0_30px_#fff] dark:shadow-[inset_0_0_30px_rgba(255,255,255,0.1)] rounded-2xl z-10" />

                {/* Hover effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 opacity-0 transition-opacity duration-300 rounded-2xl z-5"
                    whileHover={{ opacity: 0.3 }}
                />

                {/* Bottom gradient bar with higher z-index */}
                <div className="relative bg-gradient-to-r from-primary to-cyan-400 h-2 animate-gradient z-0" />
            </motion.div>
        </div>
    )
}
