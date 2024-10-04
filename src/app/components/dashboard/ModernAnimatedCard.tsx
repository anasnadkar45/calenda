"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface CardProps {
    title: string
    description: string
    icon: React.ReactNode
}

export const ModernAnimatedCard: React.FC<CardProps> = ({ title, description, icon }) => {
    return (
        <motion.div
            className="bg-secondary p-2 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="bg-card p-6 rounded-xl h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <motion.div
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                >
                    {icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground mb-4">{description}</p>
                <motion.button
                    className="flex items-center text-primary hover:text-primary/80 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </motion.button>
            </motion.div>
        </motion.div>
    )
}