import { useParams, Link } from 'react-router-dom';
import './CommitteeDetail.css';

const CommitteeDetail = () => {
    const { committeeId } = useParams();

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
        'tanvi', 'tejas', 'vedant beriwal', 'vedant prakash', 'vihaan', 'vivan', 'raghav', 'samaira', 'uma', 'prashali', 'jai', 'gaurang', 'sharanya', 'arunika', 'shreya', 'pratik', 'kunal'
    ];

    const hasPhoto = (name) => {
        const firstName = name.split(' ')[0].toLowerCase();
        if (name === 'Vedant Prakash') return availablePhotos.includes('vedant prakash');
        if (name === 'Vedant Beriwal') return availablePhotos.includes('vedant beriwal');
        return availablePhotos.includes(firstName);
    };

    // Committee data
    // logoStyle: 'cover' = fill circle completely, 'scaled' = larger logo with less padding
    const committees = {
        'general-assembly': {
            name: 'The Disarmament and International Security Committee',
            shortName: 'General Assembly',
            logo: '/committees/Logos/UNGA Logo.png',
            logoStyle: 'cover',
            directors: [
                { name: 'Aanya Chand' },
                { name: 'Jai Singh' },
                { name: 'Shaurya Banerjee' }
            ],
            additionalDirectors: ['Ishi Bhaskar', 'Varenya Shekhar', 'Kiaan Uppal'],
            email: 'unga2026.smun@gmail.com',
            agenda: 'Addressing the Instability in the Democratic Republic of Congo during "Africa\'s World War" Following the Assassination of Laurent Kabila and Foreign Military Interventions',
            freezeDate: '18th January, 2001',

            writeup: [
                `"In a dark place we find ourselves, and a little more knowledge lights our way"`,
                `Turmoil, instability, and chaos. This marks the current state of an entire continent. A continent erupting in flames, being pulled apart by forces far larger than its borders. The Democratic Republic of Congo currently stands at the epicenter of one of the most prominent and complex geopolitical conflicts, often termed as "Africa's World War". Rivalry between African states, foreign intervention, non-state actors, widespread instability, political fragmentation, humanitarian devastation, and the rise of regional militant groups have led to extreme conflict.`,
                `The assassination of President Laurent Kabila on 16th January, 2001 destabilised an already crumbling nation, leading to internal turmoil, and raising questions about sovereignty, and most importantly, the future of peace in Africa, and the world. The failure to implement frameworks caused the rise of proxy-wars, scarring the continent with unbridled conflicts, leading to chaos within the international community and the dismantling of the ideal fundamental idea of peace.`,
                `The General Assembly convenes on the 18th of January, 2001, to discuss the multifaceted crisis in the Democratic Republic of Congo in the aftermath of the assassination of Laurent Kabila, within the broader context of the protracted regional conflict. This agenda situates the delegates at a critical juncture marked by drastic political uncertainty and profound economic destabilisation. The committee should set its sights on the erosion of state authority, the involvement of non-state actors and the role of illicit arms trade in sustaining conflict in Central Africa.`,
                `A special emphasis must be set on the regional ramifications of the conflict, including (but not limited to) cross border militarisation and the threat posed to African peace, security and sovereignty. The ethnic conflicts between the Hutus and Tutsis further fueled the domestic discontent with the Kabila government. This eventually involved the armed forces from Rwanda and Uganda (anti-Kabila) and Zimbabwe, Angola, Namibia, and Chad (pro-Kabila).`,
                `DISEC will evaluate the existing international mechanisms related to disarmament, peacekeeping, along with conflict prevention, seeking light from the Congolese conflict. Through substantive deliberation, you, the delegates must seek to advance coordinated international collaboration to promote stability in the region, not just for Africa, but for humanity as a whole.`
            ]
        },
        'humanitarian-committee': {
            name: 'Advisory Commission of the United Nations Relief and Works Agency for Palestine Refugees in the Near East',
            shortName: 'Humanitarian Committee',
            logo: '/committees/Logos/UNRWA.png',
            logoStyle: 'scaled',
            directors: [
                { name: 'Tejas Veer Singh' },
                { name: 'Aishani Purohit' }
            ],
            additionalDirectors: ['Aryav Sachan', 'Avyukt Prasad', 'Divispruk Kapoor'],
            email: 'unrwa2026.smun@gmail.com',
            agenda: 'Safeguarding Humanitarian Corridors in Active Conflict Zones While Upholding Neutrality and International Humanitarian Law aimed to address all forms of Violence with a Special Emphasis on the Palestinian Refugees in the Near East',

            writeup: [
                `"No one puts their children in a boat unless the water is safer than the land" - Warsan Shire`,
                `In situations of armed conflict, the United Nations and the international community as a whole carry an obligation to protect civilian populations caught amid the hostilities. As wars escalate and conflicts become increasingly urbanised and protracted, innocent civilians are often denied access to basic necessities such as food, medical care, shelter, and safe passage. The need to establish humanitarian corridors is quite clear considering that the inability to do so poses a direct threat to civilian survival and represents a significant challenge to the effective application of international humanitarian law.`,
                `Owing to ongoing military operations, shifting frontlines, and the increased risk of violence in civilian areas, current conflicts often make it difficult to establish humanitarian corridors. Both the displaced people seeking evacuation and the humanitarian workers trying to provide life-saving aid face danger owing to these dangerous circumstances. In this regard, the international community bears the responsibility of promoting communication, securing ceasefires, and guaranteeing adherence to the neutrality and security of humanitarian operations conducted by the UN.`,
                `One such example, which has put the international community at a standstill is the plight of the Palestinian refugees in the Near-east. The 'Nakba' or ethnic cleansing initiated by the State of Israel in 1948, formed the foundation of the 1948 Palestine war. Consequently, the United Nations Relief and Works Agency for Palestine Refugees in the Near East (UNRWA) was established in 1949 by the United Nations General Assembly.`,
                `Since October 2023, however, the living conditions of the Palestinians have only deteriorated as the Israel-Hamas war caused famine, instability and violence to deepen its hold over the Gaza Strip and the surrounding regions, with nearly 5.9 million registered refugees living in the registered camps since the start of the conflict. The question of safeguarding humanitarian corridors in these active conflict zones is more pertinent than ever.`,
                `This committee requires you to take up the responsibility to manoeuvre through the narrow lanes of diplomacy, dialogue and cooperation and the very existence of the Palestinian people depends on your ability to handle it. The question is, delegates, will this community continue to live in darkness and uncertainty, or can the international community come together to act as the torchbearers of change and humanity?`
            ]
        },
        'un-security-council': {
            name: 'United Nations Security Council (Futuristic)',
            shortName: 'UN Security Council',
            logo: '/committees/Logos/UNSC LOGO.jpg',
            logoStyle: 'cover',
            directors: [
                { name: 'Raghav Gupta Rai' }
            ],
            additionalDirectors: ['Gauri Tiwari', 'Kanav Rakheja', 'Ishaan Kapoor'],
            email: 'unsc2026.smun@gmail.com',
            agenda: 'The situation in Greenland, 2039',
            freezeDate: 'July 29, 2039',

            writeup: [
                `The stage is set for a conquest in the frozen firmament of the High North. As the old order fractures and the institutions falter, their authority thaws like frost beneath the sun. Greenland emerges from the margins to the very centre of global calculations. Once marginalised, Africa transforms into a colosseum of international rivalry. Competing powers entrench themselves through debt, security and development.`,
                `Amidst this pressure, a charismatic pan-African movement, built around continental unity through water security and shared technological advancements, gains momentum like storm clouds gathering over the savannah. In an era of fragmentation, India aligns its strategic ambitions with the weight of its cultural and civilizational inheritance, ancient and audacious. Following a decisive victory in Ukraine, Russia resurges, expands its influence, and revives a sphere of control that stretches across the region like a shadow across the snow.`,
                `A powerful Southeast Asian alliance emerges as states coordinate militarily to protect their sovereignty and survival against the encroaching tide. A new South American alliance takes shape, a nimbus, transforming regional cooperation into strategic leverage, solidarity into strength. This is not a contest of strategic posturing nor restrained by policy but of survival, where economic lifelines and geopolitical dominance merge into a single, unforgiving calculus. Once distant and forgotten, Greenland rises as a land of near mythic consequence.`,
                `As the world disintegrates into chaos, there emerge, simultaneously, certain dark forces that seek to penetrate the most prestigious addresses of power. Operating from the shadows, these clandestine organisations dictate policy with silent authority, engineer the electorates with calculated precision, and manufacture crises to advance interests that serve no nation, no people, but only themselves.`,
                `At the heart of the struggle over Greenland lies a question that every nation must confront: whether their leaders dare to reshape their destiny at the risk of losing everything, or accept a diminished place in the global order. Greenland stands as the last crown of the Earth, and whoever claims it inherits not the land alone, but the authority to shape the destiny of the world that follows.`
            ]
        },
        'indian-committee': {
            name: 'The Special Session of the 13th Lok Sabha',
            shortName: 'Indian Committee',
            logo: '/committees/Logos/LokSabha.jpeg',
            logoStyle: 'cover',
            directors: [
                { name: 'Aryaman Pragya' },
                { name: 'Vihaan Rustagi' }
            ],
            additionalDirectors: ['Adidev Singh', 'Auraj Razdan', 'Ruhaan Gaggar'],
            email: 'ssloksabha2026.smun@gmail.com',
            agenda: 'Reckoning with the Attack on the Indian Parliament and the Republic\'s Demand for the Prevention of Terrorism Act',
            freezeDate: 'December 18, 2001',

            writeup: [
                `"Terrorism has become a festering wound. It is an enemy of humanity." — Atal Bihari Vajpayee`,
                `On December 13, that wound cut straight into the heart of the Indian Republic. Gunfire has stopped, but the reverberations haven't. Terror forced its way into the nation's most sacred democratic sanctum and opened fire on the very chamber where the mandate of a billion people becomes law. The Parliament of India was sieged, its sandstone walls torn by bullets and its members metres away from an unprecedented national rupture.`,
                `The attack unfolded in an uncertain new world forged in the crucible of 9/11. Nine Indians became the victims of what should have been an unremarkable winter day inside the country's most secure institution. The nation was left reeling as it pondered: Was this Pakistan striking back after the humiliation of Kargil, or was there a darker hand within our own borders?`,
                `With the Prevention of Terrorism Ordinance already in effect and the pressure building for its conversion into a permanent Prevention of Terrorism Act, India faced a recurring question, how much power can a democracy surrender in the name of defending itself? Supporters demand exceptional tools for exceptional threats, but India's own history warns otherwise. MISA normalised sweeping detentions; TADA empowered the State far beyond necessity. POTA risks becoming the next entry in this lineage.`,
                `If the Parliament, the beating heart of the Indian democracy, can be threatened so brazenly, what does it imply for the courts, the states, the civil administration, or the ordinary citizen who believes the Republic's institutions still stand safe? Someone, somewhere, failed and yet in this moment of vulnerability, the House stands divided, its coalition government strained by competing compulsions at a time when unity should be instinctive.`,
                `The stakes could not be higher as this House convenes. Every word spoken, every position taken, and every decision made will shape not only how India responds today, but how it defends itself in the years to come. The weight of the Republic now rests on each of you, the Parliamentarians. Jai Hind!`
            ]
        },
        'crisis-committee': {
            name: 'Ad-Hoc Committee',
            shortName: 'Crisis Committee',
            logo: '/committees/Logos/Adhoc.png',
            logoStyle: 'cover',
            directors: [
                { name: 'Manasvi Bhambani' },
                { name: 'Krish Aggarwal' }
            ],
            additionalDirectors: ['Savya Karri', 'Raaga Varunika', 'Eira Jha'],
            email: 'adhoc2026.smun@gmail.com',
            agenda: 'Classified',
            writeup: [
                `The Ad-Hoc Committee of Sanskriti Model United Nations will provide the delegates with an immersive experience into a world of chaos and conflict. The committee will move at a fast pace, requiring the delegates to be creative and willing to take high stakes decisions.`,
                `"All shall be revealed in due time"`,
            ]
        },
        'semi-crisis-committee': {
            name: 'The Cognac Strategic Conclave',
            shortName: 'Semi-Crisis Committee',
            logo: '/committees/Logos/Semi Crisis Logo.png',
            logoStyle: 'cover',
            directors: [
                { name: 'Hrishik Malhotra' },
                { name: 'Prashali Dayal' }
            ],
            additionalDirectors: ['Madhav Gopal Kamath', 'Vinaayak Banerjee'],
            email: 'csc2026.smun@gmail.com',
            agenda: 'The Italian Renaissance Wars: The Defence of Italian City-States Against the Spanish-Habsburg Alliance',
            freezeDate: 'September 1st, 1526',
            writeup: [
                `Italy shudders as the winds of change blow strongly through, threatening to tip over as her fate balances precariously on a knife's edge. As the forces of the Holy Roman Emperor Charles V gather in the north, the land of Julius Caesar and Marcus Aurelius fears being overrun by the Empire bearing its name and the onus for its defence now lies with the Cognac Strategic Conclave; a shaky alliance formed on the foundation of necessity, not trust.`,
                `The League convenes in the wake of the Holy Roman Empire's demolition of French might at Pavia, the Habsburgs now boasting control of both Milan and Naples. The French Army, which once threatened to invade all of Italy is now, its protector. With Italy's fate resting on so unlikely a shield, the Conclave is the last line of defense against the Habsburgs' domination of Europe.`,
                `Foreign powers circle, looking for an opportunity such as the one that the Ottomans took advantage of to wound the Empire at the battle of Mohacs as King Henry VIII looked on with feigned detachment. It falls to you to decide if the devil you know is better than the devil you don't. Simultaneously, Charles' presence looms, biding his time and waiting for his armies to ring the death knell for Italy.`,
                `The Conclave assembles at the behest of Pope Clement VII and comprises the states of France, Venice, Milan, Florence and the Papal States. As delegates, you will assume the roles of rulers, nobles and generals & must consider your personal allegiances and ambitions in addition to the overarching conflict. Alliances will be formed and broken, battles will be fought, and crises will be abundant as you strive to formulate the Corex Bellorum.`,
                `The bards will sing about this for millennia to come. What do you wish to be remembered as? The noble alliance which defended Italy against all odds, or the ineffective posturers who squabbled as Rome fell into ruin? Delegates, your mettle will be forged in the crucible of war. Act, or succumb to the verdict of history.`
            ]
        },
        'specialised-committee': {
            name: 'Emergency Session of the 110th United States Senate',
            shortName: 'Specialised Committee',
            logo: '/committees/Logos/US Senate_Specialised.png',
            logoStyle: 'scaled',
            directors: [
                { name: 'Vedant Prakash' },
                { name: 'Kunal Aggarwal' }
            ],
            additionalDirectors: ['Aarav Mishra', 'Arnav Gupta'],
            email: 'ussenate2026.smun@gmail.com',
            agenda: 'The 2008 Financial Crisis (Addressing the 2008 Financial Fallout and Formulating Urgent National Strategies to Restore National Economic Stability)',
            freezeDate: '15th September 2008',

            writeup: [
                `"Desperate Times, Desperate Measures"`,
                `In the early hours of September 15th, an institution that was considered to be the "titan" of Wall Street, the 158-year-old investment bank Lehman Brothers, filed for bankruptcy. The world's largest economy now stands on the verge of collapse. Within minutes, shockwaves tore through the global market, rattling the various financial capitals across the world as the markets convulsed, credit froze, and the investors' trust evaporated into thin air.`,
                `The Collapse of '08 was not just an ordinary market crash. Since 2003, trillions of dollars have been funneled into the deeply unpopular war that America was fighting in Iraq, and this left the domestic economy to rot in silence. Home loans were no longer evaluated on the ability to repay but rather on their capacity to be traded. Through layers of financial trickery, fragile mortgages were repackaged and dispersed across global markets.`,
                `The result was a tanked economy addicted to leverage, far from reality, and on the verge of collapse. As of now, corporate giants are shedding jobs by thousands, banks are in free fall, insurers are on the edge, and millions of Americans are hopelessly watching their American Dream go into vain.`,
                `The President has called for an Extraordinary/Emergency Session of the United States Senate. The Senate is now faced with a path with no safe choice. The delegates of the Emergency Session of the 110th United States Senate will be stepping into the shoes of key senators and other key political and financial figures. The war in Iraq is not going away. Should it continue, and, if so, how are we going to pay for it? This is more than a financial crisis. It is a test of the American system of Government.`
            ]
        },
        'justice-committee': {
            name: 'The Tribunal of the Fallen Sun',
            shortName: 'Justice Committee',
            logo: '/committees/Logos/The Jutice Committee LOGO.jpeg',
            logoStyle: 'scaled',
            directors: [
                { name: 'Shiven Uppal' },
                { name: 'Vivan Balhara' }
            ],
            additionalDirectors: ['Aarav Gupta', 'Aashi Chaure', 'Jaivir Dhingra'],
            email: 'tjc2026.smun@gmail.com',
            agenda: 'The Tokyo Trials, following Japan\'s surrender in World War 2, August 1945',
            freezeDate: '20 August 1945 (5 days after Japan\'s unsigned surrender) ',
            writeup: [
                `"End to war is not an end to justice."`,
                `No longer does the mechanical hum of decimation echo across the Tokyo skies. A simple five days have passed since the emperor declared his defeat on the radio, bestowing upon his people the kindest mercy he has offered thus far. The bloodied and battered lands of East Asia, long exhausted from massacres, murders and mass brutality, now wait with bated breath. Emperor Hirohito and his high command face yet another war against the West; only this time, in the courtroom.`,
                `The fate of the nation, the torchbearers of its downfall, the Japanese High Command, now await trial. Forced to address the consequences of their crimes, the military men of Japan must confront their own reflections in the river of blood they left screaming in their wake. With the emperor claiming surrender, the loud screams on the battlefields have now fallen silent.`,
                `Japan finds itself in disarray, lacking any political system. Prolonged wars have also drained the country economically. Its cities have been brought to shambles, with its citizens crushed. Having signed no document stating its official surrender, its future remains uncertain. But not all citizens' hopes have been extinguished. Their conscience and heterodoxical ideology still push them to fight. To address this sensitive issue, 'The Tribunal of the Fallen Sun' was conceived.`,
                `Delegates will broadly split up into the Allied and the Axis powers and will be given the task to put forward and defend accusations and question accountability. As the tribunal convenes, this is no longer a question of victory or defeat. It's about accountability. The men who once issued orders from behind the maps now face the consequences for their actions.`
            ]
        },
        'unca-journalism': {
            name: 'United Nations Correspondents Association - Journalism',
            shortName: 'UNCA Journalism',
            logo: '/committees/Logos/UNCA Logo.jpg',
            directors: [
                { name: 'Deeksha Singh' },
                { name: 'Aaditri Prasad' }
            ],
            additionalDirectors: ['Sharadha K.V.', 'Disha Karmarkar'],
            email: 'uncajournalism2026.smun@gmail.com',
            agenda: [
                'Reporting on the Conference.',
                'Analysing the role of media in the Arab Spring with a special emphasis on the Tunisian revolution in light of the media blackout following the self-immolation of Mohamed Bouazizi.'
            ],
            freezeDate: '20th December 2010',

            writeup: [
                `"When people will to live, Destiny must surely respond" - Abul-Qacem Echebbi`,
                `The Arab Spring began, as most revolutions often do: with silence. In December 2010, when Mohamed Bouazizi set himself ablaze in Sidi Bouzid, the Tunisian state attempted to erase the radical act of self-immolation from the public memory through an aggressive media blackout. What followed exposed a fundamental tension at the heart of modern political power: the desire of authoritarian regimes to control narratives, and the growing impossibility of doing so in a digitised world.`,
                `The blackout was no longer a barrier but a provocation. The Tunisian Revolution demonstrated that control over territory no longer guaranteed control over meaning. Power struggled to keep pace with a media ecology that was fragmented, transnational, and resistant to central authority.`,
                `Every journalist is allotted a news agency, which becomes their portfolio for the rest of the conference. Journalists are obligated to adopt the bias of their news agency throughout reporting and committee sessions. Over the three days of the conference, journalists will be mandated to compose a myriad of articles of varied kinds.`,
                `UNCA's journalists also have the unique opportunity to conduct press conferences, where they interrogate the delegates of their allotted sub-committees. Here, they possess the power to hold the delegates accountable.`
            ]
        },
        'unca-photography': {
            name: 'United Nations Correspondents Association - Photography',
            shortName: 'UNCA Photography',
            logo: '/committees/Logos/UNCA Logo.jpg',
            directors: [
                { name: 'Shreya Singh' },
                { name: 'Uma Aiyar Walia' }
            ],
            additionalDirectors: ['Amyra Rachel Solomon'],
            email: 'uncap2026.smun@gmail.com',
            agenda: 'Immortalising the Conference: Capturing Debates and Turning Moments into Legacies',

            writeup: [
                `The photographers are an essential part of SMUN. Being a part of this committee, a photographer must capture the pivotal moments and provide an artistic perspective through each image. From covering the mundane committee proceedings to dramatic crisis sessions, the UNCA photographers aim to shed light to the unnoticed.`,
                `The committee sessions of the UNCA-Photographers will be segregated into photography sessions, and crisis sessions. During the photography sessions, photographers will be required to work on their tasks and submissions and during the crisis sessions, photographers will have to use their skills under high pressure circumstances and work as a team.`,
                `Each delegate is allotted a news agency, and their role is to reflect that agency's history, rivalries, and most importantly, its biases. Understanding these biases allows the delegates to capture moments and write captions that reflect their agency's perspective.`,
                `Please note that to partake in the committee, the photographer must be in possession of a DSLR camera.`
            ]
        },
        'unca-cartoonists': {
            name: 'United Nations Correspondents Association - Cartooning',
            shortName: 'UNCA Cartoonists',
            logo: '/committees/Logos/UNCA Logo.jpg',
            directors: [
                { name: 'Sreeparna Mitra' },
                { name: 'Tanvi Prabhu' }
            ],
            additionalDirectors: ['Yehom Konwar Gogoi'],
            email: 'Uncac2026.smun@gmail.com',
            agenda: [
                'Reporting on the Conference Through Political Cartooning.',
                'Deliberating on the State Retaliation and the Threats to Press Freedom Faced by Journalists in the Aftermath of the Panama Papers.'
            ],
            freezeDate: '3rd April 2016',

            writeup: [
                `In an age awash with information and yet governed by silence, an unnamed voice dared to speak through the hush of power. One mail, 11.5 million documents, 2.6 terabytes of enforced obscurity. On 3rd April 2016, what the world witnessed was not merely the biggest information leak of history; it was a collective outcry of truths long buried and voices long silenced. The Panama Papers exposed an intricate network of financial secrecy that entangled political leaders, multinational corporations, and elites across the globe.`,
                `In the wake of the Panama Papers, journalists across the globe were reminded of the cost of deviance. Surveillance became routine, harassment and threats against journalists were orchestrated and the very institutions tasked with protecting free expression stood complicit in its erosion.`,
                `At SMUN, cartoonists function as visual narrators, translating committee debates, negotiations and tensions into nuanced emotions and imagery. Cartoonists serve as representatives of their allotted news agencies and will be required to navigate through the finer distinctions of reporting.`
            ]
        }
    };

    const committee = committees[committeeId];


    return (
        <div className="committee-detail">
            {/* Hero */}
            <section className="committee-detail-hero">
                <div className="container">
                    <Link to="/committees" className="back-link">
                        <span className="back-arrow">←</span> Back to Committees
                    </Link>
                    {committee.logo && (
                        <div className={`committee-detail-hero__logo-wrapper ${committee.logoStyle ? `committee-detail-hero__logo-wrapper--${committee.logoStyle}` : ''}`}>
                            <img
                                src={committee.logo}
                                alt={`${committee.shortName} Logo`}
                                className="committee-detail-hero__logo-img"
                            />
                        </div>
                    )}
                    <h1 className="committee-detail-hero__title">{committee.name}</h1>
                    <p className="committee-detail-hero__subtitle">SMUN 2026</p>
                </div>
            </section>

            {/* Directors Section */}
            <section className="committee-directors">
                <div className="container">
                    <h2 className="section-title">Committee Directors</h2>
                    <div className="directors-row">
                        {committee.directors.map((director, index) => (
                            <div key={index} className="director-card">
                                <div className="director-card__photo">
                                    {hasPhoto(director.name) ? (
                                        <img src={getPhotoPath(director.name)} alt={director.name} />
                                    ) : (
                                        <div className="director-card__placeholder">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                                <circle cx="12" cy="8" r="4" />
                                                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                <h3 className="director-card__name">{director.name}</h3>
                                <span className="director-card__role">Director</span>
                            </div>
                        ))}
                    </div>

                    {committee.additionalDirectors && (
                        <div className="additional-directors">
                            <p><strong>Additional Directors:</strong> {committee.additionalDirectors.join(', ')}</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Committee Info & Write-up */}
            <section className="committee-writeup">
                <div className="container">

                    {/* Prominent Agenda Section */}
                    {committee.agenda && (
                        <div className="committee-agenda">
                            <h2 className="committee-agenda__title">Agenda</h2>
                            <div className="committee-agenda__content">
                                {Array.isArray(committee.agenda) ? (
                                    <ol className="committee-agenda__list">
                                        {committee.agenda.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ol>
                                ) : (
                                    <p>{committee.agenda}</p>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Committee Metadata */}
                    <div className="committee-meta">
                        {committee.freezeDate && (
                            <div className="committee-meta__item">
                                <h3>Freeze Date</h3>
                                <p>{committee.freezeDate}</p>
                            </div>
                        )}
                        {committee.email && (
                            <div className="committee-meta__item">
                                <h3>Email</h3>
                                <p><a href={`mailto:${committee.email}`}>{committee.email}</a></p>
                            </div>
                        )}
                    </div>

                    <h2 className="section-title">About the Committee</h2>
                    <div className="writeup-placeholder">
                        {committee.writeup.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>


                </div>
            </section>
        </div>
    );
};

export default CommitteeDetail;
