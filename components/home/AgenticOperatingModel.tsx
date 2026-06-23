export function AgenticOperatingModel() {
  return (
    <div className="flex h-full flex-col">
      {/* Diagram header */}
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <p
            style={{
              fontSize: '10px',
              letterSpacing: '0.14em',
              color: '#4ECDA4',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Agentic Operating Model
          </p>
          <p
            style={{
              fontSize: '11px',
              color: '#4A5E7A',
              lineHeight: 1.4,
              marginTop: '5px',
            }}
          >
            People, platforms and digital workforces connected by governance.
          </p>
        </div>
        <span
          style={{
            fontSize: '9px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            border: '0.5px solid #1A2840',
            color: '#4A5E7A',
            padding: '5px 10px',
            borderRadius: '4px',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          Enterprise Layer
        </span>
      </div>

      {/* SVG canvas */}
      <div className="min-h-0 flex-1" style={{ minHeight: 380 }}>
        <svg
          viewBox="0 0 340 430"
          width="100%"
          height="100%"
          role="img"
          aria-label="Agentic Operating Model — seven enterprise layers connected to the OperonIQ Intelligence Layer"
        >
          <defs>
            <radialGradient id="aom-cg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#4ECDA4" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#4ECDA4" stopOpacity="0" />
            </radialGradient>
            <filter id="aom-gb">
              <feGaussianBlur stdDeviation="12" />
            </filter>
          </defs>

          {/* Ambient glow behind core */}
          <ellipse
            cx="170"
            cy="210"
            rx="88"
            ry="88"
            fill="url(#aom-cg)"
            filter="url(#aom-gb)"
          />

          {/* Layer 1 — Core spokes: 170,210 → each node centre */}
          <line x1="170" y1="210" x2="170" y2="62"  stroke="#1D3A5C" strokeWidth="0.8" />
          <line x1="170" y1="210" x2="270" y2="118" stroke="#1D3A5C" strokeWidth="0.8" />
          <line x1="170" y1="210" x2="295" y2="243" stroke="#1D3A5C" strokeWidth="0.8" />
          <line x1="170" y1="210" x2="225" y2="343" stroke="#1D3A5C" strokeWidth="0.8" />
          <line x1="170" y1="210" x2="115" y2="343" stroke="#1D3A5C" strokeWidth="0.8" />
          <line x1="170" y1="210" x2="45"  y2="243" stroke="#1D3A5C" strokeWidth="0.8" />
          <line x1="170" y1="210" x2="70"  y2="118" stroke="#1D3A5C" strokeWidth="0.8" />

          {/* Layer 2 — Clockwise ring connecting adjacent nodes */}
          <line x1="170" y1="62"  x2="270" y2="118" stroke="#152535" strokeWidth="0.5" />
          <line x1="270" y1="118" x2="295" y2="243" stroke="#152535" strokeWidth="0.5" />
          <line x1="295" y1="243" x2="225" y2="343" stroke="#152535" strokeWidth="0.5" />
          <line x1="225" y1="343" x2="115" y2="343" stroke="#152535" strokeWidth="0.5" />
          <line x1="115" y1="343" x2="45"  y2="243" stroke="#152535" strokeWidth="0.5" />
          <line x1="45"  y1="243" x2="70"  y2="118" stroke="#152535" strokeWidth="0.5" />
          <line x1="70"  y1="118" x2="170" y2="62"  stroke="#152535" strokeWidth="0.5" />

          {/* Layer 3 — Skip-one diagonals (node → node+2 clockwise) */}
          <line x1="170" y1="62"  x2="295" y2="243" stroke="#111E30" strokeWidth="0.5" opacity="0.7" />
          <line x1="270" y1="118" x2="225" y2="343" stroke="#111E30" strokeWidth="0.5" opacity="0.7" />
          <line x1="295" y1="243" x2="115" y2="343" stroke="#111E30" strokeWidth="0.5" opacity="0.7" />
          <line x1="225" y1="343" x2="45"  y2="243" stroke="#111E30" strokeWidth="0.5" opacity="0.7" />
          <line x1="115" y1="343" x2="70"  y2="118" stroke="#111E30" strokeWidth="0.5" opacity="0.7" />
          <line x1="45"  y1="243" x2="170" y2="62"  stroke="#111E30" strokeWidth="0.5" opacity="0.7" />
          <line x1="70"  y1="118" x2="295" y2="243" stroke="#111E30" strokeWidth="0.5" opacity="0.7" />

          {/* Layer 4 — Teal accent flows to nodes 01, 03, 07 */}
          <line x1="170" y1="210" x2="170" y2="62"  stroke="#4ECDA4" strokeWidth="0.9" opacity="0.35" />
          <line x1="170" y1="210" x2="295" y2="243" stroke="#4ECDA4" strokeWidth="0.7" opacity="0.22" />
          <line x1="170" y1="210" x2="70"  y2="118" stroke="#4ECDA4" strokeWidth="0.7" opacity="0.20" />

          {/* 01 People — cx=170, cy=62; tile x=118, y=37, w=104, h=50 */}
          <rect x="118" y="37" width="104" height="50" rx="8" fill="#0F1B2E" stroke="#1E3252" strokeWidth="0.8" />
          <text x="130" y="53" fontSize="9" fill="#2E4668">01</text>
          <text x="170" y="71" fontSize="13" fontWeight="500" fill="#C8D6EE" textAnchor="middle">People</text>

          {/* 02 Process — cx=270, cy=118; tile x=218, y=93, w=104, h=50 */}
          <rect x="218" y="93" width="104" height="50" rx="8" fill="#0F1B2E" stroke="#1E3252" strokeWidth="0.8" />
          <text x="230" y="109" fontSize="9" fill="#2E4668">02</text>
          <text x="270" y="127" fontSize="13" fontWeight="500" fill="#C8D6EE" textAnchor="middle">Process</text>

          {/* 03 Data — cx=295, cy=243; tile x=232, y=218, w=104, h=50 */}
          <rect x="232" y="218" width="104" height="50" rx="8" fill="#0F1B2E" stroke="#1E3252" strokeWidth="0.8" />
          <text x="244" y="234" fontSize="9" fill="#2E4668">03</text>
          <text x="284" y="252" fontSize="13" fontWeight="500" fill="#C8D6EE" textAnchor="middle">Data</text>

          {/* 04 Applications — cx=225, cy=343; tile x=165, y=318, w=116, h=50 */}
          <rect x="165" y="318" width="116" height="50" rx="8" fill="#0F1B2E" stroke="#1E3252" strokeWidth="0.8" />
          <text x="177" y="334" fontSize="9" fill="#2E4668">04</text>
          <text x="223" y="352" fontSize="11" fontWeight="500" fill="#C8D6EE" textAnchor="middle">Applications</text>

          {/* 05 Automation — cx=115, cy=343; tile x=57, y=318, w=116, h=50 */}
          <rect x="57" y="318" width="116" height="50" rx="8" fill="#0F1B2E" stroke="#1E3252" strokeWidth="0.8" />
          <text x="69" y="334" fontSize="9" fill="#2E4668">05</text>
          <text x="115" y="352" fontSize="11" fontWeight="500" fill="#C8D6EE" textAnchor="middle">Automation</text>

          {/* 06 AI Agents — cx=45, cy=243; tile x=4, y=218, w=104, h=50 */}
          <rect x="4" y="218" width="104" height="50" rx="8" fill="#0F1B2E" stroke="#1E3252" strokeWidth="0.8" />
          <text x="16" y="234" fontSize="9" fill="#2E4668">06</text>
          <text x="56" y="252" fontSize="12" fontWeight="500" fill="#C8D6EE" textAnchor="middle">AI Agents</text>

          {/* 07 Governance — cx=70, cy=118; tile x=14, y=93, w=104, h=50 */}
          <rect x="14" y="93" width="104" height="50" rx="8" fill="#0F1B2E" stroke="#1E3252" strokeWidth="0.8" />
          <text x="26" y="109" fontSize="9" fill="#2E4668">07</text>
          <text x="66" y="127" fontSize="12" fontWeight="500" fill="#C8D6EE" textAnchor="middle">Governance</text>

          {/* Intelligence Layer core — 134×78 rect at x=103, y=171 */}
          <rect x="103" y="171" width="134" height="78" rx="10" fill="#0C1726" stroke="#1B3A5C" strokeWidth="1" />
          <rect x="103" y="171" width="134" height="78" rx="10" fill="none" stroke="#4ECDA4" strokeWidth="0.4" opacity="0.55" />

          {/* Circuit icon centred at 170,191 */}
          <circle cx="170" cy="191" r="6.5" fill="none" stroke="#4ECDA4" strokeWidth="1.2" />
          <circle cx="170" cy="191" r="2.5" fill="#4ECDA4" />
          <line x1="170" y1="184" x2="170" y2="180" stroke="#4ECDA4" strokeWidth="0.9" />
          <line x1="170" y1="198" x2="170" y2="202" stroke="#4ECDA4" strokeWidth="0.9" />
          <line x1="163" y1="191" x2="159" y2="191" stroke="#4ECDA4" strokeWidth="0.9" />
          <line x1="177" y1="191" x2="181" y2="191" stroke="#4ECDA4" strokeWidth="0.9" />

          <text x="170" y="208" fontSize="8" fill="#4ECDA4" letterSpacing="0.12em" textAnchor="middle">OPERONIQ</text>
          <text x="170" y="222" fontSize="12" fontWeight="500" fill="#E8F0FF" textAnchor="middle">Intelligence Layer</text>
          <text x="170" y="237" fontSize="9" fill="#4A5E7A" textAnchor="middle">Trusted data · governed AI</text>

          {/* Border connection dots */}
          <circle cx="170" cy="171" r="2.5" fill="#1B3A5C" />
          <circle cx="237" cy="210" r="2.5" fill="#1B3A5C" />
          <circle cx="103" cy="210" r="2.5" fill="#1B3A5C" />
        </svg>
      </div>
    </div>
  );
}
