"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface ProfileCardProps {
    name: string
    email: string
    profileImage: string
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ name, email, profileImage }) => {
    return (
        <Card
            className="sm:max-w-[400px] p-0 flex flex-col gap-0 overflow-hidden bg-gradient-to-br from-card to-secondary/50 border border-primary/50 shadow-2xl shadow-primary/20"
        >
            <motion.div
                className="bg-card p-6 rounded-xl h-full"
                // whileHover={{ scale: 1.0 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <motion.div
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image src={profileImage} width={100} height={100} alt={name} className='rounded-full'/>
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{name}</h3>
                <p className="text-muted-foreground mb-4">{email}</p>
                <motion.button
                    className="flex items-center text-primary hover:text-primary/80 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </motion.button>
            </motion.div>
            <div className="bg-gradient-to-r from-primary to-cyan-400 h-2 animate-gradient"></div>
        </Card>
    )
}
