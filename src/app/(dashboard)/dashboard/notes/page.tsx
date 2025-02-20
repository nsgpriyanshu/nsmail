import AnimationContainer from '@/components/global/animation-container'
import { Separator } from '@/components/ui/separator'
import React from 'react'

function Note() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center space-y-8 p-6 sm:p-8 md:p-10 lg:p-12">
      <AnimationContainer animation="fadeUp" delay={0.2}>
        <div className="text-center">
          <h3 className="text-lg font-medium">Notes</h3>
          <p className="text-sm text-muted-foreground">
            Let's start your academic journey with NotEase
          </p>
        </div>
      </AnimationContainer>
      <Separator />
    </div>
  )
}

export default Note
