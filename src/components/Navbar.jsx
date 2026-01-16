import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSecretariatOpen, setIsSecretariatOpen] = useState(false);
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
    setIsSecretariatOpen(false);
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
    { name: 'Registration', path: '/registration' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const letterLinks = [
    { name: 'Secretary General', path: '/letter/sg' },
    { name: 'Deputy Secretary General', path: '/letter/dsg' },
    { name: 'Directors General of Committees', path: '/letter/dg-committees' },
    { name: 'Directors General of Conference', path: '/letter/dg-conference' },
    { name: 'Directors General of Outreach', path: '/letter/dg-outreach' },
    { name: 'Editor-in-Chief', path: '/letter/eic' },
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
              <li 
                key={link.name} 
                className={`navbar__item ${link.name === 'Secretariat' ? 'navbar__item--has-dropdown' : ''}`}
                onMouseEnter={() => link.name === 'Secretariat' && setIsSecretariatOpen(true)}
                onMouseLeave={() => link.name === 'Secretariat' && setIsSecretariatOpen(false)}
              >
                <Link
                  to={link.path}
                  className={`navbar__link ${location.pathname === link.path || (link.name === 'Secretariat' && location.pathname.startsWith('/letter/')) ? 'navbar__link--active' : ''}`}
                >
                  {link.name}
                  {link.name === 'Secretariat' && (
                    <span className={`navbar__dropdown-arrow ${isSecretariatOpen ? 'navbar__dropdown-arrow--open' : ''}`}>
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  )}
                </Link>
                {link.name === 'Secretariat' && (
                  <div className={`navbar__dropdown ${isSecretariatOpen ? 'navbar__dropdown--open' : ''}`}>
                    <div className="navbar__dropdown-inner">
                      {letterLinks.map((letterLink) => (
                        <Link
                          key={letterLink.path}
                          to={letterLink.path}
                          className={`navbar__dropdown-link ${location.pathname === letterLink.path ? 'navbar__dropdown-link--active' : ''}`}
                        >
                          {letterLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
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
              {link.name === 'Secretariat' ? (
                <>
                  <div className="navbar__mobile-accordion">
                    <Link to={link.path} className="navbar__mobile-link">
                      {link.name}
                    </Link>
                    <button 
                      className={`navbar__mobile-accordion-toggle ${isSecretariatOpen ? 'navbar__mobile-accordion-toggle--open' : ''}`}
                      onClick={() => setIsSecretariatOpen(!isSecretariatOpen)}
                      aria-label="Toggle letters menu"
                    >
                      <svg width="12" height="8" viewBox="0 0 10 6" fill="none">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  <div className={`navbar__mobile-submenu ${isSecretariatOpen ? 'navbar__mobile-submenu--open' : ''}`}>
                    {letterLinks.map((letterLink) => (
                      <Link
                        key={letterLink.path}
                        to={letterLink.path}
                        className="navbar__mobile-submenu-link"
                      >
                        {letterLink.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link to={link.path} className="navbar__mobile-link">
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
