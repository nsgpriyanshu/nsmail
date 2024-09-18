import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Footer from '@/components/Footer'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

const siteName = 'contac@priyanshu'
const siteDescription = "It's the personal contact form of nsgpriyanshu"
const twitter = 'https://twitter.com/nsgpriyanshu'
const siteUrl = 'https://nsgpriyanshu.github.io/contact-priyanshu/'
const ogImage = `${siteUrl}preview.png`
const twitterImage = `${siteUrl}preview.png`

export const metadata: Metadata = {
  metadataBase: new URL('https://nsgpriyanshu.github.io/contact-priyanshu/'),
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
