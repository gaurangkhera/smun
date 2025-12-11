import './Committees.css';

const Committees = () => {
    return (
        <div className="committees">
            {/* Hero */}
            <section className="committees-hero">
                <div className="container">
                    <h1 className="committees-hero__title">Committees</h1>
                    <p className="committees-hero__subtitle">SMUN 2026</p>
                </div>
            </section>

            {/* Coming Soon */}
            <section className="coming-soon section-lg">
                <div className="container">
                    <div className="coming-soon__content">
                        <div className="coming-soon__icon">◈</div>
                        <h2>Coming Soon</h2>
                        <p>Committee details and agendas will be announced shortly.</p>
                        <p className="coming-soon__date">Stay tuned!</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Committees;
