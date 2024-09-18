import ContactForm from '@/components/ContactForm'
import FandQ from '@/components/FandQ'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Steps from '@/components/Steps'

export default function Home() {
  return (
    <div className="min-h-screen w-full items-center justify-center bg-neutral-200 dark:bg-zinc-950">
      <Header />
      <Hero />
      <ContactForm />
      <Steps />
      <FandQ />
    </div>
  )
}
