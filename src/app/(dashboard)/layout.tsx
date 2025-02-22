'use client'

import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/dashboard/app-sidebar'
import { Breadcrumbs } from '@/components/dashboard/breadcrumbs'
import { Metadata } from 'next'
import { useAuth, RedirectToSignIn } from '@clerk/nextjs'
import React from 'react'

// export const metadata: Metadata = {
//   title: `${process.env.NEXT_PUBLIC_APP_NAME} | Dashboard`,
//   description: 'Access and manage all your study materials in one place. Upload, download, and organize your notes effortlessly with NotEase.'
// }

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isSignedIn } = useAuth()

  // Redirect unauthenticated users to sign-in page
  if (!isSignedIn) {
    return <RedirectToSignIn />
  }

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
