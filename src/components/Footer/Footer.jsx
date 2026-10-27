import { FaEnvelope, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-main">
      <div className="footer-brand">
        <a className="footer-logo" href="#top" aria-label="EasyCars home">
          <img src="/assets/easycars-logo-transparent.png" alt="EasyCars Auto Trading" />
        </a>
        <p>You dream it. We find it. We bring it home.</p>
      </div>

      <div className="footer-nav">
        <p className="footer-heading">Explore</p>
        <a href="#about">About us</a>
        <a href="#process">Import process</a>
        <a href="#enquiry">Enquiry form</a>
        <a href="#contact">Contact us</a>
      </div>

      <div className="footer-contact">
        <p className="footer-heading">Get in touch</p>
        <a href="https://wa.me/971523048009" target="_blank" rel="noreferrer"><FaWhatsapp /> +971 52 304 8009</a>
        <a href="tel:+971529359279"><FaPhoneAlt /> +971 52 935 9279</a>
        <a href="mailto:easycarsimport@gmail.com"><FaEnvelope /> easycarsimport@gmail.com</a>
        <a href="https://maps.app.goo.gl/8ZFAJySn9cEyVNMG7?g_st=iwb" target="_blank" rel="noreferrer"><FaMapMarkerAlt /> Sharjah, UAE</a>
      </div>
    </div>

    <div className="container footer-bottom">
      <p>© {new Date().getFullYear()} EasyCars Auto Trading LLC. All rights reserved.</p>
      <a href="https://www.instagram.com/syamraktrv" target="_blank" rel="noreferrer" aria-label="EasyCars on Instagram"><FaInstagram /> @syamraktrv</a>
    </div>
  </footer>
);

export default Footer;
