import { NextResponse } from 'next/server'

export async function GET() {
  const robotsTxt = `
User-agent: *
Disallow: /dashboard
Disallow: /dashboard/*
Disallow: /profile
Disallow: /announcements
Disallow: /exclusive
Disallow: /notes
Disallow: /notes/*
Sitemap: https://notease-ps.vercel.app/sitemap.xml
`

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
