'use client'

import * as React from 'react'
import { Inbox, Calendar, Mail } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

import { NavUser } from '@/components/app-sidebar/nav-user'
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

const INBOX_RULES = [
  {
    title: 'One Message Only',
    description: 'Keep conversations focused with a single message',
    type: 'Policy',
    color:
      'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  },
  {
    title: 'Clear & Relevant',
    description: 'Ask clearly so we can help faster',
    type: 'Guideline',
    color:
      'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  },
  {
    title: 'Response Time',
    description: 'Expect replies within 24 hours',
    type: 'Guideline',
    color:
      'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
  },
  {
    title: 'Maintain Respect',
    description: 'Be professional and courteous',
    type: 'Mandatory',
    color:
      'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  },
  {
    title: 'Follow Instructions',
    description: 'Read and follow given steps carefully',
    type: 'Mandatory',
    color:
      'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  },
]

const CALENDAR_RULES = [
  {
    title: 'No Messages on Sundays',
    description: 'Please do not message me on Sundays',
    type: 'Policy',
    color:
      'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  },
  {
    title: 'Available Except Sundays',
    description: 'You can message me anytime except Sunday',
    type: 'Guideline',
    color:
      'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  },
  {
    title: 'No Work Messages on My Birthday',
    description: 'Please avoid work-related messages on my birthday',
    type: 'Mandatory',
    color:
      'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  },
  {
    title: 'Birthday Wishes Required',
    description: 'You must wish me on my birthday',
    type: 'Mandatory',
    color:
      'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  },
]

const data = {
  user: {
    name: 'Your cute name :)',
    email: 'Use this from please',
    avatar: '/avatars/ps.jpg',
  },
  navMain: [
    {
      title: 'Inbox',
      url: '/inbox',
      icon: Inbox,
    },
    {
      title: 'Calendar',
      url: '/calendar',
      icon: Calendar,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const router = useRouter()
  const [activeItem, setActiveItem] = React.useState(
    data.navMain.find(item => pathname.startsWith(item.url)) || data.navMain[0],
  )
  const { setOpen } = useSidebar()

  const handleNavClick = (item: (typeof data.navMain)[0]) => {
    setActiveItem(item)
    setOpen(true)
    router.push(item.url)
  }

  const getRules = () => {
    if (activeItem?.title === 'Inbox') {
      return INBOX_RULES
    } else if (activeItem?.title === 'Calendar') {
      return CALENDAR_RULES
    }
    return []
  }

  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden *:data-[sidebar=sidebar]:flex-row"
      {...props}
    >
      {/* Left icon sidebar */}
      <Sidebar collapsible="none" className="w-[calc(var(--sidebar-width-icon)+1px)]! border-r">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
                <a href="/">
                  <div className="text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg bg-[#f10a0a]">
                    <Mail className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">ns Mail</span>
                    <span className="truncate text-xs">Send messages to Priyanshu!</span>
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
                      tooltip={{
                        children: item.title,
                        hidden: false,
                      }}
                      onClick={() => handleNavClick(item)}
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

      {/* Right content sidebar */}
      <Sidebar collapsible="none" className="hidden flex-1 md:flex">
        <SidebarHeader className="gap-3.5 border-b p-4">
          <div className="flex w-full items-center justify-between">
            <div className="text-foreground text-base font-medium">{activeItem?.title} Rules</div>
          </div>
          <SidebarInput placeholder="Type to search..." />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="px-0">
            <SidebarGroupContent>
              {getRules().map(rule => (
                <div
                  key={rule.title}
                  className="hover:bg-sidebar-accent/50 flex flex-col items-start gap-3 border-b p-4 text-sm leading-tight last:border-b-0"
                >
                  <div className="flex w-full items-start justify-between gap-2">
                    <div className="text-foreground flex-1 font-semibold">{rule.title}</div>
                    <span
                      className={cn(
                        'rounded-full px-2 py-1 text-xs font-medium whitespace-nowrap',
                        rule.color,
                      )}
                    >
                      {rule.type}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {rule.description}
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

export { INBOX_RULES, CALENDAR_RULES }
