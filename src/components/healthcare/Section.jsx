import styles from './Section.module.css';

export default function Section({ title, subtitle, children, variant = 'cream', id }) {
  const variantClass =
    variant === 'cream-2' ? styles.sectionCream
    : variant === 'white' ? styles.sectionWhite
    : variant === 'green' ? styles.sectionGreen
    : '';

  return (
    <section id={id} className={`${styles.section} ${variantClass}`}>
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