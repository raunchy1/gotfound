import { getTranslations } from 'next-intl/server'
import WhatsAppLink from '@/components/WhatsAppLink'
import Arrow from './Arrow'
import { Link } from '@/i18n/navigation'
import { WHATSAPP_DISPLAY } from '@/lib/config'

export default async function FinalCta() {
  const t = await getTranslations('home.final')

  return (
    <section id="contact" className="rule pb-28 pt-24 md:pb-40 md:pt-40">
      <div className="wrap">
        <p className="eyebrow mb-6 md:mb-8">{t('eyebrow')}</p>
        <h2 data-split className="display h-xl max-w-[12ch]">
          {t('title')}
        </h2>
        <p className="lead mt-8 max-w-[48ch]">{t('body')}</p>

        <div data-reveal className="mt-14 grid gap-px md:mt-20 md:grid-cols-2" style={{ background: 'var(--line)' }}>
          <WhatsAppLink
            location="final_cta"
            className="group flex flex-col justify-between gap-10 p-7 transition-colors md:p-10"
            style={{ background: 'var(--accent)', color: 'var(--accent-ink)' }}
          >
            <span className="flex items-center justify-between text-[12px] uppercase tracking-[0.16em]">
              {t('waLabel')}
              <Arrow />
            </span>
            <span className="text-[38px] font-normal leading-none tracking-[-0.04em] md:text-[58px]">{WHATSAPP_DISPLAY}</span>
          </WhatsAppLink>
          <Link
            href="/contact"
            className="flex flex-col justify-between gap-10 p-7 transition-colors hover:bg-[var(--bg-2)] md:p-10"
            style={{ background: 'var(--bg)' }}
          >
            <span className="flex items-center justify-between text-[12px] uppercase tracking-[0.16em]" style={{ color: 'var(--muted)' }}>
              {t('formLabel')}
              <Arrow />
            </span>
            <span className="text-[38px] font-normal leading-none tracking-[-0.04em] md:text-[58px]">{t('formValue')}</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
