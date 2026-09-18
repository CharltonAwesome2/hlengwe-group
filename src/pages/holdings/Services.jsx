import Section from "@components/holdings/Section";
import ServiceCard from "@components/holdings/ServiceCard";
import { services, sectors } from "@data/holdings/services";
import grids from "@styles/grids.module.css";
import cards from "@styles/holdings/cards.module.css";
import {
  HeartPulse, GraduationCap, Landmark, Building2,
  Sprout, Zap, Banknote, TrafficCone,
} from "lucide-react";

const sectorIcons = {
  HeartPulse, GraduationCap, Landmark, Building2,
  Sprout, Zap, Banknote, TrafficCone,
};

export default function Services() {
  return (
    <>
      <Section title="Service Offering">
        <div className={grids.servicesGrid}>
          {services.map((s, i) => (
            <ServiceCard key={i} category={s.category} items={s.items} />
          ))}
        </div>
      </Section>

      <Section title="Sectors We Serve" dark>
        <div className={grids.valuesGrid}>
          {sectors.map((s, i) => {
            const Icon = sectorIcons[s.icon] || Building2;
            return (
              <div className={`${cards.valueCard} ${cards.sectorCard}`} key={i}>
                <Icon size={28} color="var(--gold)" className={cards.sectorIcon} />
                <h4>{s.name}</h4>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}