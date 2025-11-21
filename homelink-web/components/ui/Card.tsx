import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
    const hoverClass = hover ? 'hover:shadow-md transition-shadow duration-200' : '';

    return (
        <div className={`bg-white border border-[var(--color-border-light)] rounded-lg p-6 shadow-sm ${hoverClass} ${className}`}>
            {children}
        </div>
    );
}
