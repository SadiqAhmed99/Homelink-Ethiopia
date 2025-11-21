/**
 * Spacing System for HomeLink Addis
 * Based on 8px base unit for consistent spacing
 */

export const Spacing = {
    xs: 4,   // Extra small - tight spacing within components
    sm: 8,   // Small - padding within buttons, small gaps
    md: 16,  // Medium - standard padding, component spacing
    lg: 24,  // Large - section spacing, larger gaps
    xl: 32,  // Extra large - major section spacing
    xxl: 48, // Extra extra large - page-level spacing
    xxxl: 64, // Extra extra extra large - major page sections
};

// Border Radius
export const BorderRadius = {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999, // For circular elements
};

// Shadow Styles
export const Shadow = {
    none: {
        shadowColor: 'transparent',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
    },
    sm: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    md: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 4,
    },
    lg: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 8,
    },
    xl: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.25,
        shadowRadius: 16,
        elevation: 12,
    },
};

// Icon Sizes
export const IconSize = {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 32,
    xl: 48,
    xxl: 64,
};

// Touch Target Sizes (minimum 48px for accessibility)
export const TouchTarget = {
    min: 48,
    md: 56,
    lg: 64,
};
