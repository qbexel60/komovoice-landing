import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'light' | 'ghost' | 'outline-dark';
  size?: 'md' | 'lg';
  /** The dot that grows into an arrow on hover. Off for quiet second buttons. */
  dot?: boolean;
  className?: string;
  external?: boolean;
  onClick?: () => void;
};

/** The page's pill button (same family as the AutoMate, KomoChat and KomoBox pages). */
export default function PillLink({
  href,
  children,
  variant = 'primary',
  size = 'md',
  dot = true,
  className = '',
  external = false,
  onClick,
}: Props) {
  return (
    <a
      href={href}
      className={`btn btn-${variant} btn-${size} ${dot ? '' : 'btn-plain'} ${className}`}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span>{children}</span>
      {dot && (
        <span className="btn-dot" aria-hidden>
          <ArrowRight strokeWidth={2.5} />
        </span>
      )}
    </a>
  );
}
