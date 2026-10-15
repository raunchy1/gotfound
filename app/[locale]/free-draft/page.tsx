import { withSeo } from '@/lib/seo'
import type { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { business } from '@/lib/business'
import { Link } from '@/i18n/navigation'
import Logo from '@/components/Logo'
import LandingHero from '@/components/landing/LandingHero'
import LandingForm from '@/components/landing/LandingForm'
import LandingStickyBar from '@/components/landing/LandingStickyBar'
import LandingPageTracker from '@/components/landing/LandingPageTracker'
import HomeMotion from '@/components/home/HomeMotion'

type Props = { params: { locale: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'landingPage' })
  return withSeo({ title: t('metaTitle'), description: t('metaDescription'), alternates: { canonical: '/free-draft' } })
}

export default async function FreeDraftPage({ params }: Props) {
  setRequestLocale(params.locale)
  const t = await getTranslations({ locale: params.locale, namespace: 'landingPage' })

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Free website draft in 48 hours',
    provider: { '@id': `${business.url}/#localbusiness` },
    areaServed: { '@type': 'Country', name: 'United States' },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Free website draft in 48 hours, no upfront payment' },
  }

  return (
    <main id="main" className="relative overflow-x-clip" style={{ background: 'var(--bg)', color: 'var(--fg)', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <header className="fixed inset-x-0 top-0 z-50 border-b" style={{ borderColor: 'var(--line)', background: 'rgba(11,15,20,0.78)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)' }}>
        <div className="wrap flex h-[64px] items-center justify-between gap-4">
          <Link href="/" className="shrink-0 text-[15px] font-medium tracking-[0.18em] md:text-[17px]" style={{ color: 'var(--fg)' }} aria-label="GotFound home">
            <Logo />
          </Link>
          <span className="eyebrow truncate text-right">{t('headerBadge')}</span>
        </div>
      </header>
      <LandingPageTracker />
      <LandingHero />
      <LandingForm source="free_draft_page" />
      <LandingStickyBar />
      <footer className="rule pb-28 pt-8 md:pb-10">
        <p className="wrap text-[12px] tracking-[0.04em]" style={{ color: 'var(--dim)' }}>
          {business.name} · {business.tagline} · {business.email} ·{' '}
          <Link href="/privacy" className="underline underline-offset-4">Privacy</Link> ·{' '}
          <Link href="/terms" className="underline underline-offset-4">Terms</Link>
        </p>
      </footer>
      <HomeMotion rootId="main" />
    </main>
  )
}
