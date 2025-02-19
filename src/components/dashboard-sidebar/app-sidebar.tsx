'use client'

import * as React from 'react'
import {
  AtomIcon,
  BellDotIcon,
  GalleryVerticalEnd,
  HouseIcon,
  LanguagesIcon,
  MailboxIcon,
  PiIcon,
  TerminalIcon,
} from 'lucide-react'

import { NavNotes } from '@/components/dashboard-sidebar/nav-notes'
import { NavUser } from '@/components/dashboard-sidebar/nav-user'
import { TeamSwitcher } from '@/components/dashboard-sidebar/team-switcher'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import { NavMain } from './nav-main'

// Sample data without sub-items
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'NotEase',
      logo: GalleryVerticalEnd,
      plan: 'A simple solution',
    },
  ],
  navMain: [
    {
      title: 'Lobby',
      url: '/',
      icon: HouseIcon,
      isActive: true,
    },
    {
      title: 'Announcements',
      url: '/dashboard/announcements',
      icon: BellDotIcon,
      isActive: true,
    },
    {
      title: 'Newsletter',
      url: '/dashboard/newsletter',
      icon: MailboxIcon,
      isActive: true,
    },
  ],
  Notes: [
    {
      name: 'Python Basics',
      url: '/dashboard/notes/sub1',
      icon: TerminalIcon,
    },
    {
      name: 'Mathematics',
      url: '/dashboard/notes/sub2',
      icon: PiIcon,
    },
    {
      name: 'Engineering Mechanics',
      url: '/dashboard/notes/sub3',
      icon: AtomIcon,
    },
    {
      name: 'English',
      url: '/dashboard/notes/sub4',
      icon: LanguagesIcon,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavNotes notes={data.Notes} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

// import { Calendar, Home, Inbox, Megaphone, Notebook, Search, Settings, SettingsIcon, User } from 'lucide-react'

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from '@/components/ui/sidebar'
// import Icons from './global/icons'

// // Menu items.
// const items = [
//   {
//     title: 'Home',
//     url: '/dashboard',
//     icon: Home, // Home icon
//   },
//   {
//     title: 'Announcements',
//     url: '/dashboard/announcements',
//     icon: Megaphone, // Loudspeaker icon for announcements
//   },
//   {
//     title: 'Notes',
//     url: '/dashboard/notes',
//     icon: Notebook, // Book icon for notes
//   },
//   {
//     title: 'Profile',
//     url: '/dashboard/profile',
//     icon: SettingsIcon,
//   },
// ]

// export function AppSidebar() {
//   return (
//     <Sidebar collapsible="icon" variant="inset">
//       <SidebarContent>
//         <SidebarGroup>
//           {/* <Icons.logo className="-mt-1 h-6 w-max" /> */}
//           <SidebarGroupLabel>NotEase</SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {items.map(item => (
//                 <SidebarMenuItem key={item.title}>
//                   <SidebarMenuButton asChild>
//                     <a href={item.url}>
//                       <item.icon />
//                       <span>{item.title}</span>
//                     </a>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>
//     </Sidebar>
//   )
// }
