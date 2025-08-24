/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    CalendarDaysIcon,
    HomeIcon,
    UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from './SignOutButton';

export default function SideNavigation() {
    const Links = [
        {
            name: "Home",
            href: "/account",
            icon: <HomeIcon className='text-primary-600 h-5 w-5' />
        },
        {
            name: "Reservations",
            href: "/account/reservations",
            icon: <CalendarDaysIcon className='text-primary-600 h-5 w-5' />
        },
        {
            name: "Profile",
            href: "/account/profile",
            icon: <UserIcon className='text-primary-600 h-5 w-5' />
        },

    ]

    const path=usePathname();
    return (
        <nav className='border-r border-r-primary-900 text-lg'>
            <ul className='flex flex-col justify-between h-full'>
                <div className='space-y-2'>
                    {Links.map((link) =>
                        <li key={link.name} className={`px-5 py-3 hover:bg-primary-900 ${path===link.href?"bg-primary-900":""} rounded-sm transition-colors`}>
                            <Link className='flex flex-row gap-4 items-center' href={link.href}>
                                {link.icon}
                                <span>{link.name}</span>
                            </Link>

                        </li>)}
                </div>
                <li ><SignOutButton /></li>
            </ul>
        </nav>
    )
}
