"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SubmitButton } from '../components/SubmitButton'
import { useFormState } from 'react-dom'
import { OnboardingAction } from '../actions'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { onboardingSchema } from '../lib/zodSchemas'

const OnboardingPage = () => {
    const [lastResult, action] = useFormState(OnboardingAction, undefined);

    const [form, fields] = useForm({
        lastResult,

        onValidate({ formData }) {
            return parseWithZod(formData, {
                schema: onboardingSchema
            })
        },

        shouldValidate: 'onBlur',
        shouldRevalidate: 'onInput'
    })

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
                    <div>
                        <h1 className="text-xl font-bold">Welcome to Cal<span className='text-primary'>enda</span></h1>
                        <p className='text-slate-400'>We need the following information to set up your profile!</p>
                    </div>

                    <form
                        className="flex flex-col gap-y-5"
                        id={form.id}
                        onSubmit={form.onSubmit}
                        action={action}
                        noValidate
                    >
                        {/* Full Name Input */}
                        <div className='flex flex-col gap-y-2'>
                            <Label>Full Name</Label>
                            <Input
                                name={fields.fullName.name}
                                defaultValue={fields.fullName.initialValue}
                                key={fields.fullName.key}
                                placeholder="Anas Nadkar"
                                className="w-full px-4 py-2 text-gray-800 bg-white"
                            />
                            <p className='text-red-500 text-sm'>{fields.fullName.errors}</p>
                        </div>

                        {/* Username Input */}
                        <div className='flex flex-col gap-y-2 q'>
                            <Label>Username</Label>
                            <div className="flex rounded-md bg-muted">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-muted text-muted-foreground text-sm">
                                    Calenda.com/
                                </span>
                                <Input
                                    name={fields.userName.name}
                                    defaultValue={fields.userName.initialValue}
                                    key={fields.userName.key}
                                    placeholder="test-user-12"
                                    className="w-full px-4 py-2 text-gray-800 bg-white"
                                />
                            </div>
                            <p className='text-red-500 text-sm'>{fields.userName.errors}</p>
                        </div>

                        {/* Submit Button */}

                        <SubmitButton className="w-full text-white" text="Submit" />

                    </form>

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

export default OnboardingPage
