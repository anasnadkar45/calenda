"use client"
import { cn } from "@/lib/utils";
import { CalendarCheck, HomeIcon, Settings, Users2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Logo from '../../public/CalendaLogo.svg'
import { Button } from "@/components/ui/button";
import { FaAngleLeft } from "react-icons/fa";

export const dashboardLinks = [
    {
        id: 0,
        name: "Event Types",
        href: "/dashboard",
        icon: HomeIcon,
    },
    {
        id: 1,
        name: "Meetings",
        href: "/dashboard/meetings",
        icon: Users2,
    },
    {
        id: 2,
        name: "Availablity",
        href: "/dashboard/availability",
        icon: CalendarCheck,
    },
    {
        id: 3,
        name: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
    },
];


export const Sidebar = () => {
    const [isExpand, setIsExpand] = useState(true);
    const pathname = usePathname();
    return (
        <div className="hidden relative max-w-[300px] shrink-0 border-r bg-card md:block">
            <Button
                size={"icon"}
                className="absolute size-6 -right-3 top-60"
                onClick={() => setIsExpand(!isExpand)}
            >
                <FaAngleLeft />
            </Button>
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <Image src={Logo} alt="Logo" className="size-6" />
                        {isExpand ? (
                            <p className="text-xl font-bold">
                                Cal<span className="text-primary">enda</span>
                            </p>
                        ) : (
                            <></>
                        )}
                    </Link>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        {dashboardLinks.map((link) => (
                            <Link
                                key={link.id}
                                href={link.href}
                                className={cn(
                                    pathname === link.href
                                        ? "text-primary bg-primary/10"
                                        : "text-muted-foreground hover:text-foreground",
                                    "flex items-center gap-3 rounded-lg px-3 py-2  transition-all  hover:text-primary"
                                )}
                            >
                                <link.icon className="h-5 w-5" />
                                {isExpand ? (
                                    link.name
                                ) : (
                                    <></>
                                )}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}
