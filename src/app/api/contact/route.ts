import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Define schema for input validation
const formSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address').max(255),
  message: z.string().min(1, 'Message is required').max(2000),
  attachment: z
    .instanceof(File)
    .optional()
    .refine(
      file => {
        if (!file) return true // Attachment is optional
        return file.size <= 100 * 1024 * 1024 // 100MB max
      },
      { message: 'Attachment size must be less than 100 MB.' },
    ),
})

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL
  const discordUserId = process.env.DISCORD_USER_ID

  if (!webhookUrl) {
    return NextResponse.json({ message: 'Server configuration error' }, { status: 500 })
  }

  try {
    const formData = await req.formData()
    const rawData = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      message: formData.get('message')?.toString() || '',
      attachment: formData.get('attachment'),
    }

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

    const response = await fetch(webhookUrl, {
      method: 'POST',
      body: discordFormData,
      signal: AbortSignal.timeout(5000), // 5-second timeout
    })

    if (!response.ok) {
      throw new Error(`Failed to send message to Discord: ${response.statusText}`)
    }

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Invalid form data', errors: error.errors },
        { status: 400 },
      )
    }

    console.error('Error processing contact form:', error)
    return NextResponse.json({ message: 'Failed to process request' }, { status: 500 })
  }
}
