'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar'
import type { NavItem } from './types'
import { cn } from '@/lib/utils'

export function SidebarNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname()

  return (
    <SidebarMenu>
      {items.map(item => {
        const active = pathname === item.href || pathname.startsWith(item.href + '/')

        return (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              asChild
              isActive={active}
              className={cn(active && 'bg-sidebar-accent text-sidebar-accent-foreground')}
            >
              <Link href={item.href}>
                <item.icon />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        )
      })}
    </SidebarMenu>
  )
}
