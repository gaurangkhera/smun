import './Secretariat.css';

const Secretariat = () => {
    const secretariat = [
        {
            role: 'Secretary General',
            name: '[Name Placeholder]',
            photo: null,
        },
        {
            role: 'Deputy Secretary General',
            name: '[Name Placeholder]',
            photo: null,
        },
        {
            role: 'Director General - Committees',
            name: '[Name Placeholder]',
            photo: null,
        },
        {
            role: 'Director General - Committees',
            name: '[Name Placeholder]',
            photo: null,
        },
        {
            role: 'Director General - Conference',
            name: '[Name Placeholder]',
            photo: null,
        },
        {
            role: 'Director General - Conference',
            name: '[Name Placeholder]',
            photo: null,
        },
        {
            role: 'Director General - Outreach',
            name: '[Name Placeholder]',
            photo: null,
        },
        {
            role: 'Editor-in-Chief',
            name: '[Name Placeholder]',
            photo: null,
        },
    ];

    const messages = [
        {
            role: 'Secretary General',
            title: 'Message from the Secretary General',
            content: 'Coming soon...',
        },
        {
            role: 'Deputy Secretary General',
            title: 'Message from the Deputy Secretary General',
            content: 'Coming soon...',
        },
        {
            role: 'Director General - Committees',
            title: 'Message from the Director General - Committees',
            content: 'Coming soon...',
        },
        {
            role: 'Director General - Conference',
            title: 'Message from the Director General - Conference',
            content: 'Coming soon...',
        },
        {
            role: 'Director General - Outreach',
            title: 'Message from the Director General - Outreach',
            content: 'Coming soon...',
        },
        {
            role: 'Director General - Outreach',
            title: 'Message from the Director General - Outreach',
            content: 'Coming soon...',
        },
        {
            role: 'Editor-in-Chief',
            title: 'Message from the Editor-in-Chief',
            content: 'Coming soon...',
        },
    ];

    return (
        <div className="secretariat">
            {/* Hero */}
            <section className="secretariat-hero">
                <div className="container">
                    <h1 className="secretariat-hero__title">The Secretariat</h1>
                    <p className="secretariat-hero__subtitle">SMUN 2026</p>
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
                                    <h3 className="member-card__name">{member.name}</h3>
                                    <span className="member-card__role">{member.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Messages Section */}
            <section className="secretariat-messages section-lg">
                <div className="container">
                    <h2 className="secretariat-messages__title">Messages from the Secretariat</h2>
                    <div className="secretariat-messages__grid">
                        {messages.map((message, index) => (
                            <div key={index} className="message-card" id={message.role.toLowerCase().replace(/\s+/g, '-')}>
                                <h3 className="message-card__title">{message.title}</h3>
                                <p className="message-card__content">{message.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Secretariat;
