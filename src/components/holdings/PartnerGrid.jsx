import { partners } from "@data/holdings/partners";
import grids from "@styles/grids.module.css";
import cards from "@styles/holdings/cards.module.css";

export default function PartnerGrid() {
  return (
    <div className={grids.partnersGrid}>
      {partners.map((p, i) => (
        <div className={cards.partnerLogo} key={i} title={p.name}>
          <img src={p.logo} alt={p.name} />
        </div>
      ))}
    </div>
  );
}