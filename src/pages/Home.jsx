import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    // Countdown to April 22, 2026
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date('April 22, 2026 00:00:00').getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance > 0) {
                setCountdown({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                });
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    const stats = [
        { number: '14+', label: 'Years of Excellence' },
        { number: '7000+', label: 'Delegates Hosted' },
        { number: '11', label: 'Committees' },
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
                    <div className="hero__logo-wrapper">
                        <img src="/SMUN LOGO - NO BG.png" alt="SMUN Logo" className="hero__logo" />
                    </div>

                    <h1 className="hero__title">
                        <span className="hero__title-line">Sanskriti</span>
                        <span className="hero__title-line hero__title-line--accent">Model United Nations</span>
                    </h1>

                    <div className="hero__date">
                        <div className="hero__date-line"></div>
                        <span className="hero__date-text font-accent">April 22–24, 2026</span>
                        <div className="hero__date-line"></div>
                    </div>

                    {/* Countdown Timer */}
                    <div className="countdown">
                        <div className="countdown__item">
                            <span className="countdown__number">{countdown.days}</span>
                            <span className="countdown__label">Days</span>
                        </div>
                        <div className="countdown__separator">:</div>
                        <div className="countdown__item">
                            <span className="countdown__number">{String(countdown.hours).padStart(2, '0')}</span>
                            <span className="countdown__label">Hours</span>
                        </div>
                        <div className="countdown__separator">:</div>
                        <div className="countdown__item">
                            <span className="countdown__number">{String(countdown.minutes).padStart(2, '0')}</span>
                            <span className="countdown__label">Minutes</span>
                        </div>
                        <div className="countdown__separator">:</div>
                        <div className="countdown__item">
                            <span className="countdown__number">{String(countdown.seconds).padStart(2, '0')}</span>
                            <span className="countdown__label">Seconds</span>
                        </div>
                    </div>

                    <p className="hero__subtitle">
                        Knowledge is Liberation
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
                        <span className="about__eyebrow font-accent">The Sanskriti Motto</span>
                        <h2 className="about__title">Knowledge is Liberation</h2>
                        <div className="about__ornament">
                            <div className="about__ornament-line"></div>
                            <div className="about__ornament-diamond"></div>
                            <div className="about__ornament-line"></div>
                        </div>
                    </div>

                    <div className="about__content">
                        <div className="about__text">
                            <p>
                                In its most clinical sense, the goal of Model United Nations is to simulate the great
                                global issues that shape our world. By recreating the complexity of international affairs
                                with care and imagination, delegates are encouraged to explore the intricacies of statecraft,
                                to understand diverse perspectives and to discover how meaningful dialogue becomes the
                                foundation of real problem solving.
                            </p>
                            <p>
                                Model United Nations at Sanskriti began fourteen years ago as a student initiative to
                                develop commanding leaders. Since our inaugural conference in 2012, Sanskriti Model
                                United Nations has grown to become a close knit and passionate community involved in
                                Model UN conferences across the nation and the world.
                            </p>
                            <p>
                                The purpose of Model UN is not to dominate, it is to lead. It calls upon delegates to
                                think with clarity, listen with empathy and collaborate with conviction. It is here that
                                our motto, <strong>Knowledge is Liberation</strong>, reveals its deepest truth. Knowledge
                                frees us from the limits of assumption, elevates our understanding and empowers us to
                                create ideas that honour both reason and humanity. In this shared pursuit, we learn not
                                only about the world but also about the leaders we can become.
                            </p>
                            <p className="about__closing">
                                We look forward to seeing you in April!
                            </p>
                        </div>
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
