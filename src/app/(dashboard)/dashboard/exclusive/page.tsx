import AnimationContainer from '@/components/global/animation-container'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Crown, Lock, Star } from 'lucide-react'
import React from 'react'

function Exclusive() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center space-y-8 p-6 sm:p-8 md:p-10 lg:p-12">
      <AnimationContainer animation="fadeUp" delay={0.2}>
        <div className="text-center">
          <h3 className="text-2xl font-semibold md:text-3xl lg:text-4xl">Exclusive Benefits</h3>
          <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
            Unlock premium features and get ahead in your academic journey with NotEase.
          </p>
        </div>
      </AnimationContainer>
      <Separator />
      <AnimationContainer animation="fadeUp" delay={0.4}>
        <div className="flex justify-center">
          <img src="/images/NotEase_Exclusive.svg" alt="Notes Visual" className="w-md h-auto" />
        </div>
      </AnimationContainer>
      {/* Exclusive Features List */}
      <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
        <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
          Comming Soon, Under construction ...
        </p>
      </div>
    </div>
  )
}

export default Exclusive
