/**
 * GotFound — central site config. Change the price / contact here only.
 *
 * PRICE PLACEHOLDER: $599 is NOT confirmed yet. Update PRICE_USD once decided;
 * every page, the JSON-LD, the blog CTAs and the WhatsApp texts read from here.
 */
export const PRICE_USD = 599
export const PRICE_LABEL = `$${PRICE_USD}`

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://gotfound.xyz').replace(/\/$/, '')
export const SITE_DOMAIN = 'gotfound.xyz'
export const BRAND = 'GotFound'

/** WhatsApp — temporary Italian number until a US number exists. */
export const WHATSAPP_E164 = '+393501998569'
export const WHATSAPP_DISPLAY = '+39 350 199 8569'
export const WHATSAPP_URL = 'https://wa.me/393501998569'

export const CONTACT_EMAIL = 'cristiermurache@gmail.com'

/** Web3Forms access key used by the contact / free-draft forms. */
export const WEB3FORMS_KEY = '71392d98-c721-43c2-8250-c03840287e70'
