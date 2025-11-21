/**
 * Color Palette for HomeLink Addis
 * Based on Ethiopian heritage and modern design principles
 */

export const Colors = {
  // Primary Colors
  primary: {
    ochre: '#D4691E',        // Primary Ochre - Headers, primary buttons, key information
    ochreDark: '#B55818',    // Darker shade for hover states
    ochreLight: '#E88A4A',   // Lighter shade for backgrounds
  },
  
  secondary: {
    teal: '#008B8B',         // Deep Teal - Secondary buttons, links, accents
    tealDark: '#006B6B',     // Darker shade for hover states
    tealLight: '#00A5A5',    // Lighter shade
  },
  
  tertiary: {
    wheat: '#C9A961',        // Golden Wheat - Highlights, badges, tertiary accents
    wheatDark: '#A98941',    // Darker shade
    wheatLight: '#E0C481',   // Lighter shade
  },
  
  // Neutral Colors
  neutral: {
    offWhite: '#F4F1E8',     // Warm Off-White - Background, cards
    charcoal: '#2C3E50',     // Charcoal - Body text, primary text
    lightGray: '#ECF0F1',    // Light Gray - Borders, dividers, disabled states
    white: '#FFFFFF',        // Pure white
    black: '#000000',        // Pure black
  },
  
  // Semantic Colors
  success: {
    main: '#27AE60',         // Success Green - Confirmations, verified badges
    light: '#D4EDDA',        // Light green background
    dark: '#155724',         // Dark green text
    border: '#C3E6CB',       // Border color
  },
  
  warning: {
    main: '#E67E22',         // Warning Orange - Warnings, pending status
    light: '#FFF3CD',        // Light yellow background
    dark: '#856404',         // Dark yellow text
    border: '#FFEEBA',       // Border color
  },
  
  error: {
    main: '#E74C3C',         // Error Red - Errors, rejections, critical alerts
    light: '#F8D7DA',        // Light red background
    dark: '#721C24',         // Dark red text
    border: '#F5C6CB',       // Border color
  },
  
  info: {
    main: '#3498DB',         // Info Blue
    light: '#D1ECF1',        // Light blue background
    dark: '#0C5460',         // Dark blue text
    border: '#BEE5EB',       // Border color
  },
  
  // UI Element Colors
  text: {
    primary: '#2C3E50',      // Primary text color
    secondary: '#7F8C8D',    // Secondary text color
    disabled: '#BDC3C7',     // Disabled text color
    inverse: '#FFFFFF',      // Text on dark backgrounds
  },
  
  background: {
    primary: '#FFFFFF',      // Primary background
    secondary: '#F4F1E8',    // Secondary background
    tertiary: '#ECF0F1',     // Tertiary background
    dark: '#2C3E50',         // Dark background
  },
  
  border: {
    light: '#ECF0F1',        // Light borders
    medium: '#BDC3C7',       // Medium borders
    dark: '#7F8C8D',         // Dark borders
  },
  
  // Shadow Colors
  shadow: {
    light: 'rgba(0, 0, 0, 0.1)',
    medium: 'rgba(0, 0, 0, 0.15)',
    dark: 'rgba(0, 0, 0, 0.25)',
  },
  
  // Overlay Colors
  overlay: {
    light: 'rgba(0, 0, 0, 0.3)',
    medium: 'rgba(0, 0, 0, 0.5)',
    dark: 'rgba(0, 0, 0, 0.7)',
  },
};

// Theme configuration
export const Theme = {
  light: {
    primary: Colors.primary.ochre,
    secondary: Colors.secondary.teal,
    background: Colors.background.primary,
    surface: Colors.neutral.offWhite,
    text: Colors.text.primary,
    textSecondary: Colors.text.secondary,
    border: Colors.border.light,
    error: Colors.error.main,
    success: Colors.success.main,
    warning: Colors.warning.main,
  },
  dark: {
    primary: Colors.primary.ochre,
    secondary: Colors.secondary.teal,
    background: '#1A1A1A',
    surface: '#2C2C2C',
    text: '#FFFFFF',
    textSecondary: '#BDC3C7',
    border: '#404040',
    error: Colors.error.main,
    success: Colors.success.main,
    warning: Colors.warning.main,
  },
};

export type ColorTheme = typeof Theme.light;
