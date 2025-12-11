import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Secretariat', path: '/secretariat' },
    { name: 'Committees', path: '/committees' },
    { name: 'Conference Details', path: '/conference-details' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''} ${isMobileMenuOpen ? 'navbar--menu-open' : ''}`}>
      <div className="navbar__container">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <img src="/SMUN LOGO - NO BG.png" alt="SMUN" className="navbar__logo-img" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar__nav hide-mobile">
          <ul className="navbar__list">
            {navLinks.map((link) => (
              <li key={link.name} className="navbar__item">
                <Link
                  to={link.path}
                  className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="navbar__mobile-toggle hide-desktop"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`navbar__hamburger ${isMobileMenuOpen ? 'navbar__hamburger--open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`navbar__mobile-nav ${isMobileMenuOpen ? 'navbar__mobile-nav--open' : ''}`}>
        <ul className="navbar__mobile-list">
          {navLinks.map((link) => (
            <li key={link.name} className="navbar__mobile-item">
              <Link to={link.path} className="navbar__mobile-link">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
