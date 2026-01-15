'use client'

import { CalendarView } from '@/components/calendar/calendar-view'
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'

const RULES = [
  { title: 'One Message Only', type: 'Policy' },
  { title: 'Response Time', type: 'Guideline' },
  { title: 'Maintain Respect', type: 'Mandatory' },
]

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
          {RULES.map(rule => (
            <div key={rule.title} className="p-4 text-sm">
              <div className="font-medium">{rule.title}</div>
              <div
                className={cn(
                  'mt-1 text-xs',
                  rule.type === 'Mandatory' && 'text-red-600',
                  rule.type === 'Policy' && 'text-amber-600',
                )}
              >
                {rule.type}
              </div>
            </div>
          ))}
        </SidebarGroupContent>
      </SidebarGroup>
    </div>
  )
}
