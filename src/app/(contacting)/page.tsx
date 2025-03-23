import ContactForm from '@/components/contactform'
import CTA from '@/components/cta'
import FAQ from '@/components/faq'
import Hero from '@/components/hero'
import HowItWorks from '@/components/how-it-works'
import PlatformMetrics from '@/components/platform-metrics'

const HomePage = () => {
  return (
    <div className="relative flex w-full flex-col">
      <section className="w-full">
        <Hero />
      </section>

      <section className="w-full">
        <HowItWorks />
      </section>

      <section className="w-full">
        <ContactForm />
      </section>

      <section className="w-full">
        <PlatformMetrics />
      </section>

      <section className="w-full">
        <FAQ />
      </section>

      <section className="w-full">
        <CTA />
      </section>
    </div>
  )
}

export default HomePage
