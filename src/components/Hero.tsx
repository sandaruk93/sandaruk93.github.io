import PrimaryButtonHero from './PrimaryButtonHero';
import SecondaryCtaHeroGlassy from './SecondaryCtaHeroGlassy';
import ThemeToggle from './ThemeToggle';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <ThemeToggle />
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
                <SecondaryCtaHeroGlassy href="https://sandaru.myportfolio.com/" >
                    Photography
                </SecondaryCtaHeroGlassy>
            </div>
        </section>
    );
}
