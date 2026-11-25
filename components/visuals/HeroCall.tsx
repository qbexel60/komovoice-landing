'use client';

import { Check, Headphones, PhoneOutgoing, RadioTower, StickyNote, UserRound } from 'lucide-react';
import { useRef } from 'react';
import VoiceBars from '@/components/ui/VoiceBars';
import { VTile } from '@/components/ui/Wave';
import { useOnScreen, useSteps } from '@/lib/hooks';

/*
 * The hero's example call: KomoVoice confirms a cash-on-delivery order in Bangla.
 * The line rings, then each turn of the call is spoken (the voice bars show who
 * is talking) and appears in the transcript, then the result is saved.
 * The words follow how the real agent speaks: Bangla with everyday English
 * words, the price read out as Bangla words, and a customer's wish noted for
 * the team instead of promised. Every name, number and amount is an example.
 */

type Who = 'ai' | 'customer';

const AGENT = 'Mitu';
const CUSTOMER = 'Rahat';

const LINES: { who: Who; bn: string; en: string }[] = [
  {
    who: 'ai',
    bn: 'আসসালামু আলাইকুম! আমি বুনন ফ্যাশন থেকে মিতু বলছি। রাহাত সাহেব বলছেন?',
    en: 'Assalamu alaikum! This is Mitu from Bunon Fashion. Am I speaking with Rahat?',
  },
  { who: 'customer', bn: 'জি, বলছি।', en: 'Yes, speaking.' },
  {
    who: 'ai',
    bn: 'আপনার order-টা confirm করতে call দিলাম। একটা নীল পাঞ্জাবি, সাইজ L, delivery charge সহ এক হাজার দুইশো পঞ্চাশ টাকা, cash on delivery। Confirm করে দিই?',
    en: 'I’m calling to confirm your order: one blue panjabi, size L, ৳1,250 with delivery, cash on delivery. Shall I confirm it?',
  },
  {
    who: 'customer',
    bn: 'হ্যাঁ, confirm. তবে বিকেল পাঁচটার পরে দিলে ভালো হয়।',
    en: 'Yes, confirm. But after 5 pm would be better.',
  },
  {
    who: 'ai',
    bn: 'জি, বিকেল পাঁচটার পরের কথাটা team-এর জন্য note করে রাখলাম। ধন্যবাদ, ভালো থাকবেন!',
    en: 'Sure, I’ve noted “after 5 pm” for the team. Thank you, take care!',
  },
];

// Step 0 rings; steps 1-5 are the five turns; step 6 is the saved result (and the still picture).
const DURATIONS = [1900, 4200, 1900, 6400, 3800, 4600, 5600];
const CLOCK = ['', '00:02', '00:07', '00:09', '00:20', '00:25', '00:31'];
const ENDED = LINES.length + 1;

export default function HeroCall() {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref, '0px 0px 0px 0px');
  const step = useSteps(DURATIONS, onScreen, ENDED);

  const ringing = step === 0;
  const ended = step === ENDED;
  const speaking: Who | null = !ringing && !ended ? LINES[step - 1].who : null;

  const status = ringing ? `Calling ${CUSTOMER}…` : ended ? `Call ended, ${CLOCK[ENDED]}` : `On the call, ${CLOCK[step]}`;
  const who = ringing
    ? 'Ringing'
    : ended
      ? 'Result saved'
      : speaking === 'ai'
        ? `${AGENT} (AI agent) is speaking`
        : `${CUSTOMER} is speaking`;

  return (
    <div
      ref={ref}
      data-paused={onScreen ? 'false' : 'true'}
      role="figure"
      aria-label="Example call: KomoVoice confirms a cash-on-delivery order in Bangla"
      className="relative mx-auto grid max-w-[1040px] gap-3 px-4 sm:px-6 lg:grid-cols-[340px_1fr] lg:gap-4"
    >
      {/* The call, as the dashboard sees it */}
      <div className="relative overflow-hidden rounded-[28px] bg-night p-5 text-white shadow-[0_30px_60px_-24px_rgb(6_11_30/0.55)] sm:p-6">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_55%_at_50%_112%,rgb(255_126_92/0.55)_0%,rgb(232_80_44/0.3)_40%,transparent_75%),radial-gradient(70%_50%_at_0%_0%,rgb(42_30_69/0.9),transparent_70%)]"
        />

        <div className="relative flex items-center justify-between gap-3">
          <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11.5px] font-semibold text-white/85">Example call</span>
          <span className="flex items-center gap-1.5 text-[12.5px] font-medium text-white/70">
            <PhoneOutgoing aria-hidden className="h-3.5 w-3.5" />
            Outgoing
          </span>
        </div>

        <div className="relative mt-5 flex items-center gap-4 lg:mt-10 lg:flex-col lg:text-center">
          <span aria-hidden className="relative grid h-14 w-14 shrink-0 place-items-center lg:h-24 lg:w-24">
            {(ringing || speaking === 'customer') && (
              <>
                <span className="ring-out absolute inset-0 rounded-full border-2 border-white/40" />
                <span className="ring-out absolute inset-0 rounded-full border-2 border-white/30 [animation-delay:-1.8s]" />
              </>
            )}
            <span className="relative grid h-full w-full place-items-center rounded-full bg-[linear-gradient(135deg,#7dd3c0,#3b9ec9)] text-xl font-bold text-white ring-4 ring-white/10 lg:text-3xl">
              R
            </span>
          </span>
          <div className="min-w-0">
            <p className="text-lg font-bold tracking-tight lg:text-xl">{CUSTOMER}</p>
            <p className="text-[13px] text-white/60">017XX-XXX482</p>
            <p className="mt-1 text-[13px] font-medium text-brand-light" aria-live="off">
              {status}
            </p>
          </div>
        </div>

        <div className="relative mt-5 lg:mt-9">
          <VoiceBars
            on={speaking !== null}
            count={30}
            className="h-12 lg:h-16"
            barClassName={speaking === 'customer' ? 'bg-white/85' : 'bg-brand-light'}
          />
          <p className="mt-3 flex items-center gap-2 text-[12.5px] font-medium text-white/75 lg:justify-center">
            {speaking === 'ai' ? <VTile className="h-4 w-4" /> : <UserRound aria-hidden className="h-3.5 w-3.5" />}
            {who}
          </p>
        </div>

        <div className="relative mt-5 flex flex-wrap gap-2 lg:mt-10 lg:justify-center">
          <span
            className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11.5px] font-semibold transition-colors duration-300 ${
              ended ? 'bg-white/10 text-white/60' : 'bg-brand-deep text-white'
            }`}
          >
            <Headphones aria-hidden className="h-3.5 w-3.5" />
            {ended ? 'Listened live' : 'Listening live'}
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[11.5px] font-semibold text-white/80">
            <RadioTower aria-hidden className="h-3.5 w-3.5" />
            Local BTCL line
          </span>
        </div>
      </div>

      {/* The transcript, written as the call goes */}
      <div className="card relative rounded-[28px] p-4 sm:p-6">
        <div className="flex items-center justify-between gap-3 border-b border-line pb-3">
          <p className="text-[15px] font-bold text-ink">Transcript</p>
          <span
            className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11.5px] font-semibold ${
              ended ? 'bg-ok-soft text-ok' : 'bg-brand-50 text-brand-ink'
            }`}
          >
            {ended ? (
              <Check aria-hidden className="h-3 w-3" strokeWidth={3} />
            ) : (
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand" />
            )}
            {ended ? 'Saved' : 'Live'}
          </span>
        </div>

        <ol className="mt-3 grid gap-1">
          {LINES.map((line, i) => {
            const shown = step > i;
            const now = step === i + 1;
            const ai = line.who === 'ai';
            return (
              <li
                key={i}
                className={`grid grid-cols-[28px_1fr] gap-3 rounded-2xl px-2 py-2.5 transition-[opacity,transform,background-color] duration-500 ease-out motion-reduce:transition-none sm:px-3 ${
                  shown ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'
                } ${now ? (ai ? 'bg-brand-50' : 'bg-canvas') : ''}`}
              >
                {ai ? (
                  <VTile className="mt-0.5 h-7 w-7" />
                ) : (
                  <span
                    aria-hidden
                    className="mt-0.5 grid h-7 w-7 place-items-center rounded-full bg-[linear-gradient(135deg,#7dd3c0,#3b9ec9)] text-[12px] font-bold text-white"
                  >
                    R
                  </span>
                )}
                <div className="min-w-0">
                  <p className="text-[12px] font-semibold text-muted">{ai ? `${AGENT}, AI agent` : `${CUSTOMER}, customer`}</p>
                  <p lang="bn" className="mt-0.5 text-[15px] font-medium leading-relaxed text-ink sm:text-base">
                    {line.bn}
                  </p>
                  <p className="mt-0.5 text-[12.5px] leading-snug text-muted">{line.en}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <div
          className={`mt-3 grid gap-2 rounded-2xl border border-line bg-canvas p-3 transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none sm:grid-cols-[auto_1fr] sm:items-center sm:gap-4 sm:p-4 ${
            ended ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'
          }`}
        >
          <span className="flex w-fit items-center gap-1.5 rounded-full bg-ok px-3 py-1 text-[13px] font-semibold text-white">
            <Check aria-hidden className="h-3.5 w-3.5" strokeWidth={3} />
            Confirmed
          </span>
          <div className="text-[13px] leading-snug text-body">
            <p className="flex items-start gap-1.5">
              <StickyNote aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
              <span>
                <span className="font-semibold text-ink">Note for your team:</span> deliver after 5 pm
              </span>
            </p>
            <p className="mt-1 text-muted">Saved in call history with the full transcript</p>
          </div>
        </div>
      </div>

      {/* Two small notes beside the call on wide screens */}
      <div
        aria-hidden
        className="float mini absolute -left-14 top-[210px] hidden w-[190px] items-center gap-2.5 p-3 xl:flex"
      >
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-ink">
          <RadioTower className="h-4 w-4" />
        </span>
        <span className="text-[12px] leading-tight text-body">
          <span className="block text-[13px] font-semibold text-ink">A real phone call</span>
          On a local number
        </span>
      </div>
      <div
        aria-hidden
        className="float mini absolute -right-12 -bottom-6 hidden w-[200px] items-center gap-2.5 p-3 [animation-delay:-3s] xl:flex"
      >
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-ink">
          <UserRound className="h-4 w-4" />
        </span>
        <span className="text-[12px] leading-tight text-body">
          <span className="block text-[13px] font-semibold text-ink">Wants a person?</span>
          It rings your team
        </span>
      </div>
    </div>
  );
}
