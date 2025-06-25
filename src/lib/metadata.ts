import { Metadata } from 'next'

const siteConfig = {
  siteName: process.env.NEXT_PUBLIC_APP_NAME,
  siteDescription: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
  links: {
    discord: 'https://discord.gg/VUMVuArkst',
    twitter: '@nsgpriyanshu',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    ogImage: '/assets/og_main.png',
    twitterImage: '/assets/og_main.png',
  },
}

export const generateMetadata = ({
  title = `${siteConfig.siteName}`,
  description = siteConfig.siteDescription,
  image = siteConfig.links.ogImage,
  icons = [
    {
      rel: 'apple-touch-icon',
      sizes: '32x32',
      url: '/icons/favicon.ico',
    },
    {
      rel: 'icon',
      sizes: '32x32',
      url: '/icons/favicon.ico',
    },
  ],
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string | null
  icons?: Metadata['icons']
  noIndex?: boolean
} = {}): Metadata => {
  // Ensure absolute URLs for OG and Twitter images
  const baseUrl = siteConfig.links.siteUrl
  const ogImageUrl = image
    ? image.startsWith('http')
      ? image
      : `${baseUrl}${image}`
    : `${baseUrl}${siteConfig.links.ogImage}`
  const twitterImageUrl = image
    ? image.startsWith('http')
      ? image
      : `${baseUrl}${image}`
    : `${baseUrl}${siteConfig.links.twitterImage}`

  return {
    title,
    description,
    icons,
    ...(noIndex && { robots: { index: false, follow: false } }),
    openGraph: {
      title: siteConfig.siteName,
      description: siteConfig.siteDescription,
      url: baseUrl,
      type: 'website',
      locale: 'en_US',
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
      images: [
        {
          url: twitterImageUrl,
          alt: siteConfig.siteName,
        },
      ],
      site: siteConfig.links.twitter,
      creator: siteConfig.links.twitter,
    },
  }
}
