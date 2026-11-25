/* eslint-disable @next/next/no-img-element -- small local SVG logos in a static export */
import { Fragment } from 'react';
import SectionHead from '@/components/ui/SectionHead';

type Status = 'live' | 'soon' | 'coming';

const PRODUCTS: { id: string; name: string; logo: { src: string; w: number; h: number }; status: Status; statusLabel: string; job: string; text: string }[] = [
  {
    id: 'komochat',
    name: 'KomoChat',
    logo: { src: '/brand/komochat-logo-color-on-light.svg', w: 730, h: 152 },
    status: 'soon',
    statusLabel: 'Launching soon',
    job: 'Chats',
    text: 'The AI salesman in your Messenger and Instagram chats, in Bangla and Banglish, day and night.',
  },
  {
    id: 'automate',
    name: 'AutoMate',
    logo: { src: '/brand/automate-logo-color-on-light.svg', w: 703, h: 152 },
    status: 'live',
    statusLabel: 'Live',
    job: 'Runs the orders',
    text: 'Orders, couriers, cash on delivery, stock and profit, for online shops, in one app.',
  },
  {
    id: 'komovoice',
    name: 'KomoVoice',
    logo: { src: '/brand/komovoice-logo-color-on-light.svg', w: 825, h: 152 },
    status: 'live',
    statusLabel: 'Live in Bangladesh',
    job: 'Calls',
    text: 'The AI on the phone: confirms orders, answers customers’ calls and hands over to your team.',
  },
];

const LINKS: { label: string; status: Status; statusLabel: string }[] = [
  { label: 'Orders from chats', status: 'soon', statusLabel: 'Soon' },
  { label: 'Orders to confirm by phone', status: 'coming', statusLabel: 'Coming' },
];

const STATUS: Record<Status, string> = {
  live: 'bg-ok-soft text-ok',
  soon: 'bg-[#eeedff] text-indigo',
  coming: 'bg-canvas text-muted ring-1 ring-line',
};

/** KomoChat chats, AutoMate runs the orders, KomoVoice calls: where KomoVoice sits in Qbexel's family. */
export default function Ecosystem() {
  return (
    <section id="ecosystem" aria-labelledby="ecosystem-title" className="mx-auto max-w-[1200px] px-4 pt-24 sm:px-6 sm:pt-32">
      <SectionHead
        id="ecosystem-title"
        title="KomoChat chats. AutoMate runs the orders. KomoVoice calls."
        text="Three Qbexel products made to work as one, for online sellers: a customer chats, the order lands in AutoMate, and KomoVoice calls to confirm it."
      />

      <div className="reveal relative mt-12 overflow-hidden rounded-[32px] border border-line bg-white/60 p-4 sm:mt-14 sm:p-8 lg:p-10">
        <div aria-hidden className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(80%_80%_at_50%_50%,#000,transparent)]" />

        <div className="relative flex flex-col items-stretch lg:flex-row">
          {PRODUCTS.map((p, i) => (
            <Fragment key={p.id}>
              <article
                className={`card flex-1 p-5 sm:p-6 ${p.id === 'komovoice' ? 'ring-2 ring-brand/70 shadow-[0_20px_44px_-16px_rgb(242_84_45/0.4)]' : ''}`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3>
                    <img src={p.logo.src} alt={p.name} width={p.logo.w} height={p.logo.h} className="h-[22px] w-auto" />
                  </h3>
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11.5px] font-semibold ${STATUS[p.status]}`}>
                    {p.status === 'live' && <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#1f9d55]" />}
                    {p.statusLabel}
                  </span>
                </div>
                <p className="mt-4 text-xl font-bold tracking-tight text-ink">{p.job}</p>
                <p className="mt-1 text-[15px] leading-relaxed text-body">{p.text}</p>
              </article>

              {i < LINKS.length && <Connector {...LINKS[i]} />}
            </Fragment>
          ))}
        </div>

        <p className="relative mx-auto mt-8 max-w-[680px] text-center text-[15px] leading-relaxed text-body">
          <span className="font-semibold text-ink">Today, KomoVoice works on its own:</span> it calls the numbers you upload
          or type. The connection to AutoMate is coming, so new orders can be called without a list.
        </p>
      </div>
    </section>
  );
}

/** The link between two products: a line with what passes along it, dashed while it is not built yet. */
function Connector({ label, status, statusLabel }: { label: string; status: Status; statusLabel: string }) {
  return (
    <div className="relative flex shrink-0 items-center justify-center py-3 lg:w-[150px] lg:py-0">
      <span aria-hidden className="absolute inset-y-0 left-1/2 border-l-2 border-dashed border-brand-200 lg:inset-x-0 lg:inset-y-auto lg:left-0 lg:top-1/2 lg:border-l-0 lg:border-t-2" />
      <span className="relative flex flex-col items-center gap-1 rounded-2xl bg-white px-3 py-2 text-center shadow-[var(--shadow-soft)] ring-1 ring-line">
        <span className="text-[12px] font-semibold leading-tight text-ink">{label}</span>
        <span className={`rounded-full px-2 py-px text-[10.5px] font-semibold ${STATUS[status]}`}>{statusLabel}</span>
      </span>
    </div>
  );
}
