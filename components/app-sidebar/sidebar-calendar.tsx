'use client'

import { CalendarView } from '@/components/calendar/calendar-view'
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import { CALENDAR_RULES } from '@/components/app-sidebar/index'

export function SidebarCalendar() {
  return (
    <div className="flex flex-col gap-4 overflow-y-auto">
      <SidebarGroup className="h-auto">
        <SidebarGroupLabel>Calendar</SidebarGroupLabel>
        <SidebarGroupContent className="p-4">
          <CalendarView year={2026} month={0} />
        </SidebarGroupContent>
      </SidebarGroup>

      <SidebarGroup className="h-auto">
        <SidebarGroupLabel>Rules & Guidelines</SidebarGroupLabel>
        <SidebarGroupContent className="divide-y">
          {CALENDAR_RULES.map(rule => (
            <div key={rule.title} className="p-4 text-sm">
              <div className="font-medium">{rule.title}</div>

              <div className="text-muted-foreground mt-1 text-xs">{rule.description}</div>

              <span
                className={cn(
                  'mt-2 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium',
                  rule.color,
                )}
              >
                {rule.type}
              </span>
            </div>
          ))}
        </SidebarGroupContent>
      </SidebarGroup>
    </div>
  )
}
