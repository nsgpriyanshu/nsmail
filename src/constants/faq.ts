export type FAQItem = {
  question: string
  answer: string
}

export const FAQS: FAQItem[] = [
  {
    question: 'How can I download notes from this website?',
    answer:
      'Simply use the search bar to find the notes you need by subject, subject code, or topic. Click the download button to save the file instantly.',
  },
  {
    question: 'Are the notes available for all subjects?',
    answer:
      'Yes! We regularly update the website with notes for various subjects. If a subject is missing, it might be added soon.',
  },
  {
    question: 'Are these notes officially provided by the college?',
    answer:
      'No, these notes are created by the top students and shared to help students understand concepts better. They are based on the syllabus but are not official college materials.',
  },
  {
    question: 'Can I contribute my own notes?',
    answer:
      'Currently, only the website owner can upload notes to maintain quality and consistency. However, suggestions for new topics are always welcome!',
  },
  {
    question: 'How do I find notes for a specific chapter or topic?',
    answer:
      'Use the search feature to type in the chapter name or topic. The results will filter out the most relevant notes for you.',
  },
  {
    question: 'Will new notes be added regularly?',
    answer:
      'Yes, new notes are uploaded periodically to ensure students have access to the latest study materials.',
  },
]
