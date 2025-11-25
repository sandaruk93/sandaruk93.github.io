import styles from './BehindTheLens.module.css';

const photos = [
    { id: 1, src: '/images/portfolio/IMG_2727-2.jpg', alt: 'Portfolio 1' },
    { id: 2, src: '/images/portfolio/IMG_6376.jpg', alt: 'Portfolio 2' },
    { id: 3, src: '/images/portfolio/IMG_6623.jpg', alt: 'Portfolio 3' },
    { id: 4, src: '/images/portfolio/IMG_7937.jpg', alt: 'Portfolio 4' },
    { id: 5, src: '/images/portfolio/IMG_7971.jpg', alt: 'Portfolio 5' },
    { id: 6, src: '/images/portfolio/IMG_8085.jpg', alt: 'Portfolio 6' },
];

export default function BehindTheLens() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>Behind the Lens</h2>
                    <a href="https://sandaru.myportfolio.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>View Full Portfolio &rarr;</a>
                </div>
                <div className={styles.grid}>
                    {photos.map((photo) => (
                        <div key={photo.id} className={styles.photoCard}>
                            <img src={photo.src} alt={photo.alt} className={styles.image} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
