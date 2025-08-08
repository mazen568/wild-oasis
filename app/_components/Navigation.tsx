"use client";
import Link from "next/link"

export default function Navigation() {
    return (
        <>
            <ul className="flex flex-row gap-16 text-xl font-semibold">
                <li><Link href="cabins">Cabins</Link></li>
                <li><Link href="about">About</Link></li>
                <li><Link href="account">Guest area</Link></li>
            </ul>
        </>

    )
}