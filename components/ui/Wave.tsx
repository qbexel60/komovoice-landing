/*
 * KomoVoice's sound wave (from the new logo), drawn inline so it can take any colour,
 * and the app tile it sits on: the wave on Night with the coral glow from below.
 */

const WAVE =
  'M24.00 88.42 C24.00 77.18 33.11 68.07 44.35 68.07 C55.59 68.07 64.70 77.18 64.70 88.42 L64.70 90.82 C64.70 98.35 70.80 104.44 78.32 104.44 C85.85 104.44 91.94 98.35 91.94 90.82 L91.94 58.85 C91.94 46.33 102.10 36.18 114.62 36.18 C127.14 36.18 137.29 46.33 137.29 58.85 L137.29 95.95 C137.29 100.64 141.10 104.44 145.79 104.44 C150.48 104.44 154.28 100.64 154.28 95.95 L154.28 78.00 C154.28 68.67 161.85 61.10 171.19 61.10 C180.52 61.10 188.09 68.67 188.09 78.00 L188.09 178.00 C188.09 187.33 180.52 194.90 171.19 194.90 C161.85 194.90 154.28 187.33 154.28 178.00 L154.28 160.05 C154.28 155.36 150.48 151.56 145.79 151.56 C141.10 151.56 137.29 155.36 137.29 160.05 L137.29 197.15 C137.29 209.67 127.14 219.82 114.62 219.82 C102.10 219.82 91.94 209.67 91.94 197.15 L91.94 165.18 C91.94 157.65 85.85 151.56 78.32 151.56 C70.80 151.56 64.70 157.65 64.70 165.18 L64.70 167.58 C64.70 178.82 55.59 187.93 44.35 187.93 C33.11 187.93 24.00 178.82 24.00 167.58 L24.00 88.42 Z M199.15 106.13 C199.15 97.05 206.50 89.70 215.57 89.70 C224.65 89.70 232.00 97.05 232.00 106.13 L232.00 149.87 C232.00 158.95 224.65 166.30 215.57 166.30 C206.50 166.30 199.15 158.95 199.15 149.87 L199.15 106.13 Z M146.09 128.00 C146.09 126.41 145.23 125.83 141.36 124.86 C132.69 122.68 128.87 120.88 125.30 117.31 C121.74 113.75 119.94 109.93 117.76 101.26 C116.79 97.39 116.21 96.53 114.62 96.53 C113.03 96.53 112.45 97.39 111.48 101.26 C109.30 109.93 107.50 113.75 103.93 117.31 C100.36 120.88 96.55 122.68 87.88 124.86 C84.01 125.83 83.15 126.41 83.15 128.00 C83.15 129.59 84.01 130.17 87.88 131.14 C96.55 133.32 100.36 135.12 103.93 138.69 C107.50 142.25 109.30 146.07 111.48 154.74 C112.45 158.61 113.03 159.47 114.62 159.47 C116.21 159.47 116.79 158.61 117.76 154.74 C119.94 146.07 121.74 142.25 125.30 138.69 C128.87 135.12 132.69 133.32 141.36 131.14 C145.23 130.17 146.09 129.59 146.09 128.00 Z';

/** The wave on its own. */
export function WaveSymbol({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" aria-hidden className={className} fill="currentColor">
      <path fillRule="evenodd" d={WAVE} />
    </svg>
  );
}

/** KomoVoice's app tile: the white wave on Night with the coral glow from below (as in the app icon). */
export function VTile({ className = '', shine = false, inline = false }: { className?: string; shine?: boolean; inline?: boolean }) {
  return (
    <span
      aria-hidden
      className={`relative ${inline ? 'inline-grid' : 'grid'} place-items-center overflow-hidden rounded-[28%] bg-[radial-gradient(80%_70%_at_50%_112%,#ff7e5c_0%,rgb(232_80_44/0.9)_32%,rgb(168_52_27/0)_78%),linear-gradient(180deg,#2a1e45_0%,#060b1e_55%,#170b26_100%)] ${className}`}
    >
      {shine && (
        <span className="shine pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-[linear-gradient(100deg,transparent,rgb(255_255_255/0.3),transparent)]" />
      )}
      <WaveSymbol className="relative h-[70%] w-[70%] text-white" />
    </span>
  );
}
