import { Metadata } from 'next'

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
})

