import { business } from './business'
import { BRAND, PRICE_USD, SITE_DOMAIN } from './config'

type FaqItem = { question: string; answer: string }

export function buildStructuredData(_locale: string, faqs: FaqItem[]) {
  const baseUrl = business.url

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: BRAND,
    url: baseUrl,
    email: business.email,
    logo: `${baseUrl}/icon-512.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: business.phoneE164,
      email: business.email,
      contactType: 'customer service',
      availableLanguage: ['English'],
      areaServed: 'US',
    },
  }

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${baseUrl}/#localbusiness`,
    name: `${BRAND} | Websites for Local Businesses`,
    alternateName: [BRAND, SITE_DOMAIN],
    description: `Professional websites for small US local businesses: $${PRICE_USD} with domain and hosting included for the first year, free draft in 48 hours, no upfront payment.`,
    url: baseUrl,
    image: `${baseUrl}/og-image.png`,
    logo: `${baseUrl}/icon-512.png`,
    email: business.email,
    telephone: business.phoneE164,
    priceRange: business.priceRange,
    openingHoursSpecification: business.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.day,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: { '@type': 'Country', name: 'United States' },
    serviceType: ['Website design', 'Website development', 'Local SEO'],
    knowsAbout: ['Small business websites', 'Local SEO', 'Google Business Profile', 'Mobile-first web design'],
    makesOffer: { '@id': `${baseUrl}/#offer-website` },
    parentOrganization: { '@id': `${baseUrl}/#organization` },
  }

  const offer = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    '@id': `${baseUrl}/#offer-website`,
    name: 'Professional website',
    description:
      'Custom professional website: domain and hosting included for the first year, free draft in 48 hours, no upfront payment. Extras (online store, booking, extra languages, photos) quoted separately.',
    price: String(PRICE_USD),
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: `${baseUrl}/pricing`,
    areaServed: { '@type': 'Country', name: 'United States' },
    seller: { '@id': `${baseUrl}/#localbusiness` },
    itemOffered: {
      '@type': 'Service',
      name: 'Website design for small local businesses',
      serviceType: 'Website development',
      provider: { '@id': `${baseUrl}/#localbusiness` },
    },
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${baseUrl}/#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: BRAND,
    publisher: { '@id': `${baseUrl}/#organization` },
    inLanguage: 'en-US',
  }

  return [organization, localBusiness, offer, faqPage, webSite]
}
