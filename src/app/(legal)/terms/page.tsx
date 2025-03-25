'use client'

import React from 'react'
import Wrapper from '@/components/global/wrapper'
import SectionBadge from '@/components/ui/section-badge'
import AnimationContainer from '@/components/global/animation-container'

const TermsOfServicePage = () => {
  return (
    <Wrapper className="relative h-full min-h-screen w-full flex-1 pt-20 lg:pt-32">
      <div className="flex h-full w-full flex-col items-start gap-10 py-8">
        <div className="flex flex-col items-start gap-4">
          <AnimationContainer animation="fadeUp" delay={0.2}>
            <SectionBadge title="Effective Date: 14 March 2025" />
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.4}>
            <h1 className="bg-gradient-to-r from-foreground to-neutral-500 bg-clip-text text-5xl font-medium !leading-tight text-transparent lg:text-6xl">
              Terms of Service
            </h1>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.6}>
            <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
              Welcome to nsmail! These rules help keep our platform safe and fun for everyone.
            </p>
          </AnimationContainer>
        </div>

        <AnimationContainer animation="fadeUp" delay={0.8}>
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-medium md:text-2xl">1. Accepting These Rules</h2>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                By using nsmail, you're agreeing to follow these Terms of Service. If you don't
                agree, you can't use our site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium md:text-2xl">2. Your Account</h2>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                To use nsmail, you'll need an account. When you sign up, please:
              </p>
              <ul className="list-inside list-disc">
                <li>Give us real and true information.</li>
                <li>Keep your password secret.</li>
                <li>Tell us right away if you think someone else is using your account.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium md:text-2xl">3. Using Our Stuff</h2>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                All the notes and study materials are for you to learn from. Please don't:
              </p>
              <ul className="list-inside list-disc">
                <li>Copy or sell them without asking.</li>
                <li>Say you made the notes that Priyanshu uploaded.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium md:text-2xl">4. Your Responsibilities</h2>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                When you use nsmail, please:
              </p>
              <ul className="list-inside list-disc">
                <li>Use it nicely and follow the rules.</li>
                <li>Respect the people who made the notes.</li>
                <li>Don't share anything mean or bad.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium md:text-2xl">5. Things You Can't Do</h2>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                We don't allow:
              </p>
              <ul className="list-inside list-disc">
                <li>Trying to hack or break our site.</li>
                <li>Putting bad programs or viruses on our site.</li>
                <li>Using our site to send spam or trick people.</li>
              </ul>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                If you do these things, your account might get blocked.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium md:text-2xl">6. Sometimes We Might Be Down</h2>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                We'll try to keep nsmail working, but sometimes we might need to fix things. We're
                not responsible if the site isn't working for a bit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium md:text-2xl">7. Ending Your Account</h2>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                We can close your account if you break these rules. You can also ask us to close
                your account anytime.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium md:text-2xl">8. We're Not Perfect</h2>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                We try to make sure everything is right, but we can't promise it's perfect. We're
                not responsible if you have problems because of something on our site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium md:text-2xl">9. We Might Change These Rules</h2>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                We might change these rules sometimes. We'll tell you if we make big changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium md:text-2xl">10. Talk to Us</h2>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                If you have any questions, you can contact us at through contact section.
              </p>
            </section>
          </div>
        </AnimationContainer>
      </div>
    </Wrapper>
  )
}

export default TermsOfServicePage
