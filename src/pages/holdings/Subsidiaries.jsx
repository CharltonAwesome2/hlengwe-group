import { Link } from "react-router-dom";
import Section from "@components/holdings/Section";
import { subsidiaries } from "@data/holdings/subsidiaries";
import grids from "@styles/grids.module.css";
import cards from "@styles/holdings/cards.module.css";

export default function Subsidiaries() {
  return (
    <>
      <Section title="Group Companies">
        <div className={grids.servicesGrid}>
          {subsidiaries.map((s) => (
            <Link
              key={s.name}
              to={s.to}
              className={`${cards.serviceCategory} ${cards.subsidiaryCard}`}
            >
              {s.logo && (
                <img src={s.logo} alt={s.name} className={cards.subsidiaryLogo} />
              )}
              <h3>{s.name}</h3>
              {s.tagline && <p className={cards.subsidiaryTagline}>{s.tagline}</p>}
              <p>{s.desc}</p>
              <span className={cards.subsidiaryCta}>Visit page →</span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}