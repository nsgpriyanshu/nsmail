'use client'

import { motion } from 'framer-motion'
import { Separator } from '@/components/ui/separator'
import { ModeToggle } from '@/components/global/theme-toggle'
import { BookMarkedIcon, MailboxIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function FloatingDock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 100,
        damping: 10,
      }}
      whileHover={{
        y: -4,
        scale: 1.01,
        transition: { type: 'spring', stiffness: 200, damping: 12 },
      }}
      className={cn(
        'fixed bottom-6 left-1/2 z-50 -translate-x-1/2',
        'flex items-center gap-4 rounded-2xl p-4 shadow-xl backdrop-blur-sm',
        'border-primary/10 bg-primary/10 border',
        'dark:border-primary/10 dark:bg-background/10',
      )}
    >
      <Link href="/">
        <Button variant="ghost" size="icon">
          <MailboxIcon className="h-6 w-6" />
        </Button>
      </Link>

      <Separator
        orientation="vertical"
        className="bg-border dark:bg-border h-6 w-[1px] rounded-full"
      />

      <Link href="/guide">
        <Button variant="ghost" size="icon">
          <BookMarkedIcon className="h-6 w-6" />
        </Button>
      </Link>

      <Separator
        orientation="vertical"
        className="bg-border dark:bg-border h-6 w-[1px] rounded-full"
      />

      <ModeToggle />
    </motion.div>
  )
}
