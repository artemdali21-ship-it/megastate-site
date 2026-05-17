'use client';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function HeroDepthWrapper({ children }: { children: ReactNode }) {
  const { scrollY } = useScroll();
  const prefersReduced = useReducedMotion();

  const scale = useTransform(scrollY, [0, 420], prefersReduced ? [1, 1] : [1, 0.91]);
  const opacity = useTransform(scrollY, [0, 340], prefersReduced ? [1, 1] : [1, 0]);
  const y = useTransform(scrollY, [0, 420], prefersReduced ? [0, 0] : [0, -32]);

  return (
    <motion.div
      style={{ scale, opacity, y, transformOrigin: 'center 30%', willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
}
