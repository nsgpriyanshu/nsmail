'use client'

import * as React from 'react'
import { ArchiveX, Command, File, Inbox, Send, Trash2 } from 'lucide-react'

import { NavUser } from '@/components/nav-user'
import { Label } from '@/components/ui/label'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'

/* -------------------------------- helpers -------------------------------- */

function badgeColor(type: string) {
  switch (type) {
    case 'Guideline':
      return 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
    case 'Policy':
      return 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
    case 'Mandatory':
      return 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300'
    case 'Strict':
      return 'bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
    case 'Notice':
      return 'bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300'
    case 'Final':
      return 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300'
    default:
      return 'bg-muted text-muted-foreground'
  }
}

/* -------------------------------- data -------------------------------- */

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    { title: 'Inbox', url: '#', icon: Inbox, isActive: true },
    { title: 'Drafts', url: '#', icon: File },
    { title: 'Sent', url: '#', icon: Send },
    { title: 'Junk', url: '#', icon: ArchiveX },
    { title: 'Trash', url: '#', icon: Trash2 },
  ],
  mails: [
    {
      name: 'Contact Policy',
      email: 'rule-1',
      subject: 'Rule 1 — One Message Only',
      date: 'Policy',
      teaser:
        'Please message once regarding the same topic.\nRepeated or duplicate messages may not receive a response.',
    },
    {
      name: 'Response Time',
      email: 'rule-2',
      subject: 'Rule 2 — Response Timeline',
      date: 'Guideline',
      teaser:
        'Responses are not instant.\nPlease allow adequate time for a reply before following up.',
    },
    {
      name: 'Respect',
      email: 'rule-3',
      subject: 'Rule 3 — Maintain Respect',
      date: 'Mandatory',
      teaser:
        'Respectful communication is required.\nAbusive or inappropriate language will not be tolerated.',
    },
    {
      name: 'No Spam',
      email: 'rule-4',
      subject: 'Rule 4 — No Spam or Promotions',
      date: 'Strict',
      teaser:
        'Spam, advertisements, or promotions are not allowed.\nSuch messages will be ignored.',
    },
    {
      name: 'Availability',
      email: 'rule-5',
      subject: 'Rule 5 — Limited Availability',
      date: 'Notice',
      teaser:
        'Availability may vary depending on workload.\nNot all messages are guaranteed a response.',
    },
    {
      name: 'Acceptance',
      email: 'rule-6',
      subject: 'Rule 6 — Acceptance of Rules',
      date: 'Final',
      teaser:
        'By messaging, you agree to these rules.\nFailure to comply may result in no response.',
    },
  ],
}

/* -------------------------------- component -------------------------------- */

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const [activeItem, setActiveItem] = React.useState(data.navMain[0])
  const [mails, setMails] = React.useState(data.mails)
  const { setOpen } = useSidebar()

  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden *:data-[sidebar=sidebar]:flex-row"
      {...props}
    >
      {/* ================= FIRST SIDEBAR (UNCHANGED SIZE) ================= */}
      <Sidebar collapsible="none" className="w-[calc(var(--sidebar-width-icon)+1px)]! border-r">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
                <a href="#">
                  <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <Command className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">Acme Inc</span>
                    <span className="truncate text-xs">Enterprise</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu>
                {data.navMain.map(item => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={{ children: item.title, hidden: false }}
                      onClick={() => {
                        setActiveItem(item)
                        setMails([...data.mails])
                        setOpen(true)
                      }}
                      isActive={activeItem?.title === item.title}
                      className="px-2.5 md:px-2"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
      </Sidebar>

      {/* ================= SECOND SIDEBAR (FIXED OVERLAP) ================= */}
      <Sidebar collapsible="none" className="hidden flex-1 md:flex">
        <SidebarHeader className="gap-3.5 border-b p-4">
          <div className="flex w-full items-center justify-between">
            <div className="text-foreground text-base font-medium">{activeItem?.title}</div>
            <Label className="flex items-center gap-2 text-sm">
              <span>Unreads</span>
              <Switch className="shadow-none" />
            </Label>
          </div>
          <SidebarInput placeholder="Search rules..." />
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup className="px-0">
            <SidebarGroupContent className="divide-y">
              {mails.map(mail => (
                <div key={mail.email} className="flex flex-col gap-2 p-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{mail.name}</span>
                    <span
                      className={cn(
                        'rounded-md px-2 py-0.5 text-xs font-medium',
                        badgeColor(mail.date),
                      )}
                    >
                      {mail.date}
                    </span>
                  </div>

                  <span className="font-semibold">{mail.subject}</span>

                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {mail.teaser}
                  </p>
                </div>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Sidebar>
  )
}
