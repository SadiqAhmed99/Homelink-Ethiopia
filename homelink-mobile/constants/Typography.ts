/**
 * Typography System for HomeLink Addis
 * Using Playfair Display for headings and Open Sans for body text
 */

import { TextStyle } from 'react-native';

// Font Families
export const FontFamily = {
    heading: 'System', // Will be replaced with Playfair Display when loaded
    body: 'System',    // Will be replaced with Open Sans when loaded
};

// Font Weights
export const FontWeight = {
    regular: '400' as TextStyle['fontWeight'],
    medium: '500' as TextStyle['fontWeight'],
    semiBold: '600' as TextStyle['fontWeight'],
    bold: '700' as TextStyle['fontWeight'],
};

// Font Sizes
export const FontSize = {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 22,
    xxl: 28,
    xxxl: 36,
};

// Line Heights
export const LineHeight = {
    tight: 1.2,
    normal: 1.4,
    relaxed: 1.5,
    loose: 1.6,
};

// Typography Styles
export const Typography = {
    // Headings
    h1: {
        fontFamily: FontFamily.heading,
        fontSize: FontSize.xxxl,
        fontWeight: FontWeight.bold,
        lineHeight: FontSize.xxxl * LineHeight.tight,
        color: '#2C3E50',
    } as TextStyle,

    h2: {
        fontFamily: FontFamily.heading,
        fontSize: FontSize.xxl,
        fontWeight: FontWeight.bold,
        lineHeight: FontSize.xxl * LineHeight.normal,
        color: '#2C3E50',
    } as TextStyle,

    h3: {
        fontFamily: FontFamily.heading,
        fontSize: FontSize.xl,
        fontWeight: FontWeight.bold,
        lineHeight: FontSize.xl * LineHeight.normal,
        color: '#2C3E50',
    } as TextStyle,

    h4: {
        fontFamily: FontFamily.heading,
        fontSize: FontSize.lg,
        fontWeight: FontWeight.semiBold,
        lineHeight: FontSize.lg * LineHeight.normal,
        color: '#2C3E50',
    } as TextStyle,

    // Body Text
    body: {
        fontFamily: FontFamily.body,
        fontSize: FontSize.md,
        fontWeight: FontWeight.regular,
        lineHeight: FontSize.md * LineHeight.loose,
        color: '#2C3E50',
    } as TextStyle,

    bodyLarge: {
        fontFamily: FontFamily.body,
        fontSize: FontSize.lg,
        fontWeight: FontWeight.regular,
        lineHeight: FontSize.lg * LineHeight.loose,
        color: '#2C3E50',
    } as TextStyle,

    bodySmall: {
        fontFamily: FontFamily.body,
        fontSize: FontSize.sm,
        fontWeight: FontWeight.regular,
        lineHeight: FontSize.sm * LineHeight.relaxed,
        color: '#2C3E50',
    } as TextStyle,

    // Labels
    label: {
        fontFamily: FontFamily.body,
        fontSize: FontSize.sm,
        fontWeight: FontWeight.semiBold,
        lineHeight: FontSize.sm * LineHeight.normal,
        color: '#2C3E50',
    } as TextStyle,

    labelLarge: {
        fontFamily: FontFamily.body,
        fontSize: FontSize.md,
        fontWeight: FontWeight.semiBold,
        lineHeight: FontSize.md * LineHeight.normal,
        color: '#2C3E50',
    } as TextStyle,

    // Caption
    caption: {
        fontFamily: FontFamily.body,
        fontSize: FontSize.xs,
        fontWeight: FontWeight.regular,
        lineHeight: FontSize.xs * LineHeight.normal,
        color: '#7F8C8D',
    } as TextStyle,

    // Button Text
    button: {
        fontFamily: FontFamily.body,
        fontSize: FontSize.md,
        fontWeight: FontWeight.semiBold,
        lineHeight: FontSize.md * LineHeight.normal,
        color: '#FFFFFF',
    } as TextStyle,

    buttonSmall: {
        fontFamily: FontFamily.body,
        fontSize: FontSize.sm,
        fontWeight: FontWeight.semiBold,
        lineHeight: FontSize.sm * LineHeight.normal,
        color: '#FFFFFF',
    } as TextStyle,

    buttonLarge: {
        fontFamily: FontFamily.body,
        fontSize: FontSize.lg,
        fontWeight: FontWeight.semiBold,
        lineHeight: FontSize.lg * LineHeight.normal,
        color: '#FFFFFF',
    } as TextStyle,

    // Link
    link: {
        fontFamily: FontFamily.body,
        fontSize: FontSize.md,
        fontWeight: FontWeight.medium,
        lineHeight: FontSize.md * LineHeight.loose,
        color: '#008B8B',
        textDecorationLine: 'underline' as TextStyle['textDecorationLine'],
    } as TextStyle,

    linkSmall: {
        fontFamily: FontFamily.body,
        fontSize: FontSize.sm,
        fontWeight: FontWeight.medium,
        lineHeight: FontSize.sm * LineHeight.relaxed,
        color: '#008B8B',
        textDecorationLine: 'underline' as TextStyle['textDecorationLine'],
    } as TextStyle,
};
