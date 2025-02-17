'use client'

import { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { supabase } from '@/lib/supabase'

const SaveUserToDB = () => {
  const { user } = useUser()

  useEffect(() => {
    if (!user) return

    const saveUser = async () => {
      const { error } = await supabase
        .from('users')
        .upsert([{ clerk_id: user.id }], { onConflict: 'clerk_id' }) // ✅ FIXED

      if (error) console.error('Error saving user:', error)
    }

    saveUser()
  }, [user])

  return null
}

export default SaveUserToDB
