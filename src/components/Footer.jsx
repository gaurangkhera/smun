import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'Secretariat', path: '/secretariat' },
        { name: 'Committees', path: '/committees' },
        { name: 'Sponsors', path: '/sponsors' },
        { name: 'Contact Us', path: '/contact' },
    ];

    const committees = [
        { name: 'General Assembly', path: '/committees/ga' },
        { name: 'UN Security Council', path: '/committees/unsc' },
        { name: 'Crisis Committee', path: '/committees/crisis' },
        { name: 'Indian Parliament', path: '/committees/indian' },
    ];

    return (
        <footer className="footer">
            <div className="footer__ornament">
                <div className="footer__ornament-line"></div>
                <div className="footer__ornament-diamond"></div>
                <div className="footer__ornament-line"></div>
            </div>

            <div className="footer__container">
                {/* Brand Column */}
                <div className="footer__brand">
                    <div className="footer__logo">
                        <span className="footer__logo-text">SMUN</span>
                        <span className="footer__logo-year">2025</span>
                    </div>
                    <p className="footer__tagline">
                        Model United Nations at Sanskriti — Developing commanding leaders through dialogue and diplomacy since 2012.
                    </p>
                    <div className="footer__social">
                        <a href="https://instagram.com/sanskritimun" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <rect x="2" y="2" width="20" height="20" rx="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none" />
                            </svg>
                        </a>
                        <a href="mailto:munsanskritischool@gmail.com" className="footer__social-link" aria-label="Email">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="M2 6l10 7 10-7" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer__column">
                    <h4 className="footer__heading">Quick Links</h4>
                    <ul className="footer__list">
                        {quickLinks.map((link) => (
                            <li key={link.name}>
                                <Link to={link.path} className="footer__link">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Committees */}
                <div className="footer__column">
                    <h4 className="footer__heading">Committees</h4>
                    <ul className="footer__list">
                        {committees.map((committee) => (
                            <li key={committee.name}>
                                <Link to={committee.path} className="footer__link">
                                    {committee.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div className="footer__column">
                    <h4 className="footer__heading">Contact</h4>
                    <address className="footer__address">
                        <p>Sanskriti School</p>
                        <p>Dr. S. Radhakrishnan Marg</p>
                        <p>Chanakyapuri, New Delhi</p>
                        <p>Delhi - 110021</p>
                    </address>
                    <a href="mailto:munsanskritischool@gmail.com" className="footer__email">
                        munsanskritischool@gmail.com
                    </a>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer__bottom">
                <div className="footer__bottom-container">
                    <p className="footer__copyright">
                        © {currentYear} Sanskriti Model United Nations. All rights reserved.
                    </p>
                    <p className="footer__credit">
                        Crafted with excellence
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
