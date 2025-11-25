import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={styles.section}>
            <h2 className={styles.heading}>Get in Touch</h2>
            <div className={styles.links}>
                <a href="mailto:sandaru.suranjaya@icloud.com" className={styles.link}>Email</a>
                <a href="https://www.linkedin.com/in/sandaru-suranjaya/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
                <a href="https://www.instagram.com/sandaru.me/" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</a>
                <a href="https://x.com/sandaru_me" target="_blank" rel="noopener noreferrer" className={styles.link}>Twitter</a>
            </div>
        </section>
    );
}
