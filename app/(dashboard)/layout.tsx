import BreadcrumHeader from '@/components/breadcrumheader'
import { AppProvider } from '@/components/providers/appProviders'
import DesktopSidebar from '@/components/sidebar'
import { ModeToggle } from '@/components/themeModeToggle'
import { Separator } from '@/components/ui/separator'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex h-screen'>
            <DesktopSidebar />
            <div className="flex flex-col flex-1 min-h-screen">
                <header className='flex items-center justify-between py-4 px-6 h-[50px] container'><BreadcrumHeader />
                <div className='gap-1 flex items-center '>
                    <ModeToggle/>
                </div>
                </header>
                <Separator />
                <div className="overflow-auto">
                    <div className="flex-1 container py-4 text-accent-foreground">
                            {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default layout
