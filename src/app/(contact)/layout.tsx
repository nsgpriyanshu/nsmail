import { FlickeringGrid } from '@/components/ui/flick-grid'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Contact - Reach Out for Support, Feedback, or Inquiries`,
  description: 'Get in touch with me, I am here for support, feedback, or any inquiries.',
  openGraph: {
    title: `Contact - Reach Out for Support, Feedback, or Inquiries`,
    description: 'Get in touch with me, I am here for support, feedback, or any inquiries.',
    images: [
      {
        url: '/assets/og_main.png',
        width: 1200,
        height: 630,
        alt: 'Open Graph Image',
      },
    ],
  },
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative w-full">
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        color="oklch(0.56 0 0)"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={typeof window !== 'undefined' ? window.innerHeight : 0}
        width={typeof window !== 'undefined' ? window.innerWidth : 0}
      />
      {children}
    </main>
  )
}
