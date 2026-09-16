import Section from "@components/healthcare/Section";
import CircleLayout from "@components/healthcare/CircleLayout";
import SpecialistRing from "@components/healthcare/SpecialistRing";
import OrgChart from "@components/healthcare/OrgChart";
import { approachNodes } from "@data/healthcare/approach";
import primitives from "@styles/primitives.module.css";
import grids from "@styles/grids.module.css";
import styles from "./Home.module.css";
import sectionStyles from "@components/healthcare/Section.module.css";

export default function About() {
  return (
    <>
      {/* <div className={primitives.pageHero}>
        <h1>About Us</h1>
        <p>Strengthening healthcare systems across Southern Africa and beyond.</p>
      </div> */}

      <Section title="Who We Are" variant="white">
        <div style={{ maxWidth: 850, margin: "0 auto" }}>
          <p style={{ color: "var(--text-mid)", marginBottom: "1.5rem" }}>
            Hlengwe Healthcare Solutions, a subsidiary of Hlengwe Holdings Pty Ltd, is a strategic healthcare
            development and consulting company focused on strengthening healthcare systems, infrastructure, medical
            training, pharmaceuticals, and specialist healthcare delivery across Southern Africa and the broader
            continent of Africa.
          </p>
          <p style={{ color: "var(--text-mid)" }}>
            We provide integrated healthcare solutions through strategic partnerships, institutional development,
            healthcare capacity-building programmes, project management, governance support, and digital healthcare
            transformation initiatives.
          </p>
        </div>
      </Section>

      {/* <Section title="Our Approach" variant="cream-2">
        <CircleLayout nodes={approachNodes} radius={40} centerLabel="Integrated Healthcare" />
        <div className={styles.centeredText}>
          <p>
            We work with governments, healthcare institutions, private sector stakeholders, development partners, and
            international collaborators to deliver long-term, measurable healthcare impact.
          </p>
        </div>
      </Section> */}

      <Section title="Vision & Mission" variant="cream">
        <div className={grids.servicesGrid}>
          <div className="service-category">
            <h3>Our Vision</h3>
            <p style={{ color: "var(--text-mid)" }}>
              To establish sustainable, world-class healthcare systems and specialised healthcare institutions that
              improve healthcare accessibility, quality, resilience, and long-term regional healthcare outcomes across
              Southern Africa and the broader continent of Africa.
            </p>
          </div>
          <div className="service-category">
            <h3>Our Mission</h3>
            <p style={{ color: "var(--text-mid)" }}>
              To deliver innovative healthcare development solutions through strategic partnerships, institutional
              strengthening, healthcare infrastructure coordination, specialist training programmes, and digital
              transformation initiatives that improve healthcare delivery and patient outcomes.
            </p>
          </div>
        </div>
      </Section>
      {/* <Section
        title="Specialist Medical Training & Capacity Building"
        subtitle="Twelve clinical disciplines at the core of our training pipelines."
        variant="white"
      >
        <SpecialistRing />
        <div className={styles.centeredText} style={{ marginTop: "2rem" }}>
          <p>
            We design and implement structured healthcare training programmes focused on specialist medical training
            pipelines, train-the-trainer programmes, clinical mentorship, simulation-based training, cross-border
            residency programmes, continuing professional development, nursing and allied healthcare training, and
            competency-based healthcare education.
          </p>
        </div>
      </Section> */}

      <Section
        title="Our Structure"
        variant="white"
        headerClassName={sectionStyles.structureHeader}
        className={sectionStyles.sectionTightBottom}
      >
        <OrgChart />
      </Section>
    </>
  );
}
