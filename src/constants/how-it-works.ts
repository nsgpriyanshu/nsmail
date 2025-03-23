export interface HowItWorksItem {
  title: string
  description: string
  image: string
}

export const HOW_IT_WORKS: HowItWorksItem[] = [
  {
    title: 'Fill Out the Form',
    description:
      'You type your message and info into the contact form on the website. Like writing a letter!',
    image: '/images/hiw-one.png',
  },
  {
    title: 'Send It to the API',
    description:
      "When you click 'send', your message goes to a special helper (an API) that knows how to deliver it.",
    image: '/images/hiw-two.png',
  },
  {
    title: 'See It in Discord!',
    description:
      "The helper sends your message to my Discord, where I can read it and reply! It's like getting a message in a secret clubhouse.",
    image: '/images/hiw-three.png',
  },
]
