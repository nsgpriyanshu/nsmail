import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL!
const CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET!

export async function POST(req: NextRequest) {
  const headers = req.headers
  const body = await req.text() // Read raw body for signature verification

  // Verify Clerk Webhook Signature
  const clerkSignature = headers.get('clerk-signature')
  if (!clerkSignature || !validateSignature(body, clerkSignature, CLERK_WEBHOOK_SECRET)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  const payload = JSON.parse(body)
  const { type, data } = payload

  if (!['user.created', 'user.updated', 'user.deleted'].includes(type)) {
    return NextResponse.json({ message: 'Ignored event type' }, { status: 400 })
  }

  const username = data?.username || 'Unknown User'
  const email = data?.email_addresses?.[0]?.email_address || 'No Email'

  let messageContent = ''

  switch (type) {
    case 'user.created':
      messageContent = `🎉 **New User Registered!** 🎉\n👤 **Username:** ${username}\n📧 **Email:** ${email}`
      break
    case 'user.updated':
      messageContent = `🔄 **User Updated!** 🔄\n👤 **Username:** ${username}\n📧 **Email:** ${email}`
      break
    case 'user.deleted':
      messageContent = `❌ **User Deleted!** ❌\n👤 **Username:** ${username}\n📧 **Email:** ${email}`
      break
  }

  await fetch(DISCORD_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: messageContent }),
  })

  return NextResponse.json({ message: 'Notification sent to Discord' }, { status: 200 })
}

// 🔒 Signature Verification Function
function validateSignature(payload: string, signature: string, secret: string): boolean {
  const computedSignature = crypto.createHmac('sha256', secret).update(payload).digest('hex')
  return computedSignature === signature
}
