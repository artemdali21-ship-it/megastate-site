export default function HeroPlanOverlay() {
  // Block grid: x 560→1420, y 55→725, 4 equal blocks
  // Storefront zone: y 625→725
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
      {/* Shift the entire plan right so it doesn't overlap the text column */}
      <g transform="translate(140, 0)">

      {/* ════════════════════════════════════════
          LAYER 0 — faint construction grid
          ════════════════════════════════════════ */}
      <g className="plan-grid" stroke="rgba(250,248,243,0.10)" strokeWidth="0.6">
        {/* Horizontal grid lines */}
        {[145, 235, 325, 415, 505, 625].map((y, i) => (
          <line key={`gh-${i}`} x1="560" y1={y} x2="1420" y2={y} />
        ))}
        {/* Vertical grid lines */}
        {[560, 775, 990, 1205, 1420].map((x, i) => (
          <line key={`gv-${i}`} x1={x} y1="55" x2={x} y2="725" />
        ))}
      </g>

      {/* ════════════════════════════════════════
          LAYER 1 — outer double wall
          ════════════════════════════════════════ */}
      {/* Outer wall line */}
      <rect
        className="plan-outer-rect"
        x="556" y="51" width="868" height="678"
        stroke="rgba(250,248,243,0.75)"
        strokeWidth="1.8"
      />
      {/* Inner wall line (double-wall effect) */}
      <rect
        className="plan-inner-rect"
        x="566" y="61" width="848" height="658"
        stroke="rgba(250,248,243,0.35)"
        strokeWidth="0.9"
      />

      {/* ════════════════════════════════════════
          LAYER 2 — column squares at intersections
          ════════════════════════════════════════ */}
      <g className="plan-columns" fill="rgba(250,248,243,0.55)" stroke="rgba(250,248,243,0.75)" strokeWidth="1">
        {/* Top row columns */}
        {[560, 775, 990, 1205, 1420].map((x) =>
          [55, 725].map((y) => (
            <rect key={`col-${x}-${y}`} x={x - 5} y={y - 5} width="10" height="10" />
          ))
        )}
        {/* Storefront level columns */}
        {[560, 775, 990, 1205, 1420].map((x) => (
          <rect key={`col-sf-${x}`} x={x - 4} y={621} width="8" height="8" />
        ))}
      </g>

      {/* ════════════════════════════════════════
          LAYER 3 — internal block walls
          ════════════════════════════════════════ */}
      <g stroke="rgba(250,248,243,0.6)" strokeWidth="1.6">
        <line className="plan-vline plan-vline-1" x1="775" y1="55" x2="775" y2="725" />
        <line className="plan-vline plan-vline-2" x1="990" y1="55" x2="990" y2="725" />
        <line className="plan-vline plan-vline-3" x1="1205" y1="55" x2="1205" y2="725" />
      </g>
      {/* Inner shadow of walls */}
      <g stroke="rgba(250,248,243,0.2)" strokeWidth="0.8">
        <line className="plan-vline plan-vline-i1" x1="783" y1="61" x2="783" y2="719" />
        <line className="plan-vline plan-vline-i2" x1="998" y1="61" x2="998" y2="719" />
        <line className="plan-vline plan-vline-i3" x1="1213" y1="61" x2="1213" y2="719" />
      </g>

      {/* ════════════════════════════════════════
          LAYER 4 — storefront zone
          ════════════════════════════════════════ */}
      {/* Main storefront separator */}
      <line className="plan-hline-main" x1="556" y1="625" x2="1424" y2="625" stroke="rgba(250,248,243,0.65)" strokeWidth="1.8" />
      {/* Inner storefront line */}
      <line className="plan-hline-inner" x1="566" y1="615" x2="1414" y2="615" stroke="rgba(250,248,243,0.25)" strokeWidth="0.8" />
      {/* Glazing marks — vertical ticks in storefront per block */}
      {[560, 775, 990, 1205].map((x, i) => {
        const blockW = 215;
        const ticks = [0.2, 0.4, 0.6, 0.8].map(t => x + blockW * t);
        return ticks.map((tx, j) => (
          <line
            key={`glaze-${i}-${j}`}
            className={`plan-glaze plan-glaze-${i * 4 + j}`}
            x1={tx} y1="625" x2={tx} y2="719"
            stroke="rgba(250,248,243,0.22)"
            strokeWidth="0.8"
          />
        ));
      })}

      {/* ════════════════════════════════════════
          LAYER 5 — dimension lines (top + right)
          ════════════════════════════════════════ */}
      {/* Top dimension line */}
      <line className="plan-dim plan-dim-top" x1="556" y1="30" x2="1424" y2="30" stroke="rgba(250,248,243,0.38)" strokeWidth="0.9" strokeDasharray="5 5" />
      {/* Top tick marks */}
      {[556, 775, 990, 1205, 1424].map((x, i) => (
        <g key={`dtick-${i}`} className={`plan-tick plan-tick-${i}`}>
          <line x1={x} y1="22" x2={x} y2="38" stroke="rgba(250,248,243,0.5)" strokeWidth="1" />
        </g>
      ))}
      {/* Right dimension line */}
      <line className="plan-dim plan-dim-right" x1="1445" y1="55" x2="1445" y2="725" stroke="rgba(250,248,243,0.38)" strokeWidth="0.9" strokeDasharray="5 5" />
      <line x1="1437" y1="55" x2="1453" y2="55" stroke="rgba(250,248,243,0.5)" strokeWidth="1" className="plan-tick plan-tick-r1" />
      <line x1="1437" y1="625" x2="1453" y2="625" stroke="rgba(250,248,243,0.5)" strokeWidth="1" className="plan-tick plan-tick-r2" />
      <line x1="1437" y1="725" x2="1453" y2="725" stroke="rgba(250,248,243,0.5)" strokeWidth="1" className="plan-tick plan-tick-r3" />

      {/* ════════════════════════════════════════
          LAYER 6 — block labels + callout lines
          ════════════════════════════════════════ */}
      {[
        { x: 667, label: 'БЛОК A', area: '80 М²' },
        { x: 882, label: 'БЛОК B', area: '65 М²' },
        { x: 1097, label: 'БЛОК C', area: '70 М²' },
        { x: 1312, label: 'БЛОК D', area: '55 М²' },
      ].map(({ x, label, area }, i) => (
        <g key={label} className={`plan-label-group plan-label-${i + 1}`}>
          {/* Callout dot */}
          <circle cx={x} cy="670" r="2.5" fill="rgba(250,248,243,0.5)" />
          {/* Callout line up */}
          <line x1={x} y1="667" x2={x} y2="658" stroke="rgba(250,248,243,0.35)" strokeWidth="0.8" />
          {/* Label text */}
          <text x={x} y="651" fill="rgba(250,248,243,0.65)" fontSize="9.5" letterSpacing="0.18em" textAnchor="middle" fontWeight="600">
            {label}
          </text>
          <text x={x} y="662" fill="rgba(250,248,243,0.38)" fontSize="8.5" letterSpacing="0.12em" textAnchor="middle">
            {area}
          </text>
        </g>
      ))}

      {/* ════════════════════════════════════════
          LAYER 7 — total width dimension label
          ════════════════════════════════════════ */}
      <text
        className="plan-dim-label plan-dim-label-top"
        x="990" y="19"
        fill="rgba(250,248,243,0.4)"
        fontSize="8"
        letterSpacing="0.14em"
        textAnchor="middle"
      >
        СТРИТ-РИТЕЙЛ · 4 БЛОКА
      </text>
      <text
        className="plan-dim-label plan-dim-label-right"
        x="1460" y="345"
        fill="rgba(250,248,243,0.35)"
        fontSize="8"
        letterSpacing="0.12em"
        textAnchor="start"
        transform="rotate(90, 1460, 345)"
      >
        ТОРГОВАЯ ЗОНА
      </text>

      </g>{/* end translate wrapper */}
    </svg>
  );
}
