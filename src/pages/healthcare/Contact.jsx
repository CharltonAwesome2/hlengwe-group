import { useState } from 'react';
import Section from '@components/healthcare/Section';
import { Mail, Phone, MapPin } from 'lucide-react';
import primitives from '@styles/primitives.module.css';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your enquiry. We will be in touch shortly.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
      <div className={primitives.pageHero}>
        <h1>Contact Us</h1>
        <p>Let's build sustainable, world-class healthcare systems together.</p>
      </div>

      <Section title="Get in Touch" variant="white">
        <div className={styles.grid}>
          <div className={styles.info}>
            <h3>Contact Information</h3>
            <div className={styles.item}><Mail size={20} /><div>hlengweholdings@gmail.com</div></div>
            <div className={styles.item}><Phone size={20} /><div>+27 66 144 8132</div></div>
            <div className={styles.item}>
              <MapPin size={20} />
              <div>29 Scott Street, Weaverly,<br />Melrose Arch, Sandton</div>
            </div>
            <div className={styles.callout}>
              <p>Hlengwe Healthcare Solutions works with governments, healthcare institutions, private sector stakeholders, development partners, and international collaborators to deliver long-term, measurable healthcare impact.</p>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name"
              value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            <input type="email" placeholder="Your Email"
              value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            <textarea placeholder="Your Message"
              value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
            <button type="submit" className={`${primitives.btn} ${primitives.btnPrimary}`}>Send Message</button>
          </form>
        </div>
      </Section>
    </>
  );
}