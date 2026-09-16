import Section from '@components/holdings/Section';
import ServiceCard from '@components/holdings/ServiceCard';
import { services } from '@data/holdings/services';

export default function Services() {
  return (
    <>
      <div className="page-hero">
        <h1>Our Services</h1>
        <p>Comprehensive strategic, technical, and business growth solutions.</p>
      </div>

      <Section title="Service Offering">
        <div className="services-grid">
          {services.map((s, i) => (
            <ServiceCard key={i} category={s.category} items={s.items} />
          ))}
        </div>
      </Section>

      <Section title="Sectors We Serve" dark>
        <div className="values-grid">
          {[
            'Healthcare',
            'Education',
            'Government Administration',
            'Urban Development',
            'Agriculture',
            'Mining & Energy',
            'Financial Services',
            'Infrastructure',
          ].map((s, i) => (
            <div className="value-card" key={i}>
              <h4>{s}</h4>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}