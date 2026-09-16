import { partners } from '@data/holdings/partners';

export default function PartnerGrid() {
  return (
    <div className="partners-grid">
      {partners.map((p, i) => (
        <div className="partner-logo" key={i} title={p.name}>
          <img src={p.logo} alt={p.name} />
        </div>
      ))}
    </div>
  );
}