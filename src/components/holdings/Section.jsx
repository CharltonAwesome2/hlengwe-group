import styles from "./Section.module.css";

export default function Section({ title, subtitle, children, dark = false, id }) {
  return (
    <section id={id} className={`${styles.section} ${dark ? styles.sectionDark : ""}`}>
      {title && (
        <div className={styles.sectionHeader}>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}