import Section from "@components/holdings/Section";

const stakeholders = [
  { name: "NECSA", full: "South African Nuclear Energy Corporation" },
  { name: "Gautrain", full: "Gautrain Management Agency" },
  { name: "DBSA", full: "Development Bank of Southern Africa" },
  { name: "ISA", full: "Infrastructure South Africa" },
  { name: "Magalies Water", full: "Magalies Water Board" },
  { name: "DWS", full: "Department of Water and Sanitation" },
];

export default function StakeholderEngagement() {
  return (
    <>
      <Section title="Our Stakeholder Engagements" dark>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#ccc", marginBottom: "1.5rem" }}>
            Hlengwe Holdings continues to engage with key strategic institutions and government stakeholders in support
            of its infrastructure and development initiatives. These engagements include:
          </p>
        </div>
      </Section>

      <Section title="Strategic Partners">
        <div className="values-grid">
          {stakeholders.map((s, i) => (
            <div className="value-card" key={i}>
              <h4>{s.name}</h4>
              <p>{s.full}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Looking Ahead" dark>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#ccc" }}>
            Through these engagements, Hlengwe Holdings seeks to strengthen strategic partnerships, infrastructure
            planning, technical collaboration and institutional alignment required to support the successful
            advancement of large-scale development projects, including the{" "}
            <strong>Mekgareng Smart City</strong>.
          </p>
        </div>
      </Section>
    </>
  );
}