import { useParams, Link } from 'react-router-dom';
import './Letter.css';

const Letter = () => {
    const { role } = useParams();

    const letters = {
        'sg': {
            title: 'Secretary General',
            author: 'Aryaman Pragya',
            content: [
                `"We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far." – Swami Vivekanand`,
                `Namaste! I am Aryaman Pragya, and it is my honour to serve as the Secretary-General of the 14th edition of the Sanskriti Model United Nations. At the heart of this edition lies a singular force: the power of thought. Thought is the fundamental root of every utterance, inquiry, and resolution, determining the challenges we face, the views we hold, and the solutions we propagate. In a world of superficial conviction and clamour, thought becomes an indispensable catalyst.`,
                `This conference is built to catalyse that thinking. It invites you to grapple with issues that have shaped the world and continue to challenge it today. It urges you to transcend singular narratives and to recognise that no issue exists in pristine isolation. Only when we think can we act with integrity, only with thought do words acquire their weight. Every idea you articulate matters because every idea carries consequence into the world beyond this room. Here at Sanskriti, our guiding principle has always been axiomatic: Knowledge is Liberation.`,
                `To our returning delegates: you understand what SMUN asks of you. This year, we ask for more. The committees are designed not only to test you but to deepen you. To our first-time delegates: do not mistake unfamiliarity for inadequacy. The questions here are not meant to be easy, but they are meant to be answerable, with effort, rigour, and honesty. The Executive Boards have been assembled to push back, to challenge you, and to recognise those who rise to the occasion.`,
                `We do not seek spectacle. We do not reward performance for its own sake. What we value is clarity, substance, and the courage to engage. If you come prepared to think and to speak with purpose, you will find a space where your assumptions will be interrogated and your convictions sharpened. A space where those willing to think will thrive. We look forward to welcoming you.`,
                `Until April.`,
                `Warm regards,`,
                `Aryaman Pragya`,
                `Secretary-General`
            ]
        },
        'dsg': {
            title: 'Deputy Secretary General',
            author: 'Deeksha Singh',
            content: [
                `"In order for me to write poetry that isn't political, I must listen to the birds, and in order to hear the birds, the warplanes must be silent." ~ Marwan Makhoul`,
                `Greetings delegates and faculty advisors!`,
                `To recognise the familiar all-consuming passion and the unquenchable thirst to quote French law as easily as the night sky turns dark, to memorise all of Churchill's work by dawn, the addiction to write in labyrinthine sentences as if it were merely breathing, is to understand what drove me to step into my very first Model United Nations conference. The mere act of acknowledging the inner raconteur within all of us is to realise that even the most reticent voice in this discussion is louder than the most deafening cry of the tyrannical mob. Whether your poison may be the quiet hours of the night illuminated solely by the glaring light of your laptop screen, or whether it may be crumpled papers and half-drunk coffee cups in the hotel café, the underlying truth remains unchanged: as you pick up the quill, your soliloquies metamorphose.`,
                `Many of you may fail to realise it, but each word uttered, each word scribbled, every pause and inflexion, all culminate in the very existence of the discourse and debate we revere as democracy. I fail to utilise, befittingly, the English lexicon in a manner which allows me to elucidate the veracious impact of the mere notion of a Model United Nations, and therefore, feel the acute need to express my sentiments by way of the phrase, "Malo periculosam, libertatem quam quietam servitutem". Quoted additionally by a contentious yet significant figure of American history, Thomas Jefferson, its literal translation goes along the lines of "I prefer dangerous freedom over peaceful slavery"; Latin may be what some might term a "dead language", yet its phrases ring true in the hallowed thresholds of the present.`,
                `As those three days creep by and the mist settles, condensing into minuscule dew droplets on the windowsill, a phenomenon described best as a "whirlwind" may begin to subside within your body. It is my duty and privilege to advise you to embrace the unknown; fear not the void, nor the darkness, nor even the formidable ravine staring up at you with yearning in its midnight eyes. Instead, let yourself be carried away by the Stygian waves, consuming every inch of your being, yet leaving behind only the bravest parts of you.`,
                `Thus, delegates, it is not polished arguments or silencing rhetoric we wish to see, but the most courageous version of you, for to err is human and to rise divine.`,
                `I wish you all the very best!`,
                `With warm regards`,
                `Deeksha Singh`,
                `Deputy Secretary General`
            ]
        },
        'dg-committees': {
            title: 'Directors General of Committees',
            authors: ['Raghav G Rai', 'Aanya Chand'],
            multipleLetters: [
                {
                    author: 'Raghav G Rai',
                    content: [
                        `Greetings delegates and faculty advisors!`,
                        `Ah! The weight of inheritance that weighs upon me. The mighty Indian epics, the meditations of Greek philosophers, the authority of Roman law, the timeless force of Shakespeare's plays, the precision of Latin maxims, the philosophies, laws, texts, and traditions that resist neat enumeration, and the speeches of the greatest leaders of past millennia all lie before me. Yet amid this vast inheritance, I am reminded of the words of Theodore Roosevelt: "It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming."`,
                        `Over the course of this conference, you will inhabit more than one simulation. Inside committee, nothing is permitted to remain intact. Every claim is interrogated, every motive examined, every apparent certainty treated with suspicion. No coin is one-sided. No position is self-justifying. Every accusation carries a defence, and every defence demands scrutiny in return. You learn to hold opposing truths without retreat, to argue against your own instinct, and to recognise that clarity is rarely clean. Judgment here is not about comfort or conviction. It is about perspective.`,
                        `As day folds into night, in the national capital, where the Union's burden rests, time changes everything and nothing at the same time. Fatigue settles in quietly, thinning patience and stripping away ease, but the demand to think remains uninterrupted. Judgment is not deferred by the hour, nor clarity postponed for comfort. Thought is expected to endure across strain and diminishing reserves. It is within this continuity that a lasting capacity is formed: the ability to reason critically, apply logic with discipline, and sustain sound judgment under adverse conditions.`,
                        `Unlike my colleagues, I will be candid. SMUN operates at a higher threshold. Its standards are fixed, its pace unyielding. I stood here once as a seventh grader, overwhelmed and unprepared, and the experience shaped me precisely because it did not bend. That severity proved formative. It remains the most valuable experience I have had.`,
                        `Cape omnia; secunda occasio non erit.`,
                        `Raghav G Rai`,
                        `Director General`
                    ]
                },
                {
                    author: 'Aanya Chand',
                    content: [
                        `"The unexamined life is not worth living." - Socrates`,
                        `Greetings delegates!`,
                        `It is an honour to serve as your Director General of Committees for this edition of Sanskriti Model United Nations, a conference designed to facilitate meaningful debate, create lifelong memories, and, most importantly, forge ideas that will alter the course of our world.`,
                        `I was introduced to Model United Nations in 8th grade, and since then, it has quickly grown into one of my many obsessions. I still remember the energy of the first committee room I ever stepped into: the quiet chaos, the rhythm of table taps, the sound of the gavel striking the table, and most of all the loud chatter of delegates, ready to share ideas they had mapped out over days of preparation, making the room buzz with excitement. In that very moment, I realised that I was no longer speaking as myself, but instead I was a part of a bigger picture, with a far larger focus; I was representing a part of the world, and influencing decisions that would impact billions of people.`,
                        `That transition, that realisation, is the main essence of the Model UN experience, and is one that envelopes you for eternity. This experience isn't just a conference; it's a plethora of voices, all aligning to create a space that fosters creativity, innovation, and, most importantly, the chance to express your unique perspective, your story, and form your journey. That's what makes it so very special.`,
                        `Sanskriti Model United Nations is the tapestry formed by the intersection of the strings of thought and meticulous action. It's not just a simulation of the United Nations limited to committee rooms for 3 days; it's a place where complexity is embraced rather than being simplified, and here, we encourage you to think above and beyond and break the walls of conventionalism, crafting your own unique opinions, just like we all did.`,
                        `We are immensely proud to share this experience with you, and hope you enjoy it as much as we did while creating it for you over months of preparation and quite a few all-nighters. We hope that you embrace all this conference has to offer, because it offers so very much to every person who is willing to immerse themselves in it.`,
                        `Until April,`,
                        `Aanya Chand`,
                        `Director-General of Committees`
                    ]
                }
            ]
        },
        'dg-conference': {
            title: 'Directors General of Conference',
            authors: ['Hrishik Malhotra', 'Krish Aggarwal'],
            multipleLetters: [
                {
                    author: 'Hrishik Malhotra',
                    content: [
                        `Greetings to the delegates and everyone who has found their way here, welcome to SMUN 2026. My name is Hrishik Malhotra, and I am a Director General of Conference for this year's edition of SMUN, one that is taking place because a great many people cared enough to get the details right, and I am glad that you are now part of it.`,
                        `I entered my first MUN in seventh grade with the misplaced confidence of someone who did not yet know how much there was to get wrong. It was a semi-crisis committee, and I remember being less concerned with procedure than with the strange energy of the room. Things moved quickly, alliances formed and dissolved easily, and whenever someone said something reckless, there was always someone else there to fix it. I left that committee tired, overwhelmed, and convinced that I wanted to come back for more.`,
                        `Now, as part of the Upper Secretariat for the 2026 edition, I find myself on the other side of the table, responsible for shaping the very experience that once unsettled me in the best possible way. I do not see this role as a culmination, because to me it feels more like stewardship. Sanskriti MUN has its own rhythm, built over the years by people who cared enough to argue about details and were patient enough to get them right. My task has been to respect that rhythm while nudging it forward.`,
                        `There is a line by Albert Camus that I have kept with me for a long time: "The struggle itself is enough." I have always liked it because it refuses clear-cut, tidy endings. Just as with Sisyphus' absurd effort of pushing a boulder up a hill, I am not interested in victory so much as persistence, in the decision to keep pushing even when the hill does not get any kinder. That idea fits MUN rather well, as the best moments are rarely the ones that go exactly to plan. They are the ones where you adapt, recover, and continue.`,
                        `As Director General of Conference, I have worked with a team that believes structure should support and not replace imagination. You will find rules here, timelines, and expectations. You will also find room to surprise yourself. If something feels demanding, that is deliberate. We trust you enough to do so.`,
                        `To every delegate joining us this year, I offer no guarantees except this: you will leave different from how you arrived. Whether that difference is a new skill, a new perspective, or just the memory of an argument that meant something to you—that part is yours to decide.`,
                        `See you in April.`,
                        `Hrishik Malhotra`,
                        `Director General of Conference`
                    ]
                },
                {
                    author: 'Krish Aggarwal',
                    content: [
                        `My name is Krish Aggarwal, and I have the privilege of serving as a Director General of Conference for the 14th iteration of Sanskriti Model United Nations.`,
                        `I first stepped into a MUN conference in seventh grade, armed only with determination and an unshakable conviction that I belonged there. I did not, of course, but it didn't stop me from trying. What followed was a whirlwind of speeches, debates, and moments of sheer panic that somehow, over the years, transformed into a passion I cannot imagine being without.`,
                        `My journey has been defined not by awards or accolades, but by the lessons I learned along the way—the art of persuasion, the importance of listening, and the humility to accept when I was wrong. These are the values I hope to see flourish in SMUN 2026.`,
                        `As Director General of Conference, my role has been to ensure that every logistical detail, every schedule, and every experience is designed to elevate your MUN journey. This year, we've worked tirelessly to create an environment that balances challenge with opportunity, rigor with creativity.`,
                        `To the delegates reading this: approach SMUN with an open mind and an unwavering determination to learn. Whether this is your first conference or your fiftieth, there is always something new to discover. Embrace the chaos, for it is in the unexpected that the most memorable moments are born.`,
                        `Looking forward to seeing you all.`,
                        `Krish Aggarwal`,
                        `Director General of Conference`
                    ]
                }
            ]
        },
        'dg-outreach': {
            title: 'Directors General of Outreach',
            authors: ['Vedant Prakash', 'Manasvi Bhambani'],
            multipleLetters: [
                {
                    author: 'Vedant Prakash',
                    content: [
                        `"There are decades where nothing happens; and there are weeks where decades happen." – Vladimir Lenin`,
                        `Greetings, distinguished delegates and esteemed faculty,`,
                        `I am Vedant Prakash, and it is of my utmost honour to serve as the Director General of Outreach for the 14th edition of Sanskriti Model United Nations. At Sanskriti, MUN is a deeply rooted, extraordinary tradition that continues to serve as a platform for young leaders from around the world to challenge others and form new perspectives for themselves.`,
                        `I embarked on my SMUN journey back in 8th grade, when a clueless yet curious me stumbled into the chambers of American leaders fighting for freedom. This one serendipitous plunge ignited a zeal in me for diplomacy and meaningful debate. SMUN served as an intellectual odyssey for me, where I did not just experience a confluence of ideas but a platform where I learnt while making memories that will last me a lifetime, and for over 14 years, it has been a platform where even the smallest ideas can spark a veritable tempest of debate.`,
                        `As we embark on this journey, the Secretariat welcomes you with open arms to step out of your comfort zone and take part in this memorable and intellectually thrilling experience. Whether you are a "seasoned" delegate or a rookie, it is your voice that will ignite a maelstrom of discourse. Together, let us shape not just a mere conference but a legacy that resonates and is revered in the chronicles of the Sanskriti Model United Nations.`,
                        `Yours Sincerely,`,
                        `Vedant Prakash`,
                        `Director General of Outreach`
                    ]
                },
                {
                    author: 'Manasvi Bhambani',
                    content: [
                        `Greetings delegates!`,
                        `It is with great pride and honour that I welcome you to the 14th edition of the Sanskriti Model United Nations. I am Manasvi Bhambani, and it is indeed a great privilege to serve as your Director-General of Outreach for this edition of SMUN. Sanskriti Model United Nations has always been known as a platform for diplomacy, fruitful discourse, and collaboration meant to engage and further the horizons of all delegates.`,
                        `I started my MUN journey all the way back in 7th grade. Ever since, a fire had been lit in my heart to go to more and more conferences. The placards, lanyards, and the haphazardly written speeches on a notepad still carry a lot of familiarity for me that no one can erase. The adrenaline rush in giving the first speech of the day or leaping to the stage on the last never subsided. Beyond the awards, MUNs remain a constant reminder of the importance of dialogue and debate and how whenever many minds think together, a lot of good can happen.`,
                        `I hope that you will make similar memories in our several thought-provoking committees at SMUN. Allowing many to realise that sometimes the greatest solutions require compromise for the most optimal results.`,
                        `At Sanskriti MUN, we shall leave no stone unturned to bring you an experience that is simply profound for all delegates. To the veterans and first-timers, we hope you become captivated by the debate and find it enriching, and may it start an obsession just like ours.`,
                        `I implore you, delegates, to look beyond the conventional frameworks and find the solutions guided by fraternity, egalité, and liberty. As war doesn't mark strength but the collapse of cooperation and peace.`,
                        `"It is not what we do, but also what we do not do, for which we are accountable." - Molière`,
                        `Best regards,`,
                        `Manasvi Bhambani`,
                        `Director-General of Outreach`
                    ]
                }
            ]
        },
        'eic': {
            title: 'Editor-in-Chief',
            author: 'Jayanti Yadav',
            content: [
                `"I write to remember, and I remember in order to write." - Mahmoud Darwish`,
                `Greetings Delegates!`,
                `My name is Jayanti, and I am delighted to be serving as the Editor-in-Chief for this edition of SMUN. As you represent people, countries, and diverse portfolios in a Model United Nations conference, and as their names sit heavy on our tongues like fragile syllables we learn to pronounce carefully, let us remember that we carry flags that are not ours, histories that do not belong to our bodies, but they are struggles, griefs and hopes we inherit, even if for a fleeting weekend.`,
                `I hope Sanskriti allows you to inherit both the benign and the significant, almost decorous emotions, in their most meaningful form. I hope, even for a brief moment, it gives you all the space to discuss discursive regimes, and to believe; for we believe empathy, spoken aloud, can challenge the normative framework of power, creating our own paradigm of change.`,
                `In a world where truth is often bartered away for convenience and is silenced beneath the ragged weight of deceiving lies, journalists persist as a defiant and alive force. The role of journalism is to take the ignored and saturate it with a new meaning. To transform raw facts into a humane and undeniable form. It's to ensure remembrance. Whenever voices lathered in revolution fall short, your pens will diligently tell the tales of all that remains alive and dead (figuratively).`,
                `In a way, this is a Russian Roulette of diplomacy. You must create strategic alliances, and you must tackle each crisis, seldom without your bias. During this conference, histories are being written and rewritten, and they all need you.`,
                `Personally, I started my UNCA journey in seventh grade, and years later, here I still am, with the same fascination and conviction you would've found middle-school-me to have with writing and expressing her rather loud opinions.`,
                `Coming back to the topic, during the three days of the conference, even if your words tremble, remember: trembling is how wings begin. Speak not because the world is here to listen, but because somewhere, a border is learning how to tighten its fist as we stagnate in the comfort of silence.`,
                `I invite you to see silence turn into courage, as someone raises their pallid hand, like a white flag, or a warning, or a prayer. Outside, the world keeps insisting on its capacity for ruin. Inside, we keep insisting on its capacity for repair. Some days, both are true. Most days, neither is enough. Therefore, we invite you to light the dark of someone else's war.`,
                `I hope you have a splendid time!`,
                `Warm regards`,
                `Jayanti Yadav`,
                `Editor-in-Chief`
            ]
        }
    };

    const letter = letters[role];

    if (!letter) {
        return (
            <div className="letter">
                <section className="letter-hero">
                    <div className="container">
                        <h1 className="letter-hero__title">Letter Not Found</h1>
                        <p className="letter-hero__subtitle">SMUN 2026</p>
                    </div>
                </section>
                <section className="letter-content">
                    <div className="container">
                        <div className="letter-content__box">
                            <p className="letter-content__text">
                                The requested letter could not be found.
                            </p>
                            <Link to="/secretariat" className="letter-back-btn">
                                Back to Secretariat
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    // Check if this letter has multiple authors with separate letters
    const hasMultipleLetters = letter.multipleLetters && letter.multipleLetters.length > 0;

    return (
        <div className="letter">
            {/* Hero */}
            <section className="letter-hero">
                <div className="container">
                    <Link to="/secretariat" className="back-link">
                        <span className="back-arrow">←</span> Back to Secretariat
                    </Link>
                    <h1 className="letter-hero__title">Letter from the {letter.title}</h1>
                    <p className="letter-hero__subtitle">SMUN 2026</p>
                </div>
            </section>

            {/* Letter Content */}
            <section className="letter-content">
                <div className="container">
                    {hasMultipleLetters ? (
                        // Render multiple separate letter boxes
                        <div className="letter-content__multiple">
                            {letter.multipleLetters.map((individualLetter, letterIndex) => (
                                <div key={letterIndex} className="letter-content__box">
                                    <h2 className="letter-content__author-name">{individualLetter.author}</h2>
                                    {individualLetter.content.map((paragraph, index) => (
                                        <p key={index} className="letter-content__text">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ) : (
                        // Render single letter box
                        <div className="letter-content__box">
                            {letter.content.map((paragraph, index) => (
                                <p key={index} className={`letter-content__text ${paragraph === '' ? 'letter-content__spacer' : ''}`}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Letter;
