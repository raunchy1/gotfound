'use client'

import { useState, type FormEvent } from 'react'
import { useTranslations } from 'next-intl'
import { trackFormSubmit } from '@/lib/trackEvents'
import Arrow from '@/components/home/Arrow'

import { WEB3FORMS_KEY } from '@/lib/config'

export default function LandingForm({ source = 'free_draft', title }: { source?: string; title?: string }) {
  const t = useTranslations('landingPage')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const name = (fd.get('name') as string)?.trim()
    const email = (fd.get('email') as string)?.trim()
    const phone = (fd.get('phone') as string)?.trim()
    const businessType = (fd.get('business_type') as string)?.trim()
    const city = (fd.get('city') as string)?.trim()
    const message = (fd.get('message') as string)?.trim()

    if (!name || !email || !businessType) return

    setStatus('loading')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `GotFound: free draft request (${source})`,
          from_name: 'GotFound website',
          name,
          email,
          phone,
          business_type: businessType,
          city,
          message,
          source,
        }),
      })
      const data = await res.json()
      if (data.success) {
        trackFormSubmit(source)
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const fieldClass =
    'w-full min-h-[56px] border-b bg-transparent px-0 py-3 text-[17px] outline-none transition-colors duration-300 placeholder:text-[var(--dim)] focus:border-[var(--accent)]'
  const fieldStyle = {
    borderColor: 'var(--dim-line)',
    color: 'var(--fg)',
  }

  return (
    <section className="rule py-20 md:py-32" style={{ background: 'var(--bg)' }}>
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-6 md:mb-8">{t('formEyebrow')}</p>
          <h2 data-split className="display h-md max-w-[14ch]">
            {title ?? t('formTitle')}
          </h2>
        </div>

        <div data-reveal className="lg:col-span-6 lg:col-start-7">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="name"
              type="text"
              required
              placeholder={t('formName')}
              aria-label={t('formName')}
              className={fieldClass}
              style={fieldStyle}
            />
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={t('formEmail')}
              aria-label={t('formEmail')}
              className={fieldClass}
              style={fieldStyle}
            />
            <input
              name="phone"
              type="tel"
              
              placeholder={t('formPhone')}
              aria-label={t('formPhone')}
              className={fieldClass}
              style={fieldStyle}
            />
            <input
              name="business_type"
              type="text"
              required
              placeholder={t('formBusiness')}
              aria-label={t('formBusiness')}
              className={fieldClass}
              style={fieldStyle}
            />
            <input
              name="city"
              type="text"
              
              placeholder={t('formCity')}
              aria-label={t('formCity')}
              className={fieldClass}
              style={fieldStyle}
            />
            <textarea
              name="message"
              rows={3}
              placeholder={t('formMessage')}
              aria-label={t('formMessage')}
              className={fieldClass}
              style={fieldStyle}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn btn-accent mt-6 w-full disabled:opacity-60 sm:w-auto sm:self-start"
            >
              {status === 'loading' ? t('formSubmitting') : t('formSubmit')}
              <Arrow />
            </button>

            {status === 'success' && (
              <p className="text-[14px]" style={{ color: 'var(--accent)' }} role="status">
                → {t('formSuccess')}
              </p>
            )}
            {status === 'error' && (
              <p className="text-[14px]" style={{ color: 'var(--muted)' }} role="alert">
                → {t('formError')}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
