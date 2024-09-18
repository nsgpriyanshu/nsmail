import React from 'react'
import Image from 'next/image'

function Steps() {
  return (
    <div id="steps" className="relative mx-auto flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-md px-4 py-8 sm:px-6 md:px-8 lg:px-10 lg:py-12">
      {/* Step 1: Read Books Carefully */}
      <div className="lg:w-lg md:w-md mb-12 flex w-full items-center justify-center gap-4 md:flex-row">
        <Image
          src="/book.png"
          height={150}
          width={150}
          alt="Book Image"
          className="order-2 md:order-1"
        />
        <h2 className="scroll-m-20 border-b pb-2 text-center text-xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-left md:text-3xl lg:text-4xl">
          Read Books Carefully
        </h2>
      </div>
      <p className="mx-auto mb-12 mt-6 max-w-[45rem] text-center text-base leading-7 text-neutral-800 dark:text-neutral-400 sm:text-lg md:text-left md:text-xl lg:text-2xl">
        Dive deep into the content of the books. Try to explore the topics in depth and develop your
        understanding of the concepts. Set distractions like social media aside to fully immerse
        yourself in the learning experience.
      </p>

      {/* Step 2: Think About the Problem */}
      <div className="lg:w-lg md:w-md mb-12 flex w-full items-center justify-center gap-4 md:flex-row">
        <Image src="/bulb.png" height={150} width={150} alt="bulb" className="order-2 md:order-1" />
        <h2 className="scroll-m-20 border-b pb-2 text-center text-xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-left md:text-3xl lg:text-4xl">
          Think About the Problem
        </h2>
      </div>
      <p className="mx-auto mb-12 mt-6 max-w-[45rem] text-center text-base leading-7 text-neutral-800 dark:text-neutral-400 sm:text-lg md:text-left md:text-xl lg:text-2xl">
        Before diving into solutions, take a moment to understand the problem deeply. Reflect on its
        causes, explore different perspectives, and consider various approaches. Often, the best
        solution emerges after a period of thoughtful reflection.
      </p>

      {/* Step 3: Use Google Wisely */}
      <div className="lg:w-lg md:w-md mb-12 flex w-full items-center justify-center gap-4 md:flex-row">
        <Image src="/se.png" height={150} width={150} alt="seo" className="order-2 md:order-1" />
        <h2 className="dark:text-neutral-200scroll-m-20 border-b pb-2 text-center text-xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-left md:text-3xl lg:text-4xl">
          Use Google Wisely
        </h2>
      </div>
      <p className="mx-auto mb-12 mt-6 max-w-[45rem] text-center text-base leading-7 text-neutral-800 dark:text-neutral-400 sm:text-lg md:text-left md:text-xl lg:text-2xl">
        Google is a powerful tool, but it’s only as effective as the questions you ask. Search for
        specific queries, explore trusted resources, and learn to filter the best information to
        quickly resolve your doubts.
      </p>
    </div>
  )
}

export default Steps
