import { Link } from 'react-router-dom';
import './Secretariat.css';

const Secretariat = () => {
    // Photo mapping - first name lowercase, special cases for Vedant Prakash and Vedant Beriwal
    const getPhotoPath = (name) => {
        const firstName = name.split(' ')[0].toLowerCase();

        // Special cases
        if (name === 'Vedant Prakash') return '/photos/vedant prakash.JPG';
        if (name === 'Vedant Beriwal') return '/photos/vedant beriwal.JPG';

        return `/photos/${firstName}.JPG`;
    };

    // Available photos
    const availablePhotos = [
        'aaditri', 'aanya', 'aishani', 'aryaman', 'avika', 'deeksha',
        'hrishik', 'jayanti', 'krish', 'manasvi', 'prisha', 'shiven', 'sreeparna',
        'tanvi', 'tejas', 'vedant beriwal', 'vedant prakash', 'vihaan', 'vivan', 'raghav', 'samaira', 'uma', 'prashali', 'jai', 'gaurang', 'sharanya', 'arunika', 'shreya', 'pratik', 'kunal', 'shaurya'
    ];

    const hasPhoto = (name) => {
        const firstName = name.split(' ')[0].toLowerCase();
        if (name === 'Vedant Prakash') return availablePhotos.includes('vedant prakash');
        if (name === 'Vedant Beriwal') return availablePhotos.includes('vedant beriwal');
        return availablePhotos.includes(firstName);
    };

    // Map roles to letter routes
    const letterRoutes = {
        'Secretary General': 'sg',
        'Deputy Secretary General': 'dsg',
        'Director General - Committees': 'dg-committees',
        'Director General - Conference': 'dg-conference',
        'Director General - Outreach': 'dg-outreach',
        'Editor-in-Chief': 'eic'
    };

    const secretariat = [
        // Upper Secretariat
        { role: 'Secretary General', name: 'Aryaman Pragya', row: 1 },
        { role: 'Deputy Secretary General', name: 'Deeksha Singh', row: 2 },
        { role: 'Director General - Committees', name: 'Raghav G Rai', row: 3 },
        { role: 'Director General - Committees', name: 'Aanya Chand', row: 3 },
        { role: 'Director General - Conference', name: 'Hrishik Malhotra', row: 4 },
        { role: 'Director General - Conference', name: 'Krish Aggarwal', row: 4 },
        { role: 'Director General - Outreach', name: 'Manasvi Bhambani', row: 5 },
        { role: 'Director General - Outreach', name: 'Vedant Prakash', row: 5 },
        { role: 'Editor-in-Chief', name: 'Jayanti Yadav', row: 6 },

        // General Assembly Directors
        { role: 'General Assembly', name: 'Aanya Chand', row: 7 },
        { role: 'General Assembly', name: 'Jai Singh', row: 7 },

        // Humanitarian Committee Directors
        { role: 'Humanitarian Committee', name: 'Aishani Purohit', row: 8 },
        { role: 'Humanitarian Committee', name: 'Tejas Veer Singh', row: 8 },
        { role: 'Humanitarian Committee', name: 'Shaurya Banerjee', row: 8 },

        // UNSC Director
        { role: 'UN Security Council', name: 'Raghav Gupta Rai', row: 9 },

        // Indian Committee Directors
        { role: 'Indian Committee', name: 'Aryaman Pragya', row: 10 },
        { role: 'Indian Committee', name: 'Vihaan Rustagi', row: 10 },

        // Crisis Committee Directors
        { role: 'Crisis Committee', name: 'Krish Aggarwal', row: 11 },
        { role: 'Crisis Committee', name: 'Manasvi Bhambani', row: 11 },

        // Semi-Crisis Committee Directors
        { role: 'Semi-Crisis Committee', name: 'Hrishik Malhotra', row: 12 },
        { role: 'Semi-Crisis Committee', name: 'Prashali Dayal', row: 12 },

        // Specialised Committee Directors
        { role: 'Specialised Committee', name: 'Vedant Prakash', row: 13 },
        { role: 'Specialised Committee', name: 'Kunal Aggarwal', row: 13 },

        // Justice Committee Directors
        { role: 'Justice Committee', name: 'Shiven Uppal', row: 14 },
        { role: 'Justice Committee', name: 'Vivan Balhara', row: 14 },

        // UNCA Journalism Directors
        { role: 'UNCA Journalism', name: 'Deeksha Singh', row: 15 },
        { role: 'UNCA Journalism', name: 'Aaditri Prasad', row: 15 },

        // UNCA Photography Directors
        { role: 'UNCA Photography', name: 'Shreya Singh', row: 16 },
        { role: 'UNCA Photography', name: 'Uma Aiyar Walia', row: 16 },

        // UNCA Cartoonists Directors
        { role: 'UNCA Cartoonists', name: 'Sreeparna Mitra', row: 17 },
        { role: 'UNCA Cartoonists', name: 'Tanvi Prabhu', row: 17 },

        // Organising Committee Directors
        { role: 'Organising Committee', name: 'Arunika Gupta', row: 18 },
        { role: 'Organising Committee', name: 'Prisha Pandey', row: 18 },
        { role: 'Organising Committee', name: 'Samaira Jain', row: 18 },
        { role: 'Organising Committee', name: 'Sarah Goel', row: 19 },
        { role: 'Organising Committee', name: 'Vedant Beriwal', row: 19 },

        // Directors of Technical Operations
        { role: 'Technical Operations', name: 'Gaurang Khera', row: 20 },
        { role: 'Technical Operations', name: 'Sharanya Verma', row: 20 },
        { role: 'Technical Operations', name: 'Avika Singh', row: 21 },
        { role: 'Technical Operations', name: 'Pratik Anand', row: 21 },
    ];

    // Get unique rows
    const rows = [...new Set(secretariat.map(m => m.row))].sort((a, b) => a - b);

    // Check if a row is upper secretariat (rows 1-6)
    const isUpperSecretariat = (rowNum) => rowNum <= 6;

    // Get letter route for a role
    const getLetterRoute = (role) => letterRoutes[role] || null;

    return (
        <div className="secretariat">
            {/* Hero */}
            <section className="secretariat-hero">
                <div className="container">
                    <h1 className="secretariat-hero__title">The Secretariat</h1>
                    <p className="secretariat-hero__subtitle">SMUN 2026</p>
                </div>
            </section>

            {/* Secretariat Grid */}
            <section className="secretariat-grid section-lg">
                <div className="container">
                    {rows.map((rowNum) => {
                        const rowMembers = secretariat.filter(m => m.row === rowNum);
                        const isLastUpperSec = rowNum === 6;
                        const isUpperSec = isUpperSecretariat(rowNum);
                        
                        // Track which letter buttons have been shown in this row
                        const rowShownButtons = new Set();
                        
                        return (
                            <div key={rowNum}>
                                <div className="secretariat-row">
                                    {rowMembers.map((member, index) => {
                                        const letterRoute = getLetterRoute(member.role);
                                        // Only show letter button once per role in each row
                                        const shouldShowLetterButton = isUpperSec && letterRoute && !rowShownButtons.has(member.role);
                                        if (shouldShowLetterButton) {
                                            rowShownButtons.add(member.role);
                                        }
                                        
                                        const CardWrapper = isUpperSec && letterRoute ? Link : 'div';
                                        const cardProps = isUpperSec && letterRoute ? { to: `/letter/${letterRoute}` } : {};
                                        
                                        return (
                                            <CardWrapper key={index} className={`member-card ${isUpperSec && letterRoute ? 'member-card--clickable' : ''}`} {...cardProps}>
                                                <div className="member-card__photo">
                                                    {hasPhoto(member.name) ? (
                                                        <img src={getPhotoPath(member.name)} alt={member.name} />
                                                    ) : (
                                                        <div className="member-card__placeholder">
                                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                                                <circle cx="12" cy="8" r="4" />
                                                                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                                                            </svg>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="member-card__content">
                                                    <h3 className="member-card__name">{member.name}</h3>
                                                    <span className="member-card__role">{member.role}</span>
                                                    {shouldShowLetterButton && (
                                                        <span className="member-card__letter-btn">
                                                            View Letter
                                                        </span>
                                                    )}
                                                </div>
                                            </CardWrapper>
                                        );
                                    })}
                                </div>
                                {isLastUpperSec && (
                                    <div className="secretariat-divider">
                                        <span className="secretariat-divider__text">Committee Directors</span>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Secretariat;
