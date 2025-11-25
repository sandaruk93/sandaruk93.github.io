import React from 'react';
import styles from './SecondaryCtaHeroGlassy.module.css';

interface SecondaryCtaHeroGlassyProps {
    children?: React.ReactNode;
    onClick?: () => void;
    href?: string;
}

const SecondaryCtaHeroGlassy: React.FC<SecondaryCtaHeroGlassyProps> = ({ children = 'Button', onClick, href }) => {
    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={styles.button} onClick={onClick}>
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

export default SecondaryCtaHeroGlassy;
