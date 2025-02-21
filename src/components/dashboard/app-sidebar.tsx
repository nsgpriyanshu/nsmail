'use client'

import * as React from 'react'
import {
  AtomIcon,
  BellDotIcon,
  GalleryVerticalEnd,
  HouseIcon,
  LanguagesIcon,
  NotebookIcon,
  PiIcon,
  SparklesIcon,
  TerminalIcon,
} from 'lucide-react'

import { NavNotes } from '@/components/dashboard/nav-notes'
import { NavUser } from '@/components/dashboard/nav-user'
import { TeamSwitcher } from '@/components/dashboard/team-switcher'
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
      url: '/dashboard',
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
      title: 'Notes',
      url: '/dashboard/notes',
      icon: NotebookIcon,
      isActive: true,
    },
    {
      title: 'Exclusive',
      url: '/dashboard/exclusive',
      icon: SparklesIcon,
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
