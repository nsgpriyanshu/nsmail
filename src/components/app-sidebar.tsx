import { Calendar, Home, Inbox, Megaphone, Notebook, Search, Settings } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import Icons from './global/icons'

// Menu items.
const items = [
  {
    title: 'Home',
    url: '/dashboard',
    icon: Home, // Home icon
  },
  {
    title: 'Announcements',
    url: '/dashboard/announcements',
    icon: Megaphone, // Loudspeaker icon for announcements
  },
  {
    title: 'Notes',
    url: '/dashboard/notes',
    icon: Notebook, // Book icon for notes
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarContent>
        <SidebarGroup>
          {/* <Icons.logo className="-mt-1 h-6 w-max" /> */}
          <SidebarGroupLabel>NotEase</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
