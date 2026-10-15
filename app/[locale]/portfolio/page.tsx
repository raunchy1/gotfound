import { withSeo } from '@/lib/seo'
import type { Metadata } from 'next'
import Image from 'next/image'
import { setRequestLocale } from 'next-intl/server'
import SiteShell from '@/components/SiteShell'
import PageHeader from '@/components/site/PageHeader'
import CtaPanel from '@/components/site/CtaPanel'
import { works } from '@/lib/portfolio'
import { getStaticWhatsAppUrl } from '@/lib/whatsapp'

type Props = { params: { locale: string } }

export function generateMetadata(): Metadata {
  return withSeo({
    title: 'Our Work | GotFound',
    description: 'Projects designed and built by the GotFound team, described honestly: what the problem was, what we built and how it works.',
    alternates: { canonical: '/portfolio' },
  })
}

function Chip({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[12px]" style={{ borderColor: accent ? 'rgba(46,242,200,0.4)' : 'var(--dim-line)', color: accent ? 'var(--accent)' : 'var(--muted)' }}>
      {children}
    </span>
  )
}

export default function PortfolioPage({ params }: Props) {
  setRequestLocale(params.locale)
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Work"
        title="Real projects. Told properly."
        lead="We are a new studio, so we won't pad this page with logos or made-up numbers. Here is real work we designed and built, and what it does."
      />
      <section className="wrap pb-24 md:pb-36">
        {works.map((w) => (
          <article key={w.id} data-reveal className="grid gap-10 lg:grid-cols-12 lg:gap-6">
            <div className="work-card relative overflow-hidden border lg:col-span-7" style={{ borderColor: 'var(--line)', background: 'var(--bg-2)' }}>
              <div className="relative aspect-[16/10] w-full">
                <Image src={w.image} alt={`Screenshot of ${w.title}`} fill sizes="(min-width:1024px) 58vw, 100vw" className="work-img object-cover object-top" />
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="mb-6 flex flex-wrap gap-2">
                <Chip accent>{w.tag}</Chip>
                <Chip>
                  <span className="h-[6px] w-[6px] animate-pulse rounded-full" style={{ background: 'var(--accent)' }} />
                  {w.status}
                </Chip>
              </div>
              <h2 className="text-[52px] font-normal leading-none tracking-[-0.045em] md:text-[72px]" style={{ color: 'var(--fg)' }}>{w.title}</h2>
              <p className="eyebrow mb-2 mt-8">The problem</p>
              <p className="mb-6 text-[16px] leading-[1.65]" style={{ color: 'var(--muted)' }}>{w.problem}</p>
              <p className="eyebrow mb-2">The solution</p>
              <p className="mb-6 text-[16px] leading-[1.65]" style={{ color: 'var(--fg)' }}>{w.did}</p>
              <p className="eyebrow mb-3">How it works</p>
              <ol className="mb-8 space-y-2.5">
                {w.how.map((h, i) => (
                  <li key={h} className="flex gap-4 text-[15px] leading-[1.55]" style={{ color: 'var(--fg)' }}>
                    <span className="shrink-0 text-[13px] tabular-nums leading-[1.8]" style={{ color: 'var(--accent)' }}>0{i + 1}</span>
                    {h}
                  </li>
                ))}
              </ol>
              <div className="rule flex flex-wrap items-center gap-x-3 gap-y-2 pt-5">
                {w.stack.map((s) => (
                  <span key={s} className="text-[13px]" style={{ color: 'var(--dim)' }}>{s}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
        <CtaPanel
          className="mt-20 md:mt-28"
          title="Your business could be next."
          body="Send us two lines about your business. You'll get a free draft of your website within 48 hours, with no upfront payment."
          cta="Get my free draft"
          href={getStaticWhatsAppUrl()}
        />
      </section>
    </SiteShell>
  )
}
