import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import '../globals.css'
import StructuredData from '@/components/StructuredData'
import AttributionCapture from '@/components/AttributionCapture'
import { MOTION_INIT_SCRIPT } from '@/lib/motion-script'
import { BRAND, PRICE_LABEL, SITE_URL } from '@/lib/config'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata(): Promise<Metadata> {
  const title = `Small Business Websites for ${PRICE_LABEL} | Free Draft in 48 Hours | ${BRAND}`
  const description = `A professional website for your local business for ${PRICE_LABEL}: domain and hosting included for the first year, a free draft in 48 hours, and no upfront payment.`
  const ogTitle = `Your business. Found. In 48 hours. | ${BRAND}`
  return {
    title,
    description,
    keywords: [
      'small business website',
      'local business website design',
      'affordable website for small business',
      'website for restaurant',
      'website for contractor',
      'free website draft',
      'local seo',
    ],
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: '/' },
    openGraph: {
      title: ogTitle,
      description,
      url: SITE_URL,
      siteName: BRAND,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: BRAND }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title: ogTitle, description, images: ['/og-image.png'] },
    robots: { index: process.env.NEXT_PUBLIC_NOINDEX !== '1', follow: process.env.NEXT_PUBLIC_NOINDEX !== '1' },
  }
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params
  if (!routing.locales.includes(locale as any)) notFound()
  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang="en-US" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`} data-motion="on" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: MOTION_INIT_SCRIPT }} />
        <StructuredData locale={locale} />
      </head>
      <body className="font-sans antialiased" style={{ fontFamily: 'var(--font-sans)' }}>
        <NextIntlClientProvider messages={messages}>
          <AttributionCapture />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
