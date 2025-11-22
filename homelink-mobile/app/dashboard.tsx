import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'expo-router';
import { Card, Badge } from '../../components/ui';
import { Colors } from '../../constants/Colors';
import { Typography } from '../../constants/Typography';
import { Spacing, BorderRadius } from '../../constants/Spacing';

export default function DashboardScreen() {
    const { t } = useTranslation();
    const router = useRouter();

    // Mock worker data - would come from API/storage in production
    const worker = {
        name: 'Abeba Tesfaye',
        status: 'Available',
        trustScore: 85,
        completedPlacements: 3,
        trainingProgress: 80,
        pendingMessages: 2,
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            {/* Header */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.greeting}>Welcome back,</Text>
                    <Text style={styles.name}>{worker.name}</Text>
                </View>
                <TouchableOpacity
                    style={styles.profileButton}
                    onPress={() => router.push('/profile')}
                >
                    <Text style={styles.profileIcon}>👤</Text>
                </TouchableOpacity>
            </View>

            {/* Status Card */}
            <Card style={styles.statusCard}>
                <View style={styles.statusHeader}>
                    <Text style={styles.statusTitle}>Current Status</Text>
                    <Badge variant={worker.status === 'Available' ? 'success' : 'warning'}>
                        {worker.status}
                    </Badge>
                </View>
                <View style={styles.statsGrid}>
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>{worker.trustScore}</Text>
                        <Text style={styles.statLabel}>Trust Score</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>{worker.completedPlacements}</Text>
                        <Text style={styles.statLabel}>Placements</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>{worker.trainingProgress}%</Text>
                        <Text style={styles.statLabel}>Training</Text>
                    </View>
                </View>
            </Card>

            {/* Quick Actions */}
            <Text style={styles.sectionTitle}>Quick Actions</Text>
            <View style={styles.actionsGrid}>
                <TouchableOpacity
                    style={styles.actionCard}
                    onPress={() => router.push('/profile')}
                >
                    <Text style={styles.actionIcon}>📋</Text>
                    <Text style={styles.actionText}>My Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.actionCard}
                    onPress={() => router.push('/training')}
                >
                    <Text style={styles.actionIcon}>🎓</Text>
                    <Text style={styles.actionText}>Training</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.actionCard}
                    onPress={() => router.push('/messages')}
                >
                    <View>
                        <Text style={styles.actionIcon}>💬</Text>
                        {worker.pendingMessages > 0 && (
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>{worker.pendingMessages}</Text>
                            </View>
                        )}
                    </View>
                    <Text style={styles.actionText}>Messages</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.actionCard}
                    onPress={() => router.push('/settings')}
                >
                    <Text style={styles.actionIcon}>⚙️</Text>
                    <Text style={styles.actionText}>Settings</Text>
                </TouchableOpacity>
            </View>

            {/* Recent Activity */}
            <Text style={styles.sectionTitle}>Recent Activity</Text>
            <Card style={styles.activityCard}>
                <View style={styles.activityItem}>
                    <Text style={styles.activityIcon}>✅</Text>
                    <View style={styles.activityContent}>
                        <Text style={styles.activityTitle}>Profile Approved</Text>
                        <Text style={styles.activityDate}>2 days ago</Text>
                    </View>
                </View>
                <View style={styles.activityItem}>
                    <Text style={styles.activityIcon}>🎓</Text>
                    <View style={styles.activityContent}>
                        <Text style={styles.activityTitle}>Completed: House Safety Training</Text>
                        <Text style={styles.activityDate}>5 days ago</Text>
                    </View>
                </View>
                <View style={styles.activityItem}>
                    <Text style={styles.activityIcon}>📝</Text>
                    <View style={styles.activityContent}>
                        <Text style={styles.activityTitle}>Profile Updated</Text>
                        <Text style={styles.activityDate}>1 week ago</Text>
                    </View>
                </View>
            </Card>

            {/* Training Reminder */}
            {worker.trainingProgress < 100 && (
                <Card style={styles.reminderCard}>
                    <Text style={styles.reminderTitle}>⚠️ Complete Your Training</Text>
                    <Text style={styles.reminderText}>
                        You have {Math.round((100 - worker.trainingProgress) / 20)} training modules remaining.
                        Complete them to increase your Trust Score!
                    </Text>
                    <TouchableOpacity
                        style={styles.reminderButton}
                        onPress={() => router.push('/training')}
                    >
                        <Text style={styles.reminderButtonText}>Continue Training</Text>
                    </TouchableOpacity>
                </Card>
            )}
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Spacing.xl,
    },
    greeting: {
        ...Typography.body,
        color: Colors.text.secondary,
    },
    name: {
        ...Typography.h2,
        color: Colors.text.primary,
    },
    profileButton: {
        width: 48,
        height: 48,
        borderRadius: BorderRadius.full,
        backgroundColor: Colors.primary.ochre,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileIcon: {
        fontSize: 24,
    },
    statusCard: {
        marginBottom: Spacing.lg,
    },
    statusHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Spacing.md,
    },
    statusTitle: {
        ...Typography.h3,
        color: Colors.text.primary,
    },
    statsGrid: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    statItem: {
        alignItems: 'center',
    },
    statValue: {
        ...Typography.h2,
        color: Colors.primary.ochre,
        marginBottom: Spacing.xs,
    },
    statLabel: {
        ...Typography.caption,
        color: Colors.text.secondary,
    },
    sectionTitle: {
        ...Typography.h3,
        color: Colors.text.primary,
        marginBottom: Spacing.md,
        marginTop: Spacing.md,
    },
    actionsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: Spacing.lg,
    },
    actionCard: {
        width: '48%',
        backgroundColor: Colors.neutral.offWhite,
        borderRadius: BorderRadius.md,
        padding: Spacing.lg,
        alignItems: 'center',
        marginBottom: Spacing.md,
    },
    actionIcon: {
        fontSize: 40,
        marginBottom: Spacing.sm,
    },
    actionText: {
        ...Typography.label,
        color: Colors.text.primary,
        textAlign: 'center',
    },
    badge: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: Colors.error.main,
        borderRadius: BorderRadius.full,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        ...Typography.caption,
        color: Colors.text.inverse,
        fontSize: 10,
    },
    activityCard: {
        marginBottom: Spacing.lg,
    },
    activityItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: Spacing.sm,
        borderBottomWidth: 1,
        borderBottomColor: Colors.neutral.stone,
    },
    activityIcon: {
        fontSize: 24,
        marginRight: Spacing.md,
    },
    activityContent: {
        flex: 1,
    },
    activityTitle: {
        ...Typography.body,
        color: Colors.text.primary,
        marginBottom: 2,
    },
    activityDate: {
        ...Typography.caption,
        color: Colors.text.secondary,
    },
    reminderCard: {
        backgroundColor: Colors.warning.light,
        borderLeftWidth: 4,
        borderLeftColor: Colors.warning.main,
    },
    reminderTitle: {
        ...Typography.h4,
        color: Colors.text.primary,
        marginBottom: Spacing.sm,
    },
    reminderText: {
        ...Typography.body,
        color: Colors.text.secondary,
        marginBottom: Spacing.md,
    },
    reminderButton: {
        backgroundColor: Colors.warning.main,
        paddingVertical: Spacing.sm,
        paddingHorizontal: Spacing.md,
        borderRadius: BorderRadius.sm,
        alignSelf: 'flex-start',
    },
    reminderButtonText: {
        ...Typography.label,
        color: Colors.text.inverse,
    },
});
