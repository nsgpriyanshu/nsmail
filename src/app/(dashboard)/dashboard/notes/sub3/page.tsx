'use client'

import AnimationContainer from '@/components/global/animation-container'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Note } from '@/types/note'
import React, { useEffect, useState } from 'react'
import { FileTextIcon } from 'lucide-react'

function Sub3() {
  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => {
    fetch('/notes/notes.json')
      .then(res => res.json())
      .then(data => {
        const mechanicsNotes = data.filter((note: Note) => note.sub === 'Engineering Mechanics')
        setNotes(mechanicsNotes.sort((a: { id: number }, b: { id: number }) => a.id - b.id))
      })
      .catch(err => console.error('Error fetching notes:', err))
  }, [])

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center space-y-8 p-6 sm:p-8 md:p-10 lg:p-12">
      <AnimationContainer animation="fadeUp" delay={0.2}>
        <div className="text-center">
          <h3 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Engineering Mechanics Notes
          </h3>
          <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
            Master the fundamentals of engineering mechanics with these structured notes. Learn
            about forces, equilibrium, motion, and other key principles crucial for engineering
            success.
          </p>
        </div>
      </AnimationContainer>
      <Separator />
      <div className="w-full space-y-6">
        {notes.length > 0 ? (
          notes.map(note => (
            <AnimationContainer key={note.id} animation="fadeUp" delay={note.id * 0.1 + 0.2}>
              <Card className="mx-auto w-full max-w-4xl bg-[#191919] shadow-md">
                <CardHeader className="flex flex-row items-center justify-start gap-4">
                  <FileTextIcon className="h-6 w-6 text-muted-foreground" />
                  <CardTitle className="text-lg font-semibold">{note.chapter}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Subject Code: {note.subcode}</p>
                  {note.topic && (
                    <p className="text-sm text-muted-foreground">Topic: {note.topic}</p>
                  )}
                  <a
                    href={note.file}
                    download
                    className="mt-2 inline-block text-blue-600 hover:text-blue-500"
                  >
                    Download PDF
                  </a>
                </CardContent>
              </Card>
            </AnimationContainer>
          ))
        ) : (
          <p className="text-center text-muted-foreground">
            No Engineering Mechanics notes available yet.
          </p>
        )}
      </div>
    </div>
  )
}

export default Sub3

