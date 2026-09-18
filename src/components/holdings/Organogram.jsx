import styles from "./Organogram.module.css";

export default function Organogram() {
  const nodes = [
    { label: "Executive Chairman", angle: 270 },
    { label: "CEO", angle: 342 },
    { label: "CFO", angle: 54 },
    { label: "COO", angle: 126 },
    { label: "GM", angle: 198 },
  ];

  const radius = 38;
  const center = 50;

  const positions = nodes.map((n) => {
    const rad = (n.angle * Math.PI) / 180;
    return {
      ...n,
      x: center + radius * Math.cos(rad),
      y: center + radius * Math.sin(rad),
    };
  });

  return (
    <div className={styles.organogramCircle}>
      <svg className={styles.organogramArrow} viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <marker
            id="arrowhead"
            markerWidth="6"
            markerHeight="6"
            refX="3"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 6 3, 0 6" fill="#d4af37" />
          </marker>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="none"
          stroke="#d4af37"
          strokeWidth="1.2"
          strokeDasharray="2 1"
          markerEnd="url(#arrowhead)"
        />
      </svg>

      <div className={styles.organogramCenter}>
        <span>Stakeholders</span>
      </div>

      {positions.map((n, i) => (
        <div
          key={i}
          className={styles.organogramNode}
          style={{
            left: `${n.x}%`,
            top: `${n.y}%`,
          }}
        >
          {n.label}
        </div>
      ))}
    </div>
  );
}