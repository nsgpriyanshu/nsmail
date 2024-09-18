import { NextRequest, NextResponse } from 'next/server'

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  if (!DISCORD_WEBHOOK_URL) {
    return NextResponse.json(
      { success: false, message: 'Discord Webhook URL is not defined' },
      { status: 500 },
    )
  }

  const discordMessage = {
    content: `**New Contact Form Submission**\n\n**Name:** ${name}\n**Email:** ${email}\n**Message:**\n${message}`,
  }

  try {
    const discordResponse = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(discordMessage),
    })

    if (discordResponse.ok) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json(
        { success: false, message: 'Failed to send message to Discord' },
        { status: 500 },
      )
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Error sending message to Discord' },
      { status: 500 },
    )
  }
}
