import React from 'react'
type titleProps={
    children:React.ReactNode
}
export default function Title({children}:titleProps) {

  return (
    <h2 className='text-accent-400 text-2xl my-7 font-semibold'>{children}</h2>
  )
}
