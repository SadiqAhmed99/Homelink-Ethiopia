import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Switch,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'expo-router';
import { Card, Button } from '../components/ui';
import { Colors } from '../constants/Colors';
import { Typography } from '../constants/Typography';
import { Spacing, BorderRadius } from '../constants/Spacing';
import { languagePreference } from '../services/storage';

export default function SettingsScreen() {
    const { t, i18n } = useTranslation();
    const router = useRouter();

    const [settings, setSettings] = useState({
        notifications: true,
        emailNotifications: true,
        smsNotifications: false,
        jobAlerts: true,
        language: i18n.language,
    });

    const languages = [
        { code: 'en', name: 'English', nativeName: 'English' },
        { code: 'am', name: 'Amharic', nativeName: 'አማርኛ' },
        { code: 'om', name: 'Oromiffa', nativeName: 'Afaan Oromoo' },
        { code: 'ti', name: 'Tigrinya', nativeName: 'ትግርኛ' },
    ];

    const changeLanguage = async (langCode: string) => {
        await i18n.changeLanguage(langCode);
        await languagePreference.save(langCode);
        setSettings({ ...settings, language: langCode });
    };

    const toggleSetting = (key: keyof typeof settings) => {
        setSettings({ ...settings, [key]: !settings[key] });
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.backButton}>← Back</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Settings</Text>
            </View>

            {/* Language Settings */}
            <Text style={styles.sectionTitle}>Language</Text>
            <Card>
                {languages.map((lang) => (
                    <TouchableOpacity
                        key={lang.code}
                        style={styles.languageOption}
                        onPress={() => changeLanguage(lang.code)}
                    >
                        <View>
                            <Text style={styles.languageName}>{lang.name}</Text>
                            <Text style={styles.languageNative}>{lang.nativeName}</Text>
                        </View>
                        {settings.language === lang.code && (
                            <Text style={styles.checkmark}>✓</Text>
                        )}
                    </TouchableOpacity>
                ))}
            </Card>

            {/* Notification Settings */}
            <Text style={styles.sectionTitle}>Notifications</Text>
            <Card>
                <View style={styles.settingRow}>
                    <View style={styles.settingInfo}>
                        <Text style={styles.settingLabel}>Push Notifications</Text>
                        <Text style={styles.settingDescription}>
                            Receive notifications about job opportunities
                        </Text>
                    </View>
                    <Switch
                        value={settings.notifications}
                        onValueChange={() => toggleSetting('notifications')}
                        trackColor={{ false: Colors.neutral.stone, true: Colors.primary.ochre }}
                        thumbColor={Colors.neutral.offWhite}
                    />
                </View>

                <View style={styles.settingRow}>
                    <View style={styles.settingInfo}>
                        <Text style={styles.settingLabel}>Email Notifications</Text>
                        <Text style={styles.settingDescription}>
                            Receive updates via email
                        </Text>
                    </View>
                    <Switch
                        value={settings.emailNotifications}
                        onValueChange={() => toggleSetting('emailNotifications')}
                        trackColor={{ false: Colors.neutral.stone, true: Colors.primary.ochre }}
                        thumbColor={Colors.neutral.offWhite}
                    />
                </View>

                <View style={styles.settingRow}>
                    <View style={styles.settingInfo}>
                        <Text style={styles.settingLabel}>SMS Notifications</Text>
                        <Text style={styles.settingDescription}>
                            Receive updates via SMS
                        </Text>
                    </View>
                    <Switch
                        value={settings.smsNotifications}
                        onValueChange={() => toggleSetting('smsNotifications')}
                        trackColor={{ false: Colors.neutral.stone, true: Colors.primary.ochre }}
                        thumbColor={Colors.neutral.offWhite}
                    />
                </View>

                <View style={styles.settingRow}>
                    <View style={styles.settingInfo}>
                        <Text style={styles.settingLabel}>Job Alerts</Text>
                        <Text style={styles.settingDescription}>
                            Get notified about matching job opportunities
                        </Text>
                    </View>
                    <Switch
                        value={settings.jobAlerts}
                        onValueChange={() => toggleSetting('jobAlerts')}
                        trackColor={{ false: Colors.neutral.stone, true: Colors.primary.ochre }}
                        thumbColor={Colors.neutral.offWhite}
                    />
                </View>
            </Card>

            {/* Account Settings */}
            <Text style={styles.sectionTitle}>Account</Text>
            <Card>
                <TouchableOpacity style={styles.actionRow}>
                    <Text style={styles.actionText}>Change Password</Text>
                    <Text style={styles.actionIcon}>›</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionRow}>
                    <Text style={styles.actionText}>Update Phone Number</Text>
                    <Text style={styles.actionIcon}>›</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionRow}>
                    <Text style={styles.actionText}>Privacy Settings</Text>
                    <Text style={styles.actionIcon}>›</Text>
                </TouchableOpacity>
            </Card>

            {/* Support */}
            <Text style={styles.sectionTitle}>Support</Text>
            <Card>
                <TouchableOpacity style={styles.actionRow}>
                    <Text style={styles.actionText}>Help Center</Text>
                    <Text style={styles.actionIcon}>›</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionRow}>
                    <Text style={styles.actionText}>Contact Support</Text>
                    <Text style={styles.actionIcon}>›</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionRow}>
                    <Text style={styles.actionText}>Terms of Service</Text>
                    <Text style={styles.actionIcon}>›</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionRow}>
                    <Text style={styles.actionText}>Privacy Policy</Text>
                    <Text style={styles.actionIcon}>›</Text>
                </TouchableOpacity>
            </Card>

            {/* App Info */}
            <Text style={styles.sectionTitle}>About</Text>
            <Card>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>App Version</Text>
                    <Text style={styles.infoValue}>1.0.0</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Build Number</Text>
                    <Text style={styles.infoValue}>100</Text>
                </View>
            </Card>

            {/* Logout */}
            <View style={styles.logoutContainer}>
                <Button
                    title="Log Out"
                    variant="ghost"
                    fullWidth
                    onPress={() => {/* Handle logout */ }}
                />
            </View>

            {/* Delete Account */}
            <TouchableOpacity style={styles.deleteAccount}>
                <Text style={styles.deleteAccountText}>Delete Account</Text>
            </TouchableOpacity>
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
    header: {
        marginBottom: Spacing.lg,
    },
    backButton: {
        ...Typography.label,
        color: Colors.primary.ochre,
        marginBottom: Spacing.sm,
    },
    title: {
        ...Typography.h1,
        color: Colors.text.primary,
    },
    sectionTitle: {
        ...Typography.h3,
        color: Colors.text.primary,
        marginTop: Spacing.lg,
        marginBottom: Spacing.md,
    },
    languageOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: Spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: Colors.neutral.stone,
    },
    languageName: {
        ...Typography.body,
        color: Colors.text.primary,
    },
    languageNative: {
        ...Typography.caption,
        color: Colors.text.secondary,
    },
    checkmark: {
        ...Typography.h3,
        color: Colors.success.main,
    },
    settingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: Spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: Colors.neutral.stone,
    },
    settingInfo: {
        flex: 1,
        marginRight: Spacing.md,
    },
    settingLabel: {
        ...Typography.body,
        color: Colors.text.primary,
        marginBottom: 2,
    },
    settingDescription: {
        ...Typography.caption,
        color: Colors.text.secondary,
    },
    actionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: Spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: Colors.neutral.stone,
    },
    actionText: {
        ...Typography.body,
        color: Colors.text.primary,
    },
    actionIcon: {
        ...Typography.h3,
        color: Colors.text.secondary,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: Spacing.sm,
        borderBottomWidth: 1,
        borderBottomColor: Colors.neutral.stone,
    },
    infoLabel: {
        ...Typography.body,
        color: Colors.text.secondary,
    },
    infoValue: {
        ...Typography.body,
        color: Colors.text.primary,
    },
    logoutContainer: {
        marginTop: Spacing.xl,
        marginBottom: Spacing.md,
    },
    deleteAccount: {
        alignItems: 'center',
        paddingVertical: Spacing.md,
        marginBottom: Spacing.xxl,
    },
    deleteAccountText: {
        ...Typography.label,
        color: Colors.error.main,
    },
});
