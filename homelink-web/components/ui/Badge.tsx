import React from 'react';

interface BadgeProps {
    variant?: 'success' | 'warning' | 'error' | 'info' | 'default';
    children: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
}

export function Badge({ variant = 'default', children, icon, className = '' }: BadgeProps) {
    const variantClasses = {
        success: 'bg-[var(--color-success)] text-white',
        warning: 'bg-[var(--color-warning)] text-white',
        error: 'bg-[var(--color-error)] text-white',
        info: 'bg-[var(--color-info)] text-white',
        default: 'bg-[var(--color-neutral-light-gray)] text-[var(--color-text-primary)]',
    };

    return (
        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${variantClasses[variant]} ${className}`}>
            {icon}
            {children}
        </span>
    );
}

interface SkillTagProps {
    skill: string;
    experience?: string;
    className?: string;
}

export function SkillTag({ skill, experience, className = '' }: SkillTagProps) {
    return (
        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-[var(--color-neutral-off-white)] border border-[var(--color-primary-ochre)] text-[var(--color-primary-ochre)] ${className}`}>
            {skill}
            {experience && <span className="ml-1 text-xs opacity-75">• {experience}</span>}
        </span>
    );
}
