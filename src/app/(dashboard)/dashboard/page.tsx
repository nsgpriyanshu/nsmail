import SignOut from '@/components/signout'
import { Button } from '@/components/ui/button'
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'

const DashboardPage = async () => {
  const user = await currentUser()

  return (
    <div className="flex h-screen flex-col items-center justify-center">
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
    </div>
  )
}

export default DashboardPage
