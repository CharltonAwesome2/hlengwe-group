import { Link } from 'react-router-dom';
import Section from '@components/holdings/Section';
import { subsidiaries } from '@data/holdings/subsidiaries';

export default function Subsidiaries() {
  return (
    <>
      {/* <div className="page-hero">
        <h1>Our Subsidiaries</h1>
        <p>
          Hlengwe Holdings operates through focused subsidiaries, each dedicated to
          delivering excellence in its sector.
        </p>
      </div> */}

      <Section title="Group Companies">
        <div className="services-grid">
          {subsidiaries.map((s) => (
            <Link key={s.name} to={s.to} className="service-category subsidiary-card">
              {s.logo && <img src={s.logo} alt={s.name} className="subsidiary-logo" />}
              <h3>{s.name}</h3>
              {s.tagline && <p className="subsidiary-tagline">{s.tagline}</p>}
              <p>{s.desc}</p>
              <span className="subsidiary-cta">Visit page →</span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}