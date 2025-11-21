import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Spacing, BorderRadius, Shadow } from '../../constants/Spacing';

interface CardProps {
    children: React.ReactNode;
    style?: ViewStyle;
    variant?: 'default' | 'outlined' | 'elevated';
    padding?: keyof typeof Spacing;
}

export const Card: React.FC<CardProps> = ({
    children,
    style,
    variant = 'default',
    padding = 'lg',
}) => {
    const getCardStyle = (): ViewStyle => {
        const baseStyle: ViewStyle = {
            backgroundColor: Colors.background.primary,
            borderRadius: BorderRadius.md,
            padding: Spacing[padding],
        };

        const variantStyles: Record<string, ViewStyle> = {
            default: {
                ...Shadow.sm,
            },
            outlined: {
                borderWidth: 1,
                borderColor: Colors.border.light,
            },
            elevated: {
                ...Shadow.md,
            },
        };

        return {
            ...baseStyle,
            ...variantStyles[variant],
        };
    };

    return <View style={[getCardStyle(), style]}>{children}</View>;
};

const styles = StyleSheet.create({
    // Additional styles if needed
});
