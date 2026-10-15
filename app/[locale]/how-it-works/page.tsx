import { withSeo } from '@/lib/seo'
import type { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import SiteShell from '@/components/SiteShell'
import PageHeader from '@/components/site/PageHeader'
import Process from '@/components/home/Process'
import Trust from '@/components/home/Trust'
import Faq from '@/components/home/Faq'
import FinalCta from '@/components/home/FinalCta'

type Props = { params: { locale: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'howPage' })
  return withSeo({ title: t('metaTitle'), description: t('metaDescription'), alternates: { canonical: '/how-it-works' } })
}

export default async function HowPage({ params }: Props) {
  setRequestLocale(params.locale)
  const t = await getTranslations({ locale: params.locale, namespace: 'howPage' })
  return (
    <SiteShell>
      <PageHeader eyebrow={t('eyebrow')} title={t('title')} lead={t('intro')} />
      <Process />
      <Trust />
      <Faq />
      <FinalCta />
    </SiteShell>
  )
}
