'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Download } from 'lucide-react'

const NoteList = () => {
  const [notes, setNotes] = useState<any[]>([])
  const [stats, setStats] = useState<any>({ totalNotes: 0, notesUploaded: 0, storageUsed: '0 GB' })
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchNotes = async () => {
      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching notes:', error)
      } else {
        setNotes(data || [])
      }
      setLoading(false)
    }

    const fetchStats = async () => {
      const { data, error } = await supabase.from('notes').select('id, file_url') // Fetch data to calculate stats

      if (error) {
        console.error('Error fetching stats:', error)
      } else {
        // Assuming stats calculations are done here, you can customize it according to your logic.
        const totalNotes = data.length
        const notesUploaded = data.filter(note => note.file_url).length // Count notes with file_url
        // const storageUsed = "2.5 GB"; // You can calculate storage if you have file size data in Supabase

        setStats({
          totalNotes,
          notesUploaded,
        })
      }
    }

    fetchNotes()
    fetchStats()
  }, [])

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="container mx-auto py-8">
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {/* Stats Section */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalNotes}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Notes Uploaded</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.notesUploaded}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.storageUsed}</div>
            </CardContent>
          </Card>
        </div>

        {/* Notes List */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Downloads</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {notes.map(note => (
                  <TableRow key={note.id}>
                    <TableCell className="font-medium">{note.title}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{note.downloads}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <a
                        href={note.file_url} // Use file_url for the download link
                        download
                        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default NoteList
// "use client";

// import { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabase";

// interface Note {
//   id: string;
//   title: string;
//   subject: string;
//   subject_code: string;
//   chapter_name: string;
//   topic?: string;
//   file_url: string;
//   created_at: string;
// }

// const NotesList = () => {
//   const [notes, setNotes] = useState<Note[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchNotes = async () => {
//       const { data, error } = await supabase
//         .from("notes")
//         .select("*")  // Fetch all fields
//         .order("created_at", { ascending: false });  // Order by latest first

//       if (error) {
//         console.error("Error fetching notes:", error);
//       } else {
//         console.log("Fetched notes:", data);  // Log the notes data for debugging
//         setNotes(data || []);
//       }
//       setLoading(false);
//     };

//     fetchNotes();
//   }, []);

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold">Available Notes</h1>

//       <div className="mt-4 mb-8">
//         <p className="text-lg">Total Notes Available: {notes.length}</p>
//       </div>

//       <h2 className="text-xl font-semibold mb-4">Latest Notes</h2>
//       <ul>
//         {loading ? (
//           <p>Loading notes...</p>
//         ) : notes.length === 0 ? (
//           <p>No notes available at the moment.</p>
//         ) : (
//           notes.map((note) => (
//             <li key={note.id} className="mb-4">
//               <div className="p-4 bg-gray-800 rounded-md shadow-md">
//                 <h3 className="text-lg font-bold">{note.title}</h3>
//                 <p className="text-sm text-gray-400">
//                   {note.chapter_name && <span>Chapter: {note.chapter_name}</span>}
//                   {note.topic && <span> | Topic: {note.topic}</span>}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   Created on: {new Date(note.created_at).toLocaleDateString()}
//                 </p>
//                 <a
//                   href={note.file_url}  // Use file_url for the download link
//                   download
//                   className="mt-2 inline-block text-blue-500 hover:text-blue-700"
//                 >
//                   Download Note
//                 </a>
//               </div>
//             </li>
//           ))
//         )}
//       </ul>
//     </div>
//   );
// };

// export default NotesList;
