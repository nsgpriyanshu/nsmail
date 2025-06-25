import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Define schema for input validation
const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .max(100, { message: 'Name must be 100 characters or less' }),
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .max(255, { message: 'Email must be 255 characters or less' }),
  message: z
    .string()
    .min(1, { message: 'Message is required' })
    .max(2000, { message: 'Message must be 2000 characters or less' }),
  attachment: z
    .any()
    .optional()
    .refine(
      file => {
        if (!file) return true // No attachment is okay
        if (!(file instanceof File)) return false
        return file.size <= 8 * 1024 * 1024 // 8MB max
      },
      { message: 'Attachment must be a valid file under 8MB' },
    ),
})

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL
  const discordUserId = process.env.DISCORD_USER_ID // No fallback to avoid confusion

  // Debug environment variables
  console.log('DISCORD_WEBHOOK_URL:', webhookUrl ? 'Set' : 'Undefined')
  console.log('DISCORD_USER_ID:', discordUserId ? 'Set' : 'Undefined')

  if (!webhookUrl || !discordUserId) {
    return NextResponse.json(
      {
        message: 'Server configuration error',
        details: 'Missing DISCORD_WEBHOOK_URL or DISCORD_USER_ID',
      },
      { status: 500 },
    )
  }

  try {
    const formData = await req.formData()
    const rawData = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      message: formData.get('message')?.toString() || '',
      attachment: formData.get('attachment') || undefined,
    }

    // Debug incoming form data
    console.log('Raw form data:', {
      name: rawData.name,
      email: rawData.email,
      message: rawData.message,
      attachment:
        rawData.attachment instanceof File
          ? `${rawData.attachment.name} (${rawData.attachment.size} bytes)`
          : 'None',
    })

    // Validate form data
    const validatedData = await formSchema.parseAsync(rawData)

    // Prepare Discord message with user ping
    const discordMessage = {
      content: `<@${discordUserId}> New contact form submission received!\n\n-------------------------------\n\n**Name:** ${validatedData.name}\n**Email:** ${validatedData.email}\n**Message:** ${validatedData.message}${
        validatedData.attachment ? `\n**Attachment:** ${validatedData.attachment.name}` : ''
      }\n\n-------------------------------`,
    }

    // Create FormData for Discord webhook
    const discordFormData = new FormData()
    discordFormData.append('payload_json', JSON.stringify(discordMessage))

    // Add attachment if present
    if (validatedData.attachment instanceof File) {
      discordFormData.append('file', validatedData.attachment, validatedData.attachment.name)
    }

    // Send to Discord webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      body: discordFormData,
      signal: AbortSignal.timeout(5000), // 5-second timeout
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Failed to send message to Discord: ${response.status} ${errorText}`)
    }

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log('Zod validation errors:', error.errors)
      return NextResponse.json(
        {
          message: 'Invalid form data',
          errors: error.errors.map(e => ({ path: e.path, message: e.message })),
        },
        { status: 400 },
      )
    }

    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { message: 'Failed to process request', error: String(error) },
      { status: 500 },
    )
  }
}
