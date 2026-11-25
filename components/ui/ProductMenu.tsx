'use client';

import { LayoutGrid } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';
import ProductSites from '@/components/ui/ProductSites';

/**
 * Wide screens: a small grid button beside the logo that opens the five Qbexel product sites.
 * Closes on Escape, a click outside, or when focus leaves it. Phones get the same list in the menu.
 */
export default function ProductMenu() {
  const [open, setOpen] = useState(false);
  const id = useId();
  const wrap = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setOpen(false);
      button.current?.focus();
    };
    const onDown = (e: PointerEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
    };
  }, [open]);

  return (
    <div
      ref={wrap}
      className="relative hidden lg:block"
      onBlur={(e) => {
        if (!wrap.current?.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls={`${id}-products`}
        aria-label="Qbexel products"
        title="Qbexel products"
        onClick={() => setOpen((v) => !v)}
        className={`grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-brand-50 hover:text-ink ${open ? 'bg-brand-50 text-ink' : 'text-body'}`}
      >
        <LayoutGrid className="h-[18px] w-[18px]" aria-hidden />
      </button>
      <div
        id={`${id}-products`}
        hidden={!open}
        className="absolute left-0 top-[calc(100%+14px)] w-[300px] rounded-2xl bg-white p-2 shadow-[var(--shadow-float)] ring-1 ring-line"
      >
        <p className="px-3 pb-1 pt-1.5 text-[12px] font-semibold uppercase tracking-wide text-muted">Qbexel products</p>
        <ProductSites className="grid gap-0.5" onPick={() => setOpen(false)} />
      </div>
    </div>
  );
}
