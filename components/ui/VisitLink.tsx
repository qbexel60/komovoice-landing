import { ArrowRight } from 'lucide-react';
import { productHref } from '@/lib/links';

/**
 * "Visit KomoBox →" on a family card: links to that product's own site, and its stretched
 * ::after makes the whole card clickable (the card needs `relative group`). Renders nothing
 * for this page's own product, or for items that are not one of the five (Android app, WhatsApp).
 */
export default function VisitLink({ id, name, className = 'text-brand' }: { id: string; name: string; className?: string }) {
  const href = productHref(id);
  if (!href) return null;
  return (
    <a
      href={href}
      className={`mt-3 inline-flex items-center gap-1 text-[13.5px] font-semibold after:absolute after:inset-0 after:content-[''] hover:underline ${className}`}
    >
      Visit {name}
      <ArrowRight aria-hidden className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}
