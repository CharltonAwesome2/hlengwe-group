import Section from '@components/holdings/Section';
import TeamCard from '@components/holdings/TeamCard';
import { team } from '@data/holdings/team';

export default function Team() {
  return (
    <>
      {/* <div className="page-hero">
        <h1>Our Team</h1>
        <p>Seasoned leaders driving growth, innovation, and sustainable change.</p>
      </div> */}

      <Section title="Leadership">
        <div className="team-grid">
          {team.map((m, i) => (
            <TeamCard key={i} member={m} />
          ))}
        </div>
      </Section>
    </>
  );
}