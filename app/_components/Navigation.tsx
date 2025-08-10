"use client";
import Link from "next/link"
import { useState } from "react";
export default function Navigation() {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    function handleMobileMenu() {
        setOpenMenu(prev => !prev)
    }
    return (
        <>
            {openMenu && (
                <div
                    className="fixed top-0 left-0 w-full h-screen md:hidden bg-black bg-opacity-50 z-40"
                    onClick={() => setOpenMenu(false)}
                    
                />
            )}

            <ul className={`w-full h-screen z-50 top-0 left-32 fixed bg-primary-900  flex flex-col items-center pr-24 gap-6 md:hidden justify-center ${openMenu ? "translate-x-0" : "translate-x-full "}   transition-transform duration-[400ms] ease-in-out`}>
                <li onClick={handleMobileMenu}><Link href="/cabins">Cabins</Link></li>
                <li onClick={handleMobileMenu}><Link href="about">About</Link></li>
                <li onClick={handleMobileMenu}><Link href="account">Guest area</Link></li>
            </ul>
            <ul className="hidden md:flex flex-row gap-16 text-xl font-semibold z-10">
                <li><Link href="/cabins">Cabins</Link></li>
                <li><Link href="about">About</Link></li>
                <li><Link href="account">Guest area</Link></li>
            </ul>
            <button className="translate-x-3 md:hidden text-3xl z-50" onClick={handleMobileMenu}>{openMenu ? "X" : "☰"}</button>
        </>

    )
}