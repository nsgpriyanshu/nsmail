import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import AnimationContainer from './global/animation-container'
import Wrapper from './global/wrapper'
import Icons from './global/icons'

const PRODUCT_LINKS = [{ label: 'Notes', href: 'dashboard/notes' }]

const RESOURCES_LINKS = [
  { label: 'DSA & Algorithms', href: 'https://www.geeksforgeeks.org/data-structures/' },
  { label: 'Operating Systems', href: 'https://cs50.harvard.edu/' },
  { label: 'Computer Networks', href: 'https://www.studytonight.com/computer-networks/' },
  { label: 'DBMS (Database Systems)', href: 'https://www.javatpoint.com/dbms-tutorial' },
  { label: 'System Design', href: 'https://roadmap.sh/system-design' },
  {
    label: 'Machine Learning',
    href: 'https://www.coursera.org/specializations/machine-learning-introduction',
  },
]

const COMPANY_LINKS = [
  { label: 'About Us', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
]

const SOCIAL_LINKS = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Youtube, href: '#' },
]

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden border-t border-border pb-8 pt-16 md:pb-0">
      <Wrapper className="">
        <AnimationContainer animation="scaleUp" delay={0.2}>
          <div className="absolute inset-x-0 -top-1/8 mx-auto h-1/4 w-1/2 rounded-full bg-primary/50 blur-[6rem] lg:-top-1/2 lg:bg-primary/70 lg:blur-[12rem]"></div>
        </AnimationContainer>

        <AnimationContainer animation="scaleUp" delay={0.3}>
          <div className="absolute inset-x-0 top-0 mx-auto h-px w-4/5 bg-gradient-to-r from-primary/0 via-primary/80 to-primary/0"></div>
        </AnimationContainer>

        <div className="grid gap-8 xl:grid-cols-3 xl:gap-8">
          <AnimationContainer animation="fadeRight" delay={0.4}>
            <div className="flex flex-col items-start justify-start md:max-w-[300px]">
              <div className="flex items-center gap-2">
                <Icons.logo className="-mt-1 h-7 w-max" />
                <span className="text-lg font-medium lg:text-xl">NoteEase</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">India</p>
              {/* <div className="mt-6 flex items-center gap-4">
                {SOCIAL_LINKS.map((social, index) => (
                  <AnimationContainer key={index} animation="fadeUp" delay={0.6 + index * 0.1}>
                    <Link
                      href={social.href}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <social.icon className="size-5" />
                    </Link>
                  </AnimationContainer>
                ))}
              </div> */}
            </div>
          </AnimationContainer>

          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <AnimationContainer animation="fadeUp" delay={0.5}>
                <div>
                  <h3 className="text-base font-medium">Product</h3>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {PRODUCT_LINKS.map((link, index) => (
                      <AnimationContainer
                        key={index}
                        animation="fadeLeft"
                        delay={0.6 + index * 0.1}
                      >
                        <li>
                          <Link
                            href={link.href}
                            className="transition-colors hover:text-foreground"
                          >
                            {link.label}
                          </Link>
                        </li>
                      </AnimationContainer>
                    ))}
                  </ul>
                </div>
              </AnimationContainer>

              <AnimationContainer animation="fadeUp" delay={0.5}>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-base font-medium">Resources</h3>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {RESOURCES_LINKS.map((link, index) => (
                      <AnimationContainer
                        key={index}
                        animation="fadeLeft"
                        delay={0.7 + index * 0.1}
                      >
                        <li>
                          <Link
                            href={link.href}
                            className="transition-colors hover:text-foreground"
                            target="_blank" // Opens in new tab
                          >
                            {link.label}
                          </Link>
                        </li>
                      </AnimationContainer>
                    ))}
                  </ul>
                </div>
              </AnimationContainer>
            </div>

            <AnimationContainer animation="fadeUp" delay={0.5}>
              <div>
                <h3 className="text-base font-medium">Company</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {COMPANY_LINKS.map((link, index) => (
                    <AnimationContainer key={index} animation="fadeLeft" delay={0.8 + index * 0.1}>
                      <li>
                        <Link href={link.href} className="transition-colors hover:text-foreground">
                          {link.label}
                        </Link>
                      </li>
                    </AnimationContainer>
                  ))}
                </ul>
              </div>
            </AnimationContainer>
          </div>
        </div>

        <AnimationContainer animation="fadeUp" delay={1}>
          <div className="mt-16 flex flex-col items-center justify-center border-t border-border/40 py-8 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} NoteEase. a product of Creator&apos;s World
            </p>
          </div>
        </AnimationContainer>
      </Wrapper>
    </footer>
  )
}

export default Footer
