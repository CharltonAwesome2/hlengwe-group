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

export default function ServicesPie() {
  const [active, setActive] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const lastTriggerRef = useRef(null);

  const open = (i, el) => {
    lastTriggerRef.current = el || null;
    setOpenIndex(i);
  };

  const close = () => {
    setOpenIndex(null);
    lastTriggerRef.current?.focus?.();
  };

  const onLegendKey = (e, i) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      open(i, e.currentTarget);
    }
  };

  return (
    <>
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

      {openIndex !== null && <ServiceModal service={coreServices[openIndex]} index={openIndex} onClose={close} />}
    </>
  );
}