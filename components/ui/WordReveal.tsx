'use client';
// word-by-word H1 reveal — adapted from 21st.dev hero animation patterns
import { motion, useReducedMotion } from 'framer-motion';

interface WordRevealProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  stagger?: number;
}

export default function WordReveal({ text, className, style, stagger = 0.04 }: WordRevealProps) {
  const prefersReduced = useReducedMotion();
  const words = text.split(' ');

  if (prefersReduced) {
    return (
      <h1 className={className} style={style}>
        {text}
      </h1>
    );
  }

  return (
    <h1 className={className} style={style}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: i * stagger,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}
