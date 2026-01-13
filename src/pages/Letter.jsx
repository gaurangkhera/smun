import { useParams, Link } from 'react-router-dom';
import './Letter.css';

const Letter = () => {
    const { role } = useParams();

    const letters = {
        'sg': {
            title: 'Secretary General',
            author: 'Aryaman Pragya',
            content: [
                `"We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far." - Swami Vivekananda`,
                `Greetings, fellow delegates,`,
                `As I write this letter to you, I am enveloped in a profound mix of nostalgia and anticipation, for this moment marks both an ending and a beginning in the journey of Sanskriti Model United Nations. Over the past 14 editions, SMUN has evolved into something far greater than a mere conference; it has become a crucible where young minds sharpen their intellect and a sanctuary where ideas flourish into action.`,
                `This year, we stand at the threshold of a new chapter—a chapter in which you are the protagonists. The global stage today is fraught with complexities: conflicts that test the limits of diplomacy, crises that challenge our collective resolve, and questions of identity that demand nuanced understanding. And yet, amidst this chaos, there lies an opportunity—an opportunity for you, the delegates, to showcase the power of dialogue, collaboration, and empathy.`,
                `As Secretary-General, I have witnessed firsthand the transformative power of this platform. From debates that challenged my own convictions to alliances forged over a shared commitment to resolution, every SMUN edition has been a reminder of what humanity can achieve when it chooses to listen before it speaks. It is this spirit of meaningful discourse that we seek to ignite within each of you this April.`,
                `SMUN has never been about the titles we hold or the accolades we receive. It has always been about the moments: the late-night drafting sessions, the heated caucuses, the triumph of reaching a consensus. As you prepare to enter the committees that await you, I urge you to embrace every moment—not just the victories, but the setbacks, for they are equally invaluable.`,
                `Let this edition of SMUN be a testament to what young minds can achieve when driven by purpose and passion. I look forward to witnessing your debates, your resolutions, and your unwavering commitment to making the world a better place—one motion at a time.`,
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
                `"In order to carry a positive action, we must develop here a positive vision." - Dalai Lama`,
                `Greetings, delegates,`,
                `It is both an honour and a profound responsibility to address you as the Deputy Secretary-General of the 14th edition of Sanskriti Model United Nations. In a world increasingly marked by division and discord, platforms like SMUN serve as a beacon of hope, reminding us of the power of dialogue and understanding.`,
                `My journey with MUN began as an exercise in curiosity and evolved into a passion that has shaped my worldview in ways I could not have imagined. Each committee, each debate, and each resolution has been a step toward understanding the complexities of global issues and the art of finding common ground amidst disagreement.`,
                `As we prepare for this edition, I encourage you to approach your committees not merely as participants, but as architects of change. The issues on your agendas are not abstract; they are reflections of real-world challenges that demand thoughtful and innovative solutions.`,
                `Thus, delegates, it is not polished arguments or silencing rhetoric we wish to see; but the raw ideas that break new ground. It's in the unfinished drafts, the heated debates, and the uncertain proposals that the foundation for groundbreaking solutions is laid. We value your courage to challenge the status quo, your willingness to consider perspectives vastly different from your own, and your determination to voice the uncomfortable truths. We believe the brilliance of SMUN lies not in perfection, but in the collective pursuit of progress—messy, challenging, and profoundly transformative.`,
                `This April, let us come together to create something extraordinary. Let us engage with empathy, argue with respect, and collaborate with purpose. After all, the future of diplomacy lies in the hands of those willing to engage with it today.`,
                `Looking forward to seeing you all.`,
                `Best regards,`,
                `Deeksha Singh`,
                `Deputy Secretary-General`
            ]
        },
        'dg-committees': {
            title: 'Directors General of Committees',
            authors: ['Aanya Chand', 'Raghav G Rai'],
            content: [
                `AANYA CHAND:`,
                `"The unexamined life is not worth living." - Socrates`,
                `Esteemed delegates,`,
                `The process of bringing together the committees for SMUN 2026 has been nothing short of transformative, both for the Secretariat and, I hope, for each of you who will soon take your seats in these chambers. The committees you will participate in are not merely simulations—they are reflections of the very real challenges our world faces today.`,
                `From climate negotiations to conflict resolution, from economic crises to cultural preservation, every agenda has been carefully curated to push you beyond your comfort zones. Our goal has been to create spaces where you can think critically, speak boldly, and act decisively.`,
                `As you prepare for your committees, I urge you to remember this: the world is shaped by those who dare to act upon their convictions. Whether you are a first-time delegate or a seasoned participant, this is your moment to make an impact.`,
                `Until April,`,
                `Aanya Chand`,
                `Director-General of Committees`,
                ``,
                `RAGHAV G RAI:`,
                `Greetings, delegates!`,
                `I'm Raghav G Rai, your Director General of Committees and the chair of the UNSC. As I pen this letter, I think back on my journey through countless MUN conferences. I started in sixth grade, and the experiences I've gathered – from the exhilarating debates to the challenging losses – have shaped me in profound ways. Eighth grade was particularly instrumental in building my confidence, and it was during this time that I truly began to appreciate the art of advocacy and diplomacy.`,
                `While awards can be a measure of success, remember that the true reward lies in the journey. Embrace the discussions, engage with diverse perspectives, and let every setback be a stepping stone toward improvement. At Sanskriti MUN, we've always prioritized substance over spectacle, and this year will be no different.`,
                `As Director General of Committees, I want to assure you that every committee has been meticulously designed to push you beyond your limits while ensuring you have the tools and support to succeed. Our chairs and directors are committed to fostering an environment that values constructive debate, mutual respect, and innovative problem-solving.`,
                `Cape omnia; secunda occasio non erit.`,
                `Raghav G Rai`,
                `Director General`
            ]
        },
        'dg-conference': {
            title: 'Directors General of Conference',
            authors: ['Hrishik Malhotra', 'Krish Aggarwal'],
            content: [
                `HRISHIK MALHOTRA:`,
                `Greetings to the delegates and everyone who has found their way here, welcome to SMUN 2026. My name is Hrishik Malhotra, and I am a Director General of Conference for this year's edition of SMUN, one that is taking place because a great many people cared enough to get the details right, and I am glad that you are now part of it.`,
                `I entered my first MUN in seventh grade with the misplaced confidence of someone who did not yet know how much there was to get wrong. It was a semi-crisis committee, and I remember being less concerned with procedure than with the strange energy of the room. Things moved quickly, alliances formed and dissolved easily, and whenever someone said something reckless, there was always someone else there to fix it. I left that committee tired, overwhelmed, and convinced that I wanted to come back for more.`,
                `Now, as part of the Upper Secretariat for the 2026 edition, I find myself on the other side of the table, responsible for shaping the very experience that once unsettled me in the best possible way. I do not see this role as a culmination, because to me it feels more like stewardship. Sanskriti MUN has its own rhythm, built over the years by people who cared enough to argue about details and were patient enough to get them right. My task has been to respect that rhythm while nudging it forward.`,
                `There is a line by Albert Camus that I have kept with me for a long time: "The struggle itself is enough." I have always liked it because it refuses clear-cut, tidy endings. Just as with Sisyphus' absurd effort of pushing a boulder up a hill, I am not interested in victory so much as persistence, in the decision to keep pushing even when the hill does not get any kinder. That idea fits MUN rather well, as the best moments are rarely the ones that go exactly to plan. They are the ones where you adapt, recover, and continue.`,
                `As Director General of Conference, I have worked with a team that believes structure should support and not replace imagination. You will find rules here, timelines, and expectations. You will also find room to surprise yourself. If something feels demanding, that is deliberate. We trust you enough to do so.`,
                `To every delegate joining us this year, I offer no guarantees except this: you will leave different from how you arrived. Whether that difference is a new skill, a new perspective, or just the memory of an argument that meant something to you—that part is yours to decide.`,
                `See you in April.`,
                `Hrishik Malhotra`,
                `Director General of Conference`,
                ``,
                `KRISH AGGARWAL:`,
                `My name is Krish Aggarwal, and I have the privilege of serving as a Director General of Conference for the 14th iteration of Sanskriti Model United Nations.`,
                `I first stepped into a MUN conference in seventh grade, armed only with determination and an unshakable conviction that I belonged there. I did not, of course, but it didn't stop me from trying. What followed was a whirlwind of speeches, debates, and moments of sheer panic that somehow, over the years, transformed into a passion I cannot imagine being without.`,
                `My journey has been defined not by awards or accolades, but by the lessons I learned along the way—the art of persuasion, the importance of listening, and the humility to accept when I was wrong. These are the values I hope to see flourish in SMUN 2026.`,
                `As Director General of Conference, my role has been to ensure that every logistical detail, every schedule, and every experience is designed to elevate your MUN journey. This year, we've worked tirelessly to create an environment that balances challenge with opportunity, rigor with creativity.`,
                `To the delegates reading this: approach SMUN with an open mind and an unwavering determination to learn. Whether this is your first conference or your fiftieth, there is always something new to discover. Embrace the chaos, for it is in the unexpected that the most memorable moments are born.`,
                `Looking forward to seeing you all.`,
                `Krish Aggarwal`,
                `Director General of Conference`
            ]
        },
        'dg-outreach': {
            title: 'Directors General of Outreach',
            authors: ['Vedant Prakash', 'Manasvi Bhambani'],
            content: [
                `VEDANT PRAKASH:`,
                `"There are decades where nothing happens; and there are weeks where decades happen." – Vladimir Lenin`,
                `Greetings, distinguished delegates and esteemed faculty,`,
                `I am Vedant Prakash, and it is of my utmost honour to serve as the Director General of Outreach for the 14th edition of Sanskriti Model United Nations. At Sanskriti, MUN is a deeply rooted, extraordinary tradition that continues to serve as a platform for young leaders from around the world to challenge others and form new perspectives for themselves.`,
                `I embarked on my SMUN journey back in 8th grade, when a clueless yet curious me stumbled into the chambers of American leaders fighting for freedom. This one serendipitous plunge ignited a zeal in me for diplomacy and meaningful debate. SMUN served as an intellectual odyssey for me, where I did not just experience a confluence of ideas but a platform where I learnt while making memories that will last me a lifetime, and for over 14 years, it has been a platform where even the smallest ideas can spark a veritable tempest of debate.`,
                `As we embark on this journey, the Secretariat welcomes you with open arms to step out of your comfort zone and take part in this memorable and intellectually thrilling experience. Whether you are a "seasoned" delegate or a rookie, it is your voice that will ignite a maelstrom of discourse. Together, let us shape not just a mere conference but a legacy that resonates and is revered in the chronicles of the Sanskriti Model United Nations.`,
                `Yours Sincerely,`,
                `Vedant Prakash`,
                `Director General of Outreach`,
                ``,
                `MANASVI BHAMBANI:`,
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
        },
        'eic': {
            title: 'Editor-in-Chief',
            author: 'Jayanti Yadav',
            content: [
                `"I write to remember, and I remember in order to write." - Mahmoud Darwish`,
                `Greetings, delegates,`,
                `As Editor-in-Chief of the 14th edition of Sanskriti Model United Nations, I am thrilled to welcome you to what promises to be an extraordinary journey of words, ideas, and storytelling.`,
                `The power of the written word has always fascinated me. It is through writing that we capture fleeting moments, immortalize debates, and create a narrative that outlasts the conference itself. At SMUN 2026, our media team will be working tirelessly to document your journeys—your triumphs, your struggles, and the moments that define your experience.`,
                `But this is not just about us recording history; it is about you creating it. Every speech you deliver, every resolution you draft, and every alliance you forge contributes to the larger story of SMUN. Our role is to ensure that this story is told with the depth, nuance, and authenticity it deserves.`,
                `I encourage each of you to engage not just with your committees, but also with the media presence at SMUN. Share your thoughts, your perspectives, and your reflections. Let us work together to create a narrative that captures the essence of what makes this conference so special.`,
                `Looking forward to an inspiring edition.`,
                `With warm regards,`,
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
                    <div className="letter-content__box">
                        {letter.content.map((paragraph, index) => (
                            <p key={index} className={`letter-content__text ${paragraph === '' ? 'letter-content__spacer' : ''}`}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Letter;
