import Section from "@components/holdings/Section";

const stakeholders = [
  { name: "North West Provincial Government" },
  { name: "Bojanala Platinum District Municipality" },
  { name: "Madibeng Local Municipality" },
  { name: "North West Department of Human Settlements" },
];

const pillars = [
  { title: "Residential Development", desc: "Integrated housing solutions for a growing, mixed-income community." },
  { title: "Commercial Opportunities", desc: "Retail, office and enterprise space designed to drive local economic activity." },
  { title: "Healthcare", desc: "Accessible healthcare facilities serving residents and surrounding communities." },
  { title: "Education", desc: "Schools and learning infrastructure positioned at the heart of the development." },
  { title: "Technology", desc: "Smart-city systems enabling connected, efficient urban living." },
  { title: "Supporting Infrastructure", desc: "Roads, utilities and services built to sustain long-term growth." },
];

export default function CurrentProject() {
  return (
    <>
      <Section title="Current Project: Mekgareng Smart City Development" dark>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#ccc", marginBottom: "1.5rem" }}>
            Hlengwe Holdings has been appointed as the <strong>Developer of the Mekgareng Smart City</strong>, a
            transformative mixed-use development envisioned to create an integrated, sustainable and future-focused
            urban environment.
          </p>
          <p style={{ color: "#ccc" }}>
            The project is envisioned to integrate residential development, commercial opportunities, healthcare,
            education, technology and supporting infrastructure — with Hlengwe Holdings leading strategic development
            coordination, stakeholder engagement and the mobilisation of partnerships required to advance the Smart
            City.
          </p>
        </div>
      </Section>

      <Section title="Government Stakeholders">
        <div className="values-grid">
          {stakeholders.map((s, i) => (
            <div className="value-card" key={i}>
              <h4>{s.name}</h4>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Integrated Development Pillars" dark>
        <div className="services-grid">
          {pillars.map((p, i) => (
            <div className="service-category" key={i}>
              <h3>{p.title}</h3>
              <p style={{ color: "#bbb" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}