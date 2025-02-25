'use client'

import AnimationContainer from '@/components/global/animation-container'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Note } from '@/types/note'
import React, { useEffect, useState } from 'react'
import { FileTextIcon } from 'lucide-react'

function Sub1() {
  const [theoryNotes, setTheoryNotes] = useState<Note[]>([])
  const [practicalNotes, setPracticalNotes] = useState<Note[]>([])

  useEffect(() => {
    fetch('/notes/notes.json')
      .then(res => res.json())
      .then(data => {
        const pythonNotes = data.filter((note: Note) => note.sub === 'Python')
        const sortedNotes = pythonNotes.sort((a: { id: number }, b: { id: number }) => a.id - b.id)

        const theory = sortedNotes.filter(
          (note: { chapter: string }) =>
            !note.chapter.toLowerCase().includes('practical') &&
            !note.chapter.toLowerCase().includes('experiment'),
        )
        const practical = sortedNotes.filter(
          (note: { chapter: string }) =>
            note.chapter.toLowerCase().includes('practical') ||
            note.chapter.toLowerCase().includes('experiment'),
        )

        setTheoryNotes(theory)
        setPracticalNotes(practical)
      })
      .catch(err => console.error('Error fetching notes:', err))
  }, [])

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center space-y-8 p-4 sm:p-6 md:p-8 lg:p-10">
      <AnimationContainer animation="fadeUp" delay={0.2}>
        <div className="text-center">
          <h3 className="text-2xl font-semibold md:text-3xl lg:text-4xl">Python Notes</h3>
          <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
            Dive into the world of Python programming with our curated notes. From the basics of
            syntax to advanced concepts, these materials will help you master Python efficiently.
            Explore structured content, enhance your coding skills, and get prepared for your exams
            with NotEase!
          </p>
        </div>
      </AnimationContainer>

      <Separator className="w-full" />

      {theoryNotes.length === 0 && practicalNotes.length === 0 ? (
        <p className="text-center text-muted-foreground">No notes uploaded yet.</p>
      ) : (
        <div className="flex w-full max-w-5xl flex-col md:flex-row md:space-x-6">
          {theoryNotes.length > 0 && (
            <div className="w-full flex-1">
              {' '}
              {/* Make it full width on mobile */}
              <h3 className="mb-4 text-center text-xl font-semibold">Theory Notes</h3>
              <div className="w-full space-y-4">
                {theoryNotes.map(note => (
                  <AnimationContainer key={note.id} animation="fadeUp" delay={note.id * 0.1 + 0.2}>
                    <Card className="mx-auto w-full bg-[#191919] shadow-md">
                      <CardHeader className="flex flex-row items-center justify-start gap-4">
                        <FileTextIcon className="h-6 w-6 text-muted-foreground" />
                        <CardTitle className="text-lg font-semibold">{note.chapter}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          Subject Code: {note.subcode}
                        </p>
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
                ))}
              </div>
            </div>
          )}

          {theoryNotes.length > 0 && practicalNotes.length > 0 && (
            <Separator orientation="vertical" className="hidden h-full md:block" />
          )}

          {practicalNotes.length > 0 && (
            <div className="w-full flex-1">
              {' '}
              {/* Make it full width on mobile */}
              <h3 className="mb-4 mt-2 text-center text-xl font-semibold md:mt-0">
                Practical Notes
              </h3>
              <div className="w-full space-y-4">
                {practicalNotes.map(note => (
                  <AnimationContainer key={note.id} animation="fadeUp" delay={note.id * 0.1 + 0.2}>
                    <Card className="mx-auto w-full bg-[#191919] shadow-md">
                      <CardHeader className="flex flex-row items-center justify-start gap-4">
                        <FileTextIcon className="h-6 w-6 text-muted-foreground" />
                        <CardTitle className="text-lg font-semibold">{note.chapter}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          Subject Code: {note.subcode}
                        </p>
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
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Sub1

// 'use client'

// import AnimationContainer from '@/components/global/animation-container'
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
// import { Separator } from '@/components/ui/separator'
// import { Note } from '@/types/note'
// import React, { useEffect, useState } from 'react'
// import { FileTextIcon } from 'lucide-react'

// function Sub1() {
//   const [theoryNotes, setTheoryNotes] = useState<Note[]>([])
//   const [practicalNotes, setPracticalNotes] = useState<Note[]>([])

//   useEffect(() => {
//     fetch('/notes/notes.json')
//       .then(res => res.json())
//       .then(data => {
//         const pythonNotes = data.filter((note: Note) => note.sub === 'Python')
//         const sortedNotes = pythonNotes.sort((a: { id: number }, b: { id: number }) => a.id - b.id)

//         // Separate theory & practical notes
//         const theory = sortedNotes.filter(
//           (note: { chapter: string }) =>
//             !note.chapter.toLowerCase().includes('practical') &&
//             !note.chapter.toLowerCase().includes('experiment'),
//         )
//         const practical = sortedNotes.filter(
//           (note: { chapter: string }) =>
//             note.chapter.toLowerCase().includes('practical') ||
//             note.chapter.toLowerCase().includes('experiment'),
//         )

//         setTheoryNotes(theory)
//         setPracticalNotes(practical)
//       })
//       .catch(err => console.error('Error fetching notes:', err))
//   }, [])

//   return (
//     <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center space-y-8 p-6 sm:p-8 md:p-10 lg:p-12">
//       <AnimationContainer animation="fadeUp" delay={0.2}>
//         <div className="text-center">
//           <h3 className="text-2xl font-semibold md:text-3xl lg:text-4xl">Python Notes</h3>
//           <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
//             Dive into the world of Python programming with our curated notes. From the basics of
//             syntax to advanced concepts, these materials will help you master Python efficiently.
//             Explore structured content, enhance your coding skills, and get prepared for your exams
//             with NotEase!
//           </p>
//         </div>
//       </AnimationContainer>

//       <Separator />

//       {/* THEORY NOTES SECTION */}
//       {theoryNotes.length > 0 && (
//         <>
//           <h3 className="text-center text-xl font-semibold">Theory Notes</h3>
//           <div className="w-full space-y-6">
//             {theoryNotes.map(note => (
//               <AnimationContainer key={note.id} animation="fadeUp" delay={note.id * 0.1 + 0.2}>
//                 <Card className="mx-auto w-full max-w-4xl bg-[#191919] shadow-md">
//                   <CardHeader className="flex flex-row items-center justify-start gap-4">
//                     <FileTextIcon className="h-6 w-6 text-muted-foreground" />
//                     <CardTitle className="text-lg font-semibold">{note.chapter}</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-sm text-muted-foreground">Subject Code: {note.subcode}</p>
//                     {note.topic && (
//                       <p className="text-sm text-muted-foreground">Topic: {note.topic}</p>
//                     )}
//                     <a
//                       href={note.file}
//                       download
//                       className="mt-2 inline-block text-blue-600 hover:text-blue-500"
//                     >
//                       Download PDF
//                     </a>
//                   </CardContent>
//                 </Card>
//               </AnimationContainer>
//             ))}
//           </div>
//         </>
//       )}

//       {/* SEPARATOR BETWEEN THEORY & PRACTICAL */}
//       {theoryNotes.length > 0 && practicalNotes.length > 0 && <Separator />}

//       {/* PRACTICAL NOTES SECTION */}
//       {practicalNotes.length > 0 && (
//         <>
//           <h3 className="text-center text-xl font-semibold">Practical Notes</h3>
//           <div className="w-full space-y-6">
//             {practicalNotes.map(note => (
//               <AnimationContainer key={note.id} animation="fadeUp" delay={note.id * 0.1 + 0.2}>
//                 <Card className="mx-auto w-full max-w-4xl bg-[#191919] shadow-md">
//                   <CardHeader className="flex flex-row items-center justify-start gap-4">
//                     <FileTextIcon className="h-6 w-6 text-muted-foreground" />
//                     <CardTitle className="text-lg font-semibold">{note.chapter}</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-sm text-muted-foreground">Subject Code: {note.subcode}</p>
//                     {note.topic && (
//                       <p className="text-sm text-muted-foreground">Topic: {note.topic}</p>
//                     )}
//                     <a
//                       href={note.file}
//                       download
//                       className="mt-2 inline-block text-blue-600 hover:text-blue-500"
//                     >
//                       Download PDF
//                     </a>
//                   </CardContent>
//                 </Card>
//               </AnimationContainer>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   )
// }

// export default Sub1
