import { Facebook, HeartIcon, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import AnimationContainer from './global/animation-container'
import Wrapper from './global/wrapper'
import Icons from './global/icons'

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden border-t border-border pb-8 pt-16 md:pb-0">
      <Wrapper className="">
        <AnimationContainer animation="scaleUp" delay={0.2}>
          <div className="absolute inset-x-0 -top-1/8 mx-auto h-1/4 w-1/2 rounded-full bg-primary/50 blur-[6rem] lg:-top-1/2 lg:bg-primary/70 lg:blur-[12rem]"></div>
        </AnimationContainer>

        <AnimationContainer animation="scaleUp" delay={0.3}>
          <div className="absolute inset-x-0 top-0 mx-auto h-px w-4/5 bg-gradient-to-r from-primary/0 via-primary/80 to-primary/0"></div>
        </AnimationContainer>

        <div className="grid items-center justify-center gap-8 xl:grid-cols-3 xl:gap-8">
          <AnimationContainer animation="fadeRight" delay={0.4}>
            <div className="flex flex-col items-start justify-start md:max-w-[300px]">
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/icon.png"
                  alt="Notes Preview"
                  sizes="1000px"
                  width={37}
                  height={37}
                  className="rounded-xl object-contain"
                />
              </div>
              <p className="mt-4 flex gap-2 text-sm text-muted-foreground">
                Developed with{' '}
                <span>
                  <HeartIcon />
                </span>{' '}
                by Priyanshu
              </p>
            </div>
          </AnimationContainer>
        </div>

        <AnimationContainer animation="fadeUp" delay={1}>
          <div className="mt-16 flex flex-col items-center justify-center border-t border-border/40 py-8 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} nsMail. a product of Creator&apos;s World
            </p>
          </div>
        </AnimationContainer>
      </Wrapper>
    </footer>
  )
}

export default Footer
