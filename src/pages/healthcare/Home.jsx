import { Link } from 'react-router-dom';
import Section from '@components/healthcare/Section';
import TeamCard from '@components/healthcare/TeamCard';
import CircleLayout from '@components/healthcare/CircleLayout';
import ServicesPie from '@components/healthcare/ServicesPie';
import SpecialistRing from '@components/healthcare/SpecialistRing';
import { approachNodes } from '@data/healthcare/approach';
import { team } from '@data/healthcare/team';
import logo from '@assets/healthcare/healthcare-logo.png';
import primitives from '@styles/primitives.module.css';
import grids from '@styles/grids.module.css';
import styles from './Home.module.css';

export default function Home() {
  const featured = team.slice(0, 3);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <img src={logo} alt="Hlengwe Healthcare Solutions" className={styles.heroLogo} />
          <h1>
            Strengthening <span>Healthcare Systems</span> Across Africa
          </h1>
          <p>
            A strategic healthcare development and consulting company focused on infrastructure, medical training,
            pharmaceuticals, and specialist healthcare delivery across Southern Africa.
          </p>
          <div className={styles.heroButtons}>
            <Link to="/healthcare/services" className={`${primitives.btn} ${primitives.btnPrimary}`}>
              Our Services
            </Link>
            <Link to="/healthcare/contact" className={primitives.btn}>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Section title="Who We Are" variant="white">
        <div className={styles.textBlock}>
          <p>
            Hlengwe Healthcare Solutions, a subsidiary of Hlengwe Holdings Pty Ltd, is a strategic healthcare
            development and consulting company focused on strengthening healthcare systems, infrastructure, medical
            training, pharmaceuticals, and specialist healthcare delivery across Southern Africa and the broader
            continent of Africa.
          </p>
          <p>
            We provide integrated healthcare solutions through strategic partnerships, institutional development,
            healthcare capacity-building programmes, project management, governance support, and digital healthcare
            transformation initiatives.
          </p>
        </div>
      </Section>

      <Section
        title="Our Approach"
        subtitle="A holistic, partnership-driven methodology for long-term healthcare impact."
        variant="cream-2"
      >
        <CircleLayout nodes={approachNodes} radius={40} centerLabel="Integrated Healthcare" />
        <div className={styles.centeredText}>
          <p>
            Hlengwe Healthcare Solutions works with governments, healthcare institutions, private sector stakeholders,
            development partners, and international collaborators to deliver long-term, measurable healthcare impact.
          </p>
        </div>
      </Section>

      <Section title="Vision & Mission" variant="white">
        <div className={grids.servicesGrid}>
          <div style={{ background: "var(--white)", padding: "2.5rem 2rem", border: "1px solid rgba(106,168,79,0.2)" }}>
            <h3 style={{ color: "var(--green-dark)", marginBottom: "1rem" }}>Our Vision</h3>
            <p style={{ color: "var(--text-mid)" }}>
              To establish sustainable, world-class healthcare systems and specialised healthcare institutions that
              improve healthcare accessibility, quality, resilience, and long-term regional healthcare outcomes across
              Southern Africa and the broader continent of Africa.
            </p>
          </div>
          <div style={{ background: "var(--white)", padding: "2.5rem 2rem", border: "1px solid rgba(106,168,79,0.2)" }}>
            <h3 style={{ color: "var(--green-dark)", marginBottom: "1rem" }}>Our Mission</h3>
            <p style={{ color: "var(--text-mid)" }}>
              To deliver innovative healthcare development solutions through strategic partnerships, institutional
              strengthening, healthcare infrastructure coordination, specialist training programmes, and digital
              transformation initiatives that improve healthcare delivery and patient outcomes.
            </p>
          </div>
        </div>
      </Section>

      {/* <Section
        title="Our Core Services"
        subtitle="Seven integrated pillars — hover a slice or legend item to explore."
        variant="cream-2"
      >
        <ServicesPie />
        <div className={styles.centeredBtn}>
          <Link to="/healthcare/services" className={`${primitives.btn} ${primitives.btnPrimary}`}>
            Explore All Services
          </Link>
        </div>
      </Section> */}

      <Section
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
      </Section>

      <Section
        title="Leadership"
        subtitle="A multi-disciplinary team of healthcare, finance, legal, and technology experts."
        variant="cream-2"
      >
        <div className={grids.teamGrid}>
          {featured.map((m, i) => (
            <TeamCard key={i} member={m} />
          ))}
        </div>
        <div className={styles.centeredBtn}>
          <Link to="/healthcare/team" className={`${primitives.btn} ${primitives.btnPrimary}`}>
            Meet the Full Team
          </Link>
        </div>
      </Section>

      <Section variant="green">
        <div className={styles.ctaBlock}>
          <h2>Partner With Us</h2>
          <p>
            Together, we can build sustainable, world-class healthcare systems that deliver measurable and lasting
            impact.
          </p>
          <Link to="/healthcare/contact" className={`${primitives.btn} ${primitives.btnGold}`}>
            Contact Us Today
          </Link>
        </div>
      </Section>
    </>
  );
}
