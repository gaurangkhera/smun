import { Link } from 'react-router-dom';
import './Committees.css';

const Committees = () => {
    const committees = [
        {
            name: 'General Assembly',
            shortName: 'UNGA',
            description: 'The main deliberative organ of the United Nations, addressing critical global issues.',
            difficulty: 'Beginner',
            path: '/committees/ga',
        },
        {
            name: 'UN Security Council',
            shortName: 'UNSC',
            description: 'The organ responsible for maintaining international peace and security.',
            difficulty: 'Advanced',
            path: '/committees/unsc',
        },
        {
            name: 'Semi Crisis Committee',
            shortName: 'SEMI',
            description: 'A dynamic committee combining traditional debate with crisis elements.',
            difficulty: 'Intermediate',
            path: '/committees/semi',
        },
        {
            name: 'Humanitarian Committee',
            shortName: 'IOM',
            description: 'Focused on humanitarian crises and global migration challenges.',
            difficulty: 'Intermediate',
            path: '/committees/humanitarian',
        },
        {
            name: 'Crisis Committee',
            shortName: 'CRISIS',
            description: 'Fast-paced simulation requiring quick thinking and adaptive strategies.',
            difficulty: 'Advanced',
            path: '/committees/crisis',
        },
        {
            name: 'Indian Parliament',
            shortName: 'LOK SABHA',
            description: 'Simulating the lower house of India\'s Parliament on pressing national issues.',
            difficulty: 'Intermediate',
            path: '/committees/indian',
        },
        {
            name: 'Specialized Committee',
            shortName: 'SPEC',
            description: 'Tackling unique and specialized topics requiring deep research.',
            difficulty: 'Advanced',
            path: '/committees/specialized',
        },
        {
            name: 'UNCA — Press Corps',
            shortName: 'UNCA',
            description: 'United Nations Correspondents Association covering conference proceedings.',
            difficulty: 'All Levels',
            path: '/committees/unca',
            subSections: ['Journalists', 'Cartoonists', 'Photographers'],
        },
    ];

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Beginner':
                return 'committee-card__difficulty--beginner';
            case 'Intermediate':
                return 'committee-card__difficulty--intermediate';
            case 'Advanced':
                return 'committee-card__difficulty--advanced';
            default:
                return '';
        }
    };

    return (
        <div className="committees">
            {/* Hero */}
            <section className="committees-hero">
                <div className="container">
                    <span className="committees-hero__eyebrow font-accent">SMUN 2025 Simulations</span>
                    <h1 className="committees-hero__title">Committees</h1>
                    <p className="committees-hero__subtitle">
                        Explore our diverse range of committees, each designed to challenge your
                        diplomatic skills and deepen your understanding of global affairs.
                    </p>
                </div>
            </section>

            {/* Committees Grid */}
            <section className="committees-grid section-lg">
                <div className="container">
                    <div className="committees-grid__container">
                        {committees.map((committee, index) => (
                            <Link to={committee.path} key={index} className="committee-card">
                                <div className="committee-card__header">
                                    <span className="committee-card__shortname font-accent">{committee.shortName}</span>
                                    <span className={`committee-card__difficulty ${getDifficultyColor(committee.difficulty)}`}>
                                        {committee.difficulty}
                                    </span>
                                </div>
                                <h3 className="committee-card__name">{committee.name}</h3>
                                <p className="committee-card__description">{committee.description}</p>
                                {committee.subSections && (
                                    <div className="committee-card__subsections">
                                        {committee.subSections.map((sub, i) => (
                                            <span key={i} className="committee-card__subsection">{sub}</span>
                                        ))}
                                    </div>
                                )}
                                <div className="committee-card__footer">
                                    <span className="committee-card__cta">View Details</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                                <div className="committee-card__gradient"></div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="committees-info section">
                <div className="container">
                    <div className="info-grid">
                        <div className="info-card">
                            <div className="info-card__icon">◈</div>
                            <h4>Research-Intensive</h4>
                            <p>Each committee requires thorough understanding of country policies and subject matter.</p>
                        </div>
                        <div className="info-card">
                            <div className="info-card__icon">◈</div>
                            <h4>Skill Development</h4>
                            <p>Hone your public speaking, negotiation, and critical thinking abilities.</p>
                        </div>
                        <div className="info-card">
                            <div className="info-card__icon">◈</div>
                            <h4>Global Perspective</h4>
                            <p>Gain insights into international relations and diverse cultural viewpoints.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Committees;
