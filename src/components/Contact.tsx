import styles from './Contact.module.css';
import SecondaryCtaHeroGlassy from './SecondaryCtaHeroGlassy';

export default function Contact() {
    return (
        <section id="contact" className={styles.section}>
            <h2 className={styles.heading}>Get in Touch</h2>
            <div className={styles.links}>
                <SecondaryCtaHeroGlassy href="mailto:hello@sandaru.me">
                    Email
                </SecondaryCtaHeroGlassy>
                <SecondaryCtaHeroGlassy href="https://www.linkedin.com/in/sandaru-suranjaya/">
                    LinkedIn
                </SecondaryCtaHeroGlassy>
                <SecondaryCtaHeroGlassy href="https://www.instagram.com/sandaru.me/">
                    Instagram
                </SecondaryCtaHeroGlassy>
                <SecondaryCtaHeroGlassy href="https://x.com/sandaru_me">
                    Twitter
                </SecondaryCtaHeroGlassy>
            </div>
        </section>
    );
}
