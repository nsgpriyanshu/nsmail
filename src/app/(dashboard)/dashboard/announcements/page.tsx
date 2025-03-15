'use client'

import AnimationContainer from '@/components/global/animation-container'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CalendarClock } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

function Announcements() {
  const { resolvedTheme } = useTheme()

  const announcements = [
    {
      title: 'Get Started with NotEase',
      content:
        'Huge congratulations to everyone for successfully completing your first semester! You worked hard, and you did it! You can find these resources right here! We hope they help you have a fantastic second semester. Keep up the great work!',
      date: 'February 23, 2025',
    },
    {
      title: 'We Value Your Feedback!',
      content:
        'Thank you for using NotEase! We are constantly working to improve our platform and provide the best resources for your studies. We would greatly appreciate it if you could take a moment to share your thoughts and suggestions. Your feedback is invaluable in helping us serve you better.',
      date: 'March 14, 2025',
    },
  ]

  const imageSrc =
    resolvedTheme === 'light'
      ? '/images/NotEase_Announcements_Light.png'
      : '/images/NotEase_Announcements.png'

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
          <Image src={imageSrc} width={500} height={500} alt="Announcements Visual" />
        </div>
      </AnimationContainer>

      {/* Announcements List */}
      <div className="w-full space-y-6">
        {announcements.map((announcement, index) => (
          <AnimationContainer key={index} animation="fadeUp" delay={index * 0.1 + 0.2}>
            <Card className="shadow-md dark:bg-[#191919]">
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
