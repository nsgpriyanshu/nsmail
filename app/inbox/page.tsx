import { AppSidebar, INBOX_RULES } from '@/components/app-sidebar'
import { ContactForm } from '@/components/contact/contact-form'
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

export default function InboxPage() {
  return (
    <SidebarProvider style={{ '--sidebar-width': '350px' } as React.CSSProperties}>
      <AppSidebar />

      <SidebarInset>
        {/* Header */}
        <header className="bg-background sticky top-0 flex shrink-0 items-center justify-between border-b p-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/">Earth</BreadcrumbLink>
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
                  <BreadcrumbLink href="/">Priyanshu's</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Inbox</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <ModeToggle />
        </header>

        {/* Main content */}
        <div className="flex flex-1 flex-col items-center justify-center p-6">
          <div className="w-full max-w-xl space-y-6">
            <ContactForm />

            {/* Rules below contact form on mobile only */}
            <div className="md:hidden">
              <RulesList rules={INBOX_RULES} title="Rules & Guidelines" />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
