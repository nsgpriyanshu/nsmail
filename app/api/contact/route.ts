import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

/* ----------------------------- validation ----------------------------- */

const formSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name must be 100 characters or less'),
  email: z.string().email('Invalid email address').max(255, 'Email must be 255 characters or less'),
  message: z
    .string()
    .min(1, 'Message is required')
    .max(2000, 'Message must be 2000 characters or less'),
  attachment: z
    .any()
    .optional()
    .refine(
      file => {
        if (!file) return true
        if (!(file instanceof File)) return false
        return file.size <= 50 * 1024 * 1024 // 50MB
      },
      { message: 'Attachment must be under 50MB' },
    ),
})

/* ------------------------------- handler ------------------------------ */

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL
  const discordUserId = process.env.DISCORD_USER_ID

  if (!webhookUrl || !discordUserId) {
    return NextResponse.json({ message: 'Server misconfigured' }, { status: 500 })
  }

  try {
    const formData = await req.formData()

    const raw = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      message: String(formData.get('message') ?? ''),
      attachment: formData.get('attachment') ?? undefined,
    }

    const validated = await formSchema.parseAsync(raw)

    /* --------------------------- discord embed --------------------------- */

    const embed = {
      title: 'New Contact Form Submission',
      color: 0xf10a0a, //f10a0a
      description: [
        `**Name:** \`${validated.name}\``,
        `**Email:** \`${validated.email}\``,
        '',
        '**Message:**',
        validated.message,
      ].join('\n'),
      timestamp: new Date().toISOString(),
    }

    const payload = {
      content: `<@${discordUserId}>`,
      embeds: [embed],
    }

    const discordForm = new FormData()
    discordForm.append('payload_json', JSON.stringify(payload))

    if (validated.attachment instanceof File) {
      discordForm.append('file', validated.attachment, validated.attachment.name)
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      body: discordForm,
      signal: AbortSignal.timeout(5000),
    })

    if (!response.ok) {
      const text = await response.text()
      throw new Error(text)
    }

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: 'Validation failed',
          errors: error.issues.map(e => ({
            path: e.path,
            message: e.message,
          })),
        },
        { status: 400 },
      )
    }

    console.error('Contact API error:', error)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}
