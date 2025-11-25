import React from 'react';
import styles from './PrimaryButtonHero.module.css';

interface PrimaryButtonHeroProps {
    children?: React.ReactNode;
    onClick?: () => void;
    href?: string;
}

const PrimaryButtonHero: React.FC<PrimaryButtonHeroProps> = ({ children = 'Get Started', onClick, href }) => {
    if (href) {
        return (
            <a href={href} className={styles.button} onClick={onClick}>
                {children}
            </a>
        );
    }

    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
};

export default PrimaryButtonHero;
