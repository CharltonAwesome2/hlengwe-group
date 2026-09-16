import { useState, useRef } from "react";
import { coreServices } from "@data/healthcare/services";
import { ShieldCheck, GraduationCap, Building2, MonitorSmartphone, ClipboardList, Pill, Handshake } from "lucide-react";
import ServiceModal from "./ServiceModal.jsx";
import styles from "./ServicesPie.module.css";

const icons = {
  ShieldCheck,
  GraduationCap,
  Building2,
  MonitorSmartphone,
  ClipboardList,
  Pill,
  Handshake,
};

const COLORS = ["#3d6b2a", "#4a7a34", "#5a8f3d", "#6aa84f", "#7cb342", "#8fc472", "#4f7d38"];

const SIZE = 420;
const CENTER = SIZE / 2;
const RADIUS = 160;
const INNER = 90;

function polar(cx, cy, r, angleDeg) {
  const a = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

function donutSlice(cx, cy, outerR, innerR, startAngle, endAngle) {
  const p1 = polar(cx, cy, outerR, startAngle);
  const p2 = polar(cx, cy, outerR, endAngle);
  const p3 = polar(cx, cy, innerR, endAngle);
  const p4 = polar(cx, cy, innerR, startAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;

  return [
    `M ${p1.x} ${p1.y}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 1 ${p2.x} ${p2.y}`,
    `L ${p3.x} ${p3.y}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 0 ${p4.x} ${p4.y}`,
    "Z",
  ].join(" ");
}

export default function ServicesPie() {
  const [active, setActive] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const lastTriggerRef = useRef(null);
  const sliceAngle = 360 / coreServices.length;

  const open = (i, el) => {
    lastTriggerRef.current = el || null;
    setOpenIndex(i);
  };

  const close = () => {
    setOpenIndex(null);
    // Return focus to the triggering slice / legend item
    lastTriggerRef.current?.focus?.();
  };

  const onSliceKey = (e, i) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      open(i, e.currentTarget);
    }
  };

  const onLegendKey = (e, i) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      open(i, e.currentTarget);
    }
  };

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.svgWrap}>
          <svg viewBox={`0 0 ${SIZE} ${SIZE}`} width="100%" height="100%">
            {coreServices.map((s, i) => {
              const start = i * sliceAngle;
              const end = (i + 1) * sliceAngle;
              const midAngle = start + sliceAngle / 2;
              const labelPos = polar(CENTER, CENTER, (RADIUS + INNER) / 2, midAngle);
              const isActive = active === i;

              return (
                <g key={i}>
                  <path
                    d={donutSlice(CENTER, CENTER, RADIUS, INNER, start, end)}
                    fill={COLORS[i]}
                    stroke="#ffffff"
                    strokeWidth="2"
                    opacity={active === null || isActive ? 1 : 0.45}
                    role="button"
                    tabIndex={0}
                    aria-label={`Open details for ${s.title}`}
                    style={{
                      cursor: "pointer",
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                      transformOrigin: `${CENTER}px ${CENTER}px`,
                      transform: isActive ? "scale(1.03)" : "scale(1)",
                      outline: "none",
                    }}
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                    onClick={(e) => open(i, e.currentTarget)}
                    onKeyDown={(e) => onSliceKey(e, i)}
                  />
                  <text
                    x={labelPos.x}
                    y={labelPos.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#ffffff"
                    fontSize="22"
                    fontWeight="700"
                    fontFamily="Georgia, serif"
                    pointerEvents="none"
                    opacity={active === null || isActive ? 1 : 0.5}
                  >
                    {i + 1}
                  </text>
                </g>
              );
            })}

            <text
              x={CENTER}
              y={CENTER - 6}
              textAnchor="middle"
              fill="#4a7a34"
              fontSize="13"
              fontWeight="700"
              letterSpacing="2"
              fontFamily="Georgia, serif"
            >
              CORE
            </text>
            <text
              x={CENTER}
              y={CENTER + 14}
              textAnchor="middle"
              fill="#4a7a34"
              fontSize="13"
              fontWeight="700"
              letterSpacing="2"
              fontFamily="Georgia, serif"
            >
              SERVICES
            </text>
            <circle
              cx={CENTER}
              cy={CENTER}
              r={INNER}
              fill="none"
              stroke="#c9a227"
              strokeWidth="1.5"
              strokeDasharray="2 2"
            />
          </svg>
        </div>

        <ul className={styles.legend}>
          {coreServices.map((s, i) => {
            const Icon = icons[s.icon] || ShieldCheck;
            const isActive = active === i;
            return (
              <li
                key={i}
                className={isActive ? styles.active : ""}
                role="button"
                tabIndex={0}
                aria-label={`Open details for ${s.title}`}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onClick={(e) => open(i, e.currentTarget)}
                onKeyDown={(e) => onLegendKey(e, i)}
              >
                <span className={styles.swatch} style={{ background: COLORS[i] }} />
                <span className={styles.num}>{i + 1}</span>
                <Icon size={16} color={COLORS[i]} />
                <span className={styles.label}>{s.title}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {openIndex !== null && <ServiceModal service={coreServices[openIndex]} index={openIndex} onClose={close} />}
    </>
  );
}
