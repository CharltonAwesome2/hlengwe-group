import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '@assets/holdings/logo.png';

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/subsidiaries', label: 'Subsidiaries' },
  { path: '/team', label: 'Team' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/partners', label: 'Partners' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="navbar-brand">
        {/* <img src={logo} alt="Hlengwe Holdings" /> */}
        <div className="navbar-brand-text">
          <span>HLENGWE</span>
          <span>Holdings</span>
        </div>
      </Link>

      <ul className={`navbar-links ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <li key={l.path}>
            <Link to={l.path} className={location.pathname === l.path ? 'active' : ''}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>
    </nav>
  );
}