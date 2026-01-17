'use client'

import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { contactSchema, ContactFormValues } from '@/lib/validations/contact'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group'
import { MailIcon, RefreshCcwDotIcon, SendHorizonal } from 'lucide-react'

type ExtendedContactFormValues = ContactFormValues & {
  attachment?: File | null
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const form = useForm<ExtendedContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      attachment: null,
    },
  })

  const onSubmit = async (data: ExtendedContactFormValues) => {
    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('message', data.message)

      if (data.attachment) {
        formData.append('attachment', data.attachment)
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result?.message || 'Failed to send message')
      }

      toast.success('Message sent successfully!')
      form.reset()
    } catch (error) {
      console.error('Contact form error:', error)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>
          <MailIcon className="mr-2 inline-block" /> Mail
        </CardTitle>
        <CardDescription>
          Have a question or want to work together? Send me a message and I’ll get back to you.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            {/* Name */}
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-name">Name</FieldLabel>
                  <Input
                    {...field}
                    id="contact-name"
                    placeholder="Prakriti Lisa"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            {/* Email */}
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-email">Email</FieldLabel>
                  <Input
                    {...field}
                    id="contact-email"
                    type="email"
                    placeholder="prakritilisa@example.com"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            {/* Message */}
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-message">Message</FieldLabel>

                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="contact-message"
                      rows={5}
                      placeholder="Write your message here..."
                      className="min-h-28 resize-none"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-nums">
                        {field.value.length}/500
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>

                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            {/* Attachment */}
            <Controller
              name="attachment"
              control={form.control}
              render={({ field }) => (
                <Field>
                  <FieldLabel htmlFor="contact-attachment">Attachment</FieldLabel>
                  <Input
                    id="contact-attachment"
                    type="file"
                    accept="*/*"
                    onChange={e => field.onChange(e.target.files?.[0] || null)}
                  />
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="flex justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => form.reset()}
          disabled={isSubmitting}
        >
          <RefreshCcwDotIcon className="mr-2 inline-block" />
          Reset
        </Button>

        <Button type="submit" form="contact-form" disabled={isSubmitting}>
          <SendHorizonal className="mr-2 inline-block -rotate-45" />
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </CardFooter>
    </Card>
  )
}
