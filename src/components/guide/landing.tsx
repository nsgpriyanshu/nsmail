'use client'

import { motion } from 'framer-motion'
import { Separator } from '@/components/ui/separator'
import { AlertTriangle, CheckCircle2, Info, Terminal, Code, Github, Heart } from 'lucide-react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function Guide() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="relative min-h-screen py-16">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="border-border mx-auto max-w-3xl rounded-[40px] border bg-black/10 px-6 shadow-lg backdrop-blur-md dark:bg-white/5"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12 py-12"
        >
          {/* Introduction */}
          <motion.section variants={sectionVariants} className="space-y-4">
            <h1 className="text-foreground text-4xl font-bold tracking-tight">nsMail Guide</h1>
            <p className="text-muted-foreground text-lg">
              A secure, database-free contact form solution using Discord webhooks.
            </p>

            <Alert variant="destructive">
              <AlertTriangle className="text-destructive h-5 w-5" />
              <AlertTitle>Important</AlertTitle>
              <AlertDescription>
                nsMail is designed for personal use. Make sure to update the Discord webhook URL in
                your <code>.env.local</code> file.
              </AlertDescription>
            </Alert>
          </motion.section>

          <Separator className="bg-border" />

          {/* Features */}
          <motion.section variants={sectionVariants} className="space-y-4">
            <h2 className="text-foreground text-2xl font-semibold">Features</h2>
            <ul className="text-muted-foreground space-y-2">
              {[
                'Responsive design for seamless use across devices.',
                'Sleek, modern UI with glassmorphic styling.',
                'Dark and light mode support.',
                'Secure message storage via Discord webhooks.',
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          <Separator className="bg-border" />

          {/* Technologies Used */}
          <motion.section variants={sectionVariants} className="space-y-4">
            <h2 className="text-foreground text-2xl font-semibold">Technologies Used</h2>
            <ul className="text-muted-foreground space-y-2">
              <li>
                <strong className="text-foreground">Next.js</strong>: App Router for fast SSR.
              </li>
              <li>
                <strong className="text-foreground">Shadcn UI</strong>: Beautiful, accessible
                components.
              </li>
              <li>
                <strong className="text-foreground">Discord Webhooks</strong>: Message storage with
                no DB.
              </li>
              <li>
                <strong className="text-foreground">TypeScript</strong>: Type safety in development.
              </li>
              <li>
                <strong className="text-foreground">Zod</strong>: Input validation schemas.
              </li>
            </ul>
          </motion.section>

          <Separator className="bg-border" />

          {/* Getting Started */}
          <motion.section variants={sectionVariants} className="space-y-4">
            <h2 className="text-foreground text-2xl font-semibold">Getting Started</h2>
            <p className="text-muted-foreground">
              Follow these steps to set up nsMail manually for local development or deployment.
            </p>
            <ol className="text-muted-foreground list-decimal space-y-4 pl-6">
              <li>
                Create a new Next.js project:
                <SyntaxHighlighter
                  language="bash"
                  style={github}
                  className="mt-2 rounded-lg text-sm"
                >
                  {`npx create-next-app@latest nsmail --typescript --tailwind --app --no-eslint --src-dir --import-alias "@/*"`}
                </SyntaxHighlighter>
                <p className="text-muted-foreground mt-2 text-sm">
                  Follow the prompts to set up the project with TypeScript and Tailwind CSS.
                </p>
              </li>
              <li>
                Install dependencies:
                <SyntaxHighlighter
                  language="bash"
                  style={github}
                  className="mt-2 rounded-lg text-sm"
                >
                  {`cd nsmail\nnpm install zod lucide-react sonner framer-motion react-syntax-highlighter @radix-ui/react-alert @radix-ui/react-separator`}
                </SyntaxHighlighter>
                <p className="text-muted-foreground mt-2 text-sm">Install Shadcn UI components:</p>
                <SyntaxHighlighter
                  language="bash"
                  style={github}
                  className="mt-2 rounded-lg text-sm"
                >
                  {`npx shadcn-ui@latest init\nnpx shadcn-ui@latest add button input textarea separator alert`}
                </SyntaxHighlighter>
              </li>
              <li>
                Create the API route:
                <p className="text-muted-foreground mt-2 text-sm">
                  Create a file at `app/api/contact/route.ts` with the following code:
                </p>
                <SyntaxHighlighter
                  language="typescript"
                  style={github}
                  className="mt-2 rounded-lg text-sm"
                >
                  {`import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }).max(100),
  email: z.string().email({ message: 'Invalid email address' }).max(255),
  message: z.string().min(1, { message: 'Message is required' }).max(2000),
  attachment: z
    .any()
    .optional()
    .refine(
      (file) => {
        if (!file) return true;
        if (!(file instanceof File)) return false;
        return file.size <= 8 * 1024 * 1024;
      },
      { message: 'Attachment must be a valid file under 8MB' },
    ),
})

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL
  const discordUserId = process.env.DISCORD_USER_ID

  if (!webhookUrl || !discordUserId) {
    return NextResponse.json(
      { message: 'Server configuration error', details: 'Missing DISCORD_WEBHOOK_URL or DISCORD_USER_ID' },
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

    const validatedData = await formSchema.parseAsync(rawData)

    const discordMessage = {
      content: \`<@\${discordUserId}> New contact form submission received!\\n\\n-------------------------------\\n\\n**Name:** \${validatedData.name}\\n**Email:** \${validatedData.email}\\n**Message:** \${validatedData.message}\${validatedData.attachment ? \`\\n**Attachment:** \${validatedData.attachment.name}\` : ''}\\n\\n-------------------------------\`,
    }

    const discordFormData = new FormData()
    discordFormData.append('payload_json', JSON.stringify(discordMessage))
    if (validatedData.attachment instanceof File) {
      discordFormData.append('file', validatedData.attachment, validatedData.attachment.name)
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      body: discordFormData,
      signal: AbortSignal.timeout(5000),
    })

    if (!response.ok) {
      throw new Error(\`Failed to send message to Discord: \${response.status}\`)
    }

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Invalid form data', errors: error.errors.map((e) => ({ path: e.path, message: e.message })) },
        { status: 400 },
      )
    }
    return NextResponse.json({ message: 'Failed to process request', error: String(error) }, { status: 500 })
  }
}`}
                </SyntaxHighlighter>
              </li>
              <li>
                Set up environment variables:
                <p className="text-muted-foreground mt-2 text-sm">
                  Create a <code>.env.local</code> file in the project root:
                </p>
                <SyntaxHighlighter
                  language="bash"
                  style={github}
                  className="mt-2 rounded-lg text-sm"
                >
                  {`DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/your-webhook-id/your-webhook-token\nDISCORD_USER_ID=your-discord-user-id`}
                </SyntaxHighlighter>
                <p className="text-muted-foreground mt-2 text-sm">
                  See the Configuration section for details on obtaining these values.
                </p>
              </li>
              <li>
                Run the development server:
                <SyntaxHighlighter
                  language="bash"
                  style={github}
                  className="mt-2 rounded-lg text-sm"
                >
                  {`npm run dev`}
                </SyntaxHighlighter>
              </li>
            </ol>
          </motion.section>

          <Separator className="bg-border" />

          {/* Configuration */}
          <motion.section variants={sectionVariants} className="space-y-4">
            <h2 className="text-foreground text-2xl font-semibold">Configuration</h2>
            <Alert>
              <Terminal className="h-4 w-4 text-blue-500" />
              <AlertTitle>Tip</AlertTitle>
              <AlertDescription>
                Keep your <code>.env.local</code> file secure and never push it to GitHub.
              </AlertDescription>
            </Alert>

            <h3 className="text-foreground text-lg font-medium">1. Create a Discord Webhook</h3>
            <ol className="text-muted-foreground list-decimal space-y-2 pl-6">
              <li>Edit a channel in your Discord server.</li>
              <li>Go to Integrations → Create Webhook.</li>
              <li>Copy the webhook URL.</li>
            </ol>

            <h3 className="text-foreground text-lg font-medium">2. Obtain Your Discord User ID</h3>
            <ol className="text-muted-foreground list-decimal space-y-2 pl-6">
              <li>Enable Developer Mode in Discord (Settings → Appearance → Developer Mode).</li>
              <li>Right-click your username and select “Copy ID”.</li>
            </ol>
          </motion.section>

          <Separator className="bg-border" />

          {/* Usage */}
          <motion.section variants={sectionVariants} className="space-y-4">
            <h2 className="text-foreground text-2xl font-semibold">Usage</h2>
            <p className="text-muted-foreground">
              Fill out the form and submit. It will send a message to your Discord server.
            </p>
            <SyntaxHighlighter language="markdown" style={github} className="rounded-lg text-sm">
              {`<@your-discord-user-id> New contact form submission received!

-------------------------------
**Name:** Misty
**Email:** misty@ps.com
**Message:** Hello, I have a question!
**Attachment:** hello-ps.pdf
-------------------------------`}
            </SyntaxHighlighter>
          </motion.section>

          <Separator className="bg-border" />

          {/* Built By */}
          <motion.section variants={sectionVariants} className="space-y-4">
            <h2 className="text-foreground text-2xl font-semibold">Built By</h2>
            <div className="flex items-center gap-2">
              <Code className="text-primary h-5 w-5" />
              <p className="text-muted-foreground">
                nsMail was crafted by{' '}
                <span className="text-primary font-semibold">ŊʂƓ PRIYANSHU</span>, a passionate
                developer and creator.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Github className="text-primary h-5 w-5" />
              <p className="text-muted-foreground">
                nsMail is open source! Check out the source code on{' '}
                <a
                  href="https://github.com/nsgpriyanshu/nsmail"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                .
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="text-primary h-5 w-5" />
              <p className="text-muted-foreground">
                Contributions are welcome! Feel free to submit issues or pull requests to improve
                nsMail.
              </p>
            </div>
          </motion.section>

          <Separator className="bg-border" />

          {/* Acknowledgements */}
          <motion.section variants={sectionVariants} className="space-y-4">
            <h2 className="text-foreground text-2xl font-semibold">Acknowledgements</h2>
            <p className="text-muted-foreground">Big thanks to:</p>
            <ul className="text-muted-foreground space-y-2">
              <li>
                <a
                  href="https://nextjs.org"
                  className="text-primary hover:underline"
                  target="_blank"
                >
                  Next.js
                </a>
              </li>
              <li>
                <a
                  href="https://ui.shadcn.com"
                  className="text-primary hover:underline"
                  target="_blank"
                >
                  Shadcn UI
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com"
                  className="text-primary hover:underline"
                  target="_blank"
                >
                  Discord
                </a>
              </li>
            </ul>
          </motion.section>
        </motion.div>
      </motion.div>
    </div>
  )
}
