import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'expo-router';
import { Button, Input } from '../../components/ui';
import { Colors } from '../../constants/Colors';
import { Typography } from '../../constants/Typography';
import { Spacing } from '../../constants/Spacing';
import { registrationDraft } from '../../services/storage';

const ETHIOPIAN_REGIONS = [
    'Addis Ababa',
    'Afar',
    'Amhara',
    'Benishangul-Gumuz',
    'Dire Dawa',
    'Gambela',
    'Harari',
    'Oromia',
    'Sidama',
    'Somali',
    'Southern Nations',
    'Tigray',
];

export default function ManualEntryScreen() {
    const { t } = useTranslation();
    const router = useRouter();

    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        region: '',
        emergencyContactName: '',
        emergencyContactPhone: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = t('errors.required');
        }

        if (!formData.phone.trim()) {
            newErrors.phone = t('errors.required');
        } else if (!/^09\d{8}$/.test(formData.phone)) {
            newErrors.phone = t('errors.invalidPhone');
        }

        if (!formData.region) {
            newErrors.region = t('errors.required');
        }

        if (!formData.emergencyContactName.trim()) {
            newErrors.emergencyContactName = t('errors.required');
        }

        if (!formData.emergencyContactPhone.trim()) {
            newErrors.emergencyContactPhone = t('errors.required');
        } else if (!/^09\d{8}$/.test(formData.emergencyContactPhone)) {
            newErrors.emergencyContactPhone = t('errors.invalidPhone');
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = async () => {
        if (validateForm()) {
            // Save draft
            await registrationDraft.save({
                ...formData,
                method: 'manual',
                step: 'personal-info',
            });

            // Navigate to skills screen
            router.push('/registration/skills');
        }
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <View style={styles.header}>
                <Text style={styles.title}>{t('registration.personalInfo.title')}</Text>
                <View style={styles.progressBar}>
                    <View style={[styles.progressFill, { width: '20%' }]} />
                </View>
                <Text style={styles.progressText}>Step 1 of 5</Text>
            </View>

            <View style={styles.form}>
                <Input
                    label={t('registration.personalInfo.fullName')}
                    placeholder={t('registration.personalInfo.fullNamePlaceholder')}
                    value={formData.fullName}
                    onChangeText={(text) => setFormData({ ...formData, fullName: text })}
                    error={errors.fullName}
                    required
                />

                <Input
                    label={t('registration.personalInfo.phone')}
                    placeholder={t('registration.personalInfo.phonePlaceholder')}
                    value={formData.phone}
                    onChangeText={(text) => setFormData({ ...formData, phone: text })}
                    keyboardType="phone-pad"
                    error={errors.phone}
                    required
                />

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>
                        {t('registration.personalInfo.region')} <Text style={styles.required}>*</Text>
                    </Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.regionScroll}>
                        {ETHIOPIAN_REGIONS.map((region) => (
                            <Button
                                key={region}
                                title={region}
                                onPress={() => setFormData({ ...formData, region })}
                                variant={formData.region === region ? 'primary' : 'tertiary'}
                                size="small"
                                style={styles.regionButton}
                            />
                        ))}
                    </ScrollView>
                    {errors.region && <Text style={styles.errorText}>{errors.region}</Text>}
                </View>

                <Input
                    label={t('registration.personalInfo.emergencyContact')}
                    placeholder={t('registration.personalInfo.emergencyContactPlaceholder')}
                    value={formData.emergencyContactName}
                    onChangeText={(text) => setFormData({ ...formData, emergencyContactName: text })}
                    error={errors.emergencyContactName}
                    required
                />

                <Input
                    label={t('registration.personalInfo.emergencyPhone')}
                    placeholder={t('registration.personalInfo.emergencyPhonePlaceholder')}
                    value={formData.emergencyContactPhone}
                    onChangeText={(text) => setFormData({ ...formData, emergencyContactPhone: text })}
                    keyboardType="phone-pad"
                    error={errors.emergencyContactPhone}
                    required
                />
            </View>

            <View style={styles.actions}>
                <Button
                    title={t('common.back')}
                    onPress={() => router.back()}
                    variant="ghost"
                    style={styles.backButton}
                />
                <Button
                    title={t('common.next')}
                    onPress={handleNext}
                    variant="primary"
                    style={styles.nextButton}
                />
            </View>

            <Text style={styles.securityText}>{t('security.dataSecure')}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background.primary,
    },
    content: {
        padding: Spacing.lg,
    },
    header: {
        marginBottom: Spacing.xl,
    },
    title: {
        ...Typography.h2,
        color: Colors.primary.ochre,
        marginBottom: Spacing.md,
    },
    progressBar: {
        height: 4,
        backgroundColor: Colors.neutral.lightGray,
        borderRadius: 2,
        marginBottom: Spacing.xs,
    },
    progressFill: {
        height: '100%',
        backgroundColor: Colors.primary.ochre,
        borderRadius: 2,
    },
    progressText: {
        ...Typography.caption,
        color: Colors.text.secondary,
    },
    form: {
        marginBottom: Spacing.xl,
    },
    inputContainer: {
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
    regionScroll: {
        marginBottom: Spacing.xs,
    },
    regionButton: {
        marginRight: Spacing.sm,
    },
    errorText: {
        ...Typography.caption,
        color: Colors.error.main,
        marginTop: Spacing.xs,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: Spacing.lg,
    },
    backButton: {
        flex: 1,
        marginRight: Spacing.sm,
    },
    nextButton: {
        flex: 2,
    },
    securityText: {
        ...Typography.caption,
        color: Colors.text.secondary,
        textAlign: 'center',
    },
});
