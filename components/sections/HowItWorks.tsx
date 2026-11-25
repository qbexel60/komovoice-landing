import { Check, Eye, Headphones, RadioTower } from 'lucide-react';
import type { ReactNode } from 'react';
import Paused from '@/components/ui/Paused';
import SectionHead from '@/components/ui/SectionHead';
import VoiceBars from '@/components/ui/VoiceBars';

/** The three things you set up, in order: the line, the words, and watching the calls. */
const STEPS: { title: string; text: string; visual: ReactNode }[] = [
  {
    title: 'Your number',
    text: 'We set KomoVoice up on a local number on BTCL’s Alaap Cloud line. Customers call that number, and KomoVoice calls out from it.',
    visual: <LineVisual />,
  },
  {
    title: 'Your instructions',
    text: 'Write what it should say in the dashboard: one instruction for incoming calls and as many as you need for outgoing ones. Blanks like {{name}} and {{amount}} are filled from your list, and you can preview the final words before a call.',
    visual: <InstructionVisual />,
  },
  {
    title: 'Listen live, read every call',
    text: 'Listen to any call as it happens, from the dashboard. Every call is saved with its result, notes and the full transcript, and a list’s results download as a CSV file.',
    visual: <ListenVisual />,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" aria-labelledby="how-title" className="mx-auto max-w-[1200px] px-4 pt-24 sm:px-6 sm:pt-32">
      <SectionHead
        id="how-title"
        title="Your number, your words, and every call in view"
        text="Three things to set up. We do the phone line with you; the rest is in the KomoVoice dashboard."
      />

      <Paused as="ol" className="relative mt-12 grid gap-4 sm:mt-14 lg:grid-cols-3 lg:gap-5">
        {/* The dotted line that joins the steps on wide screens */}
        <span aria-hidden className="absolute left-[16%] right-[16%] top-[26px] hidden border-t-2 border-dotted border-brand-200 lg:block" />
        {STEPS.map((s, i) => (
          <li key={s.title} className="reveal relative flex flex-col" style={{ ['--d' as string]: `${i * 0.08}s` }}>
            <span className="relative mx-auto grid h-[52px] w-[52px] place-items-center rounded-full bg-white text-lg font-bold text-brand-ink shadow-[var(--shadow-soft)] ring-4 ring-canvas">
              {i + 1}
            </span>
            <div className="card mt-5 flex flex-1 flex-col p-3">
              <div className="well grid min-h-[190px] place-items-center p-4">{s.visual}</div>
              <div className="px-3 pb-4 pt-5 sm:px-4">
                <h3 className="text-lg font-bold tracking-tight text-ink">{s.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-body">{s.text}</p>
              </div>
            </div>
          </li>
        ))}
      </Paused>
    </section>
  );
}

/** The phone line, signed in (as the dashboard header shows it). */
function LineVisual() {
  return (
    <div aria-hidden className="mini w-full max-w-[280px] p-4">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-ink">
          <RadioTower className="h-5 w-5" />
        </span>
        <span className="min-w-0">
          <span className="block text-[13px] font-semibold text-ink">BTCL Alaap Cloud</span>
          <span className="block text-[12px] tabular-nums text-muted">Local number 09XXX-XXXXXX</span>
        </span>
      </div>
      <p className="mt-3 flex items-center gap-2 rounded-lg bg-ok-soft px-2.5 py-1.5 text-[12px] font-semibold text-ok">
        <span className="live-dot h-2 w-2 rounded-full bg-[#1f9d55]" />
        Signed in to BTCL
      </p>
    </div>
  );
}

/** An outgoing instruction with blanks, as written in the dashboard (example). */
function InstructionVisual() {
  const blank = 'rounded-md bg-brand-50 px-1 py-px font-semibold text-brand-ink';
  return (
    <div aria-hidden className="mini w-full max-w-[300px] p-4">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[13px] font-semibold text-ink">Confirm COD order</span>
        <span className="rounded-full bg-canvas px-2 py-0.5 text-[10.5px] font-semibold text-muted ring-1 ring-line">Outgoing</span>
      </div>
      <p className="mt-3 text-[12px] leading-relaxed text-body">
        Confirm <span className={blank}>{'{{name}}'}</span>’s order: <span className={blank}>{'{{product}}'}</span>, total{' '}
        <span className={blank}>{'{{amount}}'}</span> taka, cash on delivery. If they want a change, note it for the team.
      </p>
      <p className="mt-3 flex items-center gap-1.5 text-[11.5px] font-semibold text-brand-ink">
        <Eye className="h-3.5 w-3.5" />
        Preview the final words
      </p>
    </div>
  );
}

/** A call in progress with the Listen button on, and the saved result below. */
function ListenVisual() {
  return (
    <div aria-hidden className="w-full max-w-[280px]">
      <div className="mini p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[13px] font-semibold text-ink">Rahat, 00:21</span>
          <span className="flex items-center gap-1 rounded-full bg-brand-deep px-2 py-0.5 text-[10.5px] font-semibold text-white">
            <Headphones className="h-3 w-3" />
            Listening
          </span>
        </div>
        <VoiceBars on count={22} className="mt-3 h-7" />
      </div>
      <div className="mini mt-2 flex items-center justify-between gap-2 px-4 py-2.5">
        <span className="text-[12px] text-body">History</span>
        <span className="flex items-center gap-1 rounded-full bg-ok-soft px-2 py-0.5 text-[11px] font-semibold text-ok">
          <Check className="h-3 w-3" strokeWidth={3} />
          Confirmed, transcript saved
        </span>
      </div>
    </div>
  );
}
