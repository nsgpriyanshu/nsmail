import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'
import { Geist_Mono } from 'next/font/google'
import { generateMetadata } from '@/lib/metadata'

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = generateMetadata()

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `${geistMono.variable} dark:text-foreground dark:bg-background min-h-screen overflow-x-hidden font-mono antialiased`,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster richColors theme="dark" position="bottom-center" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
