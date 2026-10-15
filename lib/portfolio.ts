export type Work = {
  id: string
  title: string
  tag: string
  problem: string
  did: string
  how: string[]
  stack: string[]
  status: string
  href?: string
  image: string
}

/** Real projects only. No invented clients, numbers or testimonials. */
export const works: Work[] = [
  {
    id: 'andamus',
    title: 'Andamus',
    tag: 'Web app · Local mobility',
    status: 'In development',
    image: '/portfolio/andamus.webp',
    href: 'https://andamus.13.140.190.190.sslip.io',
    problem:
      'In rural areas with sparse public transit, getting from one small town to the next is hard: buses run rarely, schedules are awkward, and a short trip can take hours.',
    did:
      'Andamus turns a long-standing local habit, offering someone a ride, into a community mobility network with two profiles: driver and passenger.',
    how: [
      'A driver posts a trip they are already making, with a direction and a time.',
      'Passengers search the route, find the ride and book a seat.',
      'The driver decides whether the ride is free or paid, with payments handled through Stripe.',
      'Push notifications and Google sign-in keep everyone updated in real time.',
    ],
    stack: ['Next.js', 'Supabase', 'Google OAuth', 'Google Maps', 'Stripe', 'Push notifications'],
  },
]
