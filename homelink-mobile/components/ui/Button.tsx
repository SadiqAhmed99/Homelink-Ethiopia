import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    ActivityIndicator,
    ViewStyle,
    TextStyle,
    View,
} from 'react-native';
import { Colors } from '../../constants/Colors';
import { Typography } from '../../constants/Typography';
import { Spacing, BorderRadius, Shadow } from '../../constants/Spacing';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost';
export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    icon?: React.ReactNode;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    loading = false,
    fullWidth = false,
    icon,
    style,
    textStyle,
}) => {
    const getButtonStyle = (): ViewStyle => {
        const baseStyle: ViewStyle = {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: BorderRadius.sm,
            ...Shadow.sm,
        };

        // Size styles
        const sizeStyles: Record<ButtonSize, ViewStyle> = {
            small: {
                paddingVertical: Spacing.sm,
                paddingHorizontal: Spacing.md,
                minHeight: 40,
            },
            medium: {
                paddingVertical: Spacing.md - 4,
                paddingHorizontal: Spacing.lg,
                minHeight: 48,
            },
            large: {
                paddingVertical: Spacing.md,
                paddingHorizontal: Spacing.xl,
                minHeight: 56,
            },
        };

        // Variant styles
        const variantStyles: Record<ButtonVariant, ViewStyle> = {
            primary: {
                backgroundColor: disabled ? Colors.neutral.lightGray : Colors.primary.ochre,
            },
            secondary: {
                backgroundColor: disabled ? Colors.neutral.lightGray : Colors.secondary.teal,
            },
            tertiary: {
                backgroundColor: 'transparent',
                borderWidth: 2,
                borderColor: disabled ? Colors.neutral.lightGray : Colors.primary.ochre,
                ...Shadow.none,
            },
            ghost: {
                backgroundColor: 'transparent',
                ...Shadow.none,
            },
        };

        return {
            ...baseStyle,
            ...sizeStyles[size],
            ...variantStyles[variant],
            ...(fullWidth && { width: '100%' }),
        };
    };

    const getTextStyle = (): TextStyle => {
        const sizeStyles: Record<ButtonSize, TextStyle> = {
            small: Typography.buttonSmall,
            medium: Typography.button,
            large: Typography.buttonLarge,
        };

        const variantStyles: Record<ButtonVariant, TextStyle> = {
            primary: {
                color: disabled ? Colors.text.disabled : Colors.text.inverse,
            },
            secondary: {
                color: disabled ? Colors.text.disabled : Colors.text.inverse,
            },
            tertiary: {
                color: disabled ? Colors.text.disabled : Colors.primary.ochre,
            },
            ghost: {
                color: disabled ? Colors.text.disabled : Colors.primary.ochre,
            },
        };

        return {
            ...sizeStyles[size],
            ...variantStyles[variant],
        };
    };

    return (
        <TouchableOpacity
            style={[getButtonStyle(), style]}
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.7}
        >
            {loading ? (
                <ActivityIndicator
                    color={variant === 'tertiary' || variant === 'ghost' ? Colors.primary.ochre : Colors.text.inverse}
                    size="small"
                />
            ) : (
                <>
                    {icon && <View style={styles.iconContainer}>{icon}</View>}
                    <Text style={[getTextStyle(), textStyle]}>{title}</Text>
                </>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        marginRight: Spacing.sm,
    },
});
