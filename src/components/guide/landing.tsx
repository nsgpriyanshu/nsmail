'use client'

import { motion } from 'framer-motion'
import { Separator } from '@/components/ui/separator'
import { AlertTriangle, CheckCircle2, Info, Terminal, Code, Github, Heart } from 'lucide-react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import Wrapper from '@/components/global/wrapper'
import AnimationContainer from '@/components/global/animation-container'

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
    <Wrapper className="flex min-h-screen items-center justify-center py-16">
      <AnimationContainer animation="fadeUp" delay={0.2} className="w-full max-w-4xl">
        <div className="border-border bg-card/30 rounded-[40px] border px-8 py-12 shadow-xl backdrop-blur-sm">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {/* Introduction */}
            <motion.section variants={sectionVariants} className="space-y-4">
              <h1 className="text-foreground text-4xl font-bold tracking-tight">nsMail Guide</h1>
              <p className="text-foreground text-lg">
                A secure, database-free contact form solution using Discord webhooks.
              </p>

              <Alert variant="destructive">
                <AlertTriangle className="text-destructive h-5 w-5" />
                <AlertTitle>Important</AlertTitle>
                <AlertDescription>
                  Update the Discord webhook URL in your <code>.env.local</code> file before use.
                </AlertDescription>
              </Alert>
            </motion.section>

            <Separator className="bg-border" />

            {/* Features */}
            <motion.section variants={sectionVariants} className="space-y-4">
              <h2 className="text-foreground text-2xl font-semibold">Features</h2>
              <ul className="text-foreground space-y-2">
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
              <ul className="text-foreground space-y-2">
                <li>
                  <strong className="text-foreground">Next.js</strong>: App Router for fast SSR.
                </li>
                <li>
                  <strong className="text-foreground">Shadcn UI</strong>: Beautiful, accessible
                  components.
                </li>
                <li>
                  <strong className="text-foreground">Discord Webhooks</strong>: Message storage
                  with no DB.
                </li>
                <li>
                  <strong className="text-foreground">TypeScript</strong>: Type safety in
                  development.
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
              <ol className="text-foreground list-decimal space-y-4 pl-6">
                <li>
                  Create a new Next.js project:
                  <SyntaxHighlighter
                    language="bash"
                    style={github}
                    className="mt-2 rounded-lg text-sm"
                  >
                    {`npx create-next-app@latest nsmail --typescript --tailwind --app --no-eslint --src-dir --import-alias "@/*"`}
                  </SyntaxHighlighter>
                </li>
                <li>
                  Install dependencies:
                  <SyntaxHighlighter
                    language="bash"
                    style={github}
                    className="mt-2 rounded-lg text-sm"
                  >
                    {`cd nsmail\nnpm install zod lucide-react sonner framer-motion react-syntax-highlighter`}
                  </SyntaxHighlighter>
                </li>
                <li>
                  Add UI components:
                  <SyntaxHighlighter
                    language="bash"
                    style={github}
                    className="mt-2 rounded-lg text-sm"
                  >
                    {`npx shadcn-ui@latest init\nnpx shadcn-ui@latest add button input textarea separator alert`}
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
                  Keep your <code>.env.local</code> secure and never push it to GitHub.
                </AlertDescription>
              </Alert>
            </motion.section>

            <Separator className="bg-border" />

            {/* Built By */}
            <motion.section variants={sectionVariants} className="space-y-4">
              <h2 className="text-foreground text-2xl font-semibold">Built By</h2>
              {/* <div className="flex items-center gap-2">
                <Code className="text-primary h-5 w-5" />
                <p className="text-foreground">
                  nsMail was crafted by <span className="text-primary font-semibold">ŊʂƓ PRIYANSHU</span>.
                </p>
              </div> */}
              {/* <div className="flex items-center gap-2">
                <Github className="text-primary h-5 w-5" />
                <p className="text-foreground">
                  Open-source on{' '}
                  <a
                    href="https://github.com/nsgpriyanshu/nsmail"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    GitHub
                  </a>.
                </p>
              </div> */}
              <div className="flex items-center gap-2">
                <Heart className="text-primary h-5 w-5" />
                <p className="text-foreground">
                  Contributions welcome! Submit issues or pull requests.
                </p>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </AnimationContainer>
    </Wrapper>
  )
}
