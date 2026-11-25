'use client';

import { useRef, type ComponentPropsWithoutRef, type ElementType } from 'react';
import { useOnScreen } from '@/lib/hooks';

type Props<T extends ElementType> = { as?: T } & ComponentPropsWithoutRef<T>;

/**
 * A wrapper that sets data-paused while it is off screen, so the CSS loops
 * inside it (floating cards, dotted lines, orbits) rest when nobody sees them.
 */
export default function Paused<T extends ElementType = 'div'>({ as, ...rest }: Props<T>) {
  const Tag = (as ?? 'div') as ElementType;
  const ref = useRef<HTMLElement>(null);
  const onScreen = useOnScreen(ref, '120px 0px 120px 0px');
  return <Tag ref={ref} data-paused={onScreen ? 'false' : 'true'} {...rest} />;
}
