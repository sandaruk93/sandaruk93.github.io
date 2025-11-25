import styles from './MemoryReel.module.css';

const memories = [
    { id: 1, src: '/images/memory1.JPG', alt: 'Memory 1' },
    { id: 2, src: '/images/memory2.JPG', alt: 'Memory 2' },
    { id: 3, src: '/images/memory3.jpg', alt: 'Memory 3' },
    { id: 4, src: '/images/memory4.jpg', alt: 'Memory 4' },
    { id: 5, src: '/images/memory5.jpg', alt: 'Memory 5' },
    { id: 6, src: '/images/memory6.jpg', alt: 'Memory 6' },
    { id: 7, src: '/images/memory7.jpg', alt: 'Memory 7' },
];

export default function MemoryReel() {
    // Duplicate items for seamless loop
    const items = [...memories, ...memories];

    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>Memory Reel</h2>
            <div className={styles.carousel}>
                <div className={styles.track}>
                    {items.map((item, index) => (
                        <div key={`${item.id}-${index}`} className={styles.card}>
                            <img src={item.src} alt={item.alt} className={styles.image} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
