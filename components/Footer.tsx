'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { business } from '@/lib/business'
import { SITE_DOMAIN } from '@/lib/config'
import Logo from '@/components/Logo'

export default function Footer() {
  const t = useTranslations('footer')
  const linkClass = 'inline-flex min-h-[40px] items-center text-[15px] capitalize transition-colors hover:text-[var(--accent)]'
  const links: [string, string][] = [
    ['/', 'home'], ['/services', 'services'], ['/pricing', 'pricing'], ['/how-it-works', 'how'],
    ['/portfolio', 'portfolio'], ['/blog', 'blog'], ['/free-draft', 'freeDraft'], ['/contact', 'contact'],
    ['/privacy', 'privacy'], ['/terms', 'terms'], ['/cookie-policy', 'cookies'],
  ]

  return (
    <footer className="rule" style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
      <div className="wrap pb-28 pt-14 md:pb-12 md:pt-20">
        <div className="grid gap-10 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-5">
            <Link href="/" className="text-[17px] font-medium tracking-[0.18em] md:text-[19px]" style={{ color: 'var(--fg)' }} aria-label="GotFound home">
              <Logo />
            </Link>
            <address className="mt-6 not-italic text-[14px] leading-[1.8]" style={{ color: 'var(--muted)' }}>
              <span style={{ color: 'var(--fg)' }}>{business.tagline}</span>
              <br />
              <a href={`mailto:${business.email}`} className="underline decoration-[var(--dim-line)] underline-offset-4 transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--fg)' }}>
                {business.email}
              </a>
              <br />
              WhatsApp {business.phone}
            </address>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 sm:grid-cols-3 md:col-span-7">
            {links.map(([href, k]) => (
              <Link key={href} href={href} className={linkClass}>
                {t(k)}
              </Link>
            ))}
          </nav>
        </div>
        <div className="rule mt-12 flex flex-wrap items-center justify-between gap-3 pt-6 text-[11px] uppercase tracking-[0.16em] md:mt-16" style={{ color: 'var(--dim)' }}>
          <span>{SITE_DOMAIN}</span>
          <span>{t('location')}</span>
        </div>
      </div>
    </footer>
  )
}
