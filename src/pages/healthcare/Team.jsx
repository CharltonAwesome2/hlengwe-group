import Section from '@components/healthcare/Section';
import TeamCard from '@components/healthcare/TeamCard';
import { team } from '@data/healthcare/team';
import primitives from '@styles/primitives.module.css';
import grids from '@styles/grids.module.css';

export default function Team() {
  return (
    <>
      {/* <div className={primitives.pageHero}>
        <h1>Meet Our Team</h1>
        <p>A multi-disciplinary leadership team driving healthcare transformation.</p>
      </div> */}
      <Section title="Leadership" variant="white">
        <div className={grids.teamGrid}>
          {team.map((m, i) => (<TeamCard key={i} member={m} />))}
        </div>
      </Section>
    </>
  );
}