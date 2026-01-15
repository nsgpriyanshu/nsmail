'use client'

import { cn } from '@/lib/utils'

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
]

export function CalendarView({
  year,
  month,
  fullHeight = false,
}: {
  year: number
  month: number
  fullHeight?: boolean
}) {
  const today = new Date()
  const currentDate = today.getDate()
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()

  const firstDay = new Date(year, month, 1).getDay()
  const totalDays = new Date(year, month + 1, 0).getDate()

  let day = 1
  let saturdayCount = 0

  // ───── Events inside the same file
  const EVENTS = [
    {
      date: `${year}-07-19`,
      title: 'Birth Day',
      description: 'Today is my birthday!',
      color: 'text-yellow-700 dark:text-yellow-300',
    },
  ]

  // ───── Map events by day for easy lookup
  const eventsMap: Record<number, typeof EVENTS> = {}
  EVENTS.forEach(ev => {
    const dayNum = Number(ev.date.split('-')[2])
    if (!eventsMap[dayNum]) eventsMap[dayNum] = []
    eventsMap[dayNum].push(ev)
  })

  return (
    <div className={cn('grid grid-rows-[auto_1fr] gap-2', fullHeight && 'h-full')}>
      {/* Month & Year */}
      <div className="text-center text-sm font-semibold">
        {MONTHS[month]} {year}
      </div>

      {/* Weekdays */}
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

      {/* Dates */}
      <div className="grid grid-cols-7 gap-2 pt-2">
        {Array.from({ length: 42 }).map((_, i) => {
          const valid = i >= firstDay && day <= totalDays
          const date = valid ? day++ : null

          const isSunday = i % 7 === 0
          const isSaturday = i % 7 === 6
          if (isSaturday && date) saturdayCount++
          const specialSat = isSaturday && (saturdayCount === 2 || saturdayCount === 4)
          const isToday = date === currentDate && month === currentMonth && year === currentYear

          const dayEvents = date ? eventsMap[date] || [] : []

          // ───── Date style
          let dateStyle = ''
          if (isToday) dateStyle = 'border-green-500 bg-green-500/20 text-green-700 font-semibold'
          else if (isSunday) dateStyle = 'border-red-500 bg-red-500/10 text-red-600'
          else if (specialSat) dateStyle = 'border-blue-500 bg-blue-500/10 text-blue-600'
          else if (dayEvents.length > 0) dateStyle = 'border-yellow-500 bg-yellow-500/20 text-yellow-700 font-semibold'

          return (
            <div
              key={i}
              className={cn(
                'flex h-14 flex-col items-center justify-center rounded-lg border text-sm text-center p-1',
                dateStyle
              )}
            >
              {date}
              {/* Event badges */}
              {dayEvents.map(ev => (
                <div
                  key={ev.title}
                  className={cn(
                    'mt-1 w-full truncate rounded px-1 text-[10px] font-medium',
                    ev.color
                  )}
                  title={ev.title + ': ' + ev.description}
                >
                  {ev.title}
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}
