import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={styles.section}>
            <h2 className={styles.heading}>Get in Touch</h2>
            <div className={styles.links}>
                <a href="mailto:hello@sandaru.com" className={styles.link}>Email</a>
                <a href="#" className={styles.link}>LinkedIn</a>
                <a href="#" className={styles.link}>Twitter</a>
                <a href="#" className={styles.link}>Instagram</a>
            </div>
        </section>
    );
}
