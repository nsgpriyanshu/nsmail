import { METRICS } from '@/constants'
import { cn } from '@/lib'
import NumberFlow from '@number-flow/react'
import Image from 'next/image'
import AnimationContainer from './global/animation-container'
import Wrapper from './global/wrapper'
import { Button } from './ui/button'
import SectionBadge from './ui/section-badge'
import Link from 'next/link'

const PlatformMetrics = () => {
  return (
    <Wrapper className="py-20 lg:py-32">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
          <AnimationContainer animation="fadeUp" delay={0.2}>
            <SectionBadge title="Our Performance" />
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.3}>
            <h2 className="bg-gradient-to-b from-foreground to-neutral-400 bg-clip-text text-2xl font-medium !leading-tight text-transparent md:text-4xl lg:text-5xl">
              Message Flow Metrics
            </h2>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.4}>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base lg:text-lg">
              See how our messaging system performs with these key metrics.
            </p>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.5}>
            <Link href="/">
              {' '}
              {/* Change to your contact page or signup, as needed */}
              <Button className="mt-4">Contact Us</Button>
            </Link>
          </AnimationContainer>
        </div>

        <div className="flex flex-col gap-6 px-1 md:px-0">
          {METRICS.map((metric, index) => (
            <AnimationContainer
              key={index}
              animation={metric.reverse ? 'fadeLeft' : 'fadeRight'}
              delay={0.6 + index * 0.2}
            >
              <div className="relative z-0 overflow-hidden rounded-3xl bg-[#191919] p-4 lg:p-6">
                <AnimationContainer animation="scaleUp" delay={0.7 + index * 0.2}>
                  <div
                    className={cn(
                      'absolute -bottom-1/2 right-0 -z-10 size-20 rounded-full bg-primary blur-[3rem] lg:size-32 lg:blur-[5rem]',
                      metric.reverse && 'left-0',
                    )}
                  ></div>
                </AnimationContainer>

                <div
                  className={cn(
                    'z-30 flex items-center justify-between gap-6',
                    metric.reverse && 'flex-row-reverse',
                  )}
                >
                  <AnimationContainer animation="fadeUp" delay={0.8 + index * 0.2}>
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-medium">
                          <NumberFlow value={metric.number} />
                        </span>
                        {metric.suffix && (
                          <span className="text-4xl font-medium">{metric.suffix}</span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{metric.label}</p>
                    </div>
                  </AnimationContainer>

                  <AnimationContainer
                    animation={metric.reverse ? 'fadeRight' : 'fadeLeft'}
                    delay={0.9 + index * 0.2}
                  >
                    <div
                      className={cn(
                        'absolute inset-y-0 right-0 my-auto flex h-32 items-center justify-center rounded-2xl',
                        metric.reverse && 'left-0 right-auto',
                      )}
                    >
                      <Image
                        src={metric.image}
                        alt={metric.label}
                        width={1024}
                        height={1024}
                        className="size-full"
                      />
                    </div>
                  </AnimationContainer>
                </div>
              </div>
            </AnimationContainer>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

export default PlatformMetrics
