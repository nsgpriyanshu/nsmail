import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
)

// Function to upload a file
export async function uploadNote(file: File, noteData: any) {
  // Generate a unique filename
  const filePath = `notes/${Date.now()}-${file.name}`

  // Upload file to Supabase Storage
  const { data, error } = await supabase.storage
    .from('notes') // Your bucket name
    .upload(filePath, file)

  if (error) {
    console.error('Upload failed:', error)
    return { success: false, error }
  }

  // Get public URL of the file
  const { data: publicURL } = supabase.storage.from('notes').getPublicUrl(filePath)

  // Store note details in the database
  const { error: dbError } = await supabase.from('notes').insert([
    {
      title: noteData.title,
      subject: noteData.subject,
      subject_code: noteData.subject_code,
      chapter_name: noteData.chapter_name,
      topic: noteData.topic,
      file_url: publicURL.publicUrl, // Save file URL
    },
  ])

  if (dbError) {
    console.error('Database insert failed:', dbError)
    return { success: false, error: dbError }
  }

  return { success: true, fileUrl: publicURL.publicUrl }
}
