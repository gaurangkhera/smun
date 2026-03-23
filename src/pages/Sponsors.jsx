import './Sponsors.css';

const Sponsors = () => {
    // Placeholder sponsors - to be replaced with actual sponsors
    const sponsorTiers = [
        {
            tier: 'Merchandise Partner',
            sponsors: [
                { name: 'Merrakii', logo: '/sponsors/merrakii.jpeg' },
            ],
        },
    ];

    const benefits = [
        {
            icon: '◆',
            title: 'Brand Visibility',
            description: 'Prominent logo placement across all conference materials and venues.',
        },
        {
            icon: '◆',
            title: 'Delegate Engagement',
            description: 'Direct access to 500+ future leaders from across the nation.',
        },
        {
            icon: '◆',
            title: 'Social Impact',
            description: 'Support youth education and leadership development initiatives.',
        },
    ];

    return (
        <div className="sponsors">
            {/* Hero */}
            <section className="sponsors-hero">
                <div className="container">
                    <span className="sponsors-hero__eyebrow font-accent">Our Partners in Excellence</span>
                    <h1 className="sponsors-hero__title">Sponsors</h1>
                    <p className="sponsors-hero__subtitle">
                        We extend our gratitude to the organizations that make Sanskriti MUN possible through
                        their generous support and commitment to youth leadership development.
                    </p>
                </div>
            </section>

            {/* Sponsor Tiers */}
            <section className="sponsor-tiers section-lg">
                <div className="container">
                    {sponsorTiers.map((tierGroup, tierIndex) => (
                        <div key={tierIndex} className="sponsor-tier">
                            {tierGroup.tier !== 'Merchandise Partner' && (
                                <div className="sponsor-tier__header">
                                    <div className="sponsor-tier__line"></div>
                                    <h2 className="sponsor-tier__title font-accent">{tierGroup.tier}</h2>
                                    <div className="sponsor-tier__line"></div>
                                </div>
                            )}

                            <div className={`sponsor-tier__grid sponsor-tier__grid--${tierGroup.tier.toLowerCase().replace(' ', '-')}`}>
                                {tierGroup.sponsors.map((sponsor, index) => (
                                    <div key={index} className="sponsor-card">
                                        <h3 className="sponsor-card__name font-accent">{sponsor.name}</h3>
                                        <div className="sponsor-logo">
                                            {sponsor.logo ? (
                                                <img src={sponsor.logo} alt={sponsor.name} />
                                            ) : (
                                                <div className="sponsor-logo__placeholder">
                                                    <span className="sponsor-logo__placeholder-text">{sponsor.name}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Become a Sponsor CTA */}
            <section className="become-sponsor section">
                <div className="container">
                    <div className="become-sponsor__content">
                        <div className="become-sponsor__text">
                            <span className="become-sponsor__eyebrow font-accent">Partner With Us</span>
                            <h2 className="become-sponsor__title">Become a Sponsor</h2>
                            <p className="become-sponsor__description">
                                Join our community of forward-thinking organizations supporting the next
                                generation of global leaders. Explore sponsorship opportunities for SMUN 2025.
                            </p>

                            <div className="sponsor-benefits">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="sponsor-benefit">
                                        <span className="sponsor-benefit__icon">{benefit.icon}</span>
                                        <div>
                                            <h4>{benefit.title}</h4>
                                            <p>{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <a href="mailto:munsanskritischool@gmail.com" className="btn btn-primary">
                                Request Sponsorship Package
                            </a>
                        </div>

                        <div className="become-sponsor__decoration">
                            <div className="sponsor-decoration">
                                <div className="sponsor-decoration__ring sponsor-decoration__ring--1"></div>
                                <div className="sponsor-decoration__ring sponsor-decoration__ring--2"></div>
                                <div className="sponsor-decoration__ring sponsor-decoration__ring--3"></div>
                                <div className="sponsor-decoration__center">
                                    <span>SMUN</span>
                                    <span>2025</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sponsors;
