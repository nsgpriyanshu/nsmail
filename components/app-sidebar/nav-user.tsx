'use client'

import { User2Icon } from 'lucide-react'

import { Avatar } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'

type NavUserProps = {
  user: {
    name: string
    email: string
    avatar?: string
  }
}

export function NavUser({ user }: NavUserProps) {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground md:h-8 md:p-0"
            >
              <Avatar className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <User2Icon className="h-5 w-5 text-neutral-100" />
              </Avatar>

              {/* 👇 Visible only when sidebar is expanded */}
              <div className="ml-2 hidden flex-col text-left text-sm leading-tight md:flex">
                <span className="font-semibold">{user.name}</span>
                <span className="text-muted-foreground text-xs">{user.email}</span>
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="min-w-56 rounded-lg"
            side={isMobile ? 'bottom' : 'right'}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-2 font-normal">
              <div className="flex items-center gap-3">
                <Avatar className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
                  <User2Icon className="h-5 w-5 text-neutral-100" />
                </Avatar>

                <div className="flex flex-col text-sm">
                  <span className="leading-none font-medium">{user.name}</span>
                  <span className="text-muted-foreground text-xs">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
