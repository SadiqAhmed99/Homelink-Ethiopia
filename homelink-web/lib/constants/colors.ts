/**
 * Color Palette for HomeLink Addis Web Portals
 * Matches the mobile app design system
 */

export const colors = {
    // Primary Colors
    primary: {
        ochre: '#D4691E',
        ochreDark: '#B55818',
        ochreLight: '#E88A4A',
    },

    secondary: {
        teal: '#008B8B',
        tealDark: '#006B6B',
        tealLight: '#00A5A5',
    },

    tertiary: {
        wheat: '#C9A961',
        wheatDark: '#A98941',
        wheatLight: '#E0C481',
    },

    // Neutral Colors
    neutral: {
        offWhite: '#F4F1E8',
        charcoal: '#2C3E50',
        lightGray: '#ECF0F1',
        white: '#FFFFFF',
        black: '#000000',
    },

    // Semantic Colors
    success: {
        main: '#27AE60',
        light: '#D4EDDA',
        dark: '#155724',
        border: '#C3E6CB',
    },

    warning: {
        main: '#E67E22',
        light: '#FFF3CD',
        dark: '#856404',
        border: '#FFEEBA',
    },

    error: {
        main: '#E74C3C',
        light: '#F8D7DA',
        dark: '#721C24',
        border: '#F5C6CB',
    },

    info: {
        main: '#3498DB',
        light: '#D1ECF1',
        dark: '#0C5460',
        border: '#BEE5EB',
    },

    // Text Colors
    text: {
        primary: '#2C3E50',
        secondary: '#7F8C8D',
        disabled: '#BDC3C7',
        inverse: '#FFFFFF',
    },

    // Background Colors
    background: {
        primary: '#FFFFFF',
        secondary: '#F4F1E8',
        tertiary: '#ECF0F1',
        dark: '#2C3E50',
    },

    // Border Colors
    border: {
        light: '#ECF0F1',
        medium: '#BDC3C7',
        dark: '#7F8C8D',
    },
} as const;

export type Colors = typeof colors;
