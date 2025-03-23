import { Toaster } from '@/components/ui/sonner'
import { base, heading } from '@/constants/fonts'
import { cn } from '@/lib'
import '@/styles/globals.css'
import { generateMetadata } from '@/utils'

export const metadata = generateMetadata()

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'font-base dark min-h-screen overflow-x-hidden bg-[#101010] text-foreground antialiased',
          base.variable,
          heading.variable,
        )}
      >
        <Toaster richColors theme="dark" position="bottom-center" />
        {children}
      </body>
    </html>
  )
}
