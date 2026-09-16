import { useEffect, useRef } from 'react';
import {
  ShieldCheck, GraduationCap, Building2, MonitorSmartphone,
  ClipboardList, Pill, Handshake, X,
} from 'lucide-react';
import styles from './ServiceModal.module.css';

const icons = {
  ShieldCheck, GraduationCap, Building2, MonitorSmartphone,
  ClipboardList, Pill, Handshake,
};

export default function ServiceModal({ service, index, onClose }) {
  const closeRef = useRef(null);

  // Lock body scroll + Esc to close
  useEffect(() => {
    if (!service) return;

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Move focus to the close button
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [service, onClose]);

  if (!service) return null;

  const Icon = icons[service.icon] || ShieldCheck;

  const onBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className={styles.backdrop}
      onClick={onBackdrop}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div className={styles.modal}>
        <button
          ref={closeRef}
          className={styles.close}
          onClick={onClose}
          aria-label="Close"
          type="button"
        >
          <X size={20} />
        </button>

        <div className={styles.header}>
          <Icon size={30} color="var(--green)" />
          <h3 id="service-modal-title" className={styles.title}>
            {index + 1}. {service.title}
          </h3>
        </div>

        <ul className={styles.list}>
          {service.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}