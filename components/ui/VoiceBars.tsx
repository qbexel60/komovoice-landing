import type { CSSProperties } from 'react';

/** Fixed heights, so server and browser draw the same bars (no random numbers). */
const HEIGHTS = [0.42, 0.7, 0.55, 0.92, 0.66, 0.38, 0.84, 0.58, 1, 0.5, 0.74, 0.9, 0.48, 0.68, 0.36, 0.62, 0.86, 0.54];

/**
 * A row of rounded voice bars, like the KomoVoice wave. While `on`, each bar
 * grows and shrinks on its own beat (transform only); when off they rest as a
 * low line. With reduced motion they stand still at their own heights.
 */
export default function VoiceBars({
  on,
  count = 28,
  className = '',
  barClassName = 'bg-brand',
}: {
  on: boolean;
  count?: number;
  className?: string;
  barClassName?: string;
}) {
  return (
    <div aria-hidden className={`flex items-center justify-between gap-[3px] ${className}`}>
      {Array.from({ length: count }, (_, i) => {
        const h = HEIGHTS[i % HEIGHTS.length];
        const style = {
          height: `${Math.round(h * 100)}%`,
          '--len': `${0.62 + ((i * 7) % 9) * 0.07}s`,
          '--delay': `${-((i * 0.17) % 1.1).toFixed(2)}s`,
        } as CSSProperties;
        return <span key={i} className={`voice-bar block w-full max-w-[5px] rounded-full ${on ? 'is-on' : ''} ${barClassName}`} style={style} />;
      })}
    </div>
  );
}
