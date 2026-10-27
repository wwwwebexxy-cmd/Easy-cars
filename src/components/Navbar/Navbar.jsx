import { useEffect, useState } from 'react';
import { FaBars, FaPhoneAlt, FaTimes, FaWhatsapp } from 'react-icons/fa';
import './Navbar.css';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Enquire', href: '#enquiry' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''}`}>
      <div className="nav-inner container">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="EasyCars home">
          <img src="/assets/easycars-logo-transparent.webp" alt="EasyCars Auto Trading" />
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`nav-panel ${menuOpen ? 'nav-panel--open' : ''}`}>
          <nav aria-label="Main navigation">
            {navItems.map((item) => (
              <a href={item.href} key={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <a className="nav-phone" href="tel:+971529359279" onClick={closeMenu}>
              <FaPhoneAlt />
              <span>+971 52 935 9279</span>
            </a>
            <a className="nav-whatsapp" href="https://wa.me/971523048009" target="_blank" rel="noreferrer" onClick={closeMenu}>
              <FaWhatsapp />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
