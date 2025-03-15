'use client'

import AnimationContainer from '@/components/global/animation-container'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Note } from '@/types/note'
import React, { useEffect, useState } from 'react'
import { FileTextIcon } from 'lucide-react'

function Sub2() {
  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => {
    fetch('/notes/notes.json')
      .then(res => res.json())
      .then(data => {
        const mathNotes = data.filter((note: Note) => note.sub === 'Mathematics')
        setNotes(mathNotes.sort((a: { id: number }, b: { id: number }) => a.id - b.id))
      })
      .catch(err => console.error('Error fetching notes:', err))
  }, [])

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center space-y-8 p-6 sm:p-8 md:p-10 lg:p-12">
      <AnimationContainer animation="fadeUp" delay={0.2}>
        <div className="text-center">
          <h3 className="text-2xl font-semibold md:text-3xl lg:text-4xl">Mathematics Notes</h3>
          <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
            Strengthen your mathematical foundation with our curated notes. Covering key concepts,
            formulas, and problem-solving techniques, these resources will help you ace your math
            exams with confidence.
          </p>
        </div>
      </AnimationContainer>
      <Separator />
      <div className="w-full space-y-6">
        {notes.length > 0 ? (
          notes.map(note => (
            <AnimationContainer key={note.id} animation="fadeUp" delay={note.id * 0.1 + 0.2}>
              <Card className="mx-auto w-full max-w-4xl shadow-md dark:bg-[#191919]">
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
          <p className="text-center text-muted-foreground">No Mathematics notes available yet.</p>
        )}
      </div>
    </div>
  )
}

export default Sub2
