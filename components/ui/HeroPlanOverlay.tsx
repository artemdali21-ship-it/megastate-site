// Pure CSS-animated SVG — no useEffect, works in SSR
export default function HeroPlanOverlay() {
  return (
    <svg
      viewBox="0 0 1440 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="hero-plan-svg"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 2,
        overflow: 'visible',
      }}
    >
      {/* ── Group 1: outer building contour ── */}
      <rect
        className="plan-rect"
        x="610" y="80" width="780" height="620"
        stroke="rgba(250,248,243,0.65)"
        strokeWidth="1.3"
        fill="none"
      />

      {/* ── Group 2: block dividers ── */}
      <line className="plan-vline plan-vline-1" x1="805" y1="80" x2="805" y2="700" stroke="rgba(250,248,243,0.4)" strokeWidth="1" />
      <line className="plan-vline plan-vline-2" x1="1000" y1="80" x2="1000" y2="700" stroke="rgba(250,248,243,0.4)" strokeWidth="1" />
      <line className="plan-vline plan-vline-3" x1="1195" y1="80" x2="1195" y2="700" stroke="rgba(250,248,243,0.4)" strokeWidth="1" />

      {/* ── Corner ticks — top ── */}
      <line className="plan-tick plan-tick-1" x1="610" y1="80" x2="610" y2="56" stroke="rgba(250,248,243,0.5)" strokeWidth="1" />
      <line className="plan-tick plan-tick-2" x1="1390" y1="80" x2="1390" y2="56" stroke="rgba(250,248,243,0.5)" strokeWidth="1" />

      {/* ── Group 3: storefront line ── */}
      <line className="plan-hline" x1="610" y1="620" x2="1390" y2="620" stroke="rgba(250,248,243,0.45)" strokeWidth="1" />

      {/* ── Dimension label top ── */}
      <line className="plan-dim" x1="640" y1="64" x2="1360" y2="64" stroke="rgba(250,248,243,0.28)" strokeWidth="0.8" strokeDasharray="4 6" />

      {/* ── Block labels ── */}
      <text className="plan-label plan-label-1" x="707" y="658" fill="rgba(250,248,243,0.55)" fontSize="10" letterSpacing="0.16em" textAnchor="middle">БЛОК A · 80 М²</text>
      <text className="plan-label plan-label-2" x="902" y="658" fill="rgba(250,248,243,0.55)" fontSize="10" letterSpacing="0.16em" textAnchor="middle">БЛОК B · 65 М²</text>
      <text className="plan-label plan-label-3" x="1097" y="658" fill="rgba(250,248,243,0.55)" fontSize="10" letterSpacing="0.16em" textAnchor="middle">БЛОК C · 70 М²</text>
      <text className="plan-label plan-label-4" x="1292" y="658" fill="rgba(250,248,243,0.55)" fontSize="10" letterSpacing="0.16em" textAnchor="middle">БЛОК D · 55 М²</text>
    </svg>
  );
}
