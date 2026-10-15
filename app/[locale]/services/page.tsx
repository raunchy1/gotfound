import { withSeo } from '@/lib/seo'
import type { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import SiteShell from '@/components/SiteShell'
import PageHeader from '@/components/site/PageHeader'
import CtaPanel from '@/components/site/CtaPanel'
import { getStaticWhatsAppUrl } from '@/lib/whatsapp'

type Props = {
  params: { locale: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'servicesPage' })

  return withSeo({
    title: t('metaTitle'),
    description: t('metaDescription'),
    keywords: t.raw('keywords') as string[],
    alternates: { canonical: '/services' },
  }, locale)
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'servicesPage' })

  const services = [1, 2, 3, 4, 5].map((i) => ({
    title: t(`service${i}Title`),
    body: t(`service${i}Body`),
    includes: t.raw(`service${i}Includes`) as string[],
  }))

  const steps = [1, 2, 3].map((i) => ({
    title: t(`step${i}Title`),
    body: t(`step${i}Body`),
  }))

  const waLink = getStaticWhatsAppUrl()

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: t('schemaName'),
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: s.title,
        description: s.body,
        provider: {
          '@type': 'ProfessionalService',
          name: 'GotFound',
          areaServed: 'United States',
        },
      },
    })),
  }

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageHeader eyebrow={t('eyebrow')} title={t('title')} lead={t('intro')}>
        <p className="mt-6 flex items-start gap-3 text-[15px] leading-[1.6]" style={{ color: 'var(--fg)' }}>
          <span style={{ color: 'var(--accent)' }}>→</span> {t('highlight')}
        </p>
      </PageHeader>

      <section className="wrap pb-24 md:pb-36">
        <ol data-reveal className="rule">
          {services.map((service, i) => (
            <li
              key={service.title}
              className="grid gap-5 border-b py-10 md:grid-cols-12 md:gap-6 md:py-14"
              style={{ borderColor: 'var(--line)' }}
            >
              <span
                className="text-[12px] uppercase tracking-[0.16em] tabular-nums md:col-span-1"
                style={{ color: 'var(--accent)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h2 className="text-[28px] font-normal leading-[1.05] tracking-[-0.04em] md:col-span-5 md:text-[40px]" style={{ color: 'var(--fg)' }}>
                {service.title}
              </h2>
              <div className="md:col-span-6">
                <p className="text-[16px] leading-[1.65]" style={{ color: 'var(--muted)' }}>
                  {service.body}
                </p>
                <ul className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-[14px] leading-[1.5]" style={{ color: 'var(--fg)' }}>
                      <span className="mt-[0.7em] h-px w-3 shrink-0" style={{ background: 'var(--accent)' }} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="rule py-24 md:py-36">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-4">
            <h2 data-split className="display h-md max-w-[14ch]">
              {t('processTitle')}
            </h2>
          </div>
          <ol data-reveal className="grid gap-px md:grid-cols-3 lg:col-span-8" style={{ background: 'var(--line)' }}>
            {steps.map((step, i) => (
              <li key={step.title} className="flex flex-col gap-6 p-6 md:p-8" style={{ background: 'var(--bg)' }}>
                <span className="text-[48px] font-light leading-none tracking-[-0.04em] md:text-[64px]" style={{ color: 'var(--accent)' }}>
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-[19px] leading-[1.3] tracking-[-0.01em]" style={{ color: 'var(--fg)' }}>
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.6]" style={{ color: 'var(--muted)' }}>
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap pb-24 md:pb-40">
        <CtaPanel title={t('price')} body={t('priceNote')} cta={t('cta')} href={waLink} />
        <Link href="/" className="ulink mt-12" style={{ color: 'var(--muted)' }}>
          {t('backHome')}
        </Link>
      </section>
    </SiteShell>
  )
}