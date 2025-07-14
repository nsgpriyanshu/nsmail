import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function handler(req: Request) {
  const { searchParams } = new URL(req.url)

  const title = searchParams.get('title') || 'nsMail'
  const description = searchParams.get('description') || 'An easier way to create contact pages!.'
  const logoUrl = 'https://nsmail.vercel.app/icons/logo.png'

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(to right, #1F1C2C, #928DAB)',
          width: '100%',
          height: '100%',
          padding: '60px',
          color: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <img
          src={logoUrl}
          width={100}
          height={100}
          alt="NSMail Logo"
          style={{
            borderRadius: 12,
            marginBottom: 40,
          }}
        />
        <h1 style={{ fontSize: 60, fontWeight: 700 }}>{title}</h1>
        <p style={{ fontSize: 28, maxWidth: 800, marginTop: 20 }}>{description}</p>
      </div>
    ),
    { ...size },
  )
}
