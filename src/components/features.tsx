import { FEATURES } from '@/constants'
import Image from 'next/image'
import AnimationContainer from './global/animation-container'
import Wrapper from './global/wrapper'
import SectionBadge from './ui/section-badge'

const Features = () => {
  return (
    <Wrapper className="py-20 lg:py-32">
      <div className="mb-16 flex flex-col items-center gap-4 text-center">
        <AnimationContainer animation="fadeUp" delay={0.2}>
          <SectionBadge title="Website Features" />
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <h2 className="bg-gradient-to-b from-foreground to-neutral-400 bg-clip-text text-2xl font-medium !leading-tight text-transparent md:text-4xl lg:text-5xl">
            Access Notes Easily
          </h2>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.4}>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base lg:text-lg">
            Quickly find, download, and study notes with a seamless and user-friendly interface.
          </p>
        </AnimationContainer>
      </div>

      <div className="flex flex-col gap-6 px-1 md:px-0">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_.65fr]">
          <AnimationContainer animation="fadeRight" delay={0.5}>
            <div className="relative min-h-[400px] overflow-hidden rounded-3xl bg-[#191919] backdrop-blur-3xl">
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <AnimationContainer animation="fadeUp" delay={0.6}>
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium md:text-2xl">{FEATURES[0].title}</h3>
                    <p className="max-w-md text-sm text-muted-foreground md:text-base">
                      {FEATURES[0].description}
                    </p>
                  </div>
                </AnimationContainer>
                <AnimationContainer animation="fadeUp" delay={0.7}>
                  <div className="relative h-60">
                    <Image
                      src={FEATURES[0].image}
                      alt={FEATURES[0].title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </AnimationContainer>
              </div>
            </div>
          </AnimationContainer>

          <AnimationContainer animation="fadeLeft" delay={0.6}>
            <div className="relative min-h-[400px] overflow-hidden rounded-3xl bg-[#191919] backdrop-blur-3xl">
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <AnimationContainer animation="fadeUp" delay={0.7}>
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium md:text-2xl">{FEATURES[1].title}</h3>
                    <p className="max-w-md text-sm text-muted-foreground md:text-base">
                      {FEATURES[1].description}
                    </p>
                  </div>
                </AnimationContainer>
                <AnimationContainer animation="fadeUp" delay={0.8}>
                  <div className="relative h-48">
                    <Image
                      src={FEATURES[1].image}
                      alt={FEATURES[1].title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </AnimationContainer>
              </div>
            </div>
          </AnimationContainer>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[.65fr_1fr]">
          <AnimationContainer animation="fadeRight" delay={0.7}>
            <div className="relative min-h-[350px] overflow-hidden rounded-3xl bg-[#191919] backdrop-blur-3xl">
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <AnimationContainer animation="fadeUp" delay={0.8}>
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium md:text-2xl">{FEATURES[2].title}</h3>
                    <p className="max-w-md text-sm text-muted-foreground md:text-base">
                      {FEATURES[2].description}
                    </p>
                  </div>
                </AnimationContainer>
                <AnimationContainer animation="fadeUp" delay={0.9}>
                  <div className="relative h-48">
                    <Image
                      src={FEATURES[2].image}
                      alt={FEATURES[2].title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </AnimationContainer>
              </div>
            </div>
          </AnimationContainer>

          <AnimationContainer animation="fadeLeft" delay={0.8}>
            <div className="relative min-h-[350px] overflow-hidden rounded-3xl bg-[#191919] backdrop-blur-3xl">
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <AnimationContainer animation="fadeUp" delay={0.9}>
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium md:text-2xl">{FEATURES[3].title}</h3>
                    <p className="max-w-md text-sm text-muted-foreground md:text-base">
                      {FEATURES[3].description}
                    </p>
                  </div>
                </AnimationContainer>
                <AnimationContainer animation="fadeUp" delay={1}>
                  <div className="relative h-48">
                    <Image
                      src={FEATURES[3].image}
                      alt={FEATURES[3].title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </AnimationContainer>
              </div>
            </div>
          </AnimationContainer>
        </div>
      </div>
    </Wrapper>
  )
}

export default Features
