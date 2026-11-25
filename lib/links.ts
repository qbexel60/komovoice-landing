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
