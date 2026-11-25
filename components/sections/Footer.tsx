import {
  AUTOMATE_URL,
  CONTACT_HREF,
  EMAIL,
  FACEBOOK_URL,
  LINKEDIN_URL,
  NAV_LINKS,
  OFFICES,
  PHONE_HREF,
  PHONE_LABEL,
  PRIVACY_URL,
  QBEXEL_URL,
  TERMS_URL,
  WHATSAPP_URL,
} from '@/lib/links';

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Footer() {
  const columns = [
    { title: 'KomoVoice', links: NAV_LINKS.map((l) => ({ label: l.label, href: l.href })) },
    {
      title: 'Contact',
      links: [
        { label: 'Book a demo call', href: CONTACT_HREF },
        { label: PHONE_LABEL, href: PHONE_HREF },
        { label: 'WhatsApp', href: WHATSAPP_URL, external: true },
        { label: EMAIL, href: `mailto:${EMAIL}` },
      ],
    },
    {
      title: 'Qbexel',
      links: [
        { label: 'qbexel.com', href: QBEXEL_URL, external: true },
        { label: 'AutoMate', href: AUTOMATE_URL, external: true },
        { label: 'Facebook', href: FACEBOOK_URL, external: true },
        { label: 'LinkedIn', href: LINKEDIN_URL, external: true },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: PRIVACY_URL, external: true },
        { label: 'Terms', href: TERMS_URL, external: true },
      ],
    },
  ];

  return (
    <footer className="mt-24 border-t border-line bg-white sm:mt-32">
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/komovoice-logo-color-on-light.svg" alt="KomoVoice" width={825} height={152} className="h-7 w-auto" />
            <p className="mt-4 max-w-[340px] text-[15px] leading-relaxed text-body">
              The AI phone agent that confirms orders and answers customers’ calls on a real local line. Local languages,
              Bangla first.
            </p>
            <div className="mt-4 space-y-1 text-sm text-muted">
              <p>Made by Qbexel</p>
              {OFFICES.map((o) => (
                <p key={o.label}>
                  {o.label}: {o.address}
                </p>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-[1fr_1.5fr_1fr_0.8fr]">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="text-sm font-bold text-ink">{col.title}</h2>
                <ul className="mt-3 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...('external' in link && link.external ? ext : {})}
                        className="break-words text-sm text-body transition-colors hover:text-brand-ink"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:justify-between">
          <p>© 2026 Qbexel. All rights reserved.</p>
          <p>Names, numbers, calls and amounts in the pictures on this page are examples.</p>
        </div>
      </div>
    </footer>
  );
}
