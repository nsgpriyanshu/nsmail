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
  return <main className="relative w-full">{children}</main>
}
