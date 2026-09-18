import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import styles from "./Navbar.module.css";

const links = [
  { path: "/", label: "Home" },
  {
    label: "About",
    children: [
      { path: "/about", label: "Who We Are" },
      { path: "/team", label: "Team" },
      { path: "/stakeholder-engagement", label: "Stakeholder Engagements" },
      { path: "/partners", label: "Partners" },
    ],
  },
  { path: "/services", label: "Services" },
  { path: "/current-project", label: "Current Project" },
  { path: "/subsidiaries", label: "Subsidiaries" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const isActive = (link) => {
    if (link.path) return location.pathname === link.path;
    return link.children?.some((c) => location.pathname === c.path);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`} ref={navRef}>
      <Link to="/" className={styles.navbarBrand}>
        <div className={styles.navbarBrandText}>
          <span>HLENGWE</span>
          <span>Holdings</span>
        </div>
      </Link>

      <ul className={`${styles.navbarLinks} ${open ? styles.open : ""}`}>
        {links.map((l) => (
          <li key={l.path || l.label} className={l.children ? styles.hasDropdown : ""}>
            {l.children ? (
              <>
                <button
                  className={`${styles.navbarDropdownToggle} ${isActive(l) ? styles.active : ""}`}
                  onClick={() => setOpenDropdown(openDropdown === l.label ? null : l.label)}
                  aria-expanded={openDropdown === l.label}
                >
                  {l.label}
                  <ChevronDown size={14} />
                </button>
                <ul className={`${styles.navbarDropdown} ${openDropdown === l.label ? styles.open : ""}`}>
                  {l.children.map((c) => (
                    <li key={c.path}>
                      <Link to={c.path} className={location.pathname === c.path ? styles.active : ""}>
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link to={l.path} className={location.pathname === l.path ? styles.active : ""}>
                {l.label}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <button className={styles.hamburger} onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>
    </nav>
  );
}
