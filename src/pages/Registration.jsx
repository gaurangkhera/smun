import './Registration.css';

const Registration = () => {
    return (
        <div className="registration">
            {/* Hero */}
            <section className="registration-hero">
                <div className="container">
                    <h1 className="registration-hero__title">Registration</h1>
                    <p className="registration-hero__subtitle">SMUN 2026</p>
                </div>
            </section>

            {/* Coming Soon */}
            <section className="coming-soon section-lg">
                <div className="container">
                    <div className="coming-soon__content">
                        <h2>Coming Soon</h2>
                        <p>Registration will open shortly. Stay tuned for updates!</p>
                        <p className="coming-soon__date">April 22–24, 2026</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Registration;
