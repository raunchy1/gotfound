import { withSeo } from '@/lib/seo'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import LegalPage from '@/components/LegalPage'
import { legal } from '@/lib/legal'

const d = legal.cookie

export function generateMetadata(): Metadata {
  return withSeo({ title: d.title + ' | GotFound', description: d.meta, alternates: { canonical: '/cookie-policy' } })
}

export default function Page({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale)
  return <LegalPage title={d.title} updated={d.updated} sections={d.sections} />
}
