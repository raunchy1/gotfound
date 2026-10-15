/** Google Ads + GA4 IDs — single source for conversion tracking */
export const analytics = {
  gtmId: '',
  ga4Id: '',
  googleAdsId: '',
  ga4PropertyId: '',
  /**
   * Conversion labels — set after creating actions in Google Ads.
   * Empty string = skip gtag conversion ping (GA4 event still fires for import).
   */
  conversions: {
    form: '',
    whatsapp: '',
    phone: '',
  },
} as const

export type ConversionAction = keyof typeof analytics.conversions

export function getConversionSendTo(action: ConversionAction): string | null {
  const label = analytics.conversions[action]
  if (!label) return null
  return `${analytics.googleAdsId}/${label}`
}