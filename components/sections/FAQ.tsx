'use client';

import { Plus } from 'lucide-react';
import { useId, useState } from 'react';
import { WHATSAPP_URL } from '@/lib/links';

/** Straight answers about what KomoVoice does today, and what is coming. */
const FAQS = [
  {
    q: 'What is KomoVoice?',
    a: 'KomoVoice is an AI phone agent made by Qbexel. It makes and answers real phone calls for your business: it confirms cash-on-delivery orders, answers questions about orders and delivery, and hands the call to a person on your team when needed.',
  },
  {
    q: 'Is it a real phone call?',
    a: 'Yes. KomoVoice runs on a BTCL Alaap Cloud line with a local number, so your customers get an ordinary phone call on any phone. It is not an internet call and they need no app.',
  },
  {
    q: 'Which languages does it speak?',
    a: 'Bangla today, the way people in Bangladesh talk on the phone, with everyday English words. It switches to English when the caller does. We are building it for local languages, Bangla first, and more will follow.',
  },
  {
    q: 'Can it call a whole list of customers?',
    a: 'Yes. Upload an Excel or CSV file, or paste the numbers, and tick that the people on the list agreed to be called. It calls one number at a time, tries again later when nobody answers, skips anyone on your do-not-call list, and keeps to your calling hours and daily limit.',
  },
  {
    q: 'What happens when a customer wants a person?',
    a: 'It tells them it is connecting them and rings your staff phone. If someone picks up, they take over the call. If nobody answers, KomoVoice takes a message so your team can call back.',
  },
  {
    q: 'Does it pretend to be a person?',
    a: 'It speaks for your business under the name you give it, in a natural voice. If a caller asks whether they are talking to a person, it never claims to be one.',
  },
  {
    q: 'Can I hear the calls?',
    a: 'Yes. You can listen to any call live from the KomoVoice dashboard. Every call is saved with its result, notes and the full transcript.',
  },
  {
    q: 'Does it work with AutoMate?',
    a: 'Not yet. The connection is coming, so new AutoMate orders can be called without a list. Today KomoVoice calls the numbers you upload or type.',
  },
  {
    q: 'Which AI does it use?',
    a: 'It talks through Gemini Live from Google or ElevenLabs. You choose which one for each instruction.',
  },
  {
    q: 'How much does it cost?',
    a: 'There is no public price yet. Book a demo call and we will talk through your calls and the price with you.',
  },
];

export default function FAQ() {
  const id = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-title" className="mx-auto max-w-[1200px] px-4 pt-24 sm:px-6 sm:pt-32">
      <div className="grid gap-10 lg:grid-cols-[360px_1fr] lg:gap-16">
        <div className="reveal lg:sticky lg:top-28 lg:self-start">
          <h2 id="faq-title" className="h-section text-ink">
            Questions, answered
          </h2>
          <p className="lede mt-4">
            Straight answers about what KomoVoice does today. Anything else? Ask our team on{' '}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-ink underline decoration-brand-300 underline-offset-4 hover:decoration-brand-ink"
            >
              WhatsApp
            </a>
            .
          </p>
        </div>

        <ul className="reveal flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className="card overflow-hidden rounded-[20px]">
                <h3>
                  <button
                    type="button"
                    id={`${id}-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`${id}-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 rounded-[20px] px-5 py-5 text-left text-base font-bold text-ink sm:px-6 sm:text-lg"
                  >
                    {item.q}
                    <span
                      aria-hidden
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-[rotate,background-color,border-color,color] duration-300 ${
                        isOpen ? 'rotate-45 border-brand-deep bg-brand-deep text-white' : 'border-line bg-white text-ink'
                      }`}
                    >
                      <Plus className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                  </button>
                </h3>
                <div
                  id={`${id}-a-${i}`}
                  role="region"
                  aria-labelledby={`${id}-q-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden" inert={!isOpen}>
                    <p className="px-5 pb-6 text-[15px] leading-relaxed text-body sm:px-6 sm:text-base">{item.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
