import { Metadata } from 'next'

const siteConfig = {
  siteName: 'ns Mail',
  siteDescription:
    'Send messages to Priyanshu with ease. Connect, collaborate, and communicate efficiently with nsMail.',
  links: {
    discord: 'https://discord.gg/VUMVuArkst',
    twitter: '@nsgpriyanshu',
    siteUrl: 'https://nsmail.vercel.app/',
    ogImage: '/og-main.png',
    twitterImage: '/og-main.png',
  },
}

export const generateMetadata = ({
  title = `${siteConfig.siteName} – ${siteConfig.siteDescription}`,
  description = siteConfig.siteDescription,
  image = siteConfig.links.ogImage,
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string | null
  noIndex?: boolean
} = {}): Metadata => {
  const baseUrl = siteConfig.links.siteUrl

  const ogImageUrl = image?.startsWith('http') ? image : `${baseUrl}${image}`

  return {
    title,
    description,

    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    },

    ...(noIndex && { robots: { index: false, follow: false } }),

    openGraph: {
      title: siteConfig.siteName,
      description: siteConfig.siteDescription,
      url: baseUrl,
      type: 'website',
      siteName: siteConfig.siteName,
      images: [
        {
          url: ogImageUrl,
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
      images: [ogImageUrl],
      site: siteConfig.links.twitter,
      creator: siteConfig.links.twitter,
    },
  }
}
