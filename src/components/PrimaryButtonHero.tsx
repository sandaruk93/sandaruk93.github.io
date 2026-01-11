import React from 'react';
import styles from './PrimaryButtonHero.module.css';

interface PrimaryButtonHeroProps {
    children?: React.ReactNode;
    onClick?: () => void;
    href?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    className?: string;
}

const PrimaryButtonHero: React.FC<PrimaryButtonHeroProps> = ({ children = 'Get Started', onClick, href, type = 'button', disabled = false, className = '' }) => {
    const combinedClassName = `${styles.button} ${className}`;

    if (href) {
        return (
            <a href={href} className={combinedClassName} onClick={onClick}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} disabled={disabled} className={combinedClassName} onClick={onClick}>
            {children}
        </button>
    );
};

export default PrimaryButtonHero;
