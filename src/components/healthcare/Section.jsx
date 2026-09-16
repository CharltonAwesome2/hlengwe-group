import styles from './Section.module.css';

export default function Section({
  title,
  subtitle,
  children,
  variant = 'cream',
  id,
  className = '',
  headerClassName = '',
  contentClassName = '',
}) {
  const variantClass =
    variant === 'cream-2' ? styles.sectionCream
    : variant === 'white' ? styles.sectionWhite
    : variant === 'green' ? styles.sectionGreen
    : '';

  return (
    <section id={id} className={`${styles.section} ${variantClass} ${className}`.trim()}>
      {title && (
        <div className={`${styles.sectionHeader} ${headerClassName}`.trim()}>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
      )}
      <div className={contentClassName}>{children}</div>
    </section>
  );
}