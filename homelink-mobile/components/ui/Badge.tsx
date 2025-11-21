import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Typography } from '../../constants/Typography';
import { Spacing, BorderRadius } from '../../constants/Spacing';

export type BadgeVariant = 'success' | 'warning' | 'error' | 'info' | 'default';
export type BadgeSize = 'small' | 'medium' | 'large';

interface BadgeProps {
    text: string;
    variant?: BadgeVariant;
    size?: BadgeSize;
    icon?: React.ReactNode;
    style?: ViewStyle;
}

export const Badge: React.FC<BadgeProps> = ({
    text,
    variant = 'default',
    size = 'medium',
    icon,
    style,
}) => {
    const getBackgroundColor = (): string => {
        const colors: Record<BadgeVariant, string> = {
            success: Colors.success.main,
            warning: Colors.warning.main,
            error: Colors.error.main,
            info: Colors.info.main,
            default: Colors.neutral.lightGray,
        };
        return colors[variant];
    };

    const getTextColor = (): string => {
        return variant === 'default' ? Colors.text.primary : Colors.text.inverse;
    };

    const getSizeStyles = (): { container: ViewStyle; text: TextStyle } => {
        const sizes = {
            small: {
                container: {
                    paddingVertical: Spacing.xs - 2,
                    paddingHorizontal: Spacing.sm,
                },
                text: Typography.caption,
            },
            medium: {
                container: {
                    paddingVertical: Spacing.xs,
                    paddingHorizontal: Spacing.md - 4,
                },
                text: Typography.bodySmall,
            },
            large: {
                container: {
                    paddingVertical: Spacing.sm,
                    paddingHorizontal: Spacing.md,
                },
                text: Typography.body,
            },
        };
        return sizes[size];
    };

    const sizeStyles = getSizeStyles();

    return (
        <View
            style={[
                styles.container,
                sizeStyles.container,
                { backgroundColor: getBackgroundColor() },
                style,
            ]}
        >
            {icon && <View style={styles.icon}>{icon}</View>}
            <Text style={[sizeStyles.text, { color: getTextColor() }, styles.text]}>
                {text}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: BorderRadius.full,
        alignSelf: 'flex-start',
    },
    icon: {
        marginRight: Spacing.xs,
    },
    text: {
        fontWeight: '600',
    },
});
