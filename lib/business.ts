import { BRAND, CONTACT_EMAIL, PRICE_LABEL, SITE_URL, WHATSAPP_DISPLAY, WHATSAPP_E164, WHATSAPP_URL } from './config'

/** NAP — single source of truth (service-area business, fully remote). */
export const business = {
  name: BRAND,
  legalName: BRAND,
  tagline: 'Websites for small local businesses in the US',
  url: SITE_URL,
  email: CONTACT_EMAIL,
  phone: WHATSAPP_DISPLAY,
  phoneE164: WHATSAPP_E164,
  whatsapp: WHATSAPP_URL,
  areaServed: 'United States',
  country: 'US',
  serviceAreas: ['Nationwide (US)', 'Remote, by WhatsApp & email'],
  openingHours: [
    { day: 'Monday', opens: '09:00', closes: '18:00' },
    { day: 'Tuesday', opens: '09:00', closes: '18:00' },
    { day: 'Wednesday', opens: '09:00', closes: '18:00' },
    { day: 'Thursday', opens: '09:00', closes: '18:00' },
    { day: 'Friday', opens: '09:00', closes: '18:00' },
  ],
  priceRange: PRICE_LABEL,
} as const
