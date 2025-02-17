export type PlanFeature = {
  text: string
  included: boolean
}

export type Plan = {
  name: string
  description: string
  price: {
    monthly: number
    yearly: number
  }
  features: PlanFeature[]
  popular?: boolean
}

export const PRICING_PLANS: Plan[] = [
  {
    name: 'Basic',
    description: 'For students who need essential notes',
    price: {
      monthly: 199,
      yearly: 1990,
    },
    features: [
      { text: 'Access to Semester Notes', included: true },
      { text: 'Download PDFs', included: true },
      { text: 'Limited Cloud Storage (2GB)', included: true },
      { text: 'Email Support', included: true },
      { text: 'Offline Access', included: false },
      { text: 'Priority Updates', included: false },
    ],
  },
  {
    name: 'Pro',
    description: 'Best for students who want more resources',
    price: {
      monthly: 399,
      yearly: 3990,
    },
    popular: true,
    features: [
      { text: 'Access to All Notes & Resources', included: true },
      { text: 'Download PDFs & PPTs', included: true },
      { text: 'Extended Cloud Storage (10GB)', included: true },
      { text: 'Offline Access', included: true },
      { text: 'Priority Updates', included: true },
      { text: 'Live Q&A Support', included: false },
    ],
  },
  {
    name: 'Premium',
    description: 'For serious learners & researchers',
    price: {
      monthly: 699,
      yearly: 6990,
    },
    features: [
      { text: 'Unlimited Access to All Notes', included: true },
      { text: 'Download Exclusive Materials', included: true },
      { text: 'Premium Cloud Storage (50GB)', included: true },
      { text: 'Offline Access', included: true },
      { text: 'Priority Updates', included: true },
      { text: 'Live Q&A & 24/7 Support', included: true },
    ],
  },
]
