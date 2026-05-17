'use client';
// adapted from 21st.dev infinite marquee pattern
import { useReducedMotion } from 'framer-motion';
import { motion } from 'framer-motion';

interface MarqueeProps {
  items: string[];
  duration?: number;
  separator?: string;
}

export default function MarqueeStrip({ items, duration = 60, separator = '·' }: MarqueeProps) {
  const prefersReduced = useReducedMotion();

  const text = items.join(` ${separator} `);
  const doubled = `${text} ${separator} ${text} ${separator} `;

  if (prefersReduced) {
    return (
      <div
        style={{
          overflow: 'hidden',
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
          padding: '10px 0',
          color: 'var(--text-muted)',
          fontSize: '13px',
          letterSpacing: '0.04em',
          opacity: 0.6,
          textAlign: 'center',
        }}
      >
        {text}
      </div>
    );
  }

  return (
    <div
      style={{
        overflow: 'hidden',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        padding: '10px 0',
      }}
      aria-hidden="true"
    >
      <motion.div
        style={{ display: 'flex', whiteSpace: 'nowrap' }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, ease: 'linear', duration }}
      >
        <span
          style={{
            color: 'var(--text-muted)',
            fontSize: '13px',
            letterSpacing: '0.06em',
            opacity: 0.6,
            paddingRight: '2em',
          }}
        >
          {doubled}
        </span>
        <span
          style={{
            color: 'var(--text-muted)',
            fontSize: '13px',
            letterSpacing: '0.06em',
            opacity: 0.6,
            paddingRight: '2em',
          }}
        >
          {doubled}
        </span>
      </motion.div>
    </div>
  );
}
