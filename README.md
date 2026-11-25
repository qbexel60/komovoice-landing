# KomoVoice landing page (light style)

A one-page site for KomoVoice, Qbexel's AI phone agent: it makes and answers real phone calls on a local BTCL line,
in natural Bangla, to confirm cash-on-delivery orders, answer order and delivery questions and hand the call to a
person. Fifth page of the light family with the new AutoMate, KomoChat, KomoBox and Eastrak pages
(`../brand-new-*-landing-page`): same stack, top bar, pill buttons, cards, shader cloud, contact band and motion rules.
Brief: `qbexel-Eco-System/DOCS/briefs/komovoice-landing-page.md`.

- Next.js 16 (App Router, static export to `out/`), TypeScript, Tailwind 4, `motion` for the small animations.
  **pnpm** (`pnpm-lock.yaml`, `packageManager` in `package.json`).
- Font: Plus Jakarta Sans (Qbexel). Hind Siliguri for Bangla text and the taka sign (preloaded, the hero call is in
  Bangla).
- Colours: KomoVoice's logo colours, coral `#F2542D` (wave, icons, large shapes), light coral `#FF8C6E` on dark, Night
  `#060B1E`, Ink `#0A0E1F`, on a cool near-white `#F7F7FA`. Coral with white text is only 3.4:1, so buttons use a
  deeper coral `#D63F1A` (4.6:1) and small coral text uses `#B8340F` (5.9:1): both pass WCAG AA. Tokens live in
  `app/globals.css`.
- Logos: the lowercase KomoVoice name logo, app icon, favicon set, manifest and link-preview picture from
  `logos/New-Logos/KomoVoice-New-Logo-Lowercase`; the lowercase AutoMate and KomoChat logos for the ecosystem part.
  The wave is also drawn inline (`components/ui/Wave.tsx`) for the app tile and the voice bars.
- Copy says only what KomoVoice does today, checked against `Platforms/komoVoice-mvp` (README, `src/`, team notes,
  2026-11-25): BTCL Alaap Cloud line; incoming calls; outgoing calls to one number or a list (Excel, CSV or pasted,
  consent tick, one at a time, retries, do-not-call list, calling hours, daily limit); instructions with `{{blanks}}`
  and a preview; results (confirmed, cancelled, call back, wrong number…) with notes and the full transcript; CSV
  download; live listening; hand-over to a staff phone, or a message if nobody answers; Gemini Live or ElevenLabs;
  Bangla with English words, English on request; never claims to be a person when asked.
- Marked "coming": the AutoMate connection and live order status from AutoMate. KomoChat is "launching soon". No
  uptime or answer-rate numbers (the line can go silent after quiet hours), no prices, invented numbers, reviews or
  logos. Names, numbers, calls and amounts in the pictures are examples and labelled so.
- Buttons: "Book a demo call" and "Talk to us" go to the contact band `#contact` (WhatsApp with a short first message,
  phone, email: the same contacts as the other pages). No public link to the KomoVoice dashboard. Privacy and terms
  point to qbexel.com (`lib/links.ts`).

## Run

```bash
pnpm install
pnpm dev           # http://localhost:3100 (live reload)
pnpm build         # writes the static site to out/
pnpm start         # serves out/ on http://localhost:3100
```

`pnpm lint` and `pnpm typecheck` must stay clean. Set `NEXT_PUBLIC_SITE_URL` to the live address at build time so
link previews get absolute image URLs.

## Where things are

| Section | File |
| --- | --- |
| Top bar (the family's shared navbar) | `components/sections/Nav.tsx` |
| Hero: the example call with its live transcript | `components/sections/Hero.tsx`, `components/visuals/HeroCall.tsx`, `HeroSmoke.tsx` |
| What's ours: local lines, natural Bangla, cash on delivery | `components/sections/Ours.tsx` |
| What it does (five cards with small screens) | `components/sections/Features.tsx`, `components/visuals/FeatureVisuals.tsx` |
| How it works: number, instructions, live listening | `components/sections/HowItWorks.tsx` |
| Ecosystem: KomoChat, AutoMate, KomoVoice | `components/sections/Ecosystem.tsx` |
| Custom KomoVoice for enterprises and contact centers | `components/sections/Enterprise.tsx` |
| FAQ, dark contact band, footer | `components/sections/FAQ.tsx`, `GetStarted.tsx`, `Footer.tsx` |
| Wave, app tile, voice bars | `components/ui/Wave.tsx`, `components/ui/VoiceBars.tsx` |

## Motion

- Only `transform` and `opacity` move. The hero call loops: the line rings, five turns of the call are spoken (the
  voice bars show who is talking) and written into the transcript, then the result is saved.
- The coral cloud is the family's small WebGL shader: about a quarter resolution at 30 fps on wide screens, a fifth at
  24 fps on phones, pauses off screen and in background tabs, one still frame for reduced motion, a CSS gradient if
  WebGL is missing.
- Every loop rests while its section is off screen (`data-paused`). With reduced motion nothing moves: the call shows
  its finished transcript and result.
- Checked: no sideways scroll at 360, 390, 768, 1024, 1280 and 1920 px; no console errors.
