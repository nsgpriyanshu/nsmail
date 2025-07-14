import { Metadata } from 'next'

import { generateOgUrl } from '@/lib/og'
import Beams from '@/components/beams'

export const metadata: Metadata = {
  title: `Guide - Step-by-Step Instructions and Resources`,
  description:
    'Explore comprehensive guides, tutorials, and resources to help you get started and master nsMail.',
  openGraph: {
    title: `Guide - Step-by-Step Instructions and Resources`,
    description:
      'Explore comprehensive guides, tutorials, and resources to help you get started and master nsMail.',
    url: 'https://nsmail.vercel.app/guide',
    siteName: 'nsMail',
    images: [
      {
        url: generateOgUrl(
          'Guides & Tutorials',
          'Step-by-step instructions and helpful resources for nsMail',
        ),
        width: 1200,
        height: 630,
        alt: 'Guide OG Image',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guide - Step-by-Step Instructions and Resources',
    description:
      'Explore comprehensive guides, tutorials, and resources to help you get started and master nsMail.',
    images: [
      generateOgUrl(
        'Guides & Tutorials',
        'Step-by-step instructions and helpful resources for nsMail',
      ),
    ],
  },
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Beams
          beamWidth={1}
          beamHeight={30}
          beamNumber={20}
          lightColor="#fdd017"
          speed={10}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={45}
        />
      </div>
      {children}
    </div>
  )
}
