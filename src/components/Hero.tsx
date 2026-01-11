import PrimaryButtonHero from './PrimaryButtonHero';
import SecondaryCtaHeroGlassy from './SecondaryCtaHeroGlassy';
import ThemeToggle from './ThemeToggle';
import ParticleBackground from './ParticleBackground';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <ParticleBackground />
            <ThemeToggle />
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Sandaru Suranjaya
                </h1>
                <p className={styles.subtitle}>
                    Product builder, digital creator based in Singapore
                </p>
                <div className={styles.buttonGroup}>
                    <PrimaryButtonHero href="#story">
                        Learn more
                    </PrimaryButtonHero>
                    <SecondaryCtaHeroGlassy href="https://photography.sandaru.me/" >
                        Photography
                    </SecondaryCtaHeroGlassy>
                </div>
            </div>
        </section>
    );
}
