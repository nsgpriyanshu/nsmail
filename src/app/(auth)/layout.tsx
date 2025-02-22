import { Button } from '@/components/ui/button'
import { ArrowLeftIcon } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} | Authentication`,
  description:
    'Securely log in or sign up to access and upload study notes. Join NotEase and simplify your learning experience.',
}
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container relative mx-auto flex min-h-screen w-full items-center justify-center">
      <div className="mx-auto w-full max-w-sm lg:p-8">
        <Link href="/" className="absolute left-4 top-4">
          <Button size="sm" variant="outline">
            <ArrowLeftIcon className="mr-1 size-4" />
            Home
          </Button>
        </Link>
        {children}
      </div>
    </div>
  )
}
