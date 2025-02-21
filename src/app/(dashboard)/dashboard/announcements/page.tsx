import AnimationContainer from '@/components/global/animation-container'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CalendarClock } from 'lucide-react'
import React from 'react'

function Announcements() {
  const announcements = [
    {
      title: 'New Notes Uploaded',
      content: 'Python Basics and Mathematics notes are now available.',
      date: 'February 19, 2025',
    },
    {
      title: 'Upcoming Exam Alert',
      content: 'Mid-term exams are scheduled for next month. Stay prepared!',
      date: 'February 15, 2025',
    },
    {
      title: 'Website Update',
      content: 'Dark mode and new UI enhancements have been added.',
      date: 'February 10, 2025',
    },
  ]

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center space-y-8 p-6 sm:p-8 md:p-10 lg:p-12">
      <AnimationContainer animation="fadeUp" delay={0.2}>
        <div className="text-center">
          <h3 className="text-2xl font-semibold md:text-3xl lg:text-4xl">Announcements</h3>
          <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
            Stay updated with the latest news and updates from NotEase.
          </p>
        </div>
      </AnimationContainer>

      <Separator />
      <AnimationContainer animation="fadeUp" delay={0.4}>
        <div className="flex justify-center">
          <img src="/images/NotEase_Announcements.svg" alt="Notes Visual" className="w-sm h-auto" />
        </div>
      </AnimationContainer>
      {/* Announcements List */}
      <div className="w-full space-y-6">
        {announcements.map((announcement, index) => (
          <AnimationContainer key={index} animation="fadeUp" delay={index * 0.1 + 0.2}>
            <Card className="bg-[#191919] shadow-md">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>{announcement.title}</CardTitle>
                <CalendarClock className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{announcement.content}</p>
                <p className="mt-2 text-xs font-medium text-muted-foreground">
                  {announcement.date}
                </p>
              </CardContent>
            </Card>
          </AnimationContainer>
        ))}
      </div>
    </div>
  )
}

export default Announcements
