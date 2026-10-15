import { withSeo } from '@/lib/seo'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import SiteShell from '@/components/SiteShell'
import BlogContent from '@/components/BlogContent'
import PageHeader from '@/components/site/PageHeader'
import CtaPanel from '@/components/site/CtaPanel'
import { getAllPostParams, getPost } from '@/lib/blog/posts'
import { getStaticWhatsAppUrl } from '@/lib/whatsapp'
import { PRICE_LABEL, SITE_URL } from '@/lib/config'

type Props = {
  params: { locale: string; slug: string }
}

export function generateStaticParams() {
  return getAllPostParams()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const post = getPost(locale, slug)
  if (!post) return {}

  const path = `/blog/${slug}`

  return withSeo({
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  }, locale)
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const post = getPost(locale, slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'GotFound',
    },
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-US',
    keywords: post.keywords.join(', '),
  }

  const cta = { label: 'Get my free draft', href: getStaticWhatsAppUrl(), back: '\u2190 Back to guides' }

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <PageHeader
        size="md"
        before={
          <Link href="/blog" className="ulink mb-10 md:mb-14" style={{ color: 'var(--muted)' }}>
            {cta.back}
          </Link>
        }
        eyebrow={
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString(
               'en-US',
              { year: 'numeric', month: 'long', day: 'numeric' }
            )}{' '}
            · {post.readTime}
          </time>
        }
        title={post.title}
        lead={post.description}
      />

      <div className="wrap pb-24 md:pb-40">
        <div className="rule grid gap-6 pt-4 md:grid-cols-12">
          <div className="md:col-span-8 md:col-start-3 lg:col-span-7 lg:col-start-4">
            <BlogContent blocks={post.blocks} />
          </div>
        </div>

        <CtaPanel
          className="mt-16 md:mt-24"
          title="No website yet? Let's fix that."
          body={`Free draft in 48 hours, no upfront payment. ${PRICE_LABEL} with domain and hosting for the first year, and you only pay if you like it.`}
          cta={cta.label}
          href={cta.href}
        />
      </div>
    </SiteShell>
  )
}