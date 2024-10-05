'use client'
import React from 'react'
import { SlCalender } from 'react-icons/sl'
import { motion } from 'framer-motion'

export const CustomCard = () => {
    return (
        <motion.div
            className="relative bg-secondary rounded-2xl border-primary/50 shadow-2xl shadow-primary/20 overflow-hidden"
            whileHover={{ scale: 1.05, zIndex: 1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0.5, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-card to-secondary dark:from-gray-900 dark:to-black opacity-50" />

            {/* Content of the card */}
            <div className="relative p-6 h-60 flex flex-col items-center justify-center space-y-4 z-20">
                {/* Animated icon background when hovering over the card */}
                <motion.div
                    className="rounded-md z-10 p-2 mb-2 bg-gradient-to-r from-primary to-cyan-400 animate-gradient"
                >
                    <SlCalender className="w-8 h-8 text-foreground" />
                </motion.div>

                {/* Main text */}
                <div className="text-gray-400 text-sm font-medium">April</div>

                {/* Additional content: description */}
                <div className="text-gray-300 text-xs">
                    This is a special month filled with exciting events and opportunities.
                </div>

                {/* Button as additional content */}
                <motion.button
                    className="px-4 py-2 bg-primary text-white text-sm rounded-lg shadow-lg hover:bg-primary/70 transition-colors duration-500 z-30 relative"
                    whileTap={{ scale: 0.95 }}
                >
                    Learn More
                </motion.button>
            </div>

            {/* Inner shadow effect */}
            <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.3)] dark:shadow-[inset_0_0_30px_rgba(255,255,255,0.1)] rounded-2xl z-10" />

            {/* Hover effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 opacity-0 transition-opacity duration-300 rounded-2xl z-5"
                whileHover={{ opacity: 0.3 }}
            />

            {/* Bottom gradient bar with higher z-index */}
            <div className="relative bg-gradient-to-r from-primary to-cyan-400 h-2 animate-gradient z-0" />
        </motion.div>
    )
}
