import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import AnimationContainer from './global/animation-container'
import Wrapper from './global/wrapper'
import { Button } from './ui/button'
import { FlickeringGrid } from './ui/flickering-grid'
import SectionBadge from './ui/section-badge'

const HIGHLIGHTS = [
  {
    icon: '/icons/shield.svg',
    label: 'Secure Platform',
  },
  {
    icon: '/icons/clock.svg',
    label: 'Real-time Updates',
  },
  {
    icon: '/icons/magicpen.svg',
    label: 'Smart Features',
  },
]

const CTA = () => {
  return (
    <Wrapper className="py-20 lg:py-32">
      <div className="relative z-0 flex flex-col items-center gap-4 overflow-hidden py-20 text-center lg:py-32">
        <div className="absolute inset-x-0 bottom-0 z-10 h-1/2 w-full bg-gradient-to-t from-[#101010]"></div>

        <AnimationContainer animation="scaleUp" delay={0.2} className="mx-auto w-full">
          <div className="absolute inset-x-0 -top-1/2 mx-auto size-1/2 rounded-full bg-foreground/50 blur-[4rem] lg:blur-[10rem]"></div>
        </AnimationContainer>

        <AnimationContainer animation="scaleUp" delay={0.3}>
          <div className="absolute inset-x-0 top-0 mx-auto h-px w-4/5 bg-gradient-to-r from-foreground/0 via-foreground/50 to-foreground/0"></div>
        </AnimationContainer>

        <AnimationContainer animation="scaleUp" delay={0.2}>
          <FlickeringGrid
            className="absolute inset-0 -z-10 h-full w-[120%]"
            squareSize={4}
            gridGap={6}
            color="#525252"
            maxOpacity={0.2}
            flickerChance={0.1}
            height={800}
          />
        </AnimationContainer>

        <div className="z-30 flex w-full flex-col items-center justify-center">
          <AnimationContainer animation="fadeUp" delay={0.3}>
            <SectionBadge title="Get Started" />
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.4}>
            <h2 className="bg-gradient-to-b from-foreground to-neutral-400 bg-clip-text text-3xl font-medium !leading-tight text-transparent md:text-5xl lg:text-6xl">
              Find Notes Easily!
            </h2>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.5}>
            <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground md:text-base lg:text-lg">
              Browse, search, and download notes effortlessly to stay ahead in your studies.
            </p>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.6}>
            <div className="mt-4 flex items-center">
              <div className="flex flex-wrap items-center justify-center gap-4 rounded-full bg-neutral-900 px-4 py-2.5 md:flex-row">
                {HIGHLIGHTS.map((item, index) => (
                  <AnimationContainer key={index} animation="fadeRight" delay={0.7 + index * 0.1}>
                    <div className="flex items-center gap-2 md:last:flex">
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={1024}
                        height={1024}
                        className="size-5 text-primary"
                      />
                      <span className="text-[10px] text-foreground md:text-sm">{item.label}</span>
                    </div>
                  </AnimationContainer>
                ))}
              </div>
            </div>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={1}>
            <Link href="/signup">
              <Button size="lg" className="mt-6">
                Explore Notes
                <ArrowRightIcon className="ml-2 size-4" />
              </Button>
            </Link>
          </AnimationContainer>
        </div>
      </div>
    </Wrapper>
  )
}

export default CTA
