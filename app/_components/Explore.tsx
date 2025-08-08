import Link from 'next/link'
import React from 'react'
type ExploreProps={
    extraStyles?:string
}
export default function Explore({extraStyles}:ExploreProps) {
    return (
        <Link href="cabins" className= {`bg-accent-500 text-primary-800 px-5 py-2 font-bold text-2xl rounded-sm z-10 ${extraStyles}`}>
            Explore luxury cabins
        </Link>
    )
}
