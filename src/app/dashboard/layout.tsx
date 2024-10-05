import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import Logo from '../public/CalendaLogo.svg'
import Image from "next/image";
import { DasboardLinks } from "../components/dashboard/DasboardLinks";
import { Toaster } from "@/components/ui/sonner";
import { auth, signOut } from "../lib/auth";
import { ThemeToggle } from "../components/ThemeToggle";
import { Sidebar } from "../components/dashboard/Sidebar";

export default async function Dashboard({ children }: { children: ReactNode }) {
    const session = await auth();

    if (!session?.user) {
        return redirect("/");
    }

    return (
        <>
            <div className="min-h-screen w-full flex">
                {/* Sidebar should have a fixed width */}
                <Sidebar />
                
                {/* Main content with header and children */}
                <div className="flex flex-col w-full">
                    <header className="flex w-full h-14 items-center gap-4 border-b bg-card px-4 lg:h-[60px] lg:px-6">
                        {/* Sheet for mobile view navigation */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="shrink-0 md:hidden"
                                >
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle navigation menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="flex flex-col">
                                <nav className="grid gap-2 mt-10">
                                    <DasboardLinks />
                                </nav>
                            </SheetContent>
                        </Sheet>

                        {/* Right side of the header */}
                        <div className="ml-auto flex items-center gap-x-4">
                            <ThemeToggle />
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="secondary"
                                        size="icon"
                                        className="rounded-full"
                                    >
                                        <Image
                                            src={session.user.image as string}
                                            alt="Profile"
                                            width={20}
                                            height={20}
                                            className="w-full h-full rounded-full"
                                        />
                                        <span className="sr-only">Toggle user menu</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <Link href="/dashboard/settings">Settings</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <form
                                            className="w-full"
                                            action={async () => {
                                                "use server";
                                                await signOut();
                                            }}
                                        >
                                            <button className="w-full text-left">Log out</button>
                                        </form>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </header>

                    {/* Main content area */}
                    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                        {children}
                    </main>
                </div>
            </div>
            <Toaster richColors closeButton />
        </>
    );
}
