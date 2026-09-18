import { useState } from "react";
import Section from "@components/holdings/Section";
import { Mail, Phone, MapPin } from "lucide-react";
import primitives from "@styles/holdings/primitives.module.css";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message. We will be in touch shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Section title="Get in Touch">
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h3>Contact Information</h3>
            <div className={styles.contactItem}>
              <Mail size={20} />
              <div>
                <div>admin@hlengweholdings.com</div>
                <div>hlengweholdings@gmail.com</div>
              </div>
            </div>
            <div className={styles.contactItem}>
              <Phone size={20} />
              <div>+27 66 144 8132</div>
            </div>
            <div className={styles.contactItem}>
              <MapPin size={20} />
              <div>South Africa</div>
            </div>

            <div
              style={{
                marginTop: "2rem",
                padding: "1.5rem",
                background: "#1a1a1a",
                borderLeft: "3px solid #d4af37",
              }}
            >
              <p style={{ color: "#aaa", fontSize: "0.9rem" }}>
                Hlengwe Holdings Pty Ltd is not just a management consultancy firm; we are
                your trusted partner on the journey to growth, innovation, sustainability,
                and inclusivity.
              </p>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <button
              type="submit"
              className={`${primitives.btn} ${primitives.btnPrimary}`}
            >
              Send Message
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}