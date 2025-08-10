"use client"
import React, { ReactNode } from 'react'
import Link from 'next/link'
type ErrorProps={
    children:ReactNode
    reset?:()=>void
}

export default function Error({children,reset}:ErrorProps) {
    console.log("children",children);
    
  return (
<div className="flex flex-col items-center justify-center gap-4">

<h1 className="text-2xl font-bold">Something went wrong!</h1>
<p>{children}</p>
{reset?<button 
  className="bg-accent-500 text-primary-800 py-2 px-4 font-bold text-sm rounded-sm"
  onClick={reset}
  >
    Try again
</button>:<Link 
  className="bg-accent-500 text-primary-800 py-2 px-4 font-bold text-sm rounded-sm"
  href="/"
  >
    Go back home
</Link>}

</div>  )
}
