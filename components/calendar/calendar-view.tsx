'use client'

import { cn } from '@/lib/utils'

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export function CalendarView({
  year,
  month,
  fullHeight = false,
}: {
  year: number
  month: number
  fullHeight?: boolean
}) {
  const firstDay = new Date(year, month, 1).getDay()
  const totalDays = new Date(year, month + 1, 0).getDate()

  let day = 1
  let saturdayCount = 0

  return (
    <div className={cn('grid grid-rows-[auto_1fr]', fullHeight && 'h-full')}>
      <div className="grid grid-cols-7 text-center text-sm font-medium">
        {DAYS.map(d => (
          <div
            key={d}
            className={cn(d === 'Sun' && 'text-red-600', d === 'Sat' && 'text-blue-600')}
          >
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 pt-2">
        {Array.from({ length: 42 }).map((_, i) => {
          const valid = i >= firstDay && day <= totalDays

          const date = valid ? day++ : null
          const isSunday = i % 7 === 0
          const isSaturday = i % 7 === 6

          if (isSaturday && date) saturdayCount++

          const specialSat = isSaturday && (saturdayCount === 2 || saturdayCount === 4)

          return (
            <div
              key={i}
              className={cn(
                'flex h-14 items-center justify-center rounded-lg border text-sm',
                isSunday && 'border-red-500 bg-red-500/10 text-red-600',
                specialSat && 'border-blue-500 bg-blue-500/10 text-blue-600',
              )}
            >
              {date}
            </div>
          )
        })}
      </div>
    </div>
  )
}
