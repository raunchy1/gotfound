import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/config'

export default function robots(): MetadataRoute.Robots {
  // Staging builds (NEXT_PUBLIC_NOINDEX=1) are kept out of search engines.
  if (process.env.NEXT_PUBLIC_NOINDEX === '1') return { rules: { userAgent: '*', disallow: '/' } }
  return { rules: { userAgent: '*', allow: '/' }, sitemap: `${SITE_URL}/sitemap.xml` }
}
