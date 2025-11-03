import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle.jsx';
import logo from '../assets/logo.svg';

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/produits', label: 'Produits' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/services', label: 'Services' },
  { to: '/configurateur', label: 'Configurateur' },
  { to: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src={logo} alt="Lumenia logo" />
        </Link>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </nav>
        <button className="nav-toggle" onClick={handleToggle} aria-label="Menu">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}
