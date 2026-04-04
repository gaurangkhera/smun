import './Resources.css';

const Resources = () => {
    const committees = [
        { id: 'general-assembly', name: 'The Disarmament and International Security Committee (DISEC)', bgGuide: '/background_guides/disec-bg.pdf', procGuide: '/procedural_guides/disec-proc.pdf' },
        { id: 'humanitarian-committee', name: 'Advisory Commission of UNRWA', bgGuide: '/background_guides/humanitarian-bg.pdf', procGuide: '/procedural_guides/humanitarian-proc.pdf' },
        { id: 'un-security-council', name: 'UN Futuristic Security Council', bgGuide: '/background_guides/unsc-bg.pdf', procGuide: '/procedural_guides/unsc-proc.pdf' },
        { id: 'indian-committee', name: 'The 13th Lok Sabha', bgGuide: '/background_guides/lok-sabha-bg.pdf', procGuide: '/procedural_guides/lok-sabha-proc.pdf' },
        { id: 'crisis-committee', name: 'Ad-Hoc Crisis Committee', bgGuide: null, procGuide: null },
        { id: 'semi-crisis-committee', name: 'The Cognac Strategic Conclave', bgGuide: '/background_guides/csc-bg.pdf', procGuide: '/procedural_guides/csc-proc.pdf' },
        { id: 'specialised-committee', name: 'The 110th United States Senate', bgGuide: '/background_guides/senate-bg.pdf', procGuide: '/procedural_guides/final-proc.pdf' },
        { id: 'justice-committee', name: 'The Tribunal of the Fallen Sun', bgGuide: '/background_guides/justice-bg.pdf', procGuide: '/procedural_guides/justice-proc.pdf' },
        { id: 'unca-journalism', name: 'UNCA Journalism', bgGuide: '/background_guides/unca-journalism-bg.pdf', procGuide: '/procedural_guides/unca-journalism-proc.pdf' },
        { id: 'unca-photography', name: 'UNCA Photography', bgGuide: '/background_guides/unca-photography-bg.pdf', procGuide: '/procedural_guides/unca-photography-proc.pdf' },
        { id: 'unca-cartoonists', name: 'UNCA Cartoonists', bgGuide: '/background_guides/unca-cartoonists-bg.pdf', procGuide: '/procedural_guides/unca-cartoonists-proc.pdf' }
    ];

    return (
        <div className="resources">
            {/* Hero */}
            <section className="resources-hero">
                <div className="container">
                    <h1 className="resources-hero__title">Resources</h1>
                    <p className="resources-hero__subtitle">SMUN 2026 Committee Guides & Paperwork</p>
                </div>
            </section>

            {/* Resources List */}
            <section className="resources-content section-lg">
                <div className="container">
                    <div className="resources-grid">
                        {committees.map((committee) => (
                            <div key={committee.id} className="resource-card">
                                <h3 className="resource-card__title">{committee.name}</h3>
                                <div className="resource-card__buttons">
                                    {committee.combinedGuide ? (
                                        <a 
                                            href={committee.combinedGuide} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="resource-btn"
                                            style={{ gridColumn: '1 / -1' }}
                                        >
                                            Background & Procedure Guide
                                        </a>
                                    ) : (
                                        <>
                                            <a 
                                                href={committee.bgGuide || "#"} 
                                                target={committee.bgGuide ? "_blank" : "_self"}
                                                rel="noopener noreferrer"
                                                className={`resource-btn ${!committee.bgGuide ? 'resource-btn--disabled' : ''}`}
                                                onClick={(e) => !committee.bgGuide && e.preventDefault()}
                                            >
                                                Background Guide
                                            </a>
                                            <a 
                                                href={committee.procGuide || "#"} 
                                                target={committee.procGuide ? "_blank" : "_self"}
                                                rel="noopener noreferrer"
                                                className={`resource-btn resource-btn--secondary ${!committee.procGuide ? 'resource-btn--disabled' : ''}`}
                                                onClick={(e) => !committee.procGuide && e.preventDefault()}
                                            >
                                                Paperwork & Procedure Guide
                                            </a>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resources;
