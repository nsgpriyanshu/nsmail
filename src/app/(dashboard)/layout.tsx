import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/dashboard-sidebar/app-sidebar'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <SidebarInset>
          <main className="font-base min-h-screen w-full flex-1 overflow-x-hidden bg-[#101010] text-foreground antialiased">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
