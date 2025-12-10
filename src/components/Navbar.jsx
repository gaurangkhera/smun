import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
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
    setActiveDropdown(null);
  }, [location]);

  const letterLinks = [
    { name: 'Letter | Secretary General', path: '/secretariat/letter/sg' },
    { name: 'Letter | Deputy Secretary General', path: '/secretariat/letter/dsg' },
    { name: 'Letter | Director General - Committees', path: '/secretariat/letter/dg-committees' },
    { name: 'Letter | Director General - Conference', path: '/secretariat/letter/dg-conference' },
    { name: 'Letter | Director General Outreach', path: '/secretariat/letter/dg-outreach' },
    { name: 'Letter | Editor-in-Chief', path: '/secretariat/letter/eic' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Secretariat 2026',
      path: '/secretariat',
      dropdown: letterLinks
    },
    { name: 'Committees', path: '/committees' },
    { name: 'Conference Details', path: '/conference-details' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
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
                className={`navbar__item ${link.dropdown ? 'navbar__item--dropdown' : ''}`}
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`navbar__link ${location.pathname === link.path || location.pathname.startsWith(link.path + '/') ? 'navbar__link--active' : ''}`}
                >
                  {link.name}
                  {link.dropdown && (
                    <svg className="navbar__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {link.dropdown && (
                  <div className={`navbar__dropdown ${activeDropdown === link.name ? 'navbar__dropdown--open' : ''}`}>
                    <div className="navbar__dropdown-content">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="navbar__dropdown-item"
                        >
                          {item.name}
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
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
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
              {link.dropdown ? (
                <>
                  <div className="navbar__mobile-link-group">
                    <Link to={link.path} className="navbar__mobile-link">
                      {link.name}
                    </Link>
                    <button
                      className="navbar__mobile-toggle-dropdown"
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                    >
                      <svg
                        className={`navbar__chevron ${activeDropdown === link.name ? 'navbar__chevron--open' : ''}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  </div>
                  <div className={`navbar__mobile-dropdown ${activeDropdown === link.name ? 'navbar__mobile-dropdown--open' : ''}`}>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="navbar__mobile-dropdown-item"
                      >
                        {item.name}
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
