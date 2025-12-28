import { Link } from 'react-router-dom';
import './Committees.css';

const Committees = () => {
    // Committee data extracted from Secretariat (excluding Organising Committee and Technical Operations)
    // logoStyle: 'cover' = fill circle completely, 'scaled' = larger logo with less padding
    const committees = [
        {
            id: 'general-assembly',
            name: 'General Assembly',
            logo: '/committees/Logos/UNGA Logo.png',
            logoStyle: 'cover',
            directors: [
                { name: 'Aanya Chand' },
                { name: 'Jai Singh' },
                { name: 'Shaurya Banerjee' }
            ],
            matrix: '/committees/Matrices /Matrix - DISEC .pdf'
        },
        {
            id: 'humanitarian-committee',
            name: 'Humanitarian Committee',
            logo: '/committees/Logos/UNRWA.png',
            logoStyle: 'scaled',
            directors: [
                { name: 'Aishani Purohit' },
                { name: 'Tejas Veer Singh' }
            ],
            matrix: '/committees/Matrices /UNRWA Matrix Inter 2026.pdf'
        },
        {
            id: 'un-security-council',
            name: 'UN Security Council',
            logo: '/committees/Logos/UNSC LOGO.jpg',
            logoStyle: 'cover',
            directors: [
                { name: 'Raghav Gupta Rai' }
            ],
            matrix: '/committees/Matrices /Matrix - UNSC InterSMUN_26.pdf'
        },
        {
            id: 'indian-committee',
            name: 'Indian Committee',
            logo: '/committees/Logos/LokSabha.jpeg',
            logoStyle: 'cover',
            directors: [
                { name: 'Aryaman Pragya' },
                { name: 'Vihaan Rustagi' }
            ],
            matrix: '/committees/Matrices /Matrix - Lok Sabha.pdf'
        },
        {
            id: 'crisis-committee',
            name: 'Crisis Committee',
            logo: '/committees/Logos/Adhoc.png',
            logoStyle: 'cover',
            directors: [
                { name: 'Krish Aggarwal' },
                { name: 'Manasvi Bhambani' }
            ]
        },
        {
            id: 'semi-crisis-committee',
            name: 'Semi-Crisis Committee',
            logo: '/committees/Logos/Semi Crisis Logo.png',
            logoStyle: 'cover',
            directors: [
                { name: 'Hrishik Malhotra' },
                { name: 'Prashali Dayal' }
            ]
        },
        {
            id: 'specialised-committee',
            name: 'Specialised Committee',
            logo: '/committees/Logos/US Senate_Specialised.png',
            logoStyle: 'scaled',
            directors: [
                { name: 'Vedant Prakash' },
                { name: 'Kunal Aggarwal' }
            ],
            matrix: '/committees/Matrices /Emergency Session of the 110th US Senate.pdf'
        },
        {
            id: 'justice-committee',
            name: 'Justice Committee',
            logo: '/committees/Logos/The Jutice Committee LOGO.jpeg',
            logoStyle: 'scaled',
            directors: [
                { name: 'Shiven Uppal' },
                { name: 'Vivan Balhara' }
            ]
        }
    ];

    // UNCA combined data
    const unca = {
        name: 'UNCA',
        logo: '/committees/Logos/UNCA Logo.jpg',
        subCommittees: [
            { id: 'unca-journalism', name: 'Journalists' },
            { id: 'unca-photography', name: 'Photographers' },
            { id: 'unca-cartoonists', name: 'Cartoonists' }
        ]
    };

    return (
        <div className="committees">
            {/* Hero */}
            <section className="committees-hero">
                <div className="container">
                    <h1 className="committees-hero__title">Committees</h1>
                    <p className="committees-hero__subtitle">SMUN 2026</p>
                </div>
            </section>

            {/* Committees Grid */}
            <section className="committees-grid section-lg">
                <div className="container">
                    <div className="committees-list">
                        {committees.map((committee) => (
                            <div key={committee.id} className="committee-card">
                                <div className={`committee-card__logo ${committee.logoStyle ? `committee-card__logo--${committee.logoStyle}` : ''}`}>
                                    {committee.logo ? (
                                        <img src={committee.logo} alt={`${committee.name} Logo`} />
                                    ) : (
                                        <div className="committee-card__logo-placeholder">
                                            <span>Logo</span>
                                        </div>
                                    )}
                                </div>
                                <div className="committee-card__content">
                                    <h3 className="committee-card__name">{committee.name}</h3>
                                    <p className="committee-card__directors">
                                        {committee.directors.map(d => d.name).join(', ')}
                                    </p>
                                    <div className="committee-card__buttons">
                                        <Link 
                                            to={`/committees/${committee.id}`} 
                                            className="committee-btn committee-btn--details"
                                        >
                                            Details
                                        </Link>
                                        {committee.matrix ? (
                                            <a 
                                                href={committee.matrix} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="committee-btn committee-btn--matrix"
                                            >
                                                Matrix
                                            </a>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* UNCA Combined Card */}
                        <div className="committee-card committee-card--unca">
                            <div className="committee-card__logo">
                                {unca.logo ? (
                                    <img src={unca.logo} alt={`${unca.name} Logo`} />
                                ) : (
                                    <div className="committee-card__logo-placeholder">
                                        <span>Logo</span>
                                    </div>
                                )}
                            </div>
                            <div className="committee-card__content">
                                <h3 className="committee-card__name">{unca.name}</h3>
                                <p className="committee-card__directors">
                                    United Nations Correspondents Association
                                </p>
                                <div className="committee-card__buttons committee-card__buttons--unca">
                                    {unca.subCommittees.map((sub) => (
                                        <Link 
                                            key={sub.id}
                                            to={`/committees/${sub.id}`} 
                                            className="committee-btn committee-btn--details"
                                        >
                                            {sub.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Committees;
