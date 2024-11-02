import React from 'react'
import Image from 'next/image'
import { ThemeToggle } from './global/theme-toggle'

function Header() {
  return (
    <header className="flex h-16 w-full items-center justify-between bg-transparent px-6 backdrop-blur-lg md:px-10 lg:px-12">
      {/* Logo or Title */}
      <div className="flex items-center">
        <a href="/" className="text-xl font-bold">
          <Image src="/contactpriyanshu.png" height={60} width={60} alt="priyanshu" />
        </a>
      </div>

      {/* Theme Toggle */}
      <div className="flex items-center space-x-4">
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
