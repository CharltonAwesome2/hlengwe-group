import Section from "@components/healthcare/Section";
import ServicesPie from "@components/healthcare/ServicesPie";
import SpecialistRing from "@components/healthcare/SpecialistRing";
import primitives from "@styles/primitives.module.css";

export default function Services() {
  return (
    <>
      {/* <div className={primitives.pageHero}>
        <h1>Our Services</h1>
        <p>Seven integrated service pillars delivering sustainable healthcare impact.</p>
      </div> */}

      <Section
        title="Our Core Services"
        subtitle="Seven integrated service pillars delivering sustainable healthcare impact."
        variant="white"
      >
        <ServicesPie />
      </Section>

      <Section
        title="Specialist Medical Training & Capacity Building"
        subtitle="Twelve clinical disciplines at the core of our training pipelines."
        variant="cream-2"
      >
        <SpecialistRing />
      </Section>
    </>
  );
}
