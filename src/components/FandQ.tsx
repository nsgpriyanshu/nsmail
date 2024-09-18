import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FandQ() {
  return (
    <div className="relative mx-auto flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-md px-4 py-8 sm:px-6 md:px-8 lg:px-10 lg:py-12">
      <div className="text-center">
        <h1 className="mb-4 text-xl font-bold leading-tight tracking-tight text-neutral-800 dark:text-neutral-200 sm:text-xl md:text-3xl lg:text-4xl lg:leading-[1.1]">
          Frequently Asked Questions
        </h1>
        <p className="mx-auto mt-4 max-w-[45rem] text-base text-neutral-800 dark:text-neutral-400 sm:text-lg md:text-xl lg:text-2xl">
          Here are some common questions and answers that might help you find the information you're
          looking for.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full md:w-[40rem] lg:w-[60rem]">
        <AccordionItem value="item-1">
          <AccordionTrigger className="md:text-md text-base text-neutral-900 dark:text-neutral-100 sm:text-lg lg:text-xl">
            Is the service accessible globally?
          </AccordionTrigger>
          <AccordionContent className="md:text-md text-base text-neutral-800 dark:text-neutral-400 sm:text-lg lg:text-xl">
            Yes, our service is designed to be accessible from anywhere in the world.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="md:text-md text-base text-neutral-900 dark:text-neutral-100 sm:text-lg lg:text-xl">
            Will Priyanshu respond to my queries?
          </AccordionTrigger>
          <AccordionContent className="md:text-md text-base text-neutral-800 dark:text-neutral-400 sm:text-lg lg:text-xl">
            Yes, Priyanshu will respond to your inquiries as soon as possible, typically when he is
            available.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="md:text-md text-base text-neutral-900 dark:text-neutral-100 sm:text-lg lg:text-xl">
            How does the service work?
          </AccordionTrigger>
          <AccordionContent className="md:text-md text-base text-neutral-800 dark:text-neutral-400 sm:text-lg lg:text-xl">
            Our service utilizes modern technology combined with Priyanshu's specialized API to
            deliver efficient and effective results.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default FandQ
