import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import SaveUserToDB from '@/components/SaveUserToDB' // ✅ Import SaveUserToDB

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        {/* Persistent Sidebar */}
        <AppSidebar />
        <SidebarInset>
          {/* Runs on every page */}
          <SaveUserToDB /> {/* ✅ Add SaveUserToDB here */}
          {/* Main Content */}
          <main className="font-base min-h-screen w-full flex-1 overflow-x-hidden bg-[#101010] text-foreground antialiased">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
