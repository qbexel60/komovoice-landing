import PillLink from '@/components/ui/PillLink';
import { VTile } from '@/components/ui/Wave';
import HeroCall from '@/components/visuals/HeroCall';
import HeroSmoke from '@/components/visuals/HeroSmoke';
import { CONTACT_HREF } from '@/lib/links';

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-x-clip pt-28 sm:pt-36">
      {/* Soft wash at the top, then the moving coral cloud behind the call (the family's shader, in KomoVoice colours) */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[900px] bg-[linear-gradient(180deg,#fbfbfd_0%,#f7f7fa_60%,transparent)]" />
      <HeroSmoke className="absolute inset-x-0 top-[440px] h-[700px] [mask-image:linear-gradient(180deg,transparent_0%,#000_24%,#000_70%,transparent_100%)] sm:top-[480px] sm:h-[820px]" />

      {/* KomoVoice's glow rising from below, as in its app icon and cover */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[700px] h-[620px] w-[1500px] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgb(242_84_45/0.2),rgb(255_140_110/0.12)_50%,transparent_100%)] sm:top-[780px]"
      />

      {/* Faint guide lines at the content edges, as on the other pages */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[1200px] -translate-x-1/2 xl:block">
        <span className="absolute inset-y-0 left-0 w-px bg-[linear-gradient(180deg,rgb(255_255_255/0.9),#fff_40%,#fff_85%,transparent)]" />
        <span className="absolute inset-y-0 right-0 w-px bg-[linear-gradient(180deg,rgb(255_255_255/0.9),#fff_40%,#fff_85%,transparent)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center px-4 text-center sm:px-6">
        <p className="hero-rise inline-flex max-w-full items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 text-[13px] shadow-[var(--shadow-soft)] sm:px-4 sm:text-sm">
          <span aria-hidden className="live-dot h-2 w-2 shrink-0 rounded-full bg-[#1f9d55]" />
          <span className="font-semibold text-ink">AI phone agent</span>
          <span className="text-body">· Live</span>
        </p>

        <h1 id="hero-title" className="h-display hero-rise mt-5 max-w-[16ch] text-ink sm:max-w-none" style={{ animationDelay: '0.06s' }}>
          Confirm your orders <br className="hidden sm:block" />
          with a real{' '}
          <VTile shine inline className="mx-0.5 h-[1.1em] w-[1.1em] align-[-0.2em] shadow-[0_10px_24px_-6px_rgb(242_84_45/0.55),0_0_0_4px_#fff]" />{' '}
          phone call
        </h1>

        <p className="lede hero-rise mt-5 max-w-[660px] sm:text-lg" style={{ animationDelay: '0.12s' }}>
          KomoVoice is an AI phone agent on a local phone number. It calls your customers to confirm cash-on-delivery
          orders, answers their calls about orders and delivery, and hands the call to your team when someone asks for a
          person. Local languages, Bangla first.
        </p>

        <div
          className="hero-rise mt-8 flex w-full flex-col items-center justify-center gap-3 min-[420px]:w-auto min-[420px]:flex-row"
          style={{ animationDelay: '0.18s' }}
        >
          <PillLink href={CONTACT_HREF} size="lg" className="w-full justify-between min-[420px]:w-auto">
            Book a demo call
          </PillLink>
          <PillLink href="#how" size="lg" variant="ghost" dot={false} className="w-full justify-center min-[420px]:w-auto">
            How it works
          </PillLink>
        </div>
      </div>

      <div className="hero-rise relative z-10 mt-14 sm:mt-16" style={{ animationDelay: '0.3s' }}>
        <HeroCall />
      </div>
    </section>
  );
}
