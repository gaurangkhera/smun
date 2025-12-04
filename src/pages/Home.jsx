import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const newsletters = [
        { name: 'Pre-Conference', url: 'https://heyzine.com/flip-book/080ee43b31.html' },
        { name: 'Day 1', url: 'https://heyzine.com/flip-book/b662142d13.html' },
        { name: 'Day 2', url: 'https://heyzine.com/flip-book/88e6e57f14.html' },
        { name: 'Day 3', url: 'https://heyzine.com/flip-book/b79d23715c.html' },
    ];

    const stats = [
        { number: '14+', label: 'Years of Excellence' },
        { number: '500+', label: 'Delegates Hosted' },
        { number: '8', label: 'Committees' },
        { number: '5', label: 'International Partners' },
    ];

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero__background">
                    <div className="hero__gradient"></div>
                    <div className="hero__pattern"></div>
                </div>

                <div className="hero__content">
                    <div className="hero__badge font-accent">
                        <span className="hero__badge-icon">◈</span>
                        Welcome to
                    </div>

                    <h1 className="hero__title">
                        <span className="hero__title-line">Sanskriti</span>
                        <span className="hero__title-line hero__title-line--accent">Model United Nations</span>
                    </h1>

                    <div className="hero__date">
                        <div className="hero__date-line"></div>
                        <span className="hero__date-text font-accent">April 22–24, 2025</span>
                        <div className="hero__date-line"></div>
                    </div>

                    <p className="hero__subtitle">
                        Developing commanding leaders through dialogue, diplomacy, and collaborative discourse
                    </p>

                    <div className="hero__actions">
                        <Link to="/committees" className="btn btn-primary">
                            Explore Committees
                        </Link>
                        <Link to="/secretariat" className="btn btn-outline">
                            Meet the Secretariat
                        </Link>
                    </div>
                </div>

                <div className="hero__scroll-indicator">
                    <span>Scroll</span>
                    <div className="hero__scroll-line"></div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats">
                <div className="stats__container container">
                    {stats.map((stat, index) => (
                        <div key={index} className="stats__item">
                            <span className="stats__number">{stat.number}</span>
                            <span className="stats__label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section className="about section-lg">
                <div className="container">
                    <div className="about__header">
                        <span className="about__eyebrow font-accent">The SMUN Vision</span>
                        <h2 className="about__title">Leadership Through Collaboration</h2>
                        <div className="about__ornament">
                            <div className="about__ornament-line"></div>
                            <div className="about__ornament-diamond"></div>
                            <div className="about__ornament-line"></div>
                        </div>
                    </div>

                    <div className="about__content">
                        <div className="about__text">
                            <p>
                                In its most clinical sense, the goal of Model UN is to provide an accurate simulation
                                of the real United Nations. It is this task of realistically simulating the workings
                                of an organization composed of almost every sovereign nation in the world that forces
                                delegates to learn the intricacies of state policies and principles.
                            </p>
                            <p>
                                Model United Nations at Sanskriti began <strong>14 years ago</strong> as a student
                                initiative to develop commanding leaders. Since our inaugural conference in 2012,
                                Sanskriti Model United Nations has grown to become a close-knit, passionate community
                                involved in Model UN conferences across Asia.
                            </p>
                            <p>
                                The goal of Model UN is not to dominate; it is to lead. To combine different ideas,
                                backgrounds, and approaches; to reason, collaborate, negotiate and draw on personal
                                experience to create something that matters—to find real solutions to real problems.
                            </p>
                        </div>

                        <div className="about__highlights">
                            <div className="about__highlight-card">
                                <div className="about__highlight-icon">◆</div>
                                <h4>Critical Thinking</h4>
                                <p>Developing analytical minds equipped to navigate complex global challenges</p>
                            </div>
                            <div className="about__highlight-card">
                                <div className="about__highlight-icon">◆</div>
                                <h4>Diplomatic Excellence</h4>
                                <p>Mastering the art of negotiation, debate, and international discourse</p>
                            </div>
                            <div className="about__highlight-card">
                                <div className="about__highlight-icon">◆</div>
                                <h4>Global Perspective</h4>
                                <p>Understanding diverse viewpoints that form the foundation of the United Nations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="newsletters section">
                <div className="container">
                    <div className="newsletters__header">
                        <span className="newsletters__eyebrow font-accent">Conference Archives</span>
                        <h2 className="newsletters__title">Official Newsletters</h2>
                        <p className="newsletters__description">
                            Explore the official newsletters released throughout the conference,
                            capturing main events and the very essence of SMUN.
                        </p>
                    </div>

                    <div className="newsletters__grid">
                        {newsletters.map((newsletter, index) => (
                            <a
                                key={index}
                                href={newsletter.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="newsletter-card"
                            >
                                <div className="newsletter-card__number">{String(index + 1).padStart(2, '0')}</div>
                                <h3 className="newsletter-card__title">{newsletter.name}</h3>
                                <div className="newsletter-card__arrow">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta section-lg">
                <div className="container">
                    <div className="cta__content">
                        <h2 className="cta__title">Ready to Make Your Voice Heard?</h2>
                        <p className="cta__text">
                            Join hundreds of delegates from across the nation in shaping the discourse
                            on the world's most pressing issues.
                        </p>
                        <div className="cta__actions">
                            <Link to="/committees" className="btn btn-primary">
                                View Committees
                            </Link>
                            <Link to="/contact" className="btn btn-ghost">
                                Contact Us →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
