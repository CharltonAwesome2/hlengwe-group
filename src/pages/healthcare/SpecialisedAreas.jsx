import Section from "@components/healthcare/Section";
import {
  specialisations,
  clinicalFocus,
  modelPrinciples,
  regions,
  whyUs,
  commitment,
} from "@data/healthcare/specialised";
import {
  Globe2,
  Users,
  Stethoscope,
  Hospital,
  Leaf,
  GraduationCap,
  MonitorSmartphone,
  ShieldCheck,
  Ribbon,
  Baby,
  Siren,
  Syringe,
  Activity,
  HeartPulse,
  Brain,
  Eye,
  ShieldPlus,
  Wrench,
  Anchor,
  Building2,
  Accessibility,
  BarChart3,
  Handshake,
  Lightbulb,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import styles from "./SpecialisedAreas.module.css";

const ICONS = {
  Globe2,
  Users,
  Stethoscope,
  Hospital,
  Leaf,
  GraduationCap,
  MonitorSmartphone,
  ShieldCheck,
  Ribbon,
  Baby,
  Siren,
  Syringe,
  Activity,
  HeartPulse,
  Brain,
  Eye,
  ShieldPlus,
  Wrench,
  Anchor,
  Building2,
  Accessibility,
  BarChart3,
  Handshake,
  Lightbulb,
};

const Icon = ({ name, size = 22, color = "var(--green)" }) => {
  const C = ICONS[name] || ShieldCheck;
  return <C size={size} color={color} />;
};

export default function SpecialisedAreas() {
  return (
    <>
      <Section
        title="Strategic Focus Areas"
        subtitle="Eight capability pillars defining where we go deep."
        variant="white"
      >
        <br />
        <div className={styles.focusGrid}>
          {specialisations.map((s, i) => (
            <div className={styles.focusCard} key={i}>
              <div className={styles.focusIcon}>
                <Icon name={s.icon} size={24} color="#fff" />
              </div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Clinical Focus Disciplines"
        subtitle="Twelve specialist areas at the core of our training and delivery pipelines."
        variant="cream-2"
      >
        <br />
        <div className={styles.clinicalGrid}>
          {clinicalFocus.map((c, i) => (
            <div className={styles.clinicalCard} key={i}>
              <div className={styles.clinicalTop}>
                <Icon name={c.icon} size={26} color="var(--green-dark)" />
                <span className={styles.clinicalNum}>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Our Healthcare Models Focus On"
        subtitle="The design principles that make our programmes durable."
        variant="white"
      >
        <br />
        <div className={styles.principlesRow}>
          {modelPrinciples.map((m, i) => (
            <div className={styles.principleCard} key={i}>
              <Icon name={m.icon} size={30} color="var(--gold)" />
              <h4>{m.title}</h4>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Regional Healthcare Development"
        subtitle="Active initiatives across Southern Africa."
        variant="green"
      >
        <br />
        <div className={styles.regionGrid}>
          {regions.map((r, i) => (
            <div className={styles.regionCard} key={i}>
              <div className={styles.regionTop}>
                <MapPin size={20} color="var(--gold)" />
                <span className={styles.regionTag}>{r.tag}</span>
              </div>
              <h3>{r.country}</h3>
              <p>{r.description}</p>
              <ul className={styles.regionHighlights}>
                {r.highlights.map((h, j) => (
                  <li key={j}>
                    <CheckCircle2 size={14} color="var(--green-light)" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Why Us" subtitle="Our implementation approach is built on eight commitments." variant="white">
        <br />{" "}
        <div className={styles.whyGrid}>
          {whyUs.map((w, i) => (
            <div className={styles.whyCard} key={i}>
              <div className={styles.whyIcon}>
                <Icon name={w.icon} size={22} color="var(--green-dark)" />
              </div>
              <div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Our Commitment" variant="cream-2">
        <div className={styles.commitmentGrid}>
          {commitment.map((c, i) => (
            <div className={styles.commitmentCard} key={i}>
              <span className={styles.commitmentNum}>{c.num}</span>
              <div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
