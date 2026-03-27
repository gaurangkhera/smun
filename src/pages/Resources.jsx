import './Resources.css';

const Resources = () => {
    const committees = [
        { id: 'general-assembly', name: 'The Disarmament and International Security Committee (DISEC)', bgGuide: '/background_guides/DISEC Background Guide - 2026 (1).pdf', procGuide: '/procedural_guides/Committee Procedure GA-DISEC 2026.pdf' },
        { id: 'humanitarian-committee', name: 'Advisory Commission of UNRWA', bgGuide: '/background_guides/Humanitarian Background Guide.pdf', procGuide: '/procedural_guides/ROP - AdCom UNRWA (1).pdf' },
        { id: 'un-security-council', name: 'UN Futuristic Security Council', bgGuide: '/background_guides/UNSC Background Guide .pdf', procGuide: '/procedural_guides/UNFSC Paperwork and Procedure Guide.pdf' },
        { id: 'indian-committee', name: 'The 13th Lok Sabha', bgGuide: '/background_guides/Background Guide - 13th Lok Sabha-3.pdf', procGuide: '/procedural_guides/Procedural Guide 13th Lok Sabha.pdf' },
        { id: 'crisis-committee', name: 'Ad-Hoc Crisis Committee', bgGuide: null, procGuide: null },
        { id: 'semi-crisis-committee', name: 'The Cognac Strategic Conclave', bgGuide: '/background_guides/Semi Crisis Background Guide_CSC.pdf', procGuide: '/procedural_guides/Semi Crisis Procedure Guide .pdf' },
        { id: 'specialised-committee', name: 'The 110th United States Senate', bgGuide: '/background_guides/Specialised NEW BGG.pdf', procGuide: '/procedural_guides/FINAL - PROCEDURE AND PPW-2.pdf' },
        { id: 'justice-committee', name: 'The Tribunal of the Fallen Sun', bgGuide: null, procGuide: null },
        { id: 'unca-journalism', name: 'UNCA Journalism', bgGuide: '/background_guides/UNCA-Journalism _ Background Guide _ Inter SMUN 26.pdf', procGuide: '/procedural_guides/UNCA-Journalism _ Paperwork and Procedural Guide _ Inter SMUN 26.pdf' },
        { id: 'unca-photography', name: 'UNCA Photography', bgGuide: '/background_guides/UNCA-Photography _ Background Guide _ Inter SMUN 26.pdf', procGuide: '/procedural_guides/UNCA-Photography Procedural Guidelines.pdf' },
        { id: 'unca-cartoonists', name: 'UNCA Cartoonists', bgGuide: '/background_guides/UNCA-C _ Background Guide _  SMUN 26.pdf', procGuide: '/procedural_guides/Paperwork and Procedural Guidelines_UNCAC.pdf' }
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
