import { business } from '@/lib/business'
import { BRAND, SITE_DOMAIN } from '@/lib/config'

const email = business.email
const updated = 'Last updated: October 2026'

export type LegalDoc = { title: string; meta: string; updated: string; sections: { h: string; p: string[] }[] }

export const legal: Record<'privacy' | 'terms' | 'cookie', LegalDoc> = {
  privacy: {
    title: 'Privacy Policy',
    meta: `How ${SITE_DOMAIN} collects, uses and protects your personal information.`,
    updated,
    sections: [
      { h: 'Who we are', p: [`${BRAND} (${SITE_DOMAIN}) designs and builds websites for small local businesses. Questions about this policy: ${email}.`] },
      { h: 'Information we collect', p: [
        'Information you give us: your name, business name, email, phone number and the content of your message when you use a form on this site or contact us by email or WhatsApp.',
        'Technical information: your server automatically processes basic technical data (such as IP address and browser type) to deliver and secure the site. We do not run advertising or analytics trackers on this site today.',
      ] },
      { h: 'How we use it', p: [
        'To reply to you, prepare your free draft and quote, and deliver the work you order.',
        'To keep the site secure and working properly.',
        'We do not sell or share your personal information for cross-context behavioral advertising.',
      ] },
      { h: 'Service providers', p: [
        'We use a small number of providers to run the business: website hosting, Web3Forms (to deliver form submissions to our inbox), email, and WhatsApp (Meta) if you choose to message us there. They only receive what they need to provide their service.',
      ] },
      { h: 'Retention', p: ['We keep inquiry data for as long as needed to handle your request and any project that follows, and no longer than 24 months after our last contact unless the law requires otherwise.'] },
      { h: 'Your choices and rights', p: [
        `You can ask us to access, correct or delete your personal information at any time by writing to ${email}. Depending on your state (for example California, Colorado, Virginia or Connecticut), you may have additional rights under state privacy laws; we honor those requests without discrimination.`,
      ] },
      { h: 'Children', p: ['This site is meant for business owners and is not directed at children under 13. We do not knowingly collect their information.'] },
      { h: 'Changes', p: ['If we change this policy, we will update the date at the top of this page.'] },
    ],
  },
  terms: {
    title: 'Terms of Service',
    meta: `The terms that apply when you use ${SITE_DOMAIN} or order a website from ${BRAND}.`,
    updated,
    sections: [
      { h: 'The free draft', p: ['The free draft is a no-obligation preview of your website. You do not pay anything to receive it, and you are under no obligation to buy.'] },
      { h: 'Price and payment', p: ['The price of the website is the one shown on the site at the time you accept the offer, confirmed in writing before work starts. Payment is due only after you approve the website. Extras are quoted in writing in advance.'] },
      { h: 'What is included', p: ['The standard website includes the items listed on the pricing page, including domain and hosting for the first year. From the second year, domain and hosting renew at the cost we tell you in advance; you can also move them elsewhere.'] },
      { h: 'Your content and domain', p: ['You confirm you have the rights to the texts, logos and photos you send us. The domain is registered for your business, and the final website is yours once paid.'] },
      { h: 'Changes and support', p: ['Reasonable revisions are included before approval. Later changes are quoted in advance.'] },
      { h: 'Liability', p: ['We build every site with care, but we cannot guarantee specific search rankings, traffic or sales. To the extent permitted by law, our liability is limited to the amount you paid for the website.'] },
      { h: 'Contact', p: [`Questions about these terms: ${email}.`] },
    ],
  },
  cookie: {
    title: 'Cookie Policy',
    meta: `Which cookies and local storage ${SITE_DOMAIN} uses.`,
    updated,
    sections: [
      { h: 'What cookies are', p: ['Cookies and similar technologies (such as localStorage) are small pieces of data stored in your browser.'] },
      { h: 'What we use', p: ['Only strictly necessary storage: a preference that remembers whether you turned page animations on or off, and a technical cookie used by the site framework. We do not use advertising or analytics cookies today.'] },
      { h: 'If this changes', p: ['If we ever add analytics or advertising tools, we will update this page first and give you a clear way to opt out.'] },
      { h: 'Managing cookies', p: [`You can clear or block cookies at any time in your browser settings. Questions: ${email}.`] },
    ],
  },
}
