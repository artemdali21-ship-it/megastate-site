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
      {/* Centered in right half: plan center (990,390) → screen (1080,400), scale 0.8 */}
      <g transform="translate(1080, 400) scale(0.8) translate(-990, -390)" opacity="0.7">

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

        {/* LAYER 4 — dimension line top */}
        <line
          className="plan-dim-top"
          x1="556" y1="27" x2="1424" y2="27"
          stroke="rgba(250,248,243,0.7)"
          strokeWidth="0.7"
        />
        <line className="plan-tick" x1="556" y1="18" x2="556" y2="36" stroke="rgba(250,248,243,0.7)" strokeWidth="0.7" />
        <line className="plan-tick" x1="1424" y1="18" x2="1424" y2="36" stroke="rgba(250,248,243,0.7)" strokeWidth="0.7" />
        <text
          className="plan-dim-label"
          x="990" y="21"
          fill="rgba(250,248,243,0.7)"
          fontSize="11"
          letterSpacing="0.14em"
          textAnchor="middle"
          fontWeight="400"
        >
          56.0 М
        </text>

        {/* LAYER 5 — dimension line right */}
        <line
          className="plan-dim-right"
          x1="1452" y1="51" x2="1452" y2="729"
          stroke="rgba(250,248,243,0.7)"
          strokeWidth="0.7"
        />
        <line className="plan-tick" x1="1444" y1="51" x2="1460" y2="51" stroke="rgba(250,248,243,0.7)" strokeWidth="0.7" />
        <line className="plan-tick" x1="1444" y1="729" x2="1460" y2="729" stroke="rgba(250,248,243,0.7)" strokeWidth="0.7" />
        <text
          className="plan-dim-label"
          x="1472" y="390"
          fill="rgba(250,248,243,0.7)"
          fontSize="11"
          letterSpacing="0.14em"
          textAnchor="middle"
          fontWeight="400"
          transform="rotate(-90, 1472, 390)"
        >
          44.0 М
        </text>

        {/* LAYER 6 — block labels */}
        {[
          { x: 667, label: 'БЛОК A', area: '80 М²' },
          { x: 882, label: 'БЛОК B', area: '65 М²' },
          { x: 1097, label: 'БЛОК C', area: '70 М²' },
          { x: 1312, label: 'БЛОК D', area: '55 М²' },
        ].map(({ x, label, area }, i) => (
          <g key={label} className={`plan-label-group plan-label-${i + 1}`}>
            <text
              x={x} y="656"
              fill="rgba(250,248,243,0.9)"
              fontSize="12"
              letterSpacing="0.18em"
              textAnchor="middle"
              fontWeight="500"
            >
              {label}
            </text>
            <text
              x={x} y="671"
              fill="rgba(250,248,243,0.6)"
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
