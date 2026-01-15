'use client'

import { SidebarGroup, SidebarGroupContent } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'

const RULES = [
  { title: 'One Message Only', type: 'Policy' },
  { title: 'Response Time', type: 'Guideline' },
  { title: 'Maintain Respect', type: 'Mandatory' },
]

export function SidebarInbox() {
  return (
    <SidebarGroup>
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
  )
}
