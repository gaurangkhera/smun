import './Contact.css';

const Contact = () => {
    const secretariatContacts = [
        { role: 'Secretary General', name: 'Aryaman Pragya', phone: '+91 99110 57775' },
        { role: 'Deputy Secretary General', name: 'Deeksha Singh', phone: '+91 8800923327' },
        { role: 'Director General - Conference', name: 'Hrishik Malhotra', phone: '+91 87009 04157' },
        { role: 'Director General - Conference', name: 'Krish Aggarwal', phone: '+91 9873744038' },
        { role: 'Director General - Outreach', name: 'Manasvi Bhambani', phone: '+91 98930 83119' },
        { role: 'Director General - Outreach', name: 'Vedant Prakash', phone: '+91 74391 17006' },
    ];

    const munCoordinators = [
        {
            name: 'Ms. Manisha Choudhury',
            phone: '+91 98105 01965',
            email: 'manishachoudhury@sanskritischool.edu.in'
        },
        {
            name: 'Ms. Swati Shukla',
            phone: '+91 90133 11777',
            email: 'swatishukla@sanskritischool.edu.in'
        },
    ];

    return (
        <div className="contact">
            {/* Hero */}
            <section className="contact-hero">
                <div className="container">
                    <h1 className="contact-hero__title">Contact Us</h1>
                    <p className="contact-hero__subtitle">SMUN 2026</p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="contact-content section-lg">
                <div className="container">
                    <div className="contact-grid">
                        {/* Secretariat Contacts */}
                        <div className="contact-section">
                            <h2 className="contact-section__title">Secretariat</h2>
                            <div className="contact-cards">
                                {secretariatContacts.map((contact, index) => (
                                    <div key={index} className="contact-card">
                                        <h3 className="contact-card__name">{contact.name}</h3>
                                        <span className="contact-card__role">{contact.role}</span>
                                        <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="contact-card__phone">
                                            {contact.phone}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* MUN Coordinators */}
                        <div className="contact-section">
                            <h2 className="contact-section__title">MUN Coordinators</h2>
                            <div className="contact-cards">
                                {munCoordinators.map((coordinator, index) => (
                                    <div key={index} className="contact-card contact-card--coordinator">
                                        <h3 className="contact-card__name">{coordinator.name}</h3>
                                        <a href={`tel:${coordinator.phone.replace(/\s/g, '')}`} className="contact-card__phone">
                                            {coordinator.phone}
                                        </a>
                                        <a href={`mailto:${coordinator.email}`} className="contact-card__email">
                                            {coordinator.email}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Address */}
                        <div className="contact-section">
                            <h2 className="contact-section__title">Address</h2>
                            <address className="contact-address">
                                <p>Sanskriti School</p>
                                <p>Dr. S. Radhakrishnan Marg</p>
                                <p>Chanakyapuri</p>
                                <p>New Delhi, Delhi - 110021</p>
                            </address>
                        </div>

                        {/* Email */}
                        <div className="contact-section">
                            <h2 className="contact-section__title">General Enquiries</h2>
                            <a href="mailto:munsanskritischool@gmail.com" className="contact-email">
                                munsanskritischool@gmail.com
                            </a>
                            <div className="contact-social">
                                <a
                                    href="https://instagram.com/sanskritimun"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-social__link"
                                >
                                    <svg className="contact-social__icon" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                    @sanskritimun
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
