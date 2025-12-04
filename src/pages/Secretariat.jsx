import './Secretariat.css';

const Secretariat = () => {
    const secretariat = [
        {
            role: 'Secretary General',
            name: '[Name Placeholder]',
            bio: 'Leading SMUN 2025 with a vision for diplomatic excellence and impactful discourse.',
            photo: null,
        },
        {
            role: 'Deputy Secretary General',
            name: '[Name Placeholder]',
            bio: 'Supporting the Secretary General in orchestrating a seamless and enriching conference experience.',
            photo: null,
        },
        {
            role: 'Director General — Committees',
            name: '[Name Placeholder]',
            bio: 'Overseeing committee operations and ensuring academic rigor across all simulations.',
            photo: null,
        },
        {
            role: 'Director General — Conference',
            name: '[Name Placeholder]',
            bio: 'Managing conference logistics and creating an exceptional delegate experience.',
            photo: null,
        },
        {
            role: 'Director General — Outreach',
            name: '[Name Placeholder]',
            bio: 'Building partnerships and expanding the SMUN community across the nation.',
            photo: null,
        },
        {
            role: 'Editor-in-Chief',
            name: '[Name Placeholder]',
            bio: 'Curating the narrative of SMUN through official publications and communications.',
            photo: null,
        },
    ];

    return (
        <div className="secretariat">
            {/* Hero */}
            <section className="secretariat-hero">
                <div className="container">
                    <span className="secretariat-hero__eyebrow font-accent">The Team Behind SMUN 2025</span>
                    <h1 className="secretariat-hero__title">The Secretariat</h1>
                    <p className="secretariat-hero__subtitle">
                        Meet the dedicated individuals leading Sanskriti Model United Nations,
                        committed to fostering leadership and diplomatic excellence.
                    </p>
                </div>
            </section>

            {/* Secretariat Grid */}
            <section className="secretariat-grid section-lg">
                <div className="container">
                    <div className="secretariat-grid__container">
                        {secretariat.map((member, index) => (
                            <div key={index} className="member-card">
                                <div className="member-card__photo">
                                    {member.photo ? (
                                        <img src={member.photo} alt={member.name} />
                                    ) : (
                                        <div className="member-card__placeholder">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                                <circle cx="12" cy="8" r="4" />
                                                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                <div className="member-card__content">
                                    <span className="member-card__role font-accent">{member.role}</span>
                                    <h3 className="member-card__name">{member.name}</h3>
                                    <p className="member-card__bio">{member.bio}</p>
                                </div>
                                <div className="member-card__decoration"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Letter Section */}
            <section className="secretariat-letter section">
                <div className="container">
                    <div className="letter-cta">
                        <div className="letter-cta__content">
                            <h2>Letters from the Leadership</h2>
                            <p>
                                Read personal messages from our secretariat members about their vision
                                for SMUN 2025 and their commitment to delegate excellence.
                            </p>
                        </div>
                        <div className="letter-cta__decoration">
                            <div className="letter-cta__icon">✦</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Secretariat;
