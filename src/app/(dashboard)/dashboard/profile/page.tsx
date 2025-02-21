'use client'

import { Camera } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { useAuth, useUser } from '@clerk/nextjs'
import { toast } from 'sonner'
import { useState, useEffect } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import AnimationContainer from '@/components/global/animation-container'

function AccountProfile() {
  const { signOut } = useAuth()
  const { user } = useUser()
  const [isDeleting, setIsDeleting] = useState(false)
  const [firstName, setFirstName] = useState(user?.firstName || '')
  const [lastName, setLastName] = useState(user?.lastName || '')
  const [username, setUsername] = useState(user?.username || '')
  const [profileImage, setProfileImage] = useState(user?.imageUrl || '/default-avatar.png')
  const [isUploading, setIsUploading] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  useEffect(() => {
    if (user?.imageUrl) {
      setProfileImage(user.imageUrl)
    }
  }, [user?.imageUrl])

  const handleSaveChanges = async () => {
    try {
      await user?.update({ firstName, lastName, username })
      toast('Profile updated successfully')
    } catch (error) {
      toast.error('Failed to update profile')
    }
  }

  const handleDeleteAccount = async () => {
    setIsDeleting(true)
    try {
      await user?.delete()
      toast('Account deleted successfully')
      signOut()
    } catch (error) {
      toast.error('Failed to delete account')
    } finally {
      setIsDeleting(false)
      setIsDeleteDialogOpen(false)
    }
  }

  const handleProfileImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    try {
      // Upload image to Clerk
      await user?.setProfileImage({ file })

      // Refresh user data to reflect the updated image
      await user?.reload()

      toast('Profile picture updated successfully')
    } catch (error) {
      toast.error('Failed to update profile picture')
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center space-y-6 p-4 sm:p-6 md:p-8">
      <AnimationContainer animation="fadeUp" delay={0.2}>
        <div className="text-center">
          <h3 className="txet-2xl font-medium md:text-3xl lg:text-4xl">Account</h3>
          <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
            Manage your account settings and update your profile.
          </p>
        </div>
      </AnimationContainer>
      <Separator />
      <Card className="w-full bg-[#191919]">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your personal details.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Profile Picture Section */}
          <div className="flex flex-col items-center space-y-2">
            <img
              src={profileImage}
              alt="Profile"
              className="h-24 w-24 rounded-full object-cover sm:h-28 sm:w-28"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleProfileImageChange}
              className="hidden"
              id="profile-image-upload"
            />
            <label
              htmlFor="profile-image-upload"
              className="flex cursor-pointer items-center space-x-2 text-blue-500"
            >
              <Camera className="h-5 w-5" />
              <span>{isUploading ? 'Uploading...' : 'Change Profile Photo'}</span>
            </label>
          </div>
          {/* User Information */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input
                id="first-name"
                placeholder="Enter your first name"
                defaultValue={user?.firstName || ''}
                onChange={e => setFirstName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input
                id="last-name"
                placeholder="Enter your last name"
                defaultValue={user?.lastName || ''}
                onChange={e => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder="Enter your username"
              defaultValue={user?.username || ''}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              id="email"
              type="email"
              defaultValue={user?.primaryEmailAddress?.emailAddress || ''}
              disabled
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-3 sm:flex-row sm:justify-between sm:space-y-0">
          <Button onClick={handleSaveChanges} className="w-full sm:w-auto">
            Save Changes
          </Button>
          <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" className="w-full sm:w-auto">
                {isDeleting ? 'Deleting...' : 'Delete Account'}
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. Your account will be permanently deleted.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleDeleteAccount}
                  className="bg-red-600 hover:bg-red-700"
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardFooter>
      </Card>
    </div>
  )
}

export default AccountProfile
