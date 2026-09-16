import {
  ShieldCheck, GraduationCap, Building2, MonitorSmartphone,
  ClipboardList, Pill, Handshake,
} from 'lucide-react';
import styles from './ServiceCard.module.css';

const icons = {
  ShieldCheck, GraduationCap, Building2, MonitorSmartphone,
  ClipboardList, Pill, Handshake,
};

export default function ServiceCard({ service, index }) {
  const Icon = icons[service.icon] || ShieldCheck;
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Icon size={26} color="#6aa84f" />
        <h3 className={styles.title}>{index + 1}. {service.title}</h3>
      </div>
      <ul className={styles.list}>
        {service.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}