import { Check, Mail, MessageCircle, Phone } from 'lucide-react';
import type { ReactNode } from 'react';
import { WaveSymbol } from '@/components/ui/Wave';
import { EMAIL, PHONE_HREF, PHONE_LABEL, WHATSAPP_URL } from '@/lib/links';

const TELL_US = [
  'The calls your team makes or takes today',
  'Roughly how many calls a day',
  'Your shop or company, and the languages your customers speak',
];

/** The dark closing band with KomoVoice's coral glow: book a demo call or talk to the team. Every "Talk to us" lands here. */
export default function GetStarted() {
  return (
    <section id="contact" aria-labelledby="cta-title" className="px-2 pt-24 sm:px-4 sm:pt-32">
      <div className="reveal relative mx-auto max-w-[1240px] overflow-hidden rounded-[32px] bg-night px-5 py-14 sm:rounded-[40px] sm:px-12 sm:py-16 lg:px-16 lg:py-20">
        {/* the coral glow from KomoVoice's app icon, a little violet from the top, a big faint wave */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_118%,rgb(255_126_92/0.5)_0%,rgb(232_80_44/0.28)_40%,transparent_75%),radial-gradient(50%_60%_at_0%_0%,rgb(42_30_69/0.9),transparent_70%)]"
        />
        <WaveSymbol className="pointer-events-none absolute -right-28 -top-28 h-[400px] w-[400px] text-white/[0.03] sm:h-[480px] sm:w-[480px]" />

        <div className="relative grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <h2 id="cta-title" className="h-section text-white">
              Hear it on a real call
            </h2>
            <p className="mt-4 max-w-[480px] text-base leading-relaxed text-white/75 sm:text-lg">
              Book a demo call and hear KomoVoice talk to a customer about an order, in Bangla. Or tell us about your
              calls, for your shop or your company, and we will show you what it can do.
            </p>
            <div className="mt-8 border-t border-white/10 pt-7">
              <h3 className="text-sm font-semibold text-white/65">Good to tell us</h3>
              <ul className="mt-4 grid gap-3">
                {TELL_US.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-[15px] font-medium text-white">
                    <span aria-hidden className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-deep text-white">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/65">Book a demo call or talk to us</h3>
            <ul className="mt-4 grid gap-2.5">
              <Contact href={WHATSAPP_URL} external icon={<MessageCircle className="h-4 w-4" />} label="WhatsApp" value="Chat with us" />
              <Contact href={PHONE_HREF} icon={<Phone className="h-4 w-4" />} label="Call" value={PHONE_LABEL} />
              <Contact href={`mailto:${EMAIL}?subject=${encodeURIComponent('KomoVoice demo call')}`} icon={<Mail className="h-4 w-4" />} label="Email" value={EMAIL} />
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-white/60">The Qbexel team, in Bangla or English.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact({
  href,
  icon,
  label,
  value,
  external = false,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.07] focus-visible:outline-brand-light"
      >
        <span aria-hidden className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand/25 text-brand-light">
          {icon}
        </span>
        <span className="text-sm text-white/65">{label}</span>
        <span className="ml-auto truncate text-[15px] font-semibold text-white">{value}</span>
      </a>
    </li>
  );
}
