import React from 'react'

interface Props {
  title: string
}

const SectionBadge = ({ title }: Props) => {
  return (
    <div className="flex items-center justify-center gap-2 rounded-full bg-neutral-800 px-2.5 py-1">
      <div className="relative flex h-1.5 w-1.5 items-center justify-center rounded-full bg-primary/40">
        <div className="flex h-2 w-2 animate-ping items-center justify-center rounded-full bg-primary/60">
          <div className="flex h-2 w-2 animate-ping items-center justify-center rounded-full bg-primary/60"></div>
        </div>
        <div className="absolute left-1/2 top-1/2 flex h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary"></div>
      </div>
      <span className="bg-gradient-to-r from-primary to-neutral-500 bg-clip-text text-xs font-medium text-transparent">
        {title}
      </span>
    </div>
  )
}

export default SectionBadge
