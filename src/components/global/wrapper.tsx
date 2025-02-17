import React from 'react'
import { cn } from '@/lib'

interface Props {
  className?: string
  children: React.ReactNode
}

const Wrapper = ({ className, children }: Props) => {
  return (
    <section className={cn('mx-auto h-full w-full px-4 lg:max-w-screen-xl lg:px-20', className)}>
      {children}
    </section>
  )
}

export default Wrapper
