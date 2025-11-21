import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    loading?: boolean;
    children: React.ReactNode;
}

export function Button({
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    loading = false,
    children,
    className = '',
    disabled,
    ...props
}: ButtonProps) {
    const baseClasses = 'inline-flex items-center justify-center font-semibold rounded transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantClasses = {
        primary: 'bg-[var(--color-primary-ochre)] text-white hover:bg-[var(--color-primary-ochre-dark)] shadow-sm',
        secondary: 'bg-[var(--color-secondary-teal)] text-white hover:bg-[var(--color-secondary-teal-dark)] shadow-sm',
        tertiary: 'bg-transparent border-2 border-[var(--color-primary-ochre)] text-[var(--color-primary-ochre)] hover:bg-[var(--color-primary-ochre)] hover:text-white',
        ghost: 'bg-transparent text-[var(--color-primary-ochre)] hover:bg-[var(--color-neutral-off-white)]',
    };

    const sizeClasses = {
        small: 'px-4 py-2 text-sm min-h-[40px]',
        medium: 'px-6 py-3 text-base min-h-[48px]',
        large: 'px-8 py-4 text-lg min-h-[56px]',
    };

    const widthClass = fullWidth ? 'w-full' : '';

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
            disabled={disabled || loading}
            {...props}
        >
            {loading ? (
                <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            ) : null}
            {children}
        </button>
    );
}
