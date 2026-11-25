import type { Metadata, Viewport } from 'next';
import { Hind_Siliguri, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import RevealObserver from '@/components/RevealObserver';

// Qbexel's font, variable: one file covers every weight the page uses.
const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  display: 'swap',
});

// Bangla script and the taka sign (Jakarta has neither). Preloaded: the hero's example call is in Bangla.
const hind = Hind_Siliguri({
  variable: '--font-hind',
  subsets: ['bengali'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const title = 'KomoVoice by Qbexel | AI phone agent for real phone calls, Bangla first';
const description =
  'KomoVoice is an AI phone agent on a real local phone line. It calls your customers to confirm cash-on-delivery orders, answers their calls about orders and delivery in natural Bangla, and hands the call to your team when someone asks for a person.';
const shareTitle = 'KomoVoice: an AI phone agent that confirms orders by phone';
const shareDescription =
  'Real phone calls over local numbers, in natural Bangla. KomoVoice confirms cash-on-delivery orders, answers order questions and hands the call to a person when needed. Made by Qbexel in Bangladesh.';

// Set NEXT_PUBLIC_SITE_URL to the live address at build time, so link previews get absolute image URLs.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title,
  description,
  applicationName: 'KomoVoice',
  authors: [{ name: 'Qbexel', url: 'https://qbexel.com' }],
  creator: 'Qbexel',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'KomoVoice by Qbexel',
    title: shareTitle,
    description: shareDescription,
    locale: 'en_BD',
    images: [{ url: '/og-image-1200x630.png', width: 1200, height: 630, alt: 'KomoVoice by Qbexel' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: shareTitle,
    description: shareDescription,
    images: ['/og-image-1200x630.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#f7f7fa',
  colorScheme: 'light',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${hind.variable}`}>
      <body className="font-sans antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Providers>{children}</Providers>
        <RevealObserver />
      </body>
    </html>
  );
}
