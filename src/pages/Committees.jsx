import './Committees.css';

const Committees = () => {
    const committees = [
        'General Assembly',
        'UN Security Council',
        'Semi Crisis Committee',
        'Humanitarian Committee',
        'Crisis Committee',
        'Indian Parliament',
        'Specialized Committee',
        'UNCA',
        'UNCA-Journalists',
        'UNCA-Cartoonists',
        'UNCA-Photographers',
    ];

    return (
        <div className="committees">
            {/* Hero */}
            <section className="committees-hero">
                <div className="container">
                    <h1 className="committees-hero__title">Committees</h1>
                    <p className="committees-hero__subtitle">SMUN 2026</p>
                </div>
            </section>

            {/* Committees List */}
            <section className="committees-list section-lg">
                <div className="container">
                    <div className="committees-list__grid">
                        {committees.map((committee, index) => (
                            <div key={index} className="committee-item">
                                <span className="committee-item__name">{committee}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Committees;
