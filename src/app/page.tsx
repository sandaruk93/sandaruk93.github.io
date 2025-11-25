import Hero from '@/components/Hero';
import StoryPurpose from '@/components/StoryPurpose';
import MemoryReel from '@/components/MemoryReel';
import Recommendations from '@/components/Recommendations';
import BehindTheLens from '@/components/BehindTheLens';
import Contact from '@/components/Contact';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />

      <StoryPurpose />

      <MemoryReel />

      <Recommendations />

      <BehindTheLens />

      <Contact />
    </main>
  );
}
