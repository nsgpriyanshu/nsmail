import { FlickeringGrid } from '@/components/ui/flick-grid'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Guide - Step-by-Step Instructions and Resources`,
  description:
    'Explore comprehensive guides, tutorials, and resources to help you get started and master our platform.',
  openGraph: {
    title: `Guide - Step-by-Step Instructions and Resources`,
    description:
      'Explore comprehensive guides, tutorials, and resources to help you get started and master our platform.',
    images: [
      {
        url: '/assets/og_guide.png',
        width: 1200,
        height: 630,
        alt: 'Guide Open Graph Image',
      },
    ],
  },
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return <main className="relative w-full">{children}</main>
}
