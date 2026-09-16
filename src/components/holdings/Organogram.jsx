export default function Organogram() {
  const nodes = [
    { label: 'Executive Chairman', angle: 270 }, // top
    { label: 'CEO', angle: 342 },                // top-right
    { label: 'CFO', angle: 54 },                 // bottom-right
    { label: 'COO', angle: 126 },                // bottom-left
    { label: 'GM', angle: 198 },                 // top-left
  ];

  const radius = 38; // % of container
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
    <div className="organogram-circle">
      {/* Circular clockwise arrow */}
      <svg className="organogram-arrow" viewBox="0 0 100 100" preserveAspectRatio="none">
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
        {/* Circle path drawn clockwise starting from top (Exec Chairman) */}
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

      {/* Center: Stakeholders */}
      <div className="organogram-center">
        <span>Stakeholders</span>
      </div>

      {/* Nodes around the circle */}
      {positions.map((n, i) => (
        <div
          key={i}
          className="organogram-node"
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