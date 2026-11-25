import type { ReactNode } from 'react';
import Paused from '@/components/ui/Paused';
import SectionHead from '@/components/ui/SectionHead';
import { HandoverVisual, IncomingVisual, ListVisual, QuestionVisual, ResultsVisual } from '@/components/visuals/FeatureVisuals';

/** What KomoVoice does today. The first card is its main job, so it is the wide one. */
const FEATURES: { title: string; text: ReactNode; visual: ReactNode; wide?: boolean; soon?: string }[] = [
  {
    title: 'Confirms cash-on-delivery orders',
    text: 'It reads out the product, size and amount, asks the customer to confirm, and saves the result: confirmed, cancelled, call back or wrong number, with a short note for your team.',
    visual: <ResultsVisual />,
    wide: true,
  },
  {
    title: 'Calls a whole list',
    text: 'Upload Excel or CSV, or paste numbers. It calls them one at a time, tries again later when nobody answers, skips your do-not-call list and keeps to the calling hours you set.',
    visual: <ListVisual />,
  },
  {
    title: 'Answers incoming calls',
    text: 'When customers call your number, it picks up and talks in Bangla, following the instruction you wrote for incoming calls.',
    visual: <IncomingVisual />,
  },
  {
    title: 'Answers order and delivery questions',
    text: 'Delivery time, charges, payment, returns: it answers from what you write in its instructions. When it doesn’t know, it says a person will confirm. It never makes up an answer.',
    visual: <QuestionVisual />,
    soon: 'Live order status from AutoMate: coming',
  },
  {
    title: 'A person when needed',
    text: 'When a caller asks for a person, it says it is connecting them and rings your staff phone. If nobody picks up, it takes a message for a call back.',
    visual: <HandoverVisual />,
  },
];

export default function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="mx-auto max-w-[1200px] px-4 pt-24 sm:px-6 sm:pt-32">
      <SectionHead
        id="features-title"
        title="One agent for the calls you make and the calls you get"
        text="KomoVoice calls out to confirm orders and picks up when customers call in. Here is what it does today."
      />

      <Paused className="mt-12 grid gap-4 sm:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {FEATURES.map((f, i) => (
          <article
            key={f.title}
            className={`card reveal flex flex-col p-3 ${f.wide ? 'md:col-span-2' : ''}`}
            style={{ ['--d' as string]: `${(i % 3) * 0.06}s` }}
          >
            <div className={`well flex flex-1 items-center p-4 sm:p-5 ${f.wide ? 'min-h-[230px]' : 'min-h-[210px]'}`}>
              <div className="w-full">{f.visual}</div>
            </div>
            <div className="px-3 pb-4 pt-5 sm:px-4">
              <h3 className="text-lg font-bold tracking-tight text-ink">{f.title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-body">{f.text}</p>
              {f.soon && (
                <p className="mt-3 inline-flex rounded-full bg-canvas px-2.5 py-1 text-[12px] font-semibold text-muted ring-1 ring-line">
                  {f.soon}
                </p>
              )}
            </div>
          </article>
        ))}
      </Paused>
    </section>
  );
}
