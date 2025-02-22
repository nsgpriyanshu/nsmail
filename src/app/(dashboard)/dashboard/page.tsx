'use client'

import { FileText, Target } from 'lucide-react'
import AnimationContainer from '@/components/global/animation-container'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import React, { useEffect, useState } from 'react'
import { Note } from '@/types/note'
import Image from 'next/image'

const quotes = [
  'Success is not final, failure is not fatal: it is the courage to continue that counts.',
  'Knowledge is power. Keep learning, keep growing.',
  'The expert in anything was once a beginner.',
  'Do what you can, with what you have, where you are.',
  'Dream big, work hard, stay focused, and surround yourself with good people.',
]

function Dashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [notesCount, setNotesCount] = useState<number>(0)
  const [quote, setQuote] = useState<string>('')

  useEffect(() => {
    fetch('/notes/notes.json')
      .then(res => res.json())
      .then((data: Note[]) => {
        setNotesCount(data.length) // Count total number of notes
      })
      .catch(err => console.error('Error fetching notes:', err))

    // Set a random quote on refresh
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }, [])

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center space-y-8 p-6 sm:p-8 md:p-10 lg:p-12">
      <AnimationContainer animation="fadeUp" delay={0.2}>
        <div className="text-center">
          <h3 className="text-2xl font-semibold md:text-3xl lg:text-4xl">Welcome</h3>
          <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
            Let's start your academic journey with NotEase
          </p>
        </div>
      </AnimationContainer>
      <Separator />
      {/* Main Grid Layout */}
      <AnimationContainer delay={0.3} className="w-full">
        <div className="flex w-full flex-col items-center justify-center gap-6 md:flex-row">
          {/* Left Side - 70% */}
          <div className="flex w-full flex-col gap-4 md:w-[70%]">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="bg-[#191919]">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Notes</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{notesCount}</div>
                  <p className="text-xs text-muted-foreground">+2 from last week</p>
                </CardContent>
              </Card>
              <Card className="bg-[#191919]">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Notes</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">0</div>
                  <p className="text-xs text-muted-foreground">Due this week</p>
                </CardContent>
              </Card>
            </div>
            <Card className="bg-[#191919]">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { action: '', subject: '', time: 'Nothing has been uploaded yet' },
                    { action: '', subject: '', time: '' },
                    { action: '', subject: '', time: '' },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center">
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">{activity.subject}</p>
                      </div>
                      <div className="ml-auto text-sm font-medium text-muted-foreground">
                        {activity.time}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Vertical Separator */}
          <Separator orientation="vertical" className="hidden md:block" />

          {/* Right Side - 30% */}
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[30%]">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="w-full rounded-md border bg-[#191919]"
            />
          </div>
        </div>
      </AnimationContainer>
      <AnimationContainer delay={0.5}>
        <div className="font mt-8 flex items-start text-center text-lg text-muted-foreground">
          <Image src="/images/quote.svg" width={20} height={20} alt="Quote Icon" />
          <span className="mx-2 max-w-[80%] text-center">{quote}</span>
          <Image
            src="/images/quote.svg"
            width={20}
            height={20}
            alt="Quote Icon"
            className="scale-x-[-1] transform"
          />
        </div>
      </AnimationContainer>
    </div>
  )
}

export default Dashboard
