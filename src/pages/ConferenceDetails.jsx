import { Link } from 'react-router-dom';
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

            {/* Content Section */}
            <section className="accommodation-section section-lg">
                <div className="container">
                    <div className="conference-actions">
                        {/* Accommodation PDF Button */}
                        <div className="action-card">
                            <h2>Accommodation</h2>
                            <p>View detailed information about partner hotels and rates.</p>
                            <a 
                                href="/Accomodation Details 2026.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn btn-primary"
                            >
                                Accommodation Details
                            </a>
                        </div>

                        {/* Registration Button */}
                        <div className="action-card">
                            <h2>Registration</h2>
                            <p>Secure your spot for SMUN 2026.</p>
                            <Link to="/registration" className="btn btn-primary">
                                Register Now
                            </Link>
                        </div>

                        {/* Itinerary Button */}
                        <div className="action-card">
                            <h2>Itinerary</h2>
                            <p>View the full schedule and events for the conference.</p>
                            <a 
                                href="/itinerary.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn btn-primary"
                            >
                                View Itinerary
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ConferenceDetails;
