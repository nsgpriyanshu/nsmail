import { AppSidebar, CALENDAR_RULES } from '@/components/app-sidebar'
import { CalendarView } from '@/components/calendar/calendar-view'
import { ModeToggle } from '@/components/global/theme-toggel'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { RulesList } from '@/components/global/rule-list'

export default function CalendarPage() {
  return (
    <SidebarProvider style={{ '--sidebar-width': '350px' } as React.CSSProperties}>
      <AppSidebar />

      <SidebarInset>
        {/* Header */}
        <header className="bg-background sticky top-0 flex items-center justify-between border-b p-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />

            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/inbox">Earth</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />

                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/">Asia</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />

                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/">India</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />

                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/">Priysanshu's</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />

                <BreadcrumbItem>
                  <BreadcrumbPage>Calendar</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <ModeToggle />
        </header>

        {/* Main content */}
        <div className="flex flex-1 flex-col items-center justify-center p-6">
          <div className="w-full max-w-2xl space-y-6">
            {/* Calendar view */}
            <CalendarView year={new Date().getFullYear()} month={new Date().getMonth()} />
            {/* Rules below calendar on mobile only */}
            <div className="md:hidden">
              <RulesList rules={CALENDAR_RULES} title="Rules & Guidelines" />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
