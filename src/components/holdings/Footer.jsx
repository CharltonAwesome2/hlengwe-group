import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h4>Hlengwe Holdings</h4>
          <p>
            A dynamic and global management consultancy specializing in business,
            contract management, urban mega city development, contract negotiations,
            and strategic services.
          </p>
          <p style={{ marginTop: '1rem', color: '#d4af37', fontSize: '0.8rem' }}>
            Company Registration: 2023/174511/07
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/subsidiaries">Subsidiaries</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/partners">Partners</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <Mail size={14} color="#d4af37" /> admin@hlengweholdings.com
            </li>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <Mail size={14} color="#d4af37" /> hlengweholdings@gmail.com
            </li>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <Phone size={14} color="#d4af37" /> +27 66 144 8132
            </li>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <MapPin size={14} color="#d4af37" /> South Africa
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Hlengwe Holdings Pty Ltd. All rights reserved.
      </div>
    </footer>
  );
}