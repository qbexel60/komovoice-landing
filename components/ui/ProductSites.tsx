/* eslint-disable @next/next/no-img-element -- small local SVG icons in a static export */
import { PRODUCT_SITES, QBEXEL_URL, THIS_PRODUCT } from '@/lib/links';

/**
 * The five Qbexel product sites and qbexel.com, each with its app icon. This page is marked
 * "You are here" and not linked. Used by the top-bar menu, the phone menu and the footer.
 * `compact` drops the one-line job, for the phone menu.
 */
export default function ProductSites({
  className = '',
  compact = false,
  onPick,
}: {
  className?: string;
  compact?: boolean;
  onPick?: () => void;
}) {
  const row = 'flex items-center gap-3 rounded-xl px-3 py-2';
  return (
    <ul className={className}>
      {PRODUCT_SITES.map((p) => {
        const here = p.id === THIS_PRODUCT;
        const body = (
          <>
            <img src={p.icon} alt="" width={64} height={64} className="h-8 w-8 shrink-0 rounded-[28%]" />
            <span className="min-w-0 leading-tight">
              <span className="block text-[14.5px] font-semibold text-ink">{p.name}</span>
              {(here || !compact) && <span className="mt-0.5 block text-[12.5px] text-muted">{here ? 'You are here' : p.job}</span>}
            </span>
          </>
        );
        return (
          <li key={p.id}>
            {here ? (
              <div aria-current="page" className={`${row} bg-brand-50`}>
                {body}
              </div>
            ) : (
              <a href={p.url} onClick={onPick} className={`${row} transition-colors hover:bg-brand-50`}>
                {body}
              </a>
            )}
          </li>
        );
      })}
      <li>
        <a href={QBEXEL_URL} onClick={onPick} className={`${row} transition-colors hover:bg-brand-50`}>
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[28%] bg-[#060b1e]">
            <img src="/brand/qbexel-q.svg" alt="" width={136} height={152} className="h-[56%] w-auto" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block text-[14.5px] font-semibold text-ink">Qbexel</span>
            {!compact && <span className="mt-0.5 block text-[12.5px] text-muted">qbexel.com</span>}
          </span>
        </a>
      </li>
    </ul>
  );
}
