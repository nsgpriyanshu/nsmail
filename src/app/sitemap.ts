import { NextResponse } from 'next/server'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourwebsite.com'

export async function GET() {
  const staticPages = [
    '', // Homepage
    'signin',
    'signup',
    'pricing',
    'testimonials',
  ]

  const sitemapEntries = staticPages
    .map(page => `<url><loc>${SITE_URL}/${page}</loc></url>`)
    .join('')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
