'use client'

import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/dashboard/app-sidebar'
import { Breadcrumbs } from '@/components/dashboard/breadcrumbs'
import { useAuth, RedirectToSignIn } from '@clerk/nextjs'
import React from 'react'
import { base, heading } from '@/constants/fonts'
import { cn } from '@/lib'
import { ThemeProvider } from '@/components/global/theme-provider'
import { ModeToggle } from '@/components/global/theme-toggle'

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
          'font-base min-h-screen overflow-x-hidden bg-[#101010] text-foreground antialiased',
          base.variable,
          heading.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="m-2 mx-auto max-w-screen-2xl md:rounded-xl md:border">
              <div className="m-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <SidebarTrigger />
                  <Breadcrumbs />
                </div>

                {/* Theme Toggle with Margin */}
                <div className="ml-4">
                  <ModeToggle />
                </div>
              </div>

              {children}
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
