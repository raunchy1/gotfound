import type { BlogPost } from './types'
import { PRICE_LABEL } from '@/lib/config'

const related = (exclude: string) => ({
  type: 'links' as const,
  title: 'Keep reading',
  items: [
    { href: '/blog/how-much-does-a-small-business-website-cost', label: 'How much does a small business website cost?' },
    { href: '/blog/how-to-show-up-in-near-me-searches', label: 'How to show up in “near me” searches' },
    { href: '/blog/google-business-profile-and-your-website', label: 'Google Business Profile + website: how they work together' },
    { href: '/blog/website-vs-facebook-page-for-local-business', label: 'Website vs. Facebook page: do you need both?' },
    { href: '/pricing', label: `Our offer: ${PRICE_LABEL}, free draft in 48 hours` },
  ].filter((l) => !l.href.endsWith(exclude)),
})

const posts: BlogPost[] = [
  {
    slug: 'how-much-does-a-small-business-website-cost',
    locale: 'en',
    title: 'How Much Does a Small Business Website Cost in 2026?',
    description:
      'A plain-English breakdown of what you actually pay for a small business website: DIY builders, freelancers, agencies, and the hidden costs nobody mentions upfront.',
    date: '2026-10-14',
    readTime: '6 min',
    keywords: ['small business website cost', 'how much does a website cost', 'affordable website for small business', 'website pricing'],
    blocks: [
      { type: 'p', text: 'If you run a local business and you’ve asked around about a website, you’ve probably heard wildly different numbers. That’s because “a website” can mean anything from a one-page template you build yourself on a Sunday afternoon to a custom platform an agency spends months on. Here is how the options really compare, and what a typical local business actually needs.' },
      { type: 'h2', text: 'What a local business website needs to do' },
      { type: 'p', text: 'Before you compare prices, be clear about the job. For most restaurants, contractors, salons, shops and service businesses, the website has a short list of tasks:' },
      { type: 'ul', items: [
        'Tell people what you do and where you do it, in the first few seconds',
        'Show your hours, location, and service area',
        'Make it one tap to call, message or get directions',
        'Load fast and read well on a phone',
        'Give Google clear, consistent information about your business',
      ] },
      { type: 'p', text: 'That’s it. You don’t need a custom content management system, animations on every scroll, or 30 pages. You need a clear, fast, trustworthy site that turns a search into a call.' },
      { type: 'h2', text: 'The three usual routes' },
      { type: 'h3', text: '1. DIY website builders' },
      { type: 'p', text: 'Builders like Wix, Squarespace or GoDaddy charge a monthly subscription, and you do the work. The subscription looks cheap, but you pay it every month for as long as the site exists, and the real cost is your time: choosing a template, writing every page, sizing photos, and fixing what looks broken on mobile. Many owners start a DIY site and never finish it.' },
      { type: 'h3', text: '2. Freelancers' },
      { type: 'p', text: 'A freelancer builds the site for you. Prices vary a lot depending on experience and scope. The upside is a real person doing the work; the risk is unclear scope, upfront deposits for work you haven’t seen, and “who owns the domain?” surprises later.' },
      { type: 'h3', text: '3. Agencies' },
      { type: 'p', text: 'Agencies bring strategy, design and development teams. That’s valuable for bigger companies, but for a single-location business it is often more process and more cost than the job needs, and frequently comes with a monthly retainer.' },
      { type: 'h2', text: 'The hidden costs to ask about' },
      { type: 'ul', items: [
        'Domain name: who registers it, and is it in your name?',
        'Hosting: is it included, and what does it cost from year two?',
        'SSL certificate (the padlock / https): included or extra?',
        'Changes after launch: what does it cost to update hours or a menu?',
        'Deposits: are you paying before you’ve seen anything?',
      ] },
      { type: 'h2', text: 'How we price it' },
      { type: 'p', text: `At GotFound we keep it to one offer: a professional website for ${PRICE_LABEL}, with domain and hosting included for the first year. You get a free draft within 48 hours, before you pay anything, and you only pay once you approve the finished site. Extras like booking or an online store are quoted in writing before we start.` },
      { type: 'p', text: 'Whoever you choose, insist on three things: see a draft before you pay, get the price in writing, and make sure the domain is registered to your business.' },
      related('how-much-does-a-small-business-website-cost'),
    ],
  },
  {
    slug: 'how-to-show-up-in-near-me-searches',
    locale: 'en',
    title: 'How to Show Up in “Near Me” Searches: Local SEO Basics for Small Businesses',
    description:
      'What actually helps a local business appear when people search “near me”: your Google Business Profile, a clear website, consistent business info, and reviews.',
    date: '2026-10-13',
    readTime: '7 min',
    keywords: ['near me search', 'local seo for small business', 'how to rank on google maps', 'local search'],
    blocks: [
      { type: 'p', text: 'When someone searches “coffee near me” or “emergency plumber” on their phone, Google shows a map with a few businesses and then a list of websites. Getting into those results isn’t magic, and it isn’t only for big brands. It comes down to a handful of basics that most small businesses can get right in an afternoon or two.' },
      { type: 'h2', text: 'How Google decides who shows up locally' },
      { type: 'p', text: 'Google says local results are based mainly on three things: relevance (how well your business matches the search), distance (how close you are to the person searching or the place they named), and prominence (how well known and trusted your business appears online). You can’t move your shop, but you can work on relevance and prominence.' },
      { type: 'h2', text: 'Step 1: Claim and complete your Google Business Profile' },
      { type: 'ul', items: [
        'Choose the most accurate primary category, then add secondary ones',
        'Fill in hours, including holiday hours',
        'Add real photos of your place, team and work',
        'List your services or menu items with short descriptions',
        'Link to your website, not just a social media page',
      ] },
      { type: 'h2', text: 'Step 2: Give Google a website to back it up' },
      { type: 'p', text: 'Your profile tells Google you exist; your website tells it what you’re about. A good local site states your services, your city or service area, and your contact details in plain text on the page, not only inside images. It loads quickly on a phone and has a page title that says what you do and where, for example “Family Dentist in Springfield, IL | Smith Dental”.' },
      { type: 'h2', text: 'Step 3: Keep your name, address and phone consistent' },
      { type: 'p', text: 'Your business name, address and phone number (often called NAP) should match everywhere: your website, Google, Yelp, Facebook, Apple Maps, Bing Places and local directories. Small differences like “St.” vs “Street” are fine; a different phone number or an old address is not.' },
      { type: 'h2', text: 'Step 4: Ask for reviews, and answer them' },
      { type: 'p', text: 'Reviews help both rankings and conversions. Ask happy customers directly, make it easy with a short link, and reply to every review, including the critical ones, politely and briefly. Never buy reviews or offer rewards for positive ones; it breaks Google’s rules and the FTC’s.' },
      { type: 'h2', text: 'Step 5: Add structured data' },
      { type: 'p', text: 'Structured data (LocalBusiness schema) is a small piece of code that labels your name, address, hours and services in a way search engines read reliably. Every GotFound site includes it by default.' },
      { type: 'h2', text: 'What not to waste money on' },
      { type: 'ul', items: [
        'Anyone who “guarantees” a #1 ranking',
        'Stuffing city names into every sentence',
        'Dozens of near-identical pages for every nearby town',
      ] },
      related('how-to-show-up-in-near-me-searches'),
    ],
  },
  {
    slug: 'google-business-profile-and-your-website',
    locale: 'en',
    title: 'Google Business Profile + Your Website: How They Work Together',
    description:
      'Your Google Business Profile gets you on the map; your website closes the deal. Here’s how to connect the two so more searches turn into calls and visits.',
    date: '2026-10-12',
    readTime: '5 min',
    keywords: ['google business profile', 'google business profile website', 'google maps listing small business', 'local business website'],
    blocks: [
      { type: 'p', text: 'A lot of owners ask: “If I already have a Google Business Profile, do I still need a website?” Short answer: they do different jobs, and they work best together.' },
      { type: 'h2', text: 'What your profile does well' },
      { type: 'ul', items: [
        'Puts you on Google Maps and in the local “map pack”',
        'Shows hours, phone, directions and reviews at a glance',
        'Lets people call or get directions in one tap',
      ] },
      { type: 'h2', text: 'What your profile can’t do' },
      { type: 'p', text: 'The layout is Google’s, not yours. You can’t explain your services in depth, show a full menu or project gallery the way you want, or answer the questions people have before they commit. And without a website link, the profile looks unfinished to many customers.' },
      { type: 'h2', text: 'What the website adds' },
      { type: 'ul', items: [
        'Room to explain what you do, for whom, and why you’re the right pick',
        'Pages for each main service, which helps relevance in search',
        'Your own contact form and booking or ordering options',
        'A trustworthy place to send people from ads, flyers and social media',
      ] },
      { type: 'h2', text: 'Connecting the two properly' },
      { type: 'ol', items: [
        'Add your website URL to the profile (use the home page or a specific location page).',
        'Make the business name, address, phone and hours identical on both.',
        'Use the same primary service words on the website that you chose as profile categories.',
        'Embed a map or link to your profile from the contact page.',
        'Put a short “Leave us a review” link on the site for happy customers.',
      ] },
      { type: 'p', text: 'Every GotFound website includes the profile link, matching contact details and LocalBusiness structured data, and we’ll point out anything on your profile worth fixing.' },
      related('google-business-profile-and-your-website'),
    ],
  },
  {
    slug: 'website-vs-facebook-page-for-local-business',
    locale: 'en',
    title: 'Website vs. Facebook Page: Does Your Local Business Need Both?',
    description:
      'Social pages are great for staying in touch with regulars. A website is what new customers find on Google. Here is when each one matters.',
    date: '2026-10-11',
    readTime: '5 min',
    keywords: ['website vs facebook page', 'do i need a website for my small business', 'facebook page for business', 'small business website'],
    blocks: [
      { type: 'p', text: 'Plenty of local businesses run entirely on a Facebook or Instagram page, and it can work for a while. But social pages and websites solve different problems, and relying only on social has some real limits.' },
      { type: 'h2', text: 'What social pages are good at' },
      { type: 'ul', items: [
        'Keeping regulars updated with specials, events and news',
        'Showing day-to-day photos and personality',
        'Quick back-and-forth messages',
      ] },
      { type: 'h2', text: 'Where they fall short' },
      { type: 'ul', items: [
        'Many people who search on Google never open Facebook or Instagram',
        'Key info (hours, services, prices) gets buried under old posts',
        'You don’t control the platform: reach, layout and rules can change any time',
        'Some customers can’t see everything without logging in',
      ] },
      { type: 'h2', text: 'What a website gives you that social can’t' },
      { type: 'p', text: 'A website is your own address on the internet. It’s where Google sends people searching for what you do, it always shows your most important information first, and nobody can switch it off or bury it under an algorithm change.' },
      { type: 'h2', text: 'The simple setup that works' },
      { type: 'ol', items: [
        'A clear website with your services, hours, location and contact options',
        'A complete Google Business Profile linked to that website',
        'Social pages for updates, linking back to the website',
      ] },
      { type: 'p', text: `If you don’t have a website yet, that’s the piece to add first. At GotFound you can see a free draft within 48 hours, and the finished site is ${PRICE_LABEL} including domain and hosting for the first year.` },
      related('website-vs-facebook-page-for-local-business'),
    ],
  },
]

export function getPosts(_locale: string = 'en'): BlogPost[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date))
}

export function getPost(_locale: string, slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getAllPostParams(): { locale: string; slug: string; date: string }[] {
  return posts.map((p) => ({ locale: 'en', slug: p.slug, date: p.date }))
}
