import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowLeft } from "lucide-react";
import logo from "@assets/healthcare/healthcare-logo.png";
import styles from "./Navbar.module.css";

const links = [
  { path: "/healthcare", label: "Home" },
  { path: "/healthcare/about", label: "About" },
  { path: "/healthcare/services", label: "Services" },
  { path: "/healthcare/specialised", label: "Specialised Areas" },
  { path: "/healthcare/team", label: "Team" },
  { path: "/healthcare/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.brandWrap}>
        <Link to="/" className={styles.backToHoldings}>
          <ArrowLeft size={16} />
          <span>Hlengwe Holdings</span>
        </Link>

        <Link to="/healthcare" className={styles.brand}>
          <img src={logo} alt="Hlengwe Healthcare Solutions" className={styles.brandLogo} />
          <div className={styles.brandText}>
            <span>HLENGWE</span>
            <span>Healthcare Solutions</span>
          </div>
        </Link>
      </div>

      <ul className={`${styles.links} ${open ? styles.open : ""}`}>
        {links.map((l) => (
          <li key={l.path}>
            <Link to={l.path} className={location.pathname === l.path ? styles.active : ""}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <button className={styles.hamburger} onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>
    </nav>
  );
}
