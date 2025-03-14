'use client'

import React from 'react'
import Wrapper from '@/components/global/wrapper'
import SectionBadge from '@/components/ui/section-badge'
import AnimationContainer from '@/components/global/animation-container'

const AboutUsPage = () => {
  return (
    <Wrapper className="relative h-full min-h-screen w-full flex-1 pt-20 lg:pt-32">
      <div className="flex h-full w-full flex-col items-start gap-10 py-8">
        <div className="flex flex-col items-start gap-4">
          <AnimationContainer animation="fadeUp" delay={0.2}>
            <SectionBadge title="Our Story" />
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.4}>
            <h1 className="bg-gradient-to-r from-foreground to-neutral-500 bg-clip-text text-5xl font-medium !leading-tight text-transparent lg:text-6xl">
              About Us
            </h1>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.6}>
            <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
              We're here to make learning easier and more fun for everyone!
            </p>
          </AnimationContainer>
        </div>

        <AnimationContainer animation="fadeUp" delay={0.8}>
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-medium md:text-2xl">Our Vision</h2>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                To provide high-quality educational resources to every aspiring learner, empowering
                them to achieve their dreams.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium md:text-2xl">Our Mission</h2>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                We believe that learning should be exciting and accessible. That's why we created
                NotEase! We want to provide you with awesome study notes and resources to help you
                succeed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium md:text-2xl">Who We Are</h2>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                NotEase is a product of Creator's World, and was created by a group of learners, who
                wanted to share helpful study materials with students like you. a group of learners,
                who works hard to make sure the notes are clear, accurate, and easy to understand.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium md:text-2xl">What We Offer</h2>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                On NotEase, you'll find:
                <ul className="list-inside list-disc">
                  <li>Easy-to-understand study notes.</li>
                  <li>Helpful PDFs and other resources.</li>
                  <li>A safe and friendly learning environment.</li>
                </ul>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium md:text-2xl">Our Promise</h2>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                We promise to:
                <ul className="list-inside list-disc">
                  <li>Keep adding new and helpful content.</li>
                  <li>Make sure our site is safe and secure.</li>
                  <li>Listen to your feedback and make NotEase even better.</li>
                </ul>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium md:text-2xl">Join Our Community!</h2>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                We're so happy to have you here! Let's learn and grow together. If you have any
                questions or suggestions, feel free to contact us.
              </p>
            </section>
          </div>
        </AnimationContainer>
      </div>
    </Wrapper>
  )
}

export default AboutUsPage
