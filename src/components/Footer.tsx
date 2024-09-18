import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className="relative mx-auto flex h-[8rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-neutral-200 px-4 py-8 dark:bg-zinc-950 sm:px-6 md:h-[10rem] md:px-8 lg:h-[12rem] lg:px-10 lg:py-12">
      <Image src="/ecg.png" height={750} width={750} alt="ecg" />
      <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
        Built by{' '}
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          Priyanshu
        </a>
        . An innovative student of{' '}
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          DBRAIT
        </a>
        .
      </p>
    </div>
  )
}

export default Footer
