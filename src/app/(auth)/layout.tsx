import { Button } from '@/components/ui/button'
import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

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
