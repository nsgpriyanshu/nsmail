'use client'

import { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

const UploadPage = () => {
  const { user } = useUser()
  const router = useRouter()

  const [selectedSubject, setSelectedSubject] = useState('')
  const [selectedChapter, setSelectedChapter] = useState('')
  const [selectedTopic, setSelectedTopic] = useState('')
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      setFile(event.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) {
      toast.error('No file selected. Please choose a file to upload.')
      return
    }

    if (!selectedSubject || !selectedChapter) {
      toast.error('Missing details. Please select a subject and enter a chapter name.')
      return
    }

    const fileName = `${selectedSubject}/${selectedChapter}/${file.name}`

    const { data, error } = await supabase.storage.from('notes').upload(fileName, file)

    if (error) {
      toast.error('Upload failed: ' + error.message)
      console.error('Upload error:', error) // Detailed error logging
    } else {
      console.log('Upload success:', data) // Log the successful upload response
      toast.success('Note uploaded successfully.')
      router.push('/dashboard/notes')
    }
  }

  return (
    <div className="mx-auto mt-10 max-w-lg rounded-lg bg-gray-900 p-6 text-white shadow-md">
      <h1 className="mb-4 text-xl font-bold">Upload Notes</h1>

      {/* Subject Input */}
      <Label className="mb-2">Enter Subject</Label>
      <Input
        type="text"
        placeholder="Subject Name"
        value={selectedSubject}
        onChange={e => setSelectedSubject(e.target.value)}
      />

      {/* Chapter Name Input */}
      <Label className="mb-2 mt-4">Enter Chapter Name</Label>
      <Input
        type="text"
        placeholder="Chapter Name"
        value={selectedChapter}
        onChange={e => setSelectedChapter(e.target.value)}
      />

      {/* Topic Input (Optional) */}
      <Label className="mb-2 mt-4">Enter Topic (Optional)</Label>
      <Input
        type="text"
        placeholder="Topic (Optional)"
        value={selectedTopic}
        onChange={e => setSelectedTopic(e.target.value)}
      />

      {/* File Upload */}
      <Label className="mb-2 mt-4">Upload File</Label>
      <Input type="file" onChange={handleFileChange} />

      {/* Upload Button */}
      <Button className="mt-4 w-full" onClick={handleUpload}>
        Upload Note
      </Button>
    </div>
  )
}

export default UploadPage
// "use client";

// import { useEffect, useState } from "react";
// import { useUser } from "@clerk/nextjs";
// import { supabase } from "@/lib/supabase";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Label } from "@/components/ui/label";
// import { toast } from "sonner";

// interface Subject {
//   id: number;
//   subject: string;
// }

// const UploadPage = () => {
//   const { user } = useUser();
//   const router = useRouter();

//   const [subjects, setSubjects] = useState<Subject[]>([]);
//   const [selectedSubject, setSelectedSubject] = useState("");
//   const [selectedChapter, setSelectedChapter] = useState("");
//   const [selectedTopic, setSelectedTopic] = useState("");
//   const [file, setFile] = useState<File | null>(null);

//   useEffect(() => {
//     const fetchSubjects = async () => {
//       const { data, error } = await supabase.from("notes").select("id, subject");

//       if (error) {
//         toast.error("Error fetching subjects: " + error.message);
//         console.error("Error fetching subjects:", error);
//       } else {
//         setSubjects(data || []);
//       }
//     };
//     fetchSubjects();
//   }, []);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files?.length) {
//       setFile(event.target.files[0]);
//     }
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       toast.error("No file selected. Please choose a file to upload.");
//       return;
//     }

//     if (!selectedSubject || !selectedChapter) {
//       toast.error("Missing details. Please select a subject and enter a chapter name.");
//       return;
//     }

//     const fileName = `${selectedSubject}/${selectedChapter}/${file.name}`;

//     const { error } = await supabase.storage.from("notes").upload(fileName, file);

//     if (error) {
//       toast.error("Upload failed: " + error.message);
//       console.error("Upload error:", error);
//     } else {
//       toast.success("Note uploaded successfully.");
//       router.push("/dashboard/notes");
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-900 text-white rounded-lg shadow-md">
//       <h1 className="text-xl font-bold mb-4">Upload Notes</h1>

//       {/* Subject Selection */}
//       <Label className="mb-2">Select Subject</Label>
//       <Select onValueChange={setSelectedSubject}>
//         <SelectTrigger>
//           <SelectValue placeholder="Select Subject" />
//         </SelectTrigger>
//         <SelectContent>
//           {subjects.map((subject) => (
//             <SelectItem key={subject.id} value={subject.subject}>
//               {subject.subject}
//             </SelectItem>
//           ))}
//         </SelectContent>
//       </Select>

//       {/* Chapter Name Input */}
//       <Label className="mt-4 mb-2">Enter Chapter Name</Label>
//       <Input type="text" placeholder="Chapter Name" onChange={(e) => setSelectedChapter(e.target.value)} />

//       {/* Topic Input (Optional) */}
//       <Label className="mt-4 mb-2">Enter Topic (Optional)</Label>
//       <Input type="text" placeholder="Topic (Optional)" onChange={(e) => setSelectedTopic(e.target.value)} />

//       {/* File Upload */}
//       <Label className="mt-4 mb-2">Upload File</Label>
//       <Input type="file" onChange={handleFileChange} />

//       {/* Upload Button */}
//       <Button className="mt-4 w-full" onClick={handleUpload}>
//         Upload Note
//       </Button>
//     </div>
//   );
// };

// export default UploadPage;
