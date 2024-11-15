import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Footer from '@/components/Footer'
import { ThemeProvider } from 'next-themes'
import { Toaster } from '@/components/ui/toaster'
import { clsx } from 'clsx'

const hubot = localFont({
  src: './fonts/HubotSans.woff',
  variable: '--font-hubot',
  weight: '400 900',
  display: 'swap'
})

const siteName = 'contac@priyanshu'
const siteDescription = "It's the personal contact form of priyanshu"
const twitter = 'https://twitter.com/nsgpriyanshu'
const siteUrl = 'https://contact-priyanshu-ps.vercel.app'
const ogImage = `https://contact-priyanshu-ps.vercel.app/preview.png`
const twitterImage = `https://contact-priyanshu-ps.vercel.app/preview.png`

export const viewport: Viewport = {
  themeColor: '#1c1917',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://contact-priyanshu-ps.vercel.app'),
  title: {
    template: `%s - ${siteName}`,
    default: siteName,
  },
  description: siteDescription,
  keywords: 'Discord, contact from, data store, nextjs, web',
  creator: 'nsgpriyanshu',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    type: 'website',
    locale: 'en_US',
    siteName: siteName,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: twitterImage,
        alt: siteName,
      },
    ],
    site: twitter,
    creator: twitter,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={hubot.variable}>
      <body
        className={clsx(
          "font-sans antialiased selection:bg-violet-600/90 dark:bg-[#1c1917] dark:text-rose-100/90",
        )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <svg
            className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light"
            width="100%"
            height="100%"
          >
            <filter id="noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.80"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
          {children}
          <Footer />
          <Toaster />
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="h-full bg-top bg-no-repeat opacity-[0.3] dark:bg-[url('https://res.cloudinary.com/delba/image/upload/h_500/bg_gradient_pfosr9')]" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
