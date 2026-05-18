'use client';
import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

const RECT_LEN = (780 + 560) * 2; // perimeter of outer rect
const V_LINE_LEN = 560;
const H_LINE_LEN = 780;

export default function HeroPlanOverlay() {
  const prefersReduced = useReducedMotion();
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const lines = svg.querySelectorAll<SVGElement>('[data-draw]');

    if (prefersReduced) {
      lines.forEach((el) => {
        el.style.strokeDashoffset = '0';
        el.style.opacity = '1';
      });
      return;
    }

    // Reset all to invisible
    lines.forEach((el) => {
      const len = el.getAttribute('data-len') || '0';
      el.style.strokeDasharray = len;
      el.style.strokeDashoffset = len;
      el.style.opacity = '1';
      el.style.transition = 'none';
    });

    // Schedule animations
    const schedule: { selector: string; delay: number; duration: number }[] = [
      { selector: '[data-draw="rect"]',   delay: 600,  duration: 1200 },
      { selector: '[data-draw="vline-1"]', delay: 1600, duration: 800  },
      { selector: '[data-draw="vline-2"]', delay: 1750, duration: 800  },
      { selector: '[data-draw="vline-3"]', delay: 1900, duration: 800  },
      { selector: '[data-draw="hline"]',   delay: 2200, duration: 600  },
      { selector: '[data-draw="label-1"]', delay: 2600, duration: 400  },
      { selector: '[data-draw="label-2"]', delay: 2700, duration: 400  },
      { selector: '[data-draw="label-3"]', delay: 2800, duration: 400  },
      { selector: '[data-draw="label-4"]', delay: 2900, duration: 400  },
    ];

    const timers: ReturnType<typeof setTimeout>[] = [];

    schedule.forEach(({ selector, delay, duration }) => {
      const el = svg.querySelector<SVGElement>(selector);
      if (!el) return;
      const t = setTimeout(() => {
        el.style.transition = `stroke-dashoffset ${duration}ms cubic-bezier(0.4,0,0.2,1), opacity ${duration * 0.6}ms ease`;
        el.style.strokeDashoffset = '0';
        el.style.opacity = el.getAttribute('data-final-opacity') || '1';
      }, delay);
      timers.push(t);
    });

    return () => timers.forEach(clearTimeout);
  }, [prefersReduced]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1440 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 2,
        color: 'var(--accent)',
      }}
      className="hero-plan-svg"
    >
      {/* ─── Group 1: outer building contour ─── */}
      <rect
        data-draw="rect"
        data-len={String(RECT_LEN)}
        data-final-opacity="1"
        x="600" y="120" width="780" height="560"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.38"
        strokeDasharray={RECT_LEN}
        strokeDashoffset={RECT_LEN}
      />

      {/* ─── Group 2: vertical block dividers ─── */}
      <line
        data-draw="vline-1"
        data-len={String(V_LINE_LEN)}
        data-final-opacity="1"
        x1="795" y1="120" x2="795" y2="680"
        stroke="currentColor" strokeWidth="1.2" opacity="0.28"
        strokeDasharray={V_LINE_LEN}
        strokeDashoffset={V_LINE_LEN}
      />
      <line
        data-draw="vline-2"
        data-len={String(V_LINE_LEN)}
        data-final-opacity="1"
        x1="990" y1="120" x2="990" y2="680"
        stroke="currentColor" strokeWidth="1.2" opacity="0.28"
        strokeDasharray={V_LINE_LEN}
        strokeDashoffset={V_LINE_LEN}
      />
      <line
        data-draw="vline-3"
        data-len={String(V_LINE_LEN)}
        data-final-opacity="1"
        x1="1185" y1="120" x2="1185" y2="680"
        stroke="currentColor" strokeWidth="1.2" opacity="0.28"
        strokeDasharray={V_LINE_LEN}
        strokeDashoffset={V_LINE_LEN}
      />

      {/* ─── Group 3: storefront line ─── */}
      <line
        data-draw="hline"
        data-len={String(H_LINE_LEN)}
        data-final-opacity="1"
        x1="600" y1="600" x2="1380" y2="600"
        stroke="currentColor" strokeWidth="1.2" opacity="0.22"
        strokeDasharray={H_LINE_LEN}
        strokeDashoffset={H_LINE_LEN}
      />

      {/* ─── Group 4: block labels ─── */}
      <text
        data-draw="label-1"
        data-len="1"
        data-final-opacity="0.45"
        x="697" y="645"
        fill="currentColor"
        fontSize="11"
        fontFamily="inherit"
        letterSpacing="0.15em"
        textAnchor="middle"
        opacity="0"
        style={{ textTransform: 'uppercase' }}
      >
        БЛОК A · 80 М²
      </text>
      <text
        data-draw="label-2"
        data-len="1"
        data-final-opacity="0.45"
        x="892" y="645"
        fill="currentColor"
        fontSize="11"
        fontFamily="inherit"
        letterSpacing="0.15em"
        textAnchor="middle"
        opacity="0"
      >
        БЛОК B · 65 М²
      </text>
      <text
        data-draw="label-3"
        data-len="1"
        data-final-opacity="0.45"
        x="1087" y="645"
        fill="currentColor"
        fontSize="11"
        fontFamily="inherit"
        letterSpacing="0.15em"
        textAnchor="middle"
        opacity="0"
      >
        БЛОК C · 70 М²
      </text>
      <text
        data-draw="label-4"
        data-len="1"
        data-final-opacity="0.45"
        x="1282" y="645"
        fill="currentColor"
        fontSize="11"
        fontFamily="inherit"
        letterSpacing="0.15em"
        textAnchor="middle"
        opacity="0"
      >
        БЛОК D · 55 М²
      </text>
    </svg>
  );
}
