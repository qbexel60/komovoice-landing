import { Cable, FileText, Headset, PhoneCall } from 'lucide-react';
import type { CSSProperties } from 'react';
import PillLink from '@/components/ui/PillLink';
import { CONTACT_HREF } from '@/lib/links';

/** What we build for larger companies. Each has one example use, worded as an example, not a client. */
const BUILDS = [
  {
    icon: PhoneCall,
    title: 'On your own numbers',
    text: 'We connect the agent to your phone lines or IP PBX over SIP, so calls come from and go to the numbers your customers already know.',
    example: 'Your hotline answered in Bangla when every agent is busy.',
  },
  {
    icon: FileText,
    title: 'Your scripts and rules',
    text: 'Confirmations, reminders, follow-ups or first-line support, written with you and tested on real calls before a customer hears them.',
    example: 'A reminder call two days before a payment is due.',
  },
  {
    icon: Cable,
    title: 'Connected to your systems',
    text: 'The agent reads from and writes to your order, booking or ticket system through your APIs, with only the access it needs. Anything with real consequences waits for a person to approve it.',
    example: 'Look up a booking during the call and add the result after it.',
  },
  {
    icon: Headset,
    title: 'Next to your agents',
    text: 'Calls go to a person on your team when the caller asks or the script says so, with a short summary of what the caller wants.',
    example: 'Complaints passed straight to a senior agent.',
  },
];

const STEPS = [
  {
    title: 'Talk to us',
    text: 'Tell us which calls take up your team’s time. We tell you plainly what a voice agent can do there, and what it can’t.',
  },
  {
    title: 'We build on your numbers, scripts and systems',
    text: 'We set the agent up on your lines, with your words and your data, and test it on real calls with your team first.',
  },
  {
    title: 'We run it with you',
    text: 'We keep it running, check its calls and its cost, and improve it as your business changes. A person on your team can always take over.',
  },
];

/** KomoVoice for enterprises and contact centers: the custom voice agents Qbexel builds on a company's own lines. */
export default function Enterprise() {
  return (
    <section id="enterprise" aria-labelledby="enterprise-title" className="mx-auto max-w-[1200px] px-4 pt-24 sm:px-6 sm:pt-32">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-[700px]">
          <h2 id="enterprise-title" className="h-section reveal text-ink">
            Custom KomoVoice for enterprises and contact centers
          </h2>
          <p className="reveal mt-4 text-base leading-relaxed text-body sm:text-lg" style={{ '--d': '0.08s' } as CSSProperties}>
            KomoVoice is also the name for the custom voice agents Qbexel builds for larger companies: on your own numbers,
            scripts and systems, in local languages, Bangla first.
          </p>
        </div>
        <div className="reveal shrink-0" style={{ '--d': '0.12s' } as CSSProperties}>
          <PillLink href={CONTACT_HREF}>Talk to us</PillLink>
        </div>
      </div>

      <div className="card reveal mt-10 grid overflow-hidden rounded-[28px] sm:mt-14 md:grid-cols-2 lg:grid-cols-4">
        {BUILDS.map(({ icon: Icon, title, text, example }, i) => (
          <article
            key={title}
            className={`flex flex-col border-line p-6 sm:p-7 ${i > 0 ? 'border-t' : ''} ${i === 1 ? 'md:border-t-0' : ''} ${
              i % 2 === 1 ? 'md:border-l' : ''
            } ${i > 0 ? 'lg:border-l lg:border-t-0' : ''}`}
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-night text-brand-light">
              <Icon aria-hidden className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">{title}</h3>
            <p className="mt-1.5 flex-1 text-[15px] leading-relaxed text-body">{text}</p>
            <p className="mt-4 border-t border-dashed border-line pt-3 text-sm leading-relaxed text-muted">
              <span className="font-semibold text-ink">For example:</span> {example}
            </p>
          </article>
        ))}
      </div>

      <div className="reveal mt-14 sm:mt-20">
        <h3 className="text-2xl font-bold tracking-tight text-ink sm:text-[28px]">How a project works</h3>
        <ol className="relative mt-8 grid gap-8 md:grid-cols-3 md:gap-6">
          {/* The line that joins the three steps on wide screens */}
          <span aria-hidden className="absolute left-[18px] right-[calc((100%_-_3rem)/3_-_18px)] top-[18px] hidden h-px bg-brand-200 md:block" />
          {STEPS.map((step, i) => (
            <li key={step.title} className="relative grid grid-cols-[36px_1fr] gap-4 md:block">
              <span className="relative grid h-9 w-9 place-items-center rounded-full bg-brand-deep text-sm font-bold text-white ring-4 ring-canvas">
                {i + 1}
              </span>
              <div className="md:mt-5 md:pr-4">
                <h4 className="text-lg font-bold tracking-tight text-ink">{step.title}</h4>
                <p className="mt-1.5 text-[15px] leading-relaxed text-body">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
          <PillLink href={CONTACT_HREF} size="lg">
            Talk to us
          </PillLink>
          <p className="text-[15px] text-body">On WhatsApp, by phone or by email, with the Qbexel team.</p>
        </div>
      </div>
    </section>
  );
}
