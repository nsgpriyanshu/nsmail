import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FAQS } from '@/constants' // Make sure to update the FAQS data
import AnimationContainer from './global/animation-container'
import Wrapper from './global/wrapper'
import SectionBadge from './ui/section-badge'

const FAQ = () => {
  return (
    <Wrapper className="py-20 lg:py-32">
      <div className="flex flex-col items-center gap-4 text-center">
        <AnimationContainer animation="fadeUp" delay={0.2}>
          <SectionBadge title="FAQ" />
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <h2 className="bg-gradient-to-b from-foreground to-neutral-400 bg-clip-text text-2xl font-medium !leading-tight text-transparent md:text-4xl lg:text-5xl">
            Questions About Notes?
          </h2>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.4}>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base lg:text-lg">
            Find answers about downloading, searching, and using notes on our platform.
          </p>
        </AnimationContainer>
      </div>

      <div className="mx-auto max-w-3xl pt-10">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {FAQS.map((item, index) => (
            <AnimationContainer key={index} animation="fadeUp" delay={0.5 + index * 0.1}>
              <AccordionItem
                value={`item-${index}`}
                className="rounded-2xl border-none bg-[#191919] px-6"
              >
                <AccordionTrigger className="py-6 text-left text-base font-normal hover:no-underline md:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-left text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </AnimationContainer>
          ))}
        </Accordion>
      </div>
    </Wrapper>
  )
}

export default FAQ
