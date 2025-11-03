import { Link } from 'react-router-dom';
import { FiInstagram, FiLinkedin, FiCompass } from 'react-icons/fi';
import logo from '../assets/logo.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src={logo} alt="Logo Lumenia" />
          <p>La signature lumineuse suisse, pensée pour demain.</p>
        </div>
        <div className="footer-links">
          <h4>Navigation</h4>
          <Link to="/">Accueil</Link>
          <Link to="/produits">Produits</Link>
          <Link to="/a-propos">À propos</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-links">
          <h4>Suivez-nous</h4>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <FiLinkedin /> LinkedIn
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FiInstagram /> Instagram
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noreferrer">
            <FiCompass /> Pinterest
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <Link to="/mentions-legales">Mentions légales</Link>
        <Link to="/politique-confidentialite">Politique de confidentialité</Link>
      </div>
      <p className="footer-copy">© 2025 Lumenia – Éclairer durablement le monde.</p>
    </footer>
  );
}
