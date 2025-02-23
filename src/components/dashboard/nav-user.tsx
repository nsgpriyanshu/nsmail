'use client'

import { useUser } from '@clerk/nextjs'
import { CircleUserIcon, LogOut } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'

export function NavUser() {
  const { user, isLoaded } = useUser() // Fetch user from Clerk

  if (!isLoaded) return null

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" className="flex items-center gap-3 p-2">
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage
              src={user?.imageUrl || '/default-avatar.png'}
              alt={user?.fullName || 'User'}
            />
            <AvatarFallback className="rounded-lg">U</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-sm">
            <span className="font-semibold">{user?.fullName || 'User'}</span>
            <span className="text-xs text-gray-400">
              {user?.primaryEmailAddress?.emailAddress || 'No Email'}
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>

      {/* Settings & Logout */}
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <a href="/dashboard/profile">
            <CircleUserIcon className="mr-2 h-4 w-4" />
            Profile
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <a href="/signin">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
