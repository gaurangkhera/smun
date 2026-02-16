import { Link } from 'react-router-dom';
import './ConferenceDetails.css';

const ConferenceDetails = () => {
    const hotels = [
        { id: 1, name: "Hotel Diplomat - Chanakyapuri", single: "7,000", double: "7,875", triple: "9,000" },
        { id: 2, name: "SaltStayz - Connaught Place", single: "12,500", double: "13,000", triple: "N/A" },
        { id: 3, name: "SaltStayz - Malcha Marg", single: "8,500", double: "9,000", triple: "10,000" },
        { id: 4, name: "Iris Park Safdarjung Enclave", single: "5,250", double: "6,000", triple: "7,000" },
        { id: 5, name: "Hotel Samrat", single: "7,700", double: "9,800", triple: "N/A" },
        { id: 6, name: "Cozy Grand @Chanakyapuri", single: "5,500 + GST", double: "6,500 + GST", triple: "7,500 + GST" },
        { id: 7, name: "Jaypee Vasant Continental - Vasant Vihar", single: "12,980", double: "13,570", triple: "15,930" },
        { id: 8, name: "Vishwa Yuvak Kendra - Chanakyapuri", single: "2,730", double: "2,730", triple: "3,780" },
        { id: 9, name: "Sarovar Portico - Naraina", single: "5,775", double: "6,300", triple: "6,825" },
        { id: 10, name: "Sarovar Portico - Green Park", single: "7,350", double: "7,875", triple: "10,620" }
    ];

    return (
        <div className="conference-details">
            {/* Hero */}
            <section className="conference-hero">
                <div className="container">
                    <h1 className="conference-hero__title">Conference Details</h1>
                    <p className="conference-hero__subtitle">SMUN 2026</p>
                </div>
            </section>

            {/* Accommodation Details */}
            <section className="accommodation-section section-lg">
                <div className="container">
                    <h2 className="section-title">Accommodation Details</h2>
                    <p className="section-subtitle">SMUN 2026</p>

                    <div className="table-responsive">
                        <table className="accommodation-table">
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Name of Hotel</th>
                                    <th>Single Occupancy</th>
                                    <th>Double Occupancy</th>
                                    <th>Triple Occupancy</th>
                                </tr>
                            </thead>
                            <tbody>
                                {hotels.map((hotel) => (
                                    <tr key={hotel.id}>
                                        <td>{hotel.id}.</td>
                                        <td>{hotel.name}</td>
                                        <td>{hotel.single}</td>
                                        <td>{hotel.double}</td>
                                        <td>{hotel.triple}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="accommodation-info">
                        <div className="info-card">
                            <h3>Important Notes</h3>
                            <ul className="info-list">
                                <li>All hotels have WiFi and Breakfast included.</li>
                                <li>All prices are per night in INR and inclusive of GST (except CozyGrand).</li>
                                <li>Payment for accommodation can be made directly to the concerned hotel.</li>
                            </ul>
                        </div>

                        <div className="info-card">
                            <h3>Contact Information</h3>
                            <p>Further information will be provided after the choice of hotel has been communicated to:</p>
                            <div className="contact-persons">
                                <div className="contact-person">
                                    <strong>Ms. Mona Singh Rekhi</strong>
                                    <p>Ph. No. 8860014594</p>
                                    <a href="mailto:monasingh@sanskritischool.edu.in">monasingh@sanskritischool.edu.in</a>
                                </div>
                                <div className="contact-person">
                                    <strong>Ms. Manisha Choudhury</strong>
                                    <p>Ph. No. 9810501965</p>
                                    <a href="mailto:manishachoudhury@sanskritischool.edu.in">manishachoudhury@sanskritischool.edu.in</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="transport-section">
                        <h3>Transport Facilities</h3>
                        <ul className="transport-list">
                            <li>Pick up and drop off from and to the Railway Station / Airport.</li>
                            <li>Pick up from the hotel and drop off to the hotel on the 3 days of the conference.</li>
                            <li>These facilities will be provided to schools staying in any of these places or any other within a 5-6 kms radius of the school.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Registration Open */}
            <section className="coming-soon">
                <div className="container">
                    <div className="coming-soon__content">
                        <h2>Registrations Now Open</h2>
                        <div style={{ marginTop: '2rem' }}>
                            <Link to="/registration" className="btn btn-primary">
                                Register Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ConferenceDetails;
