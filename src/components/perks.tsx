import { PERKS } from '@/constants' // Importing the list of perks from a constants file
import { cn } from '@/lib' // Importing a utility function for conditional class names
import Image from 'next/image'
import AnimationContainer from './global/animation-container'
import Wrapper from './global/wrapper'
import SectionBadge from './ui/section-badge'

const Perks = () => {
  return (
    <Wrapper className="relative py-20 lg:py-32">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-4 text-center">
        <AnimationContainer animation="fadeUp" delay={0.2}>
          <SectionBadge title="Why Choose Us?" />
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <h2 className="bg-gradient-to-b from-foreground to-neutral-400 bg-clip-text text-2xl font-medium !leading-tight text-transparent md:text-4xl lg:text-5xl">
            Enhance Your Learning
            <br />
            with Powerful Resources
          </h2>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.4}>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base lg:text-lg">
            Access well-structured notes, topic-wise PDFs, and curated study materials to boost your
            academic success.
          </p>
        </AnimationContainer>
      </div>

      {/* Perks Grid */}
      <div className="relative pt-10">
        {/* Background Grid Animation (Only for Large Screens) */}
        <div className="absolute left-1/2 top-1/2 z-10 hidden h-full w-full -translate-x-1/2 -translate-y-1/2 lg:block">
          <AnimationContainer animation="scaleUp" delay={0.5}>
            <Image
              src="/images/grid-lines.svg"
              alt="Grid Background"
              width={32}
              height={32}
              className="size-full"
            />
          </AnimationContainer>
        </div>

        {/* List of Perks */}
        <div className="relative z-20 grid grid-cols-2">
          {PERKS.map((perk, index) => (
            <div
              key={index}
              className={cn(
                'flex items-center p-2 md:p-16',
                index % 2 === 0 ? 'justify-end' : 'justify-start',
              )}
            >
              <AnimationContainer
                animation={index % 2 === 0 ? 'fadeRight' : 'fadeLeft'}
                delay={0.2 * (index + 1)}
              >
                <div className="flex flex-col items-center gap-4 text-center">
                  {/* Icon Container */}
                  <div className="flex size-12 items-center justify-center rounded-lg bg-neutral-900 lg:size-16 lg:rounded-2xl">
                    <Image
                      src={perk.icon}
                      alt={perk.title}
                      width={1024}
                      height={1024}
                      className="size-8 lg:size-10"
                    />
                  </div>
                  {/* Perk Details */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium md:text-xl">{perk.title}</h3>
                    <p className="max-w-[250px] text-xs text-muted-foreground md:text-sm">
                      {perk.description}
                    </p>
                  </div>
                </div>
              </AnimationContainer>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

export default Perks
