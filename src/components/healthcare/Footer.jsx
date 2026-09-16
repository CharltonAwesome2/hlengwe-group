import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <h4>Hlengwe Healthcare Solutions</h4>
          <p>
            A subsidiary of Hlengwe Holdings Pty Ltd, we are a strategic healthcare
            development and consulting company focused on strengthening healthcare
            systems, infrastructure, medical training, pharmaceuticals and specialist
            healthcare delivery across Southern Africa.
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/specialised">Specialised Areas</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li className={styles.contactItem}>
              <Mail size={14} color="#8fc472" /> hlengweholdings@gmail.com
            </li>
            <li className={styles.contactItem}>
              <Phone size={14} color="#8fc472" /> +27 66 144 8132
            </li>
            <li className={`${styles.contactItem} ${styles.contactItemTop}`}>
              <MapPin size={14} color="#8fc472" style={{ marginTop: 3, flexShrink: 0 }} />
              <span>29 Scott Street, Weaverly,<br />Melrose Arch, Sandton</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        &copy; {new Date().getFullYear()} Hlengwe Healthcare Solutions (Pty) Ltd. All rights reserved.
      </div>
    </footer>
  );
}