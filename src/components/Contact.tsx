import styles from './Contact.module.css';
import SecondaryCtaHeroGlassy from './SecondaryCtaHeroGlassy';
import ContactForm from './ContactForm';
import { FaLinkedinIn, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Get in Touch</h2>

                <ContactForm />

                <div className={styles.links}>
                    <SecondaryCtaHeroGlassy href="mailto:hello@sandaru.me" iconMode>
                        <FaEnvelope size={20} />
                    </SecondaryCtaHeroGlassy>
                    <SecondaryCtaHeroGlassy href="https://www.linkedin.com/in/sandaru-suranjaya/" iconMode>
                        <FaLinkedinIn size={20} />
                    </SecondaryCtaHeroGlassy>
                    <SecondaryCtaHeroGlassy href="https://www.instagram.com/sandaru.me/" iconMode>
                        <FaInstagram size={20} />
                    </SecondaryCtaHeroGlassy>
                    <SecondaryCtaHeroGlassy href="https://x.com/sandaru_me" iconMode>
                        <FaXTwitter size={20} />
                    </SecondaryCtaHeroGlassy>
                </div>
            </div>
        </section>
    );
}
