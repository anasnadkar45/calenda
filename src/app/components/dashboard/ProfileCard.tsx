"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProfileCardProps {
    name: string
    email: string
    profileImage: string
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ name, email, profileImage }) => {
    return (
        <motion.div
            className="bg-card p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Profile Image */}
            <Image
                src={profileImage}
                alt={name}
                width={20}
                height={20}
                className="w-24 h-24 rounded-full border-4 border-primary transition-transform duration-300 hover:scale-110"
            />
            {/* Name */}
            <motion.h2
                className="mt-4 text-2xl font-semibold text-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                {name}
            </motion.h2>
            {/* Email */}
            <motion.p
                className="mt-2 text-muted-foreground text-center text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                {email}
            </motion.p>
            {/* Action Button */}
            <motion.button
                className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-full transition-colors duration-300 hover:bg-accent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                Edit Profile
            </motion.button>
        </motion.div>
    )
}
