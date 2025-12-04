import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCommitteesOpen, setIsCommitteesOpen] = useState(false);
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
    setIsCommitteesOpen(false);
  }, [location]);

  const committees = [
    { name: 'General Assembly', path: '/committees/ga' },
    { name: 'UN Security Council', path: '/committees/unsc' },
    { name: 'Semi Crisis Committee', path: '/committees/semi' },
    { name: 'Humanitarian Committee', path: '/committees/humanitarian' },
    { name: 'Crisis Committee', path: '/committees/crisis' },
    { name: 'Indian Parliament', path: '/committees/indian' },
    { name: 'Specialized Committee', path: '/committees/specialized' },
    { name: 'UNCA', path: '/committees/unca' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Secretariat', path: '/secretariat' },
    { name: 'Committees', path: '/committees', hasDropdown: true },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-text">SMUN</span>
          <span className="navbar__logo-year">2025</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar__nav hide-mobile">
          <ul className="navbar__list">
            {navLinks.map((link) => (
              <li 
                key={link.name} 
                className={`navbar__item ${link.hasDropdown ? 'navbar__item--dropdown' : ''}`}
                onMouseEnter={() => link.hasDropdown && setIsCommitteesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsCommitteesOpen(false)}
              >
                <Link 
                  to={link.path} 
                  className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg className="navbar__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown for Committees */}
                {link.hasDropdown && (
                  <div className={`navbar__dropdown ${isCommitteesOpen ? 'navbar__dropdown--open' : ''}`}>
                    <div className="navbar__dropdown-content">
                      {committees.map((committee) => (
                        <Link 
                          key={committee.name} 
                          to={committee.path}
                          className="navbar__dropdown-item"
                        >
                          {committee.name}
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
              {link.hasDropdown ? (
                <>
                  <button 
                    className="navbar__mobile-link"
                    onClick={() => setIsCommitteesOpen(!isCommitteesOpen)}
                  >
                    {link.name}
                    <svg 
                      className={`navbar__chevron ${isCommitteesOpen ? 'navbar__chevron--open' : ''}`} 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div className={`navbar__mobile-dropdown ${isCommitteesOpen ? 'navbar__mobile-dropdown--open' : ''}`}>
                    {committees.map((committee) => (
                      <Link 
                        key={committee.name}
                        to={committee.path}
                        className="navbar__mobile-dropdown-item"
                      >
                        {committee.name}
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
