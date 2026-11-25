import type { ReactNode } from 'react';

/** A section's title and short text, centred (default) or left. */
export default function SectionHead({
  id,
  title,
  text,
  align = 'center',
  className = '',
}: {
  id: string;
  title: ReactNode;
  text?: ReactNode;
  align?: 'center' | 'left';
  className?: string;
}) {
  const centred = align === 'center';
  return (
    <div className={`reveal ${centred ? 'mx-auto max-w-[720px] text-center' : 'max-w-[620px]'} ${className}`}>
      <h2 id={id} className="h-section text-ink">
        {title}
      </h2>
      {text && <p className={`lede mt-4 ${centred ? 'mx-auto max-w-[600px]' : ''}`}>{text}</p>}
    </div>
  );
}
