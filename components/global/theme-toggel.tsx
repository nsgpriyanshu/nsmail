'use client'

import { SunDim, MoonStar, MonitorCog } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark')
    else if (theme === 'dark') setTheme('system')
    else setTheme('light')
  }

  const Icon = theme === 'light' ? SunDim : theme === 'dark' ? MoonStar : MonitorCog

  return (
    <Button
      variant="ghost"
      onClick={cycleTheme}
      aria-label="Toggle theme"
      className="text-foreground hover:bg-accent flex h-9 w-9 items-center justify-center rounded-full transition"
    >
      <Icon className="h-5 w-5" />
    </Button>
  )
}
