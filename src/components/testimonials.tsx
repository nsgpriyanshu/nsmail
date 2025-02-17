import { TESTIMONIALS } from '@/constants'
import { Star } from 'lucide-react'
import Image from 'next/image'
import AnimationContainer from './global/animation-container'
import Wrapper from './global/wrapper'
import Marquee from './ui/marquee'
import SectionBadge from './ui/section-badge'

const Testimonials = () => {
  return (
    <Wrapper className="py-20 lg:py-32">
      <div className="mb-16 flex flex-col items-center gap-4 text-center">
        <AnimationContainer animation="fadeUp" delay={0.2}>
          <SectionBadge title="What Students Say" />
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <h2 className="bg-gradient-to-b from-foreground to-neutral-400 bg-clip-text text-2xl font-medium !leading-tight text-transparent md:text-4xl lg:text-5xl">
            Feedback from Your Peers
          </h2>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.4}>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base lg:text-lg">
            See what students say about our notes and resources.
          </p>
        </AnimationContainer>
      </div>

      <AnimationContainer animation="fadeUp" delay={0.5}>
        <div className="relative">
          <div className="absolute -left-1 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#101010] to-transparent" />
          <div className="absolute -right-1 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#101010] to-transparent" />

          <Marquee className="[--gap:1.5rem]" pauseOnHover>
            {TESTIMONIALS.map((testimonial, index) => (
              <AnimationContainer key={index} animation="fadeUp" delay={0.6 + index * 0.1}>
                <div className="w-[400px] flex-shrink-0 rounded-3xl bg-[#191919] p-8 backdrop-blur-3xl">
                  <div className="flex flex-col gap-6">
                    <AnimationContainer animation="fadeRight" delay={0.7 + index * 0.1}>
                      <div className="flex items-center gap-4">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">{testimonial.author}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.8 + index * 0.1}>
                      <p className="text-lg">"{testimonial.content}"</p>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeUp" delay={0.9 + index * 0.1}>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                        ))}
                      </div>
                    </AnimationContainer>
                  </div>
                </div>
              </AnimationContainer>
            ))}
          </Marquee>
        </div>
      </AnimationContainer>
    </Wrapper>
  )
}

export default Testimonials
