export default function Section({ title, subtitle, children, dark = false, id }) {
  return (
    <section id={id} className={`section ${dark ? 'section-dark' : ''}`}>
      {title && (
        <div className="section-header">
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}