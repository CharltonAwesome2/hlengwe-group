import styles from './OrgChart.module.css';

export default function OrgChart() {
  const boxW = 160;
  const boxH = 65;
  const gapX = 40;
  const gapY = 30;

  const blue = '#1e88e5';
  const green = '#7cb342';

  // Layout positions (x, y in px within SVG viewBox)
  const nodes = [
    // Column 1: Holdings → Chairman
    // { id: 'holdings', label: 'Hlengwe Holdings Pty Ltd', x: 20, y: 160, color: blue },
    { id: 'chairman', label: 'Chairman\nHlomani P Chauke', x: 160, y: 160, color: blue },
    // Column 2: Two CEOs
    { id: 'ceoH', label: 'CEO\nJason Ngobeni', x: 380, y: 220, color: blue },
    { id: 'ceoS', label: 'CEO\nLaura De Brito', x: 380, y: 100, color: green },
    // Column 3: Healthcare Solutions
    { id: 'hhs', label: 'Hlengwe Healthcare Solutions', x: 600, y: 100, color: green },
    // Column 4: Directors reporting to Laura
    { id: 'director1', label: 'Director\nDr Magome Masike', x: 820, y: 40, color: green },
    { id: 'legal', label: 'Director Legal, Compliance\n& Regulatory Affairs\nPhumzi Phala', x: 820, y: 120, color: green },
    { id: 'prog', label: 'Director Programme\nImplementation & Strategic\nDelivery\nRuby Ramatsui', x: 820, y: 200, color: green },
    { id: 'med', label: 'Medical Associates', x: 820, y: 280, color: green },
    // Jason's directors
    { id: 'cfo', label: 'CFO\nBongani Mahlori', x: 600, y: 250, color: blue },
    { id: 'corp', label: 'Director Corporate Finance &\nInfrastructure Advisory\nVusumuzi Riba', x: 600, y: 330, color: blue },
    { id: 'ba', label: 'Director Business Analysis\nSpecialist\nNtsako Maringa', x: 600, y: 410, color: blue },
  ];

  const svgW = 1120;
  const svgH = 480;

  const getNode = (id) => nodes.find((n) => n.id === id);

  const line = (fromId, toId) => {
    const from = getNode(fromId);
    const to = getNode(toId);
    if (!from || !to) return null;
    return (
      <line
        key={`${fromId}-${toId}`}
        x1={from.x + boxW}
        y1={from.y + boxH / 2}
        x2={to.x}
        y2={to.y + boxH / 2}
        stroke="#7a8a7a"
        strokeWidth="1.5"
      />
    );
  };

  return (
    <div className={styles.chart}>
      <svg viewBox={`0 0 ${svgW} ${svgH}`} width="100%">
        {/* Lines first so they sit behind boxes */}
        {line('holdings', 'chairman')}
        {line('chairman', 'ceoH')}
        {line('chairman', 'ceoS')}
        {line('ceoS', 'hhs')}
        {line('hhs', 'director1')}
        {line('hhs', 'legal')}
        {line('hhs', 'prog')}
        {line('hhs', 'med')}
        {line('ceoH', 'cfo')}
        {line('ceoH', 'corp')}
        {line('ceoH', 'it')}
        {line('ceoH', 'ba')}

        {/* Nodes */}
        {nodes.map((n) => (
          <g key={n.id}>
            <rect
              x={n.x}
              y={n.y}
              width={boxW}
              height={boxH}
              rx="6"
              fill={n.color}
              opacity="0.95"
            />
            <text
              x={n.x + boxW / 2}
              y={n.y + boxH / 2}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#ffffff"
              fontSize="11"
              fontWeight="00"
              fontFamily="Inter, sans-serif"
            >
              {n.label.split('\n').map((line, i, arr) => (
                <tspan
                  key={i}
                  x={n.x + boxW / 2}
                  dy={i === 0 ? `${-(arr.length - 1) * 0.6}em` : '1.2em'}
                >
                  {line}
                </tspan>
              ))}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}