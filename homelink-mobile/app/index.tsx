import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Button } from '../components/ui';
import { Colors } from '../constants/Colors';
import { Typography } from '../constants/Typography';
import { Spacing } from '../constants/Spacing';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>HomeLink Addis</Text>
                <Text style={styles.subtitle}>Workforce Supply Platform</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.welcomeText}>
                    Welcome to HomeLink Addis! This platform connects Ethiopian domestic workers with verified employers.
                </Text>

                <Link href="/registration/welcome" asChild>
                    <Button
                        title="Start Worker Registration"
                        onPress={() => { }}
                        variant="primary"
                        fullWidth
                        style={styles.button}
                    />
                </Link>

                <Link href="/dashboard" asChild>
                    <Button
                        title="Worker Dashboard (Demo)"
                        onPress={() => { }}
                        variant="secondary"
                        fullWidth
                        style={styles.button}
                    />
                </Link>

                <Text style={styles.infoText}>
                    Already registered? Access your dashboard to view profile, training, and messages.
                </Text>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    © 2025 HomeLink Addis. All rights reserved.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background.secondary,
    },
    header: {
        backgroundColor: Colors.primary.ochre,
        padding: Spacing.xl,
        alignItems: 'center',
    },
    title: {
        ...Typography.h1,
        color: Colors.text.inverse,
        marginBottom: Spacing.xs,
    },
    subtitle: {
        ...Typography.bodyLarge,
        color: Colors.text.inverse,
    },
    content: {
        flex: 1,
        padding: Spacing.lg,
        justifyContent: 'center',
    },
    welcomeText: {
        ...Typography.bodyLarge,
        color: Colors.text.primary,
        textAlign: 'center',
        marginBottom: Spacing.xl,
    },
    button: {
        marginBottom: Spacing.lg,
    },
    infoText: {
        ...Typography.body,
        color: Colors.text.secondary,
        textAlign: 'center',
    },
    footer: {
        padding: Spacing.md,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: Colors.border.light,
    },
    footerText: {
        ...Typography.caption,
        color: Colors.text.secondary,
    },
});
