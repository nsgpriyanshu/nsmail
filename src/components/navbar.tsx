'use client'

import { NAV_LINKS } from '@/constants'
import { useClickOutside } from '@/hooks'
import { cn } from '@/lib'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { RefObject, useRef, useState } from 'react'
import AnimationContainer from './global/animation-container'
import Icons from './global/icons'
import Wrapper from './global/wrapper'

const Navbar = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState<boolean>(false)

  const mobileMenuRef = useClickOutside(() => {
    if (open) setOpen(false)
  })

  const { scrollY } = useScroll({
    target: ref as RefObject<HTMLDivElement>,
    offset: ['start start', 'end start'],
  })

  useMotionValueEvent(scrollY, 'change', latest => {
    if (latest > 100) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  })

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      {/* Desktop */}
      <motion.div
        animate={{
          width: visible ? '40%' : '100%',
          y: visible ? 20 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 40,
        }}
        style={{
          minWidth: '800px',
        }}
        className={cn(
          'relative z-[50] mx-auto hidden w-full items-center justify-between self-start rounded-full bg-transparent py-4 backdrop-blur lg:flex',
          visible &&
            'w-full border border-x-foreground/15 border-b-foreground/10 border-t-foreground/20 bg-background/60 py-2',
        )}
      >
        <Wrapper className="flex items-center justify-between lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/icons/icon.png"
                alt="Notes Preview"
                sizes="1000px"
                width={30}
                height={30}
                className="h-auto min-w-full rounded-xl object-contain lg:rounded-2xl"
              />
            </Link>
          </motion.div>

          <div className="absolute inset-0 mx-auto hidden w-max flex-1 flex-row items-center justify-center gap-x-2 text-sm font-medium text-muted-foreground lg:flex">
            <AnimatePresence>
              {NAV_LINKS.map((link, index) => (
                <AnimationContainer key={index} animation="fadeDown" delay={0.1 * index}>
                  <div className="relative">
                    <Link
                      href={link.link}
                      className="rounded-md px-4 py-2 transition-all duration-500 hover:bg-accent hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </div>
                </AnimationContainer>
              ))}
            </AnimatePresence>
          </div>
        </Wrapper>
      </motion.div>

      {/* Mobile */}
      <motion.div
        animate={{
          y: visible ? 20 : 0,
          borderTopLeftRadius: open ? '0.75rem' : '2rem',
          borderTopRightRadius: open ? '0.75rem' : '2rem',
          borderBottomLeftRadius: open ? '0' : '2rem',
          borderBottomRightRadius: open ? '0' : '2rem',
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 50,
        }}
        className={cn(
          'relative z-50 mx-auto flex w-full flex-col items-center justify-between py-4 lg:hidden',
          visible && 'w-11/12 border bg-neutral-950',
          open && 'border-transparent',
        )}
      >
        <Wrapper className="flex items-center justify-between lg:px-4">
          <div className="flex w-full items-center justify-between gap-x-4">
            <AnimationContainer animation="fadeRight" delay={0.1}>
              <Link href="/">
                <Image
                  src="/icons/icon.png"
                  alt="Notes Preview"
                  sizes="1000px"
                  width={30}
                  height={30}
                  className="h-auto min-w-full rounded-xl object-contain lg:rounded-2xl"
                />
              </Link>
            </AnimationContainer>

            <AnimationContainer animation="fadeLeft" delay={0.1}>
              <div className="flex items-center justify-center gap-x-4">
                {open ? (
                  <XIcon className="text-black dark:text-white" onClick={() => setOpen(!open)} />
                ) : (
                  <MenuIcon className="text-black dark:text-white" onClick={() => setOpen(!open)} />
                )}
              </div>
            </AnimationContainer>
          </div>
        </Wrapper>

        <AnimatePresence>
          {open && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-2 rounded-b-xl bg-neutral-950 px-4 py-8 shadow-xl shadow-neutral-950"
            >
              {NAV_LINKS.map((navItem, idx) => (
                <AnimationContainer
                  key={`link=${idx}`}
                  animation="fadeRight"
                  delay={0.1 * (idx + 1)}
                  className="w-full"
                >
                  <Link
                    href={navItem.link}
                    onClick={() => setOpen(false)}
                    className="relative w-full gap-y-2 rounded-lg px-4 py-2 text-neutral-300 hover:bg-neutral-800"
                  >
                    <motion.span>{navItem.name}</motion.span>
                  </Link>
                </AnimationContainer>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  )
}

export default Navbar
