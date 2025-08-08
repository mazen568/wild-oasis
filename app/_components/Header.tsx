"use client"
import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import { usePathname } from 'next/navigation';
export default function Header() {
  const pathName=usePathname();  
  return (
    <div className='z-10'>
        <header className={`flex items-center justify-between px-8 py-4 mx-auto max-w-7xl ${pathName==="/"?"":"border-b-[1px] border-primary-800"}`}>
          <Logo/>
          <Navigation />
        </header>
    </div>
  )
}
