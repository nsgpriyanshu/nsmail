'use client'

import { supabase } from '@/lib/supabase'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

interface Note {
  id: string
  subject: string
  subject_code: string
  chapter_name: string
  topic: string
  file_url: string
}

const NoteList = () => {
  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => {
    const fetchNotes = async () => {
      const { data, error } = await supabase.from('notes').select('*')

      if (error) {
        console.error(error)
        return
      }

      setNotes(data)
    }

    fetchNotes()
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Available Notes</h1>
      <div className="mt-4 space-y-4">
        {notes.map(note => (
          <div key={note.id} className="rounded-md border p-4">
            <h2 className="text-lg font-medium">
              {note.subject} - {note.chapter_name}
            </h2>
            <p className="text-sm text-gray-500">Topic: {note.topic || 'N/A'}</p>
            <a
              href={`https://gaqtojmcqevhnupmxbdg.supabase.co/v1/object/public/notes/${note.file_url}`}
              download
            >
              <Button>Download</Button>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NoteList
