"use client"

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import {usePathname} from "next/navigation"
import Link from 'next/link'
import {CiMenuFries} from "react-icons/ci"

const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'services',
        path: '/services'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'work',
        path: '/work'
    },
    {
        name: 'contact',
        path: '/contact'
    },
]

export const MobileNav = () => {
    const pathname = usePathname();
    return(
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Vitor<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col items-center justify-center gap-8">
                    {links.map((link, index) => (
                        <Link 
                            key={index} 
                            href={link.path}
                            className={`text-xl capitalize hover:text-accent transition-all ${pathname === link.path && "text-accent"}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
}