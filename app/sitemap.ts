import type { MetadataRoute } from 'next'
import { getAllPostParams } from '@/lib/blog/posts'
import { SITE_URL } from '@/lib/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const pages: [string, number, 'weekly' | 'monthly' | 'yearly'][] = [
    ['', 1, 'weekly'],
    ['/services', 0.9, 'monthly'],
    ['/pricing', 0.9, 'monthly'],
    ['/how-it-works', 0.8, 'monthly'],
    ['/free-draft', 0.9, 'monthly'],
    ['/portfolio', 0.6, 'monthly'],
    ['/contact', 0.8, 'monthly'],
    ['/blog', 0.8, 'weekly'],
    ['/privacy', 0.2, 'yearly'],
    ['/terms', 0.2, 'yearly'],
    ['/cookie-policy', 0.1, 'yearly'],
  ]
  return [
    ...pages.map(([p, priority, changeFrequency]) => ({ url: `${SITE_URL}${p}`, lastModified, changeFrequency, priority })),
    ...getAllPostParams().map(({ slug, date }) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: new Date(date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
