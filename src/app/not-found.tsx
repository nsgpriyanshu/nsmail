'use client'

import { motion } from 'framer-motion'
import { HomeIcon, RefreshCcw } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white dark:bg-[#101010]">
      <div className="container flex flex-col items-center space-y-8 px-4 text-center md:px-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="text-[12rem] font-bold text-muted-foreground">404</div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-4xl font-bold text-transparent dark:from-red-600 dark:to-orange-600">
              Error
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="max-w-[600px] space-y-6"
        >
          <h1 className="text-2xl font-bold tracking-tighter text-muted-foreground sm:text-4xl">
            Page not found
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild>
              <Link href="/">
                <HomeIcon className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" onClick={() => window.location.reload()}>
              <RefreshCcw className="mr-2 h-4 w-4" />
              Refresh Page
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
