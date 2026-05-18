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
      {/* Scale 80% anchored at right-center, overall opacity 0.35 */}
      <g transform="translate(1424, 390) scale(0.8) translate(-1424, -390)" opacity="0.35">

        {/* LAYER 1 — outer rect (main perimeter) */}
        <rect
          className="plan-outer-rect"
          x="556" y="51" width="868" height="678"
          stroke="rgba(250,248,243,1)"
          strokeWidth="1"
        />
        {/* Inner rect (double-wall) */}
        <rect
          className="plan-inner-rect"
          x="566" y="61" width="848" height="658"
          stroke="rgba(250,248,243,0.45)"
          strokeWidth="0.7"
        />

        {/* LAYER 2 — block dividers */}
        <g stroke="rgba(250,248,243,1)" strokeWidth="1">
          <line className="plan-vline plan-vline-1" x1="775" y1="55" x2="775" y2="725" />
          <line className="plan-vline plan-vline-2" x1="990" y1="55" x2="990" y2="725" />
          <line className="plan-vline plan-vline-3" x1="1205" y1="55" x2="1205" y2="725" />
        </g>

        {/* LAYER 3 — storefront separator */}
        <line
          className="plan-hline-main"
          x1="556" y1="625" x2="1424" y2="625"
          stroke="rgba(250,248,243,1)"
          strokeWidth="1"
        />

        {/* Glazing ticks in storefront */}
        {[560, 775, 990, 1205].map((x, i) => {
          const blockW = 215;
          return [0.2, 0.4, 0.6, 0.8].map((t, j) => (
            <line
              key={`glaze-${i}-${j}`}
              className={`plan-glaze plan-glaze-${i * 4 + j}`}
              x1={x + blockW * t} y1="625"
              x2={x + blockW * t} y2="719"
              stroke="rgba(250,248,243,0.5)"
              strokeWidth="0.7"
            />
          ));
        })}

        {/* LAYER 4 — block labels */}
        {[
          { x: 667, label: 'БЛОК A', area: '80 М²' },
          { x: 882, label: 'БЛОК B', area: '65 М²' },
          { x: 1097, label: 'БЛОК C', area: '70 М²' },
          { x: 1312, label: 'БЛОК D', area: '55 М²' },
        ].map(({ x, label, area }, i) => (
          <g key={label} className={`plan-label-group plan-label-${i + 1}`}>
            <text
              x={x} y="656"
              fill="rgba(250,248,243,0.85)"
              fontSize="12"
              letterSpacing="0.18em"
              textAnchor="middle"
              fontWeight="500"
            >
              {label}
            </text>
            <text
              x={x} y="669"
              fill="rgba(250,248,243,0.55)"
              fontSize="10"
              letterSpacing="0.12em"
              textAnchor="middle"
              fontWeight="400"
            >
              {area}
            </text>
          </g>
        ))}

      </g>
    </svg>
  );
}
