'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { useAuth, useUser } from '@clerk/nextjs'
import { toast } from 'sonner'

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, 'Username must be at least 2 characters.')
    .regex(/^[a-z0-9_-]+$/, 'Username can only contain lowercase letters, numbers, _, and -'),
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
})

function ProfileForm() {
  const { signOut } = useAuth()
  const { user } = useUser()
  const router = useRouter()

  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      username: user?.username || '',
      name: user?.fullName || '',
      email: user?.primaryEmailAddress?.emailAddress || '',
    },
  })

  const [image, setImage] = useState(user?.imageUrl || '/placeholder-avatar.jpg')
  const [isDeleting, setIsDeleting] = useState(false)

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => setImage(reader.result as string)
      reader.readAsDataURL(file)
    }
  }

  const onSubmit = (data: z.infer<typeof profileFormSchema>) => {
    toast.success('Profile updated successfully')
  }

  const handleDeleteAccount = () => {
    if (confirm('Are you sure? This action cannot be undone!')) {
      setIsDeleting(true)
      setTimeout(() => {
        toast('Account got deleted')
        router.push('/signin')
      }, 2000)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto max-w-lg space-y-6 p-6">
        {/* Profile Picture Upload */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Picture</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Avatar className="h-24 w-24 cursor-pointer">
              <AvatarImage src={image} alt="Profile picture" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <input type="file" accept="image/*" className="mt-4" onChange={handleImageUpload} />
          </CardContent>
        </Card>

        {/* Account Info */}
        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} disabled />
                  </FormControl>
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit">Save Changes</Button>
          </CardFooter>
        </Card>

        {/* Danger Zone */}
        <Card className="border-red-500">
          <CardHeader>
            <CardTitle className="text-red-500">Danger Zone</CardTitle>
          </CardHeader>
          <CardContent>
            <Separator className="my-4" />
            <div className="flex flex-col space-y-2 text-center">
              <p className="text-sm text-muted-foreground">
                Deleting your account is permanent and cannot be undone.
              </p>
              <Button variant="destructive" onClick={handleDeleteAccount} disabled={isDeleting}>
                {isDeleting ? 'Deleting...' : 'Delete Account'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Logout Button */}
        <Button variant="secondary" className="w-full" onClick={() => signOut()}>
          Logout
        </Button>
      </form>
    </Form>
  )
}

export default ProfileForm
