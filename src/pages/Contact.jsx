import './Contact.css';

const Contact = () => {
    const secretariatContacts = [
        { role: 'Secretary General', name: 'Aryaman Pragya', phone: '+91 99110 57775' },
        { role: 'Deputy Secretary General', name: 'Deeksha Singh', phone: '+91 8800923327' },
        { role: 'Director General of Conference', name: 'Hrishik Malhotra', phone: '+91 87009 04157' },
        { role: 'Director General of Conference', name: 'Krish Aggarwal', phone: '+91 9873744038' },
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
