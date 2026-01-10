import Image from 'next/image';
import styles from './Recommendations.module.css';

const recommendations = [
    {
        id: 1,
        quote: "Sandaru is part of a small subset of professionals who are incredibly hard-working, very insightful and work very well with people. He's articulate and not only identifies a problem but comes prepared with potential solutions.",
        name: "Mansoor Fahmeed",
        role: "Product Design @ du"
    },
    {
        id: 2,
        quote: "Sandaru is an incredibly smart and proactive TPO, and the client or project he goes to next, will be very lucky indeed to have someone so efficient and professional to join them",
        name: "Kirath Ahdan",
        role: "UX Design lead"
    },
    {
        id: 3,
        quote: "I see him as an empowering leader who can drive any team to reach its fullest potential and wish him all the best. He always anticipated the needs of the team and backed the team when and where ever necessary",
        name: "Kusal H",
        role: "SSE @ Canva"
    },
    {
        id: 4,
        quote: "He has proven himself as a leader with empathy and strategic thinking. He was able to bring business and technology which is not an easy job in any new transformation. His unit was among the only ones where you can pull a delivery plan that would include all the risks and dependencies in the matter of seconds",
        name: "Ali Alhaddad",
        role: "Head of Agile and Program Management, Emirates NBD"
    },
    {
        id: 5,
        quote: "Really structured, diplomatic and calm player to get the job done. Coordinates well to has learned the art of getting things delivered without compromising attention to detail.",
        name: "Muhammad Yaseen Farooqui",
        role: "Digital Product Management Consultant - Accenture"
    },
    {
        id: 6,
        quote: "He’s super smart in manoeuvring discussions or debates – the things that have us going around in circles or lead us nowhere. He drives action. And makes things happen. Which makes a difference",
        name: "Neal Saldanha",
        role: "Content Design UX - Du"
    }
];

export default function Recommendations() {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>Don't take my word for it</h2>
            <div className={styles.scrollContainer}>
                {recommendations.map((rec) => {
                    const avatarSrc = `/images/recommendations/${rec.name.toLowerCase().replace(/\s+/g, '-')}.jpeg`;
                    return (
                        <div key={rec.id} className={styles.card}>
                            <p className={styles.quote}>"{rec.quote}"</p>
                            <div className={styles.author}>
                                <Image
                                    src={avatarSrc}
                                    alt={`${rec.name} avatar`}
                                    width={48}
                                    height={48}
                                    className={styles.avatar}
                                />
                                <div className={styles.info}>
                                    <span className={styles.name}>{rec.name}</span>
                                    <span className={styles.role}>{rec.role}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
