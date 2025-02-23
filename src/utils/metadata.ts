import { Metadata } from 'next'

const siteConfig = {
  siteName: `${process.env.NEXT_PUBLIC_APP_NAME}`,
  siteDescription: 'Simplify Your Studies with Quality Notes',
  links: {
    siteUrl: 'https://notease-ps.vercel.app/',
    ogImage: 'https://notease-ps.vercel.app/images/preview.png',
    twitterImage: 'https://notease-ps.vercel.app/images/preview.png',
    twitter: '@notease',
  },
}

export const generateMetadata = ({
  title = `${process.env.NEXT_PUBLIC_APP_NAME} | Home`,
  description = `Simplify Your Studies with Quality Notes`,
  image = '/thumbnail.png',
  icons = [
    {
      rel: 'apple-touch-icon',
      sizes: '32x32',
      url: '/icons/logo.png',
    },
    {
      rel: 'icon',
      sizes: '32x32',
      url: '/icons/logo.png',
    },
  ],
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string | null
  icons?: Metadata['icons']
  noIndex?: boolean
} = {}): Metadata => ({
  title,
  description,
  icons,
  ...(noIndex && { robots: { index: false, follow: false } }),

  openGraph: {
    title: siteConfig.siteName,
    description: siteConfig.siteDescription,
    url: siteConfig.links.siteUrl,
    type: 'website',
    locale: 'en_US',
    siteName: siteConfig.siteName,
    images: [
      {
        url: siteConfig.links.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.siteName,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: siteConfig.siteName,
    description: siteConfig.siteDescription,
    images: [
      {
        url: siteConfig.links.twitterImage,
        alt: siteConfig.siteName,
      },
    ],
    site: siteConfig.links.twitter,
    creator: siteConfig.links.twitter,
  },
})
