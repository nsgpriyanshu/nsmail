'use client'

import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import AnimationContainer from './global/animation-container'
import Wrapper from './global/wrapper'
import SectionBadge from './ui/section-badge'
import { z } from 'zod'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { SendIcon } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: "Enter a valid email address with '@'." }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long.' }),
})

const ContactForm = () => {
  const { toast } = useToast()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [attachments, setAttachments] = useState<FileList | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const result = contactSchema.safeParse({ name, email, message })

    if (!result.success) {
      const fieldErrors: Record<string, string> = {}
      result.error.issues.forEach(issue => {
        fieldErrors[issue.path[0] as string] = issue.message
      })
      setErrors(fieldErrors)
      return false
    }
    setErrors({})
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('message', message)

    if (attachments) {
      for (let i = 0; i < attachments.length; i++) {
        formData.append('attachments', attachments[i])
      }
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        toast({
          title: 'Success!',
          description: 'Your message and attachments have been sent.',
        })
        setName('')
        setEmail('')
        setMessage('')
        setAttachments(null)
      } else {
        toast({
          title: 'Error',
          description: 'Failed to submit form.',
        })
      }
    } catch {
      toast({
        title: 'Error',
        description: 'An unexpected error occurred.',
      })
    }
  }

  return (
    <Wrapper className="relative h-full min-h-screen w-full flex-1 pt-20 lg:pt-32">
      <div className="flex h-full w-full flex-col lg:flex-row lg:gap-16">
        <div className="flex w-full flex-col items-start gap-10 py-8">
          <div className="flex flex-col items-start gap-4">
            <AnimationContainer animation="fadeUp" delay={0.2}>
              <SectionBadge title="Contact Form" />
            </AnimationContainer>

            <AnimationContainer animation="fadeUp" delay={0.4}>
              <h1 className="bg-gradient-to-b from-foreground to-neutral-400 bg-clip-text text-2xl font-medium !leading-tight text-transparent md:text-4xl lg:text-5xl">
                Reach me ASAP!
              </h1>
            </AnimationContainer>

            <AnimationContainer animation="fadeUp" delay={0.6}>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                Please let me know your doubt through the form below!
              </p>
            </AnimationContainer>
          </div>
        </div>
      </div>

      {/* Contact Forum Section */}
      <AnimationContainer delay={0.2}>
        <form onSubmit={handleSubmit}>
          <div className="mx-4 flex h-auto flex-col items-center justify-center overflow-hidden rounded-2xl">
            <Card className="w-full rounded-2xl dark:border-neutral-800 dark:bg-transparent">
              <CardHeader className="text-center"></CardHeader>
              <CardContent>
                <Label htmlFor="name" className="text-muted-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="rounded-xl text-neutral-900 dark:text-neutral-100"
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}

                <Label htmlFor="email" className="text-muted-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="rounded-xl text-neutral-900 dark:text-neutral-100"
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}

                <Label htmlFor="message" className="text-muted-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="rounded-xl text-neutral-900 dark:text-neutral-100"
                  rows={10}
                />
                {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}

                <Label htmlFor="attachments" className="text-muted-foreground">
                  Pictures
                </Label>
                <Input
                  id="attachments"
                  type="file"
                  multiple
                  onChange={e => setAttachments(e.target.files)}
                  className="rounded-xl"
                />
              </CardContent>
              <CardFooter>
                <Button
                  variant="default"
                  type="submit"
                  className="w-full gap-2 rounded-xl py-3 text-sm font-bold"
                >
                  <SendIcon className="h-6 w-6" /> Send Message
                </Button>
              </CardFooter>
            </Card>
          </div>
        </form>
      </AnimationContainer>
    </Wrapper>
  )
}

export default ContactForm
