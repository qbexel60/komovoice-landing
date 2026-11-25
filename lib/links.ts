/** Where the page's buttons go, in one place. */

/**
 * KomoVoice has no public sign-up or dashboard link: every button leads to the contact band
 * (WhatsApp, phone, email), the same contact options as the AutoMate, KomoChat and KomoBox pages.
 */
export const CONTACT_HREF = '#contact';

export const QBEXEL_URL = 'https://qbexel.com';
export const AUTOMATE_URL = 'https://automate.qbexel.com';

/** KomoVoice has no pages of its own for these yet; Qbexel's site covers them. */
export const PRIVACY_URL = 'https://qbexel.com/privacy';
export const TERMS_URL = 'https://qbexel.com/terms';

export const EMAIL = 'business@qbexel.com';
export const PHONE_LABEL = '+880 1982-780739';
export const PHONE_HREF = 'tel:+8801982780739';
/** WhatsApp opens with a short first message, so the team knows what it is about. */
export const WHATSAPP_URL = `https://wa.me/8801982780739?text=${encodeURIComponent('Hi Qbexel, I would like a KomoVoice demo call.')}`;
/** Head office in Tangail (current trade licence, D-U-N-S); Dhaka office is the address Meta verified. */
export const OFFICES = [
  { label: 'Head office', address: 'Shibnath School Market, Tuhin Road, Tangail, Bangladesh' },
  { label: 'Dhaka office', address: 'Road 1, Nikunja 2, Khilkhet, Dhaka 1216, Bangladesh' },
] as const;
export const FACEBOOK_URL = 'https://www.facebook.com/qbexel';
export const LINKEDIN_URL = 'https://www.linkedin.com/company/qbexel/';

/** In-page sections, used by the menu and the footer. */
export const NAV_LINKS = [
  { label: 'What it does', href: '#features' },
  { label: 'How it works', href: '#how' },
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Enterprise', href: '#enterprise' },
  { label: 'FAQ', href: '#faq' },
] as const;

/** The five Qbexel product sites: the one list the family section, the top-bar menu and the footer link from. */
const SITE_URLS = {
  automate: 'https://getautomate.qbexel.com',
  komobox: 'https://getkomobox.qbexel.com',
  komochat: 'https://komochat.qbexel.com',
  komovoice: 'https://komovoice.qbexel.com',
  eastrak: 'https://eastrak.qbexel.com',
} as const;

export type ProductId = keyof typeof SITE_URLS;

/** The product this page is about: marked "You are here", never linked. */
export const THIS_PRODUCT: ProductId = 'komovoice';

/** This page's live address (link previews use it when NEXT_PUBLIC_SITE_URL is not set). */
export const THIS_SITE_URL: string = SITE_URLS[THIS_PRODUCT];

export const PRODUCT_SITES: { id: ProductId; name: string; url: string; icon: string; job: string }[] = [
  { id: 'automate', name: 'AutoMate', url: SITE_URLS.automate, icon: '/brand/automate-app-icon.svg', job: 'Orders, couriers and profit' },
  { id: 'komobox', name: 'KomoBox', url: SITE_URLS.komobox, icon: '/brand/komobox-app-icon.svg', job: 'One inbox for your team' },
  { id: 'komochat', name: 'KomoChat', url: SITE_URLS.komochat, icon: '/brand/komochat-app-icon.svg', job: 'AI sales chat' },
  { id: 'komovoice', name: 'KomoVoice', url: SITE_URLS.komovoice, icon: '/brand/komovoice-app-icon.svg', job: 'AI phone calls' },
  { id: 'eastrak', name: 'Eastrak', url: SITE_URLS.eastrak, icon: '/brand/eastrak-app-icon.svg', job: 'Ad tracking' },
];

/** Where a family card links: the product's own site. Nothing for this page, or for items that are not one of the five. */
export function productHref(id: string): string | undefined {
  if (id === THIS_PRODUCT || !(id in SITE_URLS)) return undefined;
  return SITE_URLS[id as ProductId];
}
