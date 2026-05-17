'use client';
// adapted from 21st.dev scroll-linked spring animation pattern
import { motion, useScroll, useSpring } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

export default function ScrollProgress() {
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  if (prefersReduced) return null;

  return (
    <motion.div
      style={{
        scaleX: prefersReduced ? scrollYProgress : scaleX,
        transformOrigin: 'left',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'var(--accent)',
        zIndex: 60,
      }}
    />
  );
}
