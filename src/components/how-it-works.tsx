import { HOW_IT_WORKS } from '@/constants'
import { cn } from '@/lib'
import Image from 'next/image'
import AnimationContainer from './global/animation-container'
import Wrapper from './global/wrapper'
import SectionBadge from './ui/section-badge'

const HowItWorks = () => {
  return (
    <Wrapper className="relative py-20 lg:py-32">
      <div className="flex w-full flex-col items-center gap-4 py-8 text-center">
        <AnimationContainer animation="fadeUp" delay={0.2}>
          <SectionBadge title="How It Works" />
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <h1 className="bg-gradient-to-b from-foreground to-neutral-400 bg-clip-text text-2xl font-medium !leading-tight text-transparent md:text-4xl lg:text-5xl">
            Find, Download, Study
          </h1>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.4}>
          <p className="mx-auto max-w-lg text-sm text-muted-foreground md:text-base lg:text-lg">
            Get your notes in three simple steps and ace your exams.
          </p>
        </AnimationContainer>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 pt-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {HOW_IT_WORKS.map((item, index) => (
          <AnimationContainer key={index} animation="fadeUp" delay={0.5 + index * 0.2}>
            <div
              className={cn(
                'flex flex-col items-start gap-4 rounded-lg bg-gradient-to-b p-4 lg:rounded-2xl lg:p-8',
                index % 2 === 0
                  ? 'from-neutral-900 to-transparent'
                  : 'from-transparent to-neutral-900',
              )}
            >
              <div className="flex items-center gap-x-4">
                <AnimationContainer animation="scaleUp" delay={0.7 + index * 0.2}>
                  <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-b from-primary to-neutral-400">
                    <span className="text-lg font-medium text-secondary">{index + 1}</span>
                  </div>
                </AnimationContainer>
                <h3 className="text-lg font-medium">{item.title}</h3>
              </div>
              <div className="w-full space-y-4">
                <AnimationContainer animation="fadeUp" delay={0.9 + index * 0.2}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1024}
                    height={1024}
                    className="h-52 w-full object-contain"
                  />
                </AnimationContainer>
                <AnimationContainer animation="fadeUp" delay={1.1 + index * 0.2}>
                  <p className="text-sm text-muted-foreground md:text-base">{item.description}</p>
                </AnimationContainer>
              </div>
            </div>
          </AnimationContainer>
        ))}
      </div>
    </Wrapper>
  )
}

export default HowItWorks
