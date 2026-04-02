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
        </div>
    );
};

export default Sponsors;
