'use client'

import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

type BreadcrumbItem = {
  title: string
  link: string
}

// Mapping based on your sidebar structure
const routeMapping: Record<string, BreadcrumbItem[]> = {
  '/dashboard': [
    { title: 'Dashboard', link: '/dashboard' },
    { title: 'Lobby', link: '' },
  ],
  '/dashboard/announcements': [
    { title: 'Dashboard', link: '/dashboard' },
    { title: 'Announcements', link: '/dashboard/announcements' },
  ],
  '/dashboard/notes': [
    { title: 'Dashboard', link: '/dashboard' },
    { title: 'Notes', link: '/dashboard/notes' },
  ],
  '/dashboard/exclusive': [
    { title: 'Dashboard', link: '/dashboard' },
    { title: 'Exclusive', link: '/dashboard/exclusive' },
  ],
  '/dashboard/notes/sub1': [
    { title: 'Dashboard', link: '/' },
    { title: 'Notes', link: '/dashboard/notes' },
    { title: 'Python Basics', link: '/dashboard/notes/sub1' },
  ],
  '/dashboard/notes/sub2': [
    { title: 'Dashboard', link: '/' },
    { title: 'Notes', link: '/dashboard/notes' },
    { title: 'Mathematics', link: '/dashboard/notes/sub2' },
  ],
  '/dashboard/notes/sub3': [
    { title: 'Dashboard', link: '/' },
    { title: 'Notes', link: '/dashboard/notes' },
    { title: 'Engineering Mechanics', link: '/dashboard/notes/sub3' },
  ],
  '/dashboard/notes/sub4': [
    { title: 'Dashboard', link: '/' },
    { title: 'Notes', link: '/dashboard/notes' },
    { title: 'English', link: '/dashboard/notes/sub4' },
  ],
}

export function useBreadcrumbs() {
  const pathname = usePathname()

  const breadcrumbs = useMemo(() => {
    // Check if we have a custom mapping for this exact path
    if (routeMapping[pathname]) {
      return routeMapping[pathname]
    }

    // If no exact match, generate breadcrumbs dynamically
    const segments = pathname.split('/').filter(Boolean)
    return segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join('/')}`
      return {
        title: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
        link: path,
      }
    })
  }, [pathname])

  return breadcrumbs
}
