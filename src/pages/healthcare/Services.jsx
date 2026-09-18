import Section from "@components/healthcare/Section";
import ServicesPie from "@components/healthcare/ServicesPie";
import SpecialistRing from "@components/healthcare/SpecialistRing";

export default function Services() {
  return (
    <>
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
