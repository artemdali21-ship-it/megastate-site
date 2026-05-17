import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  external?: boolean;
}

export default function Button({
  href,
  variant = 'primary',
  children,
  className = '',
  showArrow = false,
  external = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-6 py-3 rounded-md text-[15px] font-[600] transition-colors duration-200 btn-arrow';

  const styles = {
    primary:
      'bg-[var(--accent)] text-[var(--surface)] hover:bg-[var(--accent-hover)]',
    secondary:
      'border border-[var(--line)] text-[var(--accent)] hover:bg-[var(--surface-muted)]',
  };

  const cls = `${base} ${styles[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
        {showArrow && <ArrowRight size={16} strokeWidth={1.5} />}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
      {showArrow && <ArrowRight size={16} strokeWidth={1.5} />}
    </Link>
  );
}
