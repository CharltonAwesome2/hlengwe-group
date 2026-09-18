import { Link } from 'react-router-dom';
import Section from '@components/healthcare/Section';
import TeamCard from '@components/healthcare/TeamCard';
import CircleLayout from '@components/healthcare/CircleLayout';
import ServicesPie from '@components/healthcare/ServicesPie';
import SpecialistRing from '@components/healthcare/SpecialistRing';
import { approachNodes } from '@data/healthcare/approach';
import { team } from '@data/healthcare/team';
import logo from '@assets/healthcare/healthcare-logo.png';
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
            Hlengwe Healthcare Solutions
          </h1>
          <p>
            A strategic healthcare development and consulting company focused on infrastructure, medical training,
            pharmaceuticals, and specialist healthcare delivery across Southern Africa.
          </p>
        </div>
      </section>

      <Section
        title="Our Approach"
        subtitle="A holistic, partnership-driven methodology for long-term healthcare impact."
        variant="white"
      >
        <CircleLayout nodes={approachNodes} radius={40} centerLabel="Integrated Healthcare" />
        <div className={styles.centeredText}>
          <p>
            Hlengwe Healthcare Solutions works with governments, healthcare institutions, private sector stakeholders,
            development partners, and international collaborators to deliver long-term, measurable healthcare impact.
          </p>
        </div>
      </Section>

    </>
  );
}
