import { Metadata } from 'next'
import { generateOgUrl } from '@/lib/og'
import Beams from '@/components/beams'

export const metadata: Metadata = {
  title: 'Contact - Reach Out for Support, Feedback, or Inquiries',
  description:
    'Need help or have a suggestion? Reach out to the nsMail team for support, feedback, or general inquiries.',
  openGraph: {
    title: 'Contact - Reach Out for Support, Feedback, or Inquiries',
    description:
      'Need help or have a suggestion? Reach out to the nsMail team for support, feedback, or general inquiries.',
    url: 'https://nsmail.vercel.app/contact',
    siteName: 'nsMail',
    type: 'website',
    images: [
      {
        url: generateOgUrl('Contact nsMail', 'Reach Out for Support, Feedback, or Inquiries'),
        width: 1200,
        height: 630,
        alt: 'Contact OG Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact - Reach Out for Support, Feedback, or Inquiries',
    description:
      'Need help or have a suggestion? Reach out to the nsMail team for support, feedback, or general inquiries.',
    images: [generateOgUrl('Contact nsMail', 'Reach Out for Support, Feedback, or Inquiries')],
  },
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen w-full">
      <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <Beams
          beamWidth={2}
          beamHeight={30}
          beamNumber={12}
          lightColor="#fdd017"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={45}
        >
          {children}
        </Beams>
      </div>
    </main>
  )
}
