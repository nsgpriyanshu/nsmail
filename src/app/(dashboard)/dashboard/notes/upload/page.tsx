'use client'

import { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

const UploadPage = () => {
  const { user } = useUser()
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const router = useRouter()

  const handleUpload = async () => {
    if (!file) {
      toast.error('Please select a file.')
      return
    }

    if (!user) {
      toast.error('You must be logged in to upload.')
      return
    }

    setIsUploading(true)

    const filePath = `uploads/${user.id}/${file.name}`

    const { error } = await supabase.storage.from('notes').upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
    })

    if (error) {
      toast.error('Upload failed.')
      console.error(error)
    } else {
      toast.success('Note uploaded successfully!')
      router.push('/dashboard/notes')
    }

    setIsUploading(false)
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4">
      <h1 className="text-xl font-bold">Upload Your Note</h1>
      <Input type="file" onChange={e => setFile(e.target.files?.[0] || null)} />
      <Button onClick={handleUpload} disabled={isUploading}>
        {isUploading ? 'Uploading...' : 'Upload'}
      </Button>
    </div>
  )
}

export default UploadPage
