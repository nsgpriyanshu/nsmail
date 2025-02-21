import { Sidebar, SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/dashboard/app-sidebar'
import React from 'react'
import { Breadcrumbs } from '@/components/dashboard/breadcrumbs'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <SidebarInset>
          <main className="font-base min-h-screen w-full flex-1 overflow-x-hidden bg-[#101010] text-foreground antialiased">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <Breadcrumbs />
            </div>
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
