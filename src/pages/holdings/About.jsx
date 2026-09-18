import Section from "@components/holdings/Section";
import Organogram from "@components/holdings/Organogram";
import { values } from "@data/holdings/services";
import grids from "@styles/grids.module.css";
import cards from "@styles/holdings/cards.module.css";

export default function About() {
  return (
    <>
      <Section title="Who We Are" dark>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#ccc", marginBottom: "1.5rem" }}>
            Hlengwe Holdings is a dynamic and innovative company specializing in business consultancy, contract
            management, urban mega city development, contract negotiations, and strategic services.
          </p>
          <p style={{ color: "#ccc", marginBottom: "1.5rem" }}>
            We are a global management consultancy firm committed to delivering exceptional outcomes and driving
            sustainable change. At Hlengwe Holdings we proudly work in association with a women-driven subsidiary
            dedicated to empowering female entrepreneurs and professionals in business consultancy and urban
            development.
          </p>
          <p style={{ color: "#ccc" }}>
            With a firm belief in fostering growth, innovation, and inclusivity for our clients, we navigate the
            ever-evolving and fast-changing landscape of the business world.
          </p>
        </div>
      </Section>

      <Section title="Our Purpose" dark>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ color: "#ccc", marginBottom: "1.5rem" }}>
            At Hlengwe Holdings Pty Ltd, our purpose goes beyond the ordinary. We are driven by a strong sense of
            mission that underlies our work, values, and approach.
          </p>
          <div className={cards.serviceCategory} style={{ marginBottom: "1rem" }}>
            <h3>Driving Growth</h3>
            <p style={{ color: "#bbb" }}>
              We are dedicated to helping organizations unlock their full potential and achieve sustainable growth. We
              work closely with our clients to identify opportunities, overcome challenges, and implement strategies
              that drive long-term success.
            </p>
          </div>
          <div className={cards.serviceCategory}>
            <h3>Fostering Innovation</h3>
            <p style={{ color: "#bbb" }}>
              In today's rapidly changing business environment, innovation is key to staying competitive. We empower our
              clients to embrace innovation, adapt to new technologies, and develop creative solutions that set them
              apart in their respective industries.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Vision & Mission">
        <div className={grids.servicesGrid}>
          <div className={cards.serviceCategory}>
            <h3>Vision</h3>
            <p style={{ color: "#bbb" }}>
              To be a leading consultancy and development firm, transforming businesses and urban landscapes through
              strategic partnerships and innovative solutions.
            </p>
          </div>
          <div className={cards.serviceCategory}>
            <h3>Mission</h3>
            <p style={{ color: "#bbb" }}>
              Our mission is to provide exceptional consultancy and management services that enable businesses and
              cities to thrive, ensuring sustainable growth and long-term success.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Core Values" dark>
        <div className={grids.valuesGrid}>
          {values.map((v, i) => (
            <div className={cards.valueCard} key={i}>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Our Structure">
        <Organogram />
      </Section>

      <Section title="ICT Unit" dark>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ color: "#ccc", marginBottom: "1.5rem" }}>
            Information and Communication Technology (ICT) is one of Hlengwe Holdings' units. The ICT unit focuses on
            big data analytics, enterprise architecture, and artificial intelligence.
          </p>
          <div className={grids.servicesGrid}>
            <div className={cards.serviceCategory}>
              <h3>Big Data Analytics</h3>
              <p style={{ color: "#bbb" }}>
                We apply descriptive, diagnostic, predictive, and prescriptive analytics to extract valuable insights
                from complex datasets from web, mobile, and social media sources.
              </p>
            </div>
            <div className={cards.serviceCategory}>
              <h3>Enterprise Architecture</h3>
              <p style={{ color: "#bbb" }}>
                Our EA consists of information architecture, process-oriented architecture, application architecture,
                and infrastructure architecture — applied holistically from strategic intent to operational process.
              </p>
            </div>
            <div className={cards.serviceCategory}>
              <h3>Artificial Intelligence</h3>
              <p style={{ color: "#bbb" }}>
                We apply AI to advance organisational functions, automate processes, analyse data, recognise patterns,
                and solve computational problems across healthcare, education, and government administration.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}