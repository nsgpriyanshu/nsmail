'use client'

import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/dashboard/app-sidebar'
import { Breadcrumbs } from '@/components/dashboard/breadcrumbs'
import { Metadata } from 'next'
import { useAuth, RedirectToSignIn } from '@clerk/nextjs'
import React from 'react'
import { base, heading } from '@/constants/fonts'
import { cn } from '@/lib'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isSignedIn } = useAuth()

  // Redirect unauthenticated users to sign-in page
  if (!isSignedIn) {
    return <RedirectToSignIn />
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'font-base dark min-h-screen overflow-x-hidden bg-[#101010] text-foreground antialiased',
          base.variable,
          heading.variable,
        )}
      >
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="m-2 mx-auto max-w-screen-2xl md:rounded-xl md:border">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <Breadcrumbs />
            </div>
            {children}
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  )
}
