'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const payload = { name, email, message }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setSuccess(true) // Set success state to true
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setError('Failed to submit form.') // Set error message
      }
    } catch (error) {
      setError('An unexpected error occurred.') // Set error message
    }
  }

  return (
    <div className="relative mx-auto flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-lg px-4 py-12 sm:px-8 md:px-12 lg:px-16 lg:py-16">
      {/* Heading Section */}
      <div className="text-center">
        <h1 className="mb-4 text-xl font-bold leading-tight tracking-tighter text-neutral-800 dark:text-neutral-200 sm:text-xl md:text-3xl lg:text-4xl lg:leading-[1.1]">
          Please lemme know your doubt through the form below!
        </h1>
        <p className="mx-auto mt-4 max-w-[45rem] text-base text-neutral-800 dark:text-neutral-400 sm:text-lg md:text-xl lg:text-2xl">
          Use your lock brain and fill the form properly.
        </p>
      </div>

      {/* Contact Form Area */}
      <div className="w-full max-w-xl py-6">
        <Card className="mx-auto w-full max-w-xl rounded-lg text-neutral-100 shadow-lg dark:bg-zinc-950">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
              Mail Box
            </CardTitle>
          </CardHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            <CardContent className="space-y-6 px-8 py-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-neutral-800 dark:text-neutral-400">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="text-neutral-900 dark:text-neutral-100"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-neutral-800 dark:text-neutral-400">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="text-neutral-900 dark:text-neutral-100"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-neutral-800 dark:text-neutral-400">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="text-neutral-900 dark:text-neutral-100"
                  rows={5}
                  required
                />
              </div>
            </CardContent>

            {/* Submit Button */}
            <CardFooter className="px-8 pb-8">
              <Button variant="default" type="submit" className="w-full py-3 text-lg">
                Send Message
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>

      {/* Success/Error Popup */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-md bg-neutral-200 p-6 text-center shadow-md dark:bg-zinc-950">
            <h2 className="text-lg font-semibold text-green-600">Success!</h2>
            <p className="text-neutral-800 dark:text-neutral-200">
              Your message has been sent successfully.
            </p>
            <Button onClick={() => setSuccess(false)} className="mt-4">
              Close
            </Button>
          </div>
        </div>
      )}
      {error && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-md bg-neutral-200 p-6 text-center shadow-md dark:bg-zinc-950">
            <h2 className="text-lg font-semibold text-red-600">Error</h2>
            <p className="text-neutral-800 dark:text-neutral-200">
              Something went wrong! Please try again later.
            </p>
            <Button onClick={() => setError('')} className="mt-4">
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContactForm
