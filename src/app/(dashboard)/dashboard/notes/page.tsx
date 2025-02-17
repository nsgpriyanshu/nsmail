'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import NoteList from '@/components/notelist'

const DashboardPage = () => {
  const { user } = useUser()

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* Show Upload Button Only to Priyanshu */}
      {user?.id === process.env.CLERK_UID && (
        <Link href="/dashboard/upload">
          <Button>Upload Note</Button>
        </Link>
      )}

      {/* Show Notes List */}
      <NoteList />
    </div>
  )
}

export default DashboardPage
