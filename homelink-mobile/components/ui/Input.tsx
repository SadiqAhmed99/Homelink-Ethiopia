import React, { useState } from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    ViewStyle,
    TextStyle,
    TextInputProps,
} from 'react-native';
import { Colors } from '../../constants/Colors';
import { Typography } from '../../constants/Typography';
import { Spacing, BorderRadius } from '../../constants/Spacing';

interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
    helperText?: string;
    required?: boolean;
    containerStyle?: ViewStyle;
    inputStyle?: TextStyle;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
    label,
    error,
    helperText,
    required = false,
    containerStyle,
    inputStyle,
    leftIcon,
    rightIcon,
    ...textInputProps
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const getBorderColor = () => {
        if (error) return Colors.error.main;
        if (isFocused) return Colors.secondary.teal;
        return Colors.border.light;
    };

    return (
        <View style={[styles.container, containerStyle]}>
            {label && (
                <Text style={styles.label}>
                    {label}
                    {required && <Text style={styles.required}> *</Text>}
                </Text>
            )}

            <View
                style={[
                    styles.inputContainer,
                    {
                        borderColor: getBorderColor(),
                        borderWidth: isFocused ? 2 : 1,
                    },
                ]}
            >
                {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}

                <TextInput
                    style={[styles.input, inputStyle]}
                    placeholderTextColor={Colors.text.disabled}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...textInputProps}
                />

                {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
            </View>

            {error && <Text style={styles.errorText}>{error}</Text>}
            {helperText && !error && <Text style={styles.helperText}>{helperText}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: Spacing.md,
    },
    label: {
        ...Typography.label,
        marginBottom: Spacing.xs,
        color: Colors.text.primary,
    },
    required: {
        color: Colors.error.main,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: BorderRadius.sm,
        backgroundColor: Colors.background.primary,
        minHeight: 48,
    },
    input: {
        flex: 1,
        ...Typography.body,
        paddingHorizontal: Spacing.md,
        paddingVertical: Spacing.md - 4,
        color: Colors.text.primary,
    },
    leftIcon: {
        marginLeft: Spacing.md,
    },
    rightIcon: {
        marginRight: Spacing.md,
    },
    errorText: {
        ...Typography.caption,
        color: Colors.error.main,
        marginTop: Spacing.xs,
    },
    helperText: {
        ...Typography.caption,
        color: Colors.text.secondary,
        marginTop: Spacing.xs,
    },
});
