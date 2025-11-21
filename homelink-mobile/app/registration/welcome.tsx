import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'expo-router';
import { Button, Card } from '../../components/ui';
import { Colors } from '../../constants/Colors';
import { Typography } from '../../constants/Typography';
import { Spacing, BorderRadius } from '../../constants/Spacing';
import { languagePreference } from '../../services/storage';

export default function WelcomeScreen() {
    const { t, i18n } = useTranslation();
    const router = useRouter();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    const toggleLanguage = async () => {
        const languages = ['en', 'am', 'om', 'ti'];
        const currentIndex = languages.indexOf(currentLanguage);
        const nextIndex = (currentIndex + 1) % languages.length;
        const newLang = languages[nextIndex];
        await i18n.changeLanguage(newLang);
        await languagePreference.save(newLang);
        setCurrentLanguage(newLang);
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            {/* Language Toggle */}
            <TouchableOpacity style={styles.languageToggle} onPress={toggleLanguage}>
                <Text style={styles.languageText}>
                    {currentLanguage === 'en' ? 'አማርኛ / Afaan Oromoo / ትግርኛ' :
                        currentLanguage === 'am' ? 'English / Afaan Oromoo / ትግርኛ' :
                            currentLanguage === 'om' ? 'English / አማርኛ / ትግርኛ' :
                                'English / አማርኛ / Afaan Oromoo'}
                </Text>
            </TouchableOpacity>

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>{t('registration.welcome.title')}</Text>
                <Text style={styles.subtitle}>{t('registration.welcome.subtitle')}</Text>
            </View>

            {/* Registration Methods */}
            <View style={styles.methodsContainer}>
                <Card style={styles.methodCard}>
                    <View style={styles.iconContainer}>
                        <Text style={styles.iconText}>📷</Text>
                    </View>
                    <Text style={styles.methodTitle}>{t('registration.welcome.idCapture')}</Text>
                    <Text style={styles.methodDescription}>
                        {t('registration.welcome.idCaptureDesc')}
                    </Text>
                    <Button
                        title={t('common.continue')}
                        onPress={() => router.push('/registration/id-capture')}
                        variant="primary"
                        fullWidth
                    />
                </Card>

                <Card style={styles.methodCard}>
                    <View style={styles.iconContainer}>
                        <Text style={styles.iconText}>🎤</Text>
                    </View>
                    <Text style={styles.methodTitle}>{t('registration.welcome.voiceCommand')}</Text>
                    <Text style={styles.methodDescription}>
                        {t('registration.welcome.voiceCommandDesc')}
                    </Text>
                    <Button
                        title={t('common.continue')}
                        onPress={() => router.push('/registration/voice-command')}
                        variant="secondary"
                        fullWidth
                    />
                </Card>

                <Card style={styles.methodCard}>
                    <View style={styles.iconContainer}>
                        <Text style={styles.iconText}>✍️</Text>
                    </View>
                    <Text style={styles.methodTitle}>{t('registration.welcome.manualEntry')}</Text>
                    <Text style={styles.methodDescription}>
                        {t('registration.welcome.manualEntryDesc')}
                    </Text>
                    <Button
                        title={t('common.continue')}
                        onPress={() => router.push('/registration/manual-entry')}
                        variant="tertiary"
                        fullWidth
                    />
                </Card>
            </View>

            {/* Benefits */}
            <View style={styles.benefitsContainer}>
                <Text style={styles.benefitsTitle}>{t('registration.welcome.benefits.title')}</Text>
                <View style={styles.benefitItem}>
                    <Text style={styles.benefitIcon}>✓</Text>
                    <Text style={styles.benefitText}>{t('registration.welcome.benefits.verified')}</Text>
                </View>
                <View style={styles.benefitItem}>
                    <Text style={styles.benefitIcon}>✓</Text>
                    <Text style={styles.benefitText}>{t('registration.welcome.benefits.safe')}</Text>
                </View>
                <View style={styles.benefitItem}>
                    <Text style={styles.benefitIcon}>✓</Text>
                    <Text style={styles.benefitText}>{t('registration.welcome.benefits.support')}</Text>
                </View>
            </View>

            {/* Security Badge */}
            <Text style={styles.securityText}>{t('security.dataSecure')}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background.secondary,
    },
    content: {
        padding: Spacing.lg,
    },
    languageToggle: {
        alignSelf: 'flex-end',
        paddingVertical: Spacing.sm,
        paddingHorizontal: Spacing.md,
        backgroundColor: Colors.primary.ochre,
        borderRadius: BorderRadius.full,
        marginBottom: Spacing.lg,
    },
    languageText: {
        ...Typography.label,
        color: Colors.text.inverse,
    },
    header: {
        marginBottom: Spacing.xl,
        alignItems: 'center',
    },
    title: {
        ...Typography.h1,
        color: Colors.primary.ochre,
        textAlign: 'center',
        marginBottom: Spacing.sm,
    },
    subtitle: {
        ...Typography.bodyLarge,
        color: Colors.text.secondary,
        textAlign: 'center',
    },
    methodsContainer: {
        marginBottom: Spacing.xl,
    },
    methodCard: {
        marginBottom: Spacing.md,
        alignItems: 'center',
    },
    iconContainer: {
        width: 80,
        height: 80,
        borderRadius: BorderRadius.full,
        backgroundColor: Colors.neutral.offWhite,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: Spacing.md,
    },
    iconText: {
        fontSize: 40,
    },
    methodTitle: {
        ...Typography.h3,
        color: Colors.text.primary,
        marginBottom: Spacing.xs,
        textAlign: 'center',
    },
    methodDescription: {
        ...Typography.body,
        color: Colors.text.secondary,
        textAlign: 'center',
        marginBottom: Spacing.md,
    },
    benefitsContainer: {
        marginBottom: Spacing.xl,
    },
    benefitsTitle: {
        ...Typography.h3,
        color: Colors.text.primary,
        marginBottom: Spacing.md,
    },
    benefitItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Spacing.sm,
    },
    benefitIcon: {
        fontSize: 20,
        color: Colors.success.main,
        marginRight: Spacing.sm,
    },
    benefitText: {
        ...Typography.body,
        color: Colors.text.primary,
    },
    securityText: {
        ...Typography.caption,
        color: Colors.text.secondary,
        textAlign: 'center',
        marginTop: Spacing.md,
    },
});
