import { withSeo } from '@/lib/seo'
import type { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import SiteShell from '@/components/SiteShell'
import PageHeader from '@/components/site/PageHeader'
import Arrow from '@/components/home/Arrow'
import LandingForm from '@/components/landing/LandingForm'
import { business } from '@/lib/business'
import { getStaticWhatsAppUrl } from '@/lib/whatsapp'

type Props = { params: { locale: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'contactPage' })
  return withSeo({ title: t('metaTitle'), description: t('metaDescription'), alternates: { canonical: '/contact' } })
}

export default async function ContactPage({ params }: Props) {
  setRequestLocale(params.locale)
  const t = await getTranslations({ locale: params.locale, namespace: 'contactPage' })
  const hours = t.raw('hours') as { day: string; time: string }[]

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: t('title'),
    url: `${business.url}/contact`,
    mainEntity: { '@id': `${business.url}/#localbusiness` },
  }

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <PageHeader eyebrow={t('eyebrow')} title={t('title')} lead={t('intro')} />

      <section className="wrap pb-10 md:pb-16">
        <div data-reveal className="grid gap-px md:grid-cols-3" style={{ background: 'var(--line)' }}>
          <div className="flex flex-col justify-between gap-8 p-6 md:p-8" style={{ background: 'var(--bg)' }}>
            <p className="eyebrow">{t('phoneLabel')}</p>
            <a href={getStaticWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-[26px] leading-none tracking-[-0.03em] transition-colors hover:text-[var(--accent)] md:text-[30px]" style={{ color: 'var(--fg)' }}>
              {business.phone}
            </a>
          </div>
          <div className="flex flex-col justify-between gap-8 p-6 md:p-8" style={{ background: 'var(--bg)' }}>
            <p className="eyebrow">{t('emailLabel')}</p>
            <a href={`mailto:${business.email}`} className="break-all text-[20px] leading-[1.2] tracking-[-0.02em] transition-colors hover:text-[var(--accent)] md:text-[22px]" style={{ color: 'var(--fg)' }}>
              {business.email}
            </a>
          </div>
          <div className="flex flex-col justify-between gap-8 p-6 md:p-8" style={{ background: 'var(--bg)' }}>
            <p className="eyebrow">{t('areaLabel')}</p>
            <div>
              <p className="text-[20px] leading-[1.3] tracking-[-0.02em]" style={{ color: 'var(--fg)' }}>{t('areaValue')}</p>
              <p className="mt-2 text-[14px]" style={{ color: 'var(--muted)' }}>{t('areaNote')}</p>
            </div>
          </div>
        </div>
        <div data-reveal className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <a href={getStaticWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-accent w-full sm:w-auto">
            {t('ctaWhatsApp')}
            <Arrow />
          </a>
          <p className="text-[13px]" style={{ color: 'var(--dim)' }}>{t('responseTime')}</p>
        </div>
      </section>

      <div id="form">
        <LandingForm source="contact_page" title={t('formTitle')} />
      </div>

      <section className="rule py-24 md:py-36">
        <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-6">
            <h2 data-split className="display h-md mb-8 md:mb-10">{t('hoursTitle')}</h2>
            <ul data-reveal className="rule">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4 border-b py-4" style={{ borderColor: 'var(--line)' }}>
                  <span className="text-[16px]" style={{ color: 'var(--fg)' }}>{h.day}</span>
                  <span className="text-right text-[15px] tabular-nums" style={{ color: 'var(--muted)' }}>{h.time}</span>
                </li>
              ))}
            </ul>
            <Link href="/" className="ulink mt-12" style={{ color: 'var(--muted)' }}>{t('backHome')}</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
