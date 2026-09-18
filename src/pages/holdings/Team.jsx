import Section from "@components/holdings/Section";
import TeamCard from "@components/holdings/TeamCard";
import { team, chairman } from "@data/holdings/team";
import grids from "@styles/grids.module.css";

export default function Team() {
  return (
    <>
      <Section title="Executive Chairman">
        <div className={grids.teamGrid}>
          {chairman.map((m, i) => (
            <TeamCard key={i} member={m} />
          ))}
        </div>
      </Section>

      <Section title="Leadership">
        <div className={grids.teamGrid}>
          {team.map((m, i) => (
            <TeamCard key={i} member={m} />
          ))}
        </div>
      </Section>
    </>
  );
}