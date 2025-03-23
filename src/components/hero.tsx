import Image from 'next/image'
import Link from 'next/link'
import AnimationContainer from './global/animation-container'
import Images from './global/images'
import Wrapper from './global/wrapper'
import { Button } from './ui/button'
import Marquee from './ui/marquee'
import SectionBadge from './ui/section-badge'

const Hero = () => {
  const companies = [
    Images.comp1,
    Images.comp2,
    Images.comp3,
    Images.comp4,
    Images.comp5,
    Images.comp6,
  ]

  return (
    <Wrapper className="relative h-full min-h-screen w-full flex-1 pt-20 lg:pt-32">
      <div className="flex h-full w-full flex-col lg:flex-row lg:gap-16">
        <div className="flex w-full flex-col items-start gap-10 py-8">
          <div className="flex flex-col items-start gap-4">
            <AnimationContainer animation="fadeUp" delay={0.2}>
              <SectionBadge title="Let's Connect and Collaborate" />
            </AnimationContainer>

            <AnimationContainer animation="fadeUp" delay={0.4}>
              <h1 className="bg-gradient-to-r from-foreground to-neutral-500 bg-clip-text text-5xl font-medium !leading-tight text-transparent lg:text-6xl">
                Follow a vision and think differently
              </h1>
            </AnimationContainer>

            <AnimationContainer animation="fadeUp" delay={0.6}>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                Ohh, again, you've got your doubts, huh? Well, let me know what your problem is—but
                make sure to read the stuff below first.
              </p>
            </AnimationContainer>
          </div>

          <AnimationContainer animation="fadeUp" delay={0.8}>
            <div className="w-full">
              <Link href="/dashboard/notes">
                <Button size="md" className="w-full md:w-auto">
                  Send a Message
                </Button>
              </Link>
            </div>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={1}>
            <div className="flex flex-col items-start gap-4 py-4">
              <p className="text-sm text-muted-foreground md:text-base">
                Recommended by Top Companies
              </p>
              <div className="relative w-full max-w-[calc(100vw-2rem)] lg:max-w-lg">
                <Marquee className="select-none [--duration:40s] [--gap:2rem]">
                  {[...Array(10)].map((_, index) => (
                    <div
                      key={index}
                      className="flex h-16 items-center justify-center text-muted-foreground"
                    >
                      {companies[index % companies.length]({ className: 'w-auto h-5' })}
                    </div>
                  ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 -right-1 z-40 w-1/3 bg-gradient-to-l from-[#101010]"></div>
                <div className="pointer-events-none absolute inset-y-0 -left-1 z-40 w-1/3 bg-gradient-to-r from-[#101010]"></div>
              </div>
            </div>
          </AnimationContainer>
        </div>

        <AnimationContainer animation="fadeRight" delay={0.4}>
          <div className="relative flex h-min w-full flex-col items-start justify-start overflow-visible">
            <div className="relative w-full lg:aspect-[1.3884514435695539/1] lg:h-[auto,720px] lg:w-[1000px]">
              <div className="pointer-events-none absolute inset-y-0 right-1/4 z-50 hidden h-full w-1/3 bg-gradient-to-l from-background lg:block"></div>
              <div className="lg:absolute lg:inset-0">
                <Image
                  src="/images/hero.png"
                  alt="nsMail Preview"
                  sizes="1000px"
                  width={800}
                  height={800}
                  className="rounded-xl object-contain lg:rounded-2xl"
                />
              </div>
            </div>
          </div>
        </AnimationContainer>
      </div>
      <AnimationContainer
        animation="scaleUp"
        delay={1.2}
        className="absolute -top-[8%] left-1/4 -z-10 h-auto w-2/3"
      >
        <Image
          src="/images/hero-gradient.png"
          alt="Notes Gradient Background"
          width={1024}
          height={1024}
          className="h-auto w-full object-cover"
        />
      </AnimationContainer>
    </Wrapper>
  )
}

export default Hero
