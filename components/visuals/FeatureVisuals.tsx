import { ArrowRight, Check, Download, PhoneIncoming, PhoneOff, Smartphone, UserRound } from 'lucide-react';
import VoiceBars from '@/components/ui/VoiceBars';
import { VTile } from '@/components/ui/Wave';

/*
 * Small pictures of KomoVoice inside the feature cards. Everything they show is
 * example data; the outcomes, retries, do-not-call list and hand-over match
 * what the product does today.
 */

type Outcome = 'confirmed' | 'call_back' | 'cancelled' | 'wrong_number';

const OUTCOME: Record<Outcome, { label: string; cls: string }> = {
  confirmed: { label: 'Confirmed', cls: 'bg-ok-soft text-ok' },
  call_back: { label: 'Call back', cls: 'bg-[#fff4d6] text-[#7a5300]' },
  cancelled: { label: 'Cancelled', cls: 'bg-brand-50 text-brand-ink' },
  wrong_number: { label: 'Wrong number', cls: 'bg-canvas text-muted ring-1 ring-line' },
};

const RESULTS: { name: string; order: string; outcome: Outcome; note: string }[] = [
  { name: 'Rahat', order: 'Blue panjabi, L', outcome: 'confirmed', note: 'Deliver after 5 pm' },
  { name: 'Sumaiya', order: 'Cotton saree', outcome: 'call_back', note: 'Busy now, call after 7 pm' },
  { name: 'Tanvir', order: 'Leather wallet', outcome: 'cancelled', note: 'Ordered twice by mistake' },
  { name: 'Nabila', order: 'Kids’ frock', outcome: 'wrong_number', note: 'Not the person who ordered' },
];

/** Order confirmation: each call's result and note, ready for the team. */
export function ResultsVisual() {
  return (
    <div className="mini overflow-hidden">
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
        <p className="text-[13px] font-bold text-ink">Today’s order calls</p>
        <span className="flex items-center gap-1 rounded-full bg-canvas px-2 py-0.5 text-[11px] font-semibold text-body ring-1 ring-line">
          <Download aria-hidden className="h-3 w-3" />
          CSV
        </span>
      </div>
      <ul>
        {RESULTS.map((r, i) => (
          <li
            key={r.name}
            className={`grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1 px-4 py-2.5 sm:grid-cols-[150px_auto_1fr] ${i ? 'border-t border-line' : ''}`}
          >
            <span className="min-w-0">
              <span className="block truncate text-[13px] font-semibold text-ink">{r.name}</span>
              <span className="block truncate text-[11.5px] text-muted">{r.order}</span>
            </span>
            <span className={`w-fit rounded-full px-2 py-0.5 text-[11px] font-semibold ${OUTCOME[r.outcome].cls}`}>
              {OUTCOME[r.outcome].label}
            </span>
            <span className="col-span-2 truncate text-[12px] text-body sm:col-span-1">{r.note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const ROWS: { number: string; state: 'done' | 'calling' | 'retry' | 'waiting' | 'dnc' }[] = [
  { number: '01711-XXX201', state: 'done' },
  { number: '01819-XXX554', state: 'calling' },
  { number: '01911-XXX093', state: 'retry' },
  { number: '01552-XXX870', state: 'dnc' },
  { number: '01673-XXX318', state: 'waiting' },
];

/** A list being called one number at a time. */
export function ListVisual() {
  return (
    <ul className="mini divide-y divide-line overflow-hidden">
      {ROWS.map((r) => (
        <li key={r.number} className="flex items-center justify-between gap-3 px-3.5 py-2.5">
          <span className="text-[12.5px] font-semibold tabular-nums text-ink">{r.number}</span>
          {r.state === 'done' && (
            <span className="flex items-center gap-1 text-[11.5px] font-semibold text-ok">
              <Check aria-hidden className="h-3.5 w-3.5" strokeWidth={3} />
              Done
            </span>
          )}
          {r.state === 'calling' && (
            <span className="flex items-center gap-2 text-[11.5px] font-semibold text-brand-ink">
              <VoiceBars on count={6} className="h-3.5 w-[34px]" />
              Calling
            </span>
          )}
          {r.state === 'retry' && <span className="text-[11.5px] font-medium text-muted">No answer, again in 30 min</span>}
          {r.state === 'dnc' && <span className="text-[11.5px] font-medium text-muted">Do-not-call, skipped</span>}
          {r.state === 'waiting' && <span className="text-[11.5px] font-medium text-muted">Next</span>}
        </li>
      ))}
    </ul>
  );
}

/** An incoming call, answered by the AI. */
export function IncomingVisual() {
  return (
    <div className="mini p-4">
      <div className="flex items-center gap-3">
        <span className="ringing grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ok text-white">
          <PhoneIncoming aria-hidden className="h-4.5 w-4.5" />
        </span>
        <span className="min-w-0">
          <span className="block text-[13px] font-semibold text-ink">Incoming call</span>
          <span className="block text-[11.5px] text-muted">01821-XXX637</span>
        </span>
      </div>
      <div className="mt-3 flex items-center gap-2.5 rounded-xl bg-brand-50 px-3 py-2.5">
        <VTile className="h-6 w-6 shrink-0" />
        <VoiceBars on count={30} className="h-5 flex-1" />
      </div>
      <p className="mt-2 text-[11.5px] font-medium text-body">Answered by KomoVoice, in Bangla</p>
    </div>
  );
}

/** A caller's question, answered from what the shop wrote in its instructions. */
export function QuestionVisual() {
  return (
    <div className="grid gap-2">
      <div className="mini max-w-[88%] px-3.5 py-2.5">
        <p lang="bn" className="text-[13.5px] font-medium text-ink">
          ঢাকার বাইরে delivery charge কত?
        </p>
        <p className="text-[11px] text-muted">What’s the delivery charge outside Dhaka?</p>
      </div>
      <div className="ml-auto max-w-[88%] rounded-[14px] bg-night px-3.5 py-2.5 text-white">
        <p lang="bn" className="text-[13.5px] font-medium">
          ঢাকার বাইরে একশো বিশ টাকা।
        </p>
        <p className="text-[11px] text-white/65">120 taka outside Dhaka.</p>
      </div>
      <p className="ml-auto text-[11px] font-semibold text-brand-ink">From your instructions</p>
    </div>
  );
}

/** The hand-over: the AI rings the staff phone; if nobody answers, it takes a message. */
export function HandoverVisual() {
  return (
    <div className="mini p-4">
      <div className="flex items-center gap-2">
        <VTile className="h-9 w-9 shrink-0" />
        <ArrowRight aria-hidden className="h-4 w-4 shrink-0 text-muted" />
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-canvas text-ink ring-1 ring-line">
          <Smartphone aria-hidden className="ringing h-4 w-4" />
        </span>
        <span className="min-w-0 text-[12px] leading-tight">
          <span className="block font-semibold text-ink">Ringing your staff</span>
          <span className="block text-muted">the caller asked for a person</span>
        </span>
      </div>
      <div className="mt-3 grid gap-1.5 text-[11.5px]">
        <p className="flex items-center gap-2 rounded-lg bg-ok-soft px-2.5 py-1.5 font-medium text-ok">
          <UserRound aria-hidden className="h-3.5 w-3.5" />
          Picked up: your staff takes the call
        </p>
        <p className="flex items-center gap-2 rounded-lg bg-canvas px-2.5 py-1.5 font-medium text-body ring-1 ring-line">
          <PhoneOff aria-hidden className="h-3.5 w-3.5" />
          No answer: it takes a message
        </p>
      </div>
    </div>
  );
}
