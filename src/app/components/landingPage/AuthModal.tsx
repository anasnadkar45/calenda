import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import Image from 'next/image'
import React from 'react'
import Logo from '../../public/CalendaLogo.svg'
import { signIn } from '@/app/lib/auth'
import { GitHubAuthButton, GoogleAuthButton } from '../SubmitButton'

export const AuthModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-primary/50 px-6 py-2">
          Try for Free
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px] p-0 flex flex-col gap-0 overflow-hidden bg-gradient-to-br from-background to-card dark:to-black border border-primary/50 shadow-2xl shadow-primary/20">
        <div className="p-8 relative">
          <div className="absolute inset-0 bg-primary/5 backdrop-blur-3xl z-0"></div>
          <DialogHeader className="flex-row justify-center items-center gap-x-3 mb-8 relative z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full animate-pulse"></div>
              <Image src={Logo} className="size-14 relative z-10 animate-float" alt="Logo" />
            </div>
            <h4 className="text-4xl font-bold text-cyan-700 dark:text-cyan-400">
              Cal<span className="text-primary">enda</span>
            </h4>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-8 relative z-10">
            <form
              className="w-full"
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <GoogleAuthButton />
            </form>

            <form
              className="w-full"
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <GitHubAuthButton />
            </form>
          </div>
          <div className="mt-6 text-center text-sm text-gray-400 relative z-10">
            By signing up, you agree to our{' '}
            <a href="#" className="text-primary hover:text-primary/90 transition-colors">Terms of Service</a> and{' '}
            <a href="#" className="text-primary hover:text-primary/90 transition-colors">Privacy Policy</a>
          </div>
        </div>
        <div className="bg-gradient-to-r from-primary to-cyan-400 h-2 animate-gradient"></div>
      </DialogContent>
    </Dialog>
  )
}
