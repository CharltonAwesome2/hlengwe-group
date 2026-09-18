import Section from "@components/healthcare/Section";
import TeamCard from "@components/healthcare/TeamCard";
import { team, chairman } from "@data/healthcare/team";
import grids from "@styles/grids.module.css";

export default function Team() {
  return (
    <>
      <Section title="Executive Chairman" variant="white">
        <div className={grids.teamGrid}>
          {chairman.map((m, i) => (
            <TeamCard key={i} member={m} />
          ))}
        </div>
      </Section>

      <Section title="Leadership" variant="white">
        <div className={grids.teamGrid}>
          {team.map((m, i) => (
            <TeamCard key={i} member={m} />
          ))}
        </div>
      </Section>
    </>
  );
}