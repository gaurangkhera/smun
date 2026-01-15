import './Registration.css';

const Registration = () => {
    const schoolFormUrl = 'https://forms.gle/fmeW4JzZkLTYgRoP9';
    const individualFormUrl = 'https://forms.gle/YaU1eYKVmT9k8aWb8';

    return (
        <div className="registration">
            {/* Hero */}
            <section className="registration-hero">
                <div className="container">
                    <h1 className="registration-hero__title">Registration</h1>
                    <p className="registration-hero__subtitle">SMUN 2026</p>
                </div>
            </section>

            {/* Important Notice */}
            <section className="registration-notice">
                <div className="container">
                    <div className="registration-notice__box">
                        <p>Please read the instructions carefully before filling up the form.</p>
                    </div>
                </div>
            </section>

            {/* Registration Options */}
            <section className="registration-options section-lg">
                <div className="container">
                    {/* School Delegations */}
                    <div className="registration-card">
                        <div className="registration-card__header">
                            <h2 className="registration-card__title">School Delegations</h2>
                        </div>
                        <div className="registration-card__content">
                            <ul className="registration-card__list">
                                <li>
                                    <strong>Last Date:</strong> March 31, 2026
                                </li>
                                <li>
                                    <strong>Delegate Fee:</strong> Rs 3500 per delegate
                                    <span className="registration-card__note">(Includes tea and lunch on all 3 days)</span>
                                </li>
                                <li>
                                    <strong>School Registration Fee:</strong> Rs 3000
                                </li>
                                <li>
                                    <strong>Eligibility:</strong> Students of Grade 9 - 12
                                </li>
                                <li>
                                    <strong>Delegation Size:</strong>
                                    <ul className="registration-card__sublist">
                                        <li>Small Delegation: 5-11 delegates</li>
                                        <li>Large Delegation: 12-18 delegates</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Maximum Delegations:</strong> 2 per school
                                </li>
                                <li>
                                    Schools willing to send more than one delegation are required to fill up a separate registration form.
                                </li>
                            </ul>
                            <a 
                                href={schoolFormUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn btn-primary registration-card__btn"
                            >
                                Register School Delegation
                            </a>
                        </div>
                    </div>

                    {/* Individual Delegations */}
                    <div className="registration-card">
                        <div className="registration-card__header">
                            <h2 className="registration-card__title">Individual Delegations</h2>
                        </div>
                        <div className="registration-card__content">
                            <ul className="registration-card__list">
                                <li>
                                    Individual delegates may apply to any of the committees as an individual participant.
                                </li>
                                <li>
                                    <strong>Requirement:</strong> Must produce a photocopy of a valid school ID card.
                                </li>
                                <li>
                                    <strong>Delegate Fee:</strong> Rs 3500
                                </li>
                            </ul>
                            <a 
                                href={individualFormUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn btn-primary registration-card__btn"
                            >
                                Register as Individual
                            </a>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="registration-info">
                        <div className="registration-info__item">
                            <span className="registration-info__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                </svg>
                            </span>
                            <p>Registration charges are <strong>not applicable</strong> for the Faculty Advisor.</p>
                        </div>
                        <div className="registration-info__item">
                            <span className="registration-info__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                                    <line x1="1" y1="10" x2="23" y2="10"/>
                                </svg>
                            </span>
                            <p>Payment details will be shared after registration.</p>
                        </div>
                        <div className="registration-info__item">
                            <span className="registration-info__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12 6 12 12 16 14"/>
                                </svg>
                            </span>
                            <p>Allotments will be on a <strong>first come first serve</strong> basis and will be sent after payment of the registration fee.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Registration;
