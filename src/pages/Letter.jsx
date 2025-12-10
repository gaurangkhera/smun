import { useParams } from 'react-router-dom';
import './Letter.css';

const Letter = () => {
    const { role } = useParams();

    const roleNames = {
        'sg': 'Secretary General',
        'dsg': 'Deputy Secretary General',
        'dg-committees': 'Director General - Committees',
        'dg-conference': 'Director General - Conference',
        'dg-outreach': 'Director General - Outreach',
        'eic': 'Editor-in-Chief',
    };

    const roleName = roleNames[role] || 'Leadership';

    return (
        <div className="letter">
            {/* Hero */}
            <section className="letter-hero">
                <div className="container">
                    <h1 className="letter-hero__title">Letter from the {roleName}</h1>
                    <p className="letter-hero__subtitle">SMUN 2026</p>
                </div>
            </section>

            {/* Letter Content */}
            <section className="letter-content section-lg">
                <div className="container">
                    <div className="letter-content__box">
                        <p className="letter-content__text">
                            Coming soon...
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Letter;
