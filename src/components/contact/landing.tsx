'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import AnimationContainer from '@/components/global/animation-container'
import Wrapper from '@/components/global/wrapper'

export default function Landing() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    attachment: null as File | null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setForm({ ...form, attachment: file })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData()
    formData.append('name', form.name)
    formData.append('email', form.email)
    formData.append('message', form.message)
    if (form.attachment) {
      formData.append('attachment', form.attachment)
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (response.ok) {
        toast.success('Message sent successfully!')
        setForm({ name: '', email: '', message: '', attachment: null })
        const fileInput = document.querySelector('input[name="attachment"]') as HTMLInputElement
        if (fileInput) fileInput.value = ''
      } else {
        toast.error(result.message || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error submitting contact form:', error)
      toast.error('An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Wrapper className="flex min-h-screen items-center justify-center py-16">
      <AnimationContainer animation="fadeUp" delay={0.2} className="w-auto max-w-4xl">
        <div className="border-primary/20 bg-primary/5 dark:bg-background/10 rounded-[40px] border px-8 py-12 backdrop-blur-md dark:border-white/10">
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
            <div className="space-y-2 text-left">
              <h2 className="text-foreground text-3xl font-bold">Send a Message</h2>
              <p className="text-muted-foreground text-sm">
                Fill out the form below to get in touch with us.
              </p>
            </div>

            <Input
              placeholder="Your name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="bg-primary/10 border-primary/20 text-foreground focus:ring-primary dark:border-white/10 dark:bg-white/5"
            />
            <Input
              placeholder="Your email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="bg-primary/10 border-primary/20 text-foreground focus:ring-primary dark:border-white/10 dark:bg-white/5"
            />
            <Textarea
              placeholder="Your message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="bg-primary/10 border-primary/20 text-foreground focus:ring-primary min-h-[120px] dark:border-white/10 dark:bg-white/5"
            />
            <Input
              type="file"
              name="attachment"
              onChange={handleFileChange}
              accept="*/*"
              className="text-muted-foreground file:bg-primary/10 file:text-foreground file:border-primary/20 dark:file:bg-white/5"
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary/10 text-foreground hover:bg-primary/20 h-12 w-full rounded-lg backdrop-blur-sm transition-colors dark:bg-white/5 dark:hover:bg-white/10"
            >
              <Send className="mr-2 h-5 w-5" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </AnimationContainer>
    </Wrapper>
  )
}
