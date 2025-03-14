'use client'

import React from 'react'
import Wrapper from '@/components/global/wrapper'
import SectionBadge from '@/components/ui/section-badge'
import AnimationContainer from '@/components/global/animation-container'

const PolicyPage = () => {
  return (
    <Wrapper className="relative h-full min-h-screen w-full flex-1 pt-20 lg:pt-32">
      <div className="flex h-full w-full flex-col items-start gap-10 py-8">
        <div className="flex flex-col items-start gap-4">
          <AnimationContainer animation="fadeUp" delay={0.2}>
            <SectionBadge title="Last Updated: 14 March 2025" />
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.4}>
            <h1 className="bg-gradient-to-r from-foreground to-neutral-500 bg-clip-text text-5xl font-medium !leading-tight text-transparent lg:text-6xl">
              Privacy Policy
            </h1>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.6}>
            <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
              Your privacy is important to us. This policy explains what information we collect, how
              we use it, and your rights regarding that information.
            </p>
          </AnimationContainer>
        </div>

        <AnimationContainer animation="fadeUp" delay={0.8}>
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-medium md:text-2xl">Information We Collect</h2>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                When you sign up, we ask for your username, name, and email. This is just so we know
                it's really you logging in! Think of it like a secret handshake. We only ask for
                what we need to let you use the site. We promise we won't ask for your address,
                phone number, or anything else unless you tell us it's okay.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium md:text-2xl">How We Use Your Information</h2>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                We use your login details to make sure you're you! We use a super secure service
                called Clerk to do this – it's like a really good lock on a door. This helps us
                manage your account so you can get to all the awesome notes. We won't share your
                info with anyone else, and we won't use it to send you ads or anything like that.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium md:text-2xl">Data Security</h2>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                We use top-notch security to keep your info safe. We use Clerk for logins (like a
                bodyguard for your account) and Supabase to store your data (like a super strong
                vault). Only people who are logged in can download the notes, and all the notes are
                uploaded by Priyanshu, so you know they're safe.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium md:text-2xl">No Tracking Technologies</h2>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                We don't use cookies (those little files that websites use to track you) or any
                other sneaky tricks to see what you're doing on our site. We respect your privacy,
                and we want you to feel safe.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium md:text-2xl">Your Rights</h2>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                You have the right to know what info we have about you, and you can ask us to delete
                it anytime. Just send us a message, and we'll help you out. It's like having a
                "delete" button for your info.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium md:text-2xl">Our Commitment</h2>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                We don't allow hackers or spammers on our site. We want everyone to have a safe and
                fun time. If you see anything suspicious, please let us know!
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium md:text-2xl">Policy Updates</h2>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                We may update this Privacy Policy from time to time to reflect changes in our
                practices or for other operational, legal, or regulatory reasons. We will notify you
                of any significant changes by posting the new policy on our website with a revised
                "Last Updated" date. Please review this policy periodically for any updates.
              </p>
            </section>
          </div>
        </AnimationContainer>
      </div>
    </Wrapper>
  )
}

export default PolicyPage
