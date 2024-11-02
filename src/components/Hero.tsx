import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import AnimationContainer from './global/animation'

function Hero() {
  return (
    <div className="relative mx-auto flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-md px-4 py-8 sm:px-6 md:h-[30rem] md:px-8 lg:h-[40rem] lg:px-10 lg:py-12">
      <div className="z-[999999] items-center justify-center">
        <Image
          src="/contactpriyanshu2.png"
          height={600}
          width={600}
          alt="priyanshu"
          className="hidden dark:block"
        />
        <Image
          src="/cps.png"
          height={600}
          width={600}
          alt="priyanshu"
          className="block dark:hidden"
        />
      </div>
      <AnimationContainer customClassName="z-[999999]">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.1]">
            Follow a vision and think differently
          </h1>
          <p className="mx-auto mt-4 max-w-[45rem] text-base sm:text-lg md:text-xl lg:text-2xl">
            Ohh, again, you&apos;ve got your doubts, huh? Well, let me know what your problem is—but
            make sure to read the stuff below first.
          </p>
        </div>
      </AnimationContainer>
      <AnimationContainer>
        <div className="items-center justify-center py-4">
          <Button
            variant={'link'}
            className="bg-neutral-900 text-neutral-100 dark:bg-rose-200 dark:text-neutral-900"
          >
            <Link href={'/#steps'} scroll={true}>
              Read Now
            </Link>
          </Button>
        </div>
      </AnimationContainer>
    </div>
  )
}

export default Hero
