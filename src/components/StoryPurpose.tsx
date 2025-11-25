import Image from 'next/image';
import styles from './StoryPurpose.module.css';

export default function StoryPurpose() {
    return (
        <section id="story" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.textColumn}>
                    <div className={styles.content}>
                        <p className={styles.leadText}>
                            I’ve always been fascinated by how technology can shape human behavior.
                        </p>
                        <p className={styles.bodyText}>
                            Over the past seven years, I’ve turned that curiosity into a career — leading products that blend data, design, and empathy to create meaningful change.
                        </p>
                    </div>
                </div>
                <div className={styles.imageColumn}>
                    <Image
                        src="/images/story-v2.png"
                        alt="Story"
                        width={600}
                        height={800}
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    );
}
