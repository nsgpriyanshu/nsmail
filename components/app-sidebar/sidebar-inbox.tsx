'use client'

import { SidebarGroup, SidebarGroupContent } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import { INBOX_RULES } from '@/components/app-sidebar/index'

export function SidebarInbox() {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="divide-y">
        {INBOX_RULES.map(rule => (
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
  )
}
