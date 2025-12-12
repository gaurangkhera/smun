import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__grid">
                    {/* Brand */}
                    <div className="footer__brand">
                        <Link to="/" className="footer__logo">
                            <img src="/SMUN LOGO - NO BG.png" alt="SMUN" className="footer__logo-img" />
                        </Link>
                        <p className="footer__tagline">
                            Knowledge is Liberation
                        </p>
                        <div className="footer__social">
                            <a href="https://instagram.com/sanskritimun" target="_blank" rel="noopener noreferrer">
                                @sanskritimun
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer__links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/secretariat">Secretariat 2026</Link></li>
                            <li><Link to="/committees">Committees</Link></li>
                            <li><Link to="/conference-details">Conference Details</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer__contact">
                        <h4>Contact</h4>
                        <address>
                            <p>Sanskriti School</p>
                            <p>Dr. S. Radhakrishnan Marg</p>
                            <p>Chanakyapuri, New Delhi</p>
                            <p>Delhi - 110021</p>
                        </address>
                        <a href="mailto:munsanskritischool@gmail.com">
                            munsanskritischool@gmail.com
                        </a>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>© {currentYear} Sanskriti Model United Nations. All rights reserved.</p>
                    <p className="footer__credit">Made by <a href="https://www.linkedin.com/in/gaurangkhera" target="_blank" rel="noopener noreferrer">Gaurang Khera</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
