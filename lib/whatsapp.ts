import { business } from './business'
import { PRICE_LABEL } from './config'

const DEFAULT_MESSAGE = "Hi GotFound, I'd like a free website draft for my business"
const LANDING_MESSAGE = `Hi GotFound, I saw your ad. I'd like the free 48-hour website draft (${PRICE_LABEL} offer)`

export type WhatsAppMessageKey = 'default' | 'landing'

/** Build WhatsApp URL with optional UTM/gclid from current page (client-side). */
export function buildWhatsAppUrl(
  _locale: string = 'en',
  messageKey: WhatsAppMessageKey = 'default',
  customText?: string
): string {
  const text = customText || (messageKey === 'landing' ? LANDING_MESSAGE : DEFAULT_MESSAGE)
  const params = new URLSearchParams({ text })
  if (typeof window !== 'undefined') {
    const search = new URLSearchParams(window.location.search)
    for (const k of ['gclid', 'utm_source', 'utm_medium', 'utm_campaign']) {
      const v = search.get(k)
      if (v) params.set(k, v)
    }
  }
  return `${business.whatsapp}?${params.toString()}`
}

/** Static WA link for SSR (no UTM). */
export function getStaticWhatsAppUrl(_locale: string = 'en', messageKey: WhatsAppMessageKey = 'default'): string {
  const text = messageKey === 'landing' ? LANDING_MESSAGE : DEFAULT_MESSAGE
  return `${business.whatsapp}?text=${encodeURIComponent(text)}`
}
