import { useState } from 'react';
import Section from '@components/holdings/Section';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will be in touch shortly.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
      {/* <div className="page-hero">
        <h1>Contact Us</h1>
        <p>We are here to empower your organization for lasting success.</p>
      </div> */}

      <Section title="Get in Touch">
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <Mail size={20} />
              <div>
                <div>admin@hlengweholdings.com</div>
                <div>hlengweholdings@gmail.com</div>
              </div>
            </div>
            <div className="contact-item">
              <Phone size={20} />
              <div>+27 66 144 8132</div>
            </div>
            <div className="contact-item">
              <MapPin size={20} />
              <div>South Africa</div>
            </div>

            <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#1a1a1a', borderLeft: '3px solid #d4af37' }}>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}>
                Hlengwe Holdings Pty Ltd is not just a management consultancy firm; we are
                your trusted partner on the journey to growth, innovation, sustainability,
                and inclusivity.
              </p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
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
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </Section>
    </>
  );
}