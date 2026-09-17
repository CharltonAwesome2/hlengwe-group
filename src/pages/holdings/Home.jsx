import { Link } from "react-router-dom";
import Section from "@components/holdings/Section";
// import ServiceCard from "@components/holdings/ServiceCard";
import TeamCard from "@components/holdings/TeamCard";
import PartnerGrid from "@components/holdings/PartnerGrid";
import { services, values } from "@data/holdings/services";
import { team } from "@data/holdings/team";
import logo from "@assets/holdings/logo.png";

export default function Home() {
  const featuredTeam = team.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          {/* <img src={logo} alt="Hlengwe Holdings" className="hero-logo" /> */}
          <h1>Hlengwe Holdings (Pty) Ltd</h1>
          <p>
            A dynamic and global management consultancy committed to delivering exceptional outcomes and driving
            sustainable change across Africa.
          </p>
          <hr />
          <br />

          {/* <h1>
            Driving <span>Growth</span>, Fostering <span>Innovation</span>
          </h1>
          <p>
            A dynamic and global management consultancy committed to delivering
            exceptional outcomes and driving sustainable change across Africa.
          </p> */}
          <h3>Our subsidiaries:</h3>
          <br/>
          <div className="hero-buttons">
            <Link to="/healthcare" className="btn btn-primary">
              Hlengwe Healthcare Solutions
            </Link>
            {/* <Link to="/services" className="btn">
              Growth and Innovation
            </Link> */}
          </div>
          {/* <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">
              Our Services
            </Link>
            <Link to="/contact" className="btn">
              Get in Touch
            </Link>
          </div> */}
        </div>
      </section>

      {/* Who We Are */}
      {/* <Section title="Who We Are" dark>
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
      </Section> */}

      {/* Vision & Mission */}
      {/* <Section title="Our Image">
        <div className="services-grid">
          <div className="service-category">
            <h3>Vision</h3>
            <p style={{ color: "#bbb" }}>
              To be a leading consultancy and development firm, transforming businesses and urban landscapes through
              strategic partnerships and innovative solutions.
            </p>
          </div>
          <div className="service-category">
            <h3>Mission</h3>
            <p style={{ color: "#bbb" }}>
              Our mission is to provide exceptional consultancy and management services that enable businesses and
              cities to thrive, ensuring sustainable growth and long-term success.
            </p>
          </div>
        </div>
      </Section> */}

      {/* Core Values */}
      {/* <Section title="Core Values" dark>
        <div className="values-grid">
          {values.map((v, i) => (
            <div className="value-card" key={i}>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </Section> */}

      {/* Services Preview */}
      {/* <Section
        title="Our Services"
        subtitle="Comprehensive solutions across strategic, technical, and business growth domains."
      >
        <div className="services-grid">
          {services.map((s, i) => (
            <ServiceCard key={i} category={s.category} items={s.items} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </Section> */}

      {/* Team Preview */}
      {/* <Section title="Leadership" subtitle="Meet the executives driving Hlengwe Holdings forward." dark>
        <div className="team-grid">
          {featuredTeam.map((m, i) => (
            <TeamCard key={i} member={m} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link to="/team" className="btn btn-primary">
            Meet the Full Team
          </Link>
        </div>
      </Section> */}

      {/* Partners */}
      {/* <Section title="Our Partners" subtitle="Collaborating with leading public and private institutions.">
        <PartnerGrid />
      </Section> */}

      {/* CTA */}
      {/* <Section dark>
        <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ color: "#d4af37", marginBottom: "1rem", fontSize: "2rem" }}>
            Ready to Transform Your Organisation?
          </h2>
          <p style={{ color: "#aaa", marginBottom: "2rem" }}>
            Hlengwe Holdings is not just a management consultancy firm; we are your trusted partner on the journey to
            growth, innovation, sustainability, and inclusivity.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Contact Us Today
          </Link>
        </div>
      </Section> */}
    </>
  );
}
