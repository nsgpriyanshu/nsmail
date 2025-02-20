import AnimationContainer from '@/components/global/animation-container'
import { Separator } from '@/components/ui/separator'
import React from 'react'

function Note() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center space-y-8 p-6 sm:p-8 md:p-10 lg:p-12">
      <AnimationContainer animation="fadeUp" delay={0.2}>
        <div className="text-center">
          <h3 className="text-2xl font-semibold">Notes</h3>
          <p className="text-md mx-auto max-w-xl text-muted-foreground">
            Access a curated collection of high-quality academic notes, designed to help you excel
            in your studies. Explore well-structured materials, simplify complex topics, and boost
            your learning experience with NotEase.
          </p>
        </div>
      </AnimationContainer>
      <Separator />
      <AnimationContainer animation="fadeUp" delay={0.4}>
        <div className="flex justify-center">
          <img src="/images/NotEase_Notes.svg" alt="Notes Visual" className="w-md h-auto" />
        </div>
      </AnimationContainer>
    </div>
  )
}

export default Note
