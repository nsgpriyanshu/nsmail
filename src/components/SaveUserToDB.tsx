'use client'

import { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { supabase } from '@/lib/supabase'

const SaveUserToDB = () => {
  const { user } = useUser()

  console.log('User data:', user)

  useEffect(() => {
    if (!user) return // Do nothing if the user is not authenticated

    const saveUser = async () => {
      const { error } = await supabase.from('users').upsert(
        [
          {
            clerk_id: user.id,
            email: user.primaryEmailAddress?.emailAddress,
          },
        ],
        { onConflict: 'clerk_id' },
      )

      if (error) {
        console.error('Error saving user:', error.message || error.details || error)
      }
    }

    saveUser() // Save user data when component mounts
  }, [user])

  return null // No UI needed
}

export default SaveUserToDB
