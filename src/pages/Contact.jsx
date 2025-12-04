import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create mailto link with form data
        const mailtoLink = `mailto:munsanskritischool@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="contact">
            {/* Hero */}
            <section className="contact-hero">
                <div className="container">
                    <span className="contact-hero__eyebrow font-accent">Get In Touch</span>
                    <h1 className="contact-hero__title">Contact Us</h1>
                    <p className="contact-hero__subtitle">
                        Have questions about SMUN 2025? We'd love to hear from you.
                        Reach out to us and we'll respond as soon as we can.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="contact-content section-lg">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Information */}
                        <div className="contact-info">
                            <div className="contact-info__section">
                                <h3 className="contact-info__title">
                                    <span className="contact-info__icon">◆</span>
                                    Address
                                </h3>
                                <address className="contact-info__text">
                                    <p>Sanskriti School</p>
                                    <p>Dr. S. Radhakrishnan Marg</p>
                                    <p>Chanakyapuri</p>
                                    <p>New Delhi, Delhi - 110021</p>
                                </address>
                            </div>

                            <div className="contact-info__section">
                                <h3 className="contact-info__title">
                                    <span className="contact-info__icon">◆</span>
                                    Email
                                </h3>
                                <a href="mailto:munsanskritischool@gmail.com" className="contact-info__link">
                                    munsanskritischool@gmail.com
                                </a>
                            </div>

                            <div className="contact-info__section">
                                <h3 className="contact-info__title">
                                    <span className="contact-info__icon">◆</span>
                                    Social Media
                                </h3>
                                <a
                                    href="https://instagram.com/sanskritimun"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-info__link"
                                >
                                    @sanskritimun
                                </a>
                            </div>

                            <div className="contact-info__map">
                                <div className="map-placeholder">
                                    <div className="map-placeholder__content">
                                        <span className="map-placeholder__icon">◈</span>
                                        <span className="map-placeholder__text">Chanakyapuri, New Delhi</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <div className="contact-form-header">
                                <h2>Send Us a Message</h2>
                                <p>Fill out the form below and we'll get back to you shortly.</p>
                            </div>

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="form-input"
                                        placeholder="Your full name"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="form-input"
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject" className="form-label">Subject</label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="form-input"
                                        required
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Delegate Registration">Delegate Registration</option>
                                        <option value="Sponsorship">Sponsorship</option>
                                        <option value="Press & Media">Press & Media</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="form-input form-textarea"
                                        placeholder="Your message..."
                                        rows="5"
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary form-submit">
                                    Send Message
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
