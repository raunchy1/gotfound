'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import Logo from '@/components/Logo'
import WhatsAppLink from '@/components/WhatsAppLink'
import MotionToggle from './MotionToggle'
import Arrow from './Arrow'

/** Site-wide header (home + every inner page). */
export default function HomeNav() {
  const t = useTranslations('home.nav')
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Section anchors live on the home page; elsewhere they route back to it.
  const onHome = pathname === '/'
  const linkClass = 'text-[15px] transition-colors hover:text-[var(--accent)]'

  const links = [
    { href: '#process', label: t('process') },
    { href: '#work', label: t('work') },
    { href: '#faq', label: t('faq') },
  ]
  const pages = [
    { href: '/services', label: t('services') },
    { href: '/pricing', label: t('offer') },
    { href: '/blog', label: t('guides') },
  ]

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500"
      style={{
        background: scrolled ? 'rgba(11,15,20,0.78)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
      }}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:px-3 focus:py-2"
        style={{ background: 'var(--accent)', color: 'var(--accent-ink)' }}
      >
        {t('skip')}
      </a>
      <div className="wrap flex h-[68px] items-center justify-between gap-4 md:h-[84px]">
        <Link
          href="/"
          className="shrink-0 text-[17px] font-medium tracking-[0.18em] md:text-[19px]"
          style={{ color: 'var(--fg)' }}
          aria-label="GotFound home"
        >
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {links.map((l) =>
            onHome ? (
              <a key={l.href} href={l.href} className={linkClass} style={{ color: 'var(--fg)' }}>
                {l.label}
              </a>
            ) : (
              <Link key={l.href} href={`/${l.href}`} className={linkClass} style={{ color: 'var(--fg)' }}>
                {l.label}
              </Link>
            )
          )}
          {pages.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className={linkClass}
              style={{ color: pathname.startsWith(p.href) ? 'var(--accent)' : 'var(--fg)' }}
              aria-current={pathname === p.href ? 'page' : undefined}
            >
              {p.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-5">
          <MotionToggle className="hidden md:inline-flex" />
          <WhatsAppLink location="navbar" className="btn btn-accent btn-sm hidden sm:inline-flex">
            {t('cta')}
            <Arrow />
          </WhatsAppLink>
        </div>
      </div>
    </header>
  )
}
