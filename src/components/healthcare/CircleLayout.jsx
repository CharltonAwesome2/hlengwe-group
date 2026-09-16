import styles from "./CircleLayout.module.css";

export default function CircleLayout({ nodes, centerLabel, radius = 40, variant = "default", renderCenter = null }) {
  const center = 50;
  const positions = nodes.map((n) => {
    const rad = (n.angle * Math.PI) / 180;
    return {
      ...n,
      x: center + radius * Math.cos(rad),
      y: center + radius * Math.sin(rad),
    };
  });

  const nodeClass = variant === "specialist" ? styles.specialistNode : styles.node;

  return (
    <div className={styles.circle}>
      <svg className={styles.ring} viewBox="0 0 100 100" preserveAspectRatio="none">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#8fc472"
          strokeWidth="0.8"
          strokeDasharray="1.5 1.5"
          opacity="0.7"
        />
      </svg>

      {centerLabel && <div className={styles.center}>{renderCenter ? renderCenter() : <span>{centerLabel}</span>}</div>}

      {positions.map((n, i) => (
        <div key={i} className={nodeClass} style={{ left: `${n.x}%`, top: `${n.y}%` }}>
          {n.label}
        </div>
      ))}
    </div>
  );
}
