import { withSeo } from '@/lib/seo'
import type { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import SiteShell from '@/components/SiteShell'
import PageHeader from '@/components/site/PageHeader'
import Offer from '@/components/home/Offer'
import Calculator from '@/components/home/Calculator'
import Trust from '@/components/home/Trust'
import FinalCta from '@/components/home/FinalCta'

type Props = { params: { locale: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'pricingPage' })
  return withSeo({ title: t('metaTitle'), description: t('metaDescription'), alternates: { canonical: '/pricing' } })
}

export default async function PricingPage({ params }: Props) {
  setRequestLocale(params.locale)
  const t = await getTranslations({ locale: params.locale, namespace: 'pricingPage' })
  return (
    <SiteShell>
      <PageHeader eyebrow={t('eyebrow')} title={t('title')} lead={t('intro')} />
      <Offer />
      <Calculator />
      <Trust />
      <FinalCta />
    </SiteShell>
  )
}
