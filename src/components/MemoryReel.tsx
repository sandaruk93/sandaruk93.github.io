
'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './MemoryReel.module.css';

const memories = [
    { id: 1, src: '/images/memory1.JPG', alt: 'Memory 1' },
    { id: 2, src: '/images/memory2.JPG', alt: 'Memory 2' },
    { id: 3, src: '/images/memory3.jpg', alt: 'Memory 3' },
    { id: 4, src: '/images/memory4.jpg', alt: 'Memory 4' },
    { id: 5, src: '/images/memory5.jpg', alt: 'Memory 5' },
    { id: 6, src: '/images/memory6.jpg', alt: 'Memory 6' },
    { id: 7, src: '/images/memory7.jpg', alt: 'Memory 7' },
    { id: 8, src: '/images/memory8.jpg', alt: 'Memory 8' },
    { id: 9, src: '/images/memory9.jpg', alt: 'Memory 9' },
    { id: 10, src: '/images/memory10.jpg', alt: 'Memory 10' },
    { id: 11, src: '/images/memory11.jpg', alt: 'Memory 11' },
    { id: 12, src: '/images/memory12.jpg', alt: 'Memory 12' },
];

export default function MemoryReel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Auto-play functionality
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            const nextIndex = (activeIndex + 1) % memories.length;
            scrollTo(nextIndex);
        }, 3000);

        return () => clearInterval(interval);
    }, [activeIndex, isPaused]);

    const handleScroll = () => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;

        // Find the card closest to the center
        const cards = Array.from(container.querySelectorAll(`.${styles.card}`));
        let closestIndex = 0;
        let minDistance = Infinity;

        cards.forEach((card, index) => {
            const cardRect = card.getBoundingClientRect();
            // We need to calculate distance relative to the viewport center of the container
            const containerRect = container.getBoundingClientRect();
            const absoluteContainerCenter = containerRect.left + containerRect.width / 2;
            const cardCenter = cardRect.left + cardRect.width / 2;

            const dist = Math.abs(absoluteContainerCenter - cardCenter);

            if (dist < minDistance) {
                minDistance = dist;
                closestIndex = index;
            }
        });

        // Only update if different to avoid unnecessary re-renders, 
        // but we need to be careful not to fight with the auto-play
        if (closestIndex !== activeIndex) {
            setActiveIndex(closestIndex);
        }
    };

    const scrollTo = (index: number) => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const cards = container.querySelectorAll(`.${styles.card}`);
        const card = cards[index] as HTMLElement;

        if (card) {
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            // We don't manually set activeIndex here because the scroll event will trigger handleScroll
            // However, for auto-play, we might want to ensure it updates immediately or rely on scroll
            // Relying on scroll is safer for synchronization.
        }
    };

    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>Memory Reel</h2>
            <div
                className={styles.carousel}
                ref={scrollContainerRef}
                onScroll={handleScroll}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
            >
                <div className={styles.track}>
                    {memories.map((item, index) => (
                        <div key={item.id} className={styles.card}>
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className={styles.image}
                                sizes="(max-width: 768px) 85vw, 600px"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.paginationContainer}>
                {memories.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === activeIndex ? styles.active : ''}`}
                        onClick={() => scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
