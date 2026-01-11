import React from 'react';
import styles from './SecondaryCtaHeroGlassy.module.css';

interface SecondaryCtaHeroGlassyProps {
    children?: React.ReactNode;
    onClick?: () => void;
    href?: string;
    iconMode?: boolean;
}

const SecondaryCtaHeroGlassy: React.FC<SecondaryCtaHeroGlassyProps> = ({ children = 'Button', onClick, href, iconMode = false }) => {
    const className = `${styles.button} ${iconMode ? styles.iconMode : ''}`;

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
                {children}
            </a>
        );
    }

    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default SecondaryCtaHeroGlassy;
