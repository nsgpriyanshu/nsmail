export interface PerkItem {
  title: string
  description: string
  icon: string
}

export const PERKS: PerkItem[] = [
  {
    title: 'Organized Notes',
    description: 'Access well-structured notes for all subjects in one place.',
    icon: '/icons/perk-one.svg',
  },
  {
    title: 'Topic-Wise PDFs',
    description: 'Download topic-specific PDFs for better understanding.',
    icon: '/icons/perk-two.svg',
  },
  {
    title: 'Easy Search',
    description: 'Find notes quickly with an intelligent search system.',
    icon: '/icons/perk-three.svg',
  },
  {
    title: 'Regular Updates',
    description: 'Stay up-to-date with newly added materials every semester.',
    icon: '/icons/perk-four.svg',
  },
]
