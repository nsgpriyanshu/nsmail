'use client'

import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import SignOut from '@/components/signout'

const DashboardPage = () => {
  const { user } = useUser() // Fetch the current authenticated user
  const ownerEmail = process.env.CLERK_EMAIL // Email of the owner, set this in your environment variables

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {/* Display user welcome message */}
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-center text-lg font-medium">
          Welcome to the dashboard, {user?.fullName}
        </h1>
        <div className="flex items-center justify-center gap-4">
          <Link href="/">
            <Button variant="outline">Home</Button>
          </Link>
          <SignOut />
        </div>
      </div>

      {/* Upload Button - Only Visible to Owner */}
      {user?.primaryEmailAddress?.emailAddress === ownerEmail && (
        <Link href="/dashboard/notes/upload">
          <Button>Upload Notes</Button>
        </Link>
      )}

      {/* Download Notes - Visible to Everyone */}
      <Link href="/dashboard/notes">
        <Button variant="outline">View Notes</Button>
      </Link>
    </div>
  )
}

export default DashboardPage
