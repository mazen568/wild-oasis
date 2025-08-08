import React from 'react'
import SideNavigation from '../_components/SideNavigation'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='grid grid-cols-[13rem_1fr] min-h-screen'>
            <SideNavigation />
            <div className='p-8'>{children}</div>

        </div>
    )
}
