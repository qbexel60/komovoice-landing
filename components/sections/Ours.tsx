import { Languages, PackageCheck, RadioTower } from 'lucide-react';

/** What makes KomoVoice ours: a real local line, natural Bangla, and cash-on-delivery confirmation as its first job. */
const POINTS = [
  {
    icon: RadioTower,
    title: 'Real local phone lines',
    text: 'Calls go over a BTCL Alaap Cloud line with a local number. They are ordinary phone calls, not internet calls, so customers answer on any phone, with no app.',
  },
  {
    icon: Languages,
    title: 'Natural Bangla',
    text: 'It talks the way people in Bangladesh talk on the phone: Bangla with everyday English words, prices read out in words. If the caller speaks English, it switches.',
  },
  {
    icon: PackageCheck,
    title: 'Built for cash on delivery',
    text: 'Its first job is the call every COD shop makes: check the order and the amount with the customer before you ship, and note what they ask for.',
  },
];

export default function Ours() {
  return (
    <section aria-labelledby="ours-title" className="mx-auto max-w-[1200px] px-4 pt-24 sm:px-6 sm:pt-32">
      <h2 id="ours-title" className="h-section reveal max-w-[720px] text-ink">
        Made for the phone calls online shops make every day
      </h2>
      <ul className="mt-10 grid gap-8 border-t border-line pt-8 sm:mt-12 md:grid-cols-3 md:gap-10">
        {POINTS.map(({ icon: Icon, title, text }, i) => (
          <li key={title} className="reveal" style={{ ['--d' as string]: `${i * 0.06}s` }}>
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-ink">
              <Icon aria-hidden className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">{title}</h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-body">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
