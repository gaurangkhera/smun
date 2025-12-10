import './ConferenceDetails.css';

const ConferenceDetails = () => {
    return (
        <div className="conference-details">
            {/* Hero */}
            <section className="conference-hero">
                <div className="container">
                    <h1 className="conference-hero__title">Conference Details</h1>
                    <p className="conference-hero__subtitle">SMUN 2026</p>
                </div>
            </section>

            {/* Coming Soon */}
            <section className="coming-soon section-lg">
                <div className="container">
                    <div className="coming-soon__content">
                        <h2>Coming Soon</h2>
                        <p>Conference details, schedule, and registration information will be announced shortly.</p>
                        <p className="coming-soon__date">April 22–24, 2026</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ConferenceDetails;
