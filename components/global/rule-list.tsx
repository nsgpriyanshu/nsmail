'use client'

import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'

interface Rule {
  title: string
  description: string
  type: string
  color: string
}

interface RulesListProps {
  title?: string
  rules: Rule[]
}

export function RulesList({ title, rules }: RulesListProps) {
  return (
    <SidebarGroup className="h-auto">
      {title && <SidebarGroupLabel>{title}</SidebarGroupLabel>}
      <SidebarGroupContent className="divide-y">
        {rules.map(rule => (
          <div key={rule.title} className="flex flex-col gap-2 p-4 text-sm">
            <div className="flex w-full items-start justify-between gap-2">
              <div className="font-semibold text-foreground flex-1">{rule.title}</div>
              <span
                className={cn(
                  'rounded-full px-2 py-1 text-xs font-medium whitespace-nowrap',
                  rule.color
                )}
              >
                {rule.type}
              </span>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed">{rule.description}</p>
          </div>
        ))}
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
