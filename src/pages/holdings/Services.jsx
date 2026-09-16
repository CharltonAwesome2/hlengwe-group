import Section from '@components/holdings/Section';
import ServiceCard from '@components/holdings/ServiceCard';
import { services, sectors } from '@data/holdings/services';
import {
  HeartPulse, GraduationCap, Landmark, Building2,
  Sprout, Zap, Banknote, TrafficCone,
} from 'lucide-react';

const sectorIcons = {
  HeartPulse, GraduationCap, Landmark, Building2,
  Sprout, Zap, Banknote, TrafficCone,
};

export default function Services() {
  return (
    <>
      {/* <div className="page-hero">
        <h1>Our Services</h1>
        <p>Comprehensive strategic, technical, and business growth solutions.</p>
      </div> */}

      <Section title="Service Offering">
        <div className="services-grid">
          {services.map((s, i) => (
            <ServiceCard key={i} category={s.category} items={s.items} />
          ))}
        </div>
      </Section>

      <Section title="Sectors We Serve" dark>
        <div className="values-grid">
          {sectors.map((s, i) => {
            const Icon = sectorIcons[s.icon] || Building2;
            return (
              <div className="value-card sector-card" key={i}>
                <Icon size={28} color="var(--gold)" className="sector-icon" />
                <h4>{s.name}</h4>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}