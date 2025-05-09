import { Metadata } from 'next'

const siteConfig = {
  siteName: `${process.env.NEXT_PUBLIC_APP_NAME} | nsMail`,
  siteDescription: 'An easier way to create contact pages!',
  links: {
    siteUrl: 'https://contact-priyanshu-ps.vercel.app/',
    ogImage: 'https://contact-priyanshu-ps.vercel.app/images/preview.png',
    twitterImage: 'https://contact-priyanshu-ps.vercel.app/images/preview.png',
    twitter: '@nsmail',
  },
}

export const generateMetadata = ({
  title = `${process.env.NEXT_PUBLIC_APP_NAME} - Home`,
  description = `An easier way to create contact pages!`,
  image = '/thumbnail.png',
  icons = [
    {
      rel: 'apple-touch-icon',
      sizes: '32x32',
      url: '/icons/icon-polka.png',
    },
    {
      rel: 'icon',
      sizes: '32x32',
      url: '/icons/icon-polka.png',
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
