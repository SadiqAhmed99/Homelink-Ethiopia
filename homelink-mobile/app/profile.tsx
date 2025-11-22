import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'expo-router';
import { Card, Badge, Button } from '../components/ui';
import { Colors } from '../constants/Colors';
import { Typography } from '../constants/Typography';
import { Spacing, BorderRadius } from '../constants/Spacing';

export default function ProfileScreen() {
    const { t } = useTranslation();
    const router = useRouter();
    const [isEditing, setIsEditing] = useState(false);

    // Mock worker profile - would come from API/storage in production
    const [profile, setProfile] = useState({
        fullName: 'Abeba Tesfaye',
        phone: '+251911234567',
        region: 'Addis Ababa',
        age: 28,
        skills: ['Cooking', 'Cleaning', 'Childcare'],
        experience: '5+ years',
        workType: 'Live-in',
        availability: 'Available',
        trustScore: 85,
        verificationStatus: 'Verified',
        trainingBadges: [
            { name: 'House Safety', completed: true },
            { name: 'Professional Etiquette', completed: true },
            { name: 'Childcare Basics', completed: true },
            { name: 'Food Safety', completed: false },
        ],
    });

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.backButton}>← Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
                    <Text style={styles.editButton}>{isEditing ? 'Cancel' : 'Edit'}</Text>
                </TouchableOpacity>
            </View>

            {/* Profile Header */}
            <Card style={styles.profileHeader}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>{profile.fullName.charAt(0)}</Text>
                </View>
                <Text style={styles.profileName}>{profile.fullName}</Text>
                <View style={styles.statusBadges}>
                    <Badge variant="success">{profile.verificationStatus}</Badge>
                    <Badge variant={profile.availability === 'Available' ? 'success' : 'warning'}>
                        {profile.availability}
                    </Badge>
                </View>
                <View style={styles.trustScoreContainer}>
                    <Text style={styles.trustScoreLabel}>Trust Score</Text>
                    <Text style={styles.trustScoreValue}>{profile.trustScore}/100</Text>
                </View>
            </Card>

            {/* Personal Information */}
            <Text style={styles.sectionTitle}>Personal Information</Text>
            <Card>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Phone Number</Text>
                    <Text style={styles.infoValue}>{profile.phone}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Region</Text>
                    <Text style={styles.infoValue}>{profile.region}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Age</Text>
                    <Text style={styles.infoValue}>{profile.age} years</Text>
                </View>
            </Card>

            {/* Skills & Experience */}
            <Text style={styles.sectionTitle}>Skills & Experience</Text>
            <Card>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Skills</Text>
                    <View style={styles.skillsContainer}>
                        {profile.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary" style={styles.skillBadge}>
                                {skill}
                            </Badge>
                        ))}
                    </View>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Experience</Text>
                    <Text style={styles.infoValue}>{profile.experience}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Work Type</Text>
                    <Text style={styles.infoValue}>{profile.workType}</Text>
                </View>
            </Card>

            {/* Training Badges */}
            <Text style={styles.sectionTitle}>Training Badges</Text>
            <Card>
                {profile.trainingBadges.map((badge, index) => (
                    <View key={index} style={styles.badgeRow}>
                        <Text style={styles.badgeIcon}>
                            {badge.completed ? '✅' : '⏳'}
                        </Text>
                        <Text style={[
                            styles.badgeName,
                            !badge.completed && styles.badgeNameIncomplete
                        ]}>
                            {badge.name}
                        </Text>
                        {!badge.completed && (
                            <TouchableOpacity
                                style={styles.startButton}
                                onPress={() => router.push('/training')}
                            >
                                <Text style={styles.startButtonText}>Start</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                ))}
            </Card>

            {/* Verification Status */}
            <Text style={styles.sectionTitle}>Verification Status</Text>
            <Card>
                <View style={styles.verificationRow}>
                    <Text style={styles.verificationIcon}>✅</Text>
                    <Text style={styles.verificationText}>Age Verified (18+)</Text>
                </View>
                <View style={styles.verificationRow}>
                    <Text style={styles.verificationIcon}>✅</Text>
                    <Text style={styles.verificationText}>Emergency Contact Verified</Text>
                </View>
                <View style={styles.verificationRow}>
                    <Text style={styles.verificationIcon}>✅</Text>
                    <Text style={styles.verificationText}>ID Verified</Text>
                </View>
                <View style={styles.verificationRow}>
                    <Text style={styles.verificationIcon}>
                        {profile.trainingBadges.every(b => b.completed) ? '✅' : '⏳'}
                    </Text>
                    <Text style={styles.verificationText}>Training Complete</Text>
                </View>
            </Card>

            {/* Actions */}
            <View style={styles.actions}>
                <Button
                    title="Download My CV"
                    variant="primary"
                    fullWidth
                    onPress={() => {/* Download CV */ }}
                />
                <Button
                    title="Update Availability"
                    variant="secondary"
                    fullWidth
                    onPress={() => {/* Update availability */ }}
                    style={{ marginTop: Spacing.md }}
                />
            </View>
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
        marginBottom: Spacing.lg,
    },
    backButton: {
        ...Typography.label,
        color: Colors.primary.ochre,
    },
    editButton: {
        ...Typography.label,
        color: Colors.primary.ochre,
    },
    profileHeader: {
        alignItems: 'center',
        marginBottom: Spacing.lg,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: BorderRadius.full,
        backgroundColor: Colors.primary.ochre,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: Spacing.md,
    },
    avatarText: {
        ...Typography.h1,
        color: Colors.text.inverse,
    },
    profileName: {
        ...Typography.h2,
        color: Colors.text.primary,
        marginBottom: Spacing.sm,
    },
    statusBadges: {
        flexDirection: 'row',
        gap: Spacing.sm,
        marginBottom: Spacing.md,
    },
    trustScoreContainer: {
        alignItems: 'center',
    },
    trustScoreLabel: {
        ...Typography.caption,
        color: Colors.text.secondary,
    },
    trustScoreValue: {
        ...Typography.h2,
        color: Colors.success.main,
    },
    sectionTitle: {
        ...Typography.h3,
        color: Colors.text.primary,
        marginTop: Spacing.lg,
        marginBottom: Spacing.md,
    },
    infoRow: {
        paddingVertical: Spacing.sm,
        borderBottomWidth: 1,
        borderBottomColor: Colors.neutral.stone,
    },
    infoLabel: {
        ...Typography.caption,
        color: Colors.text.secondary,
        marginBottom: 4,
    },
    infoValue: {
        ...Typography.body,
        color: Colors.text.primary,
    },
    skillsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: Spacing.xs,
        marginTop: 4,
    },
    skillBadge: {
        marginRight: Spacing.xs,
        marginBottom: Spacing.xs,
    },
    badgeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: Spacing.sm,
        borderBottomWidth: 1,
        borderBottomColor: Colors.neutral.stone,
    },
    badgeIcon: {
        fontSize: 20,
        marginRight: Spacing.sm,
    },
    badgeName: {
        ...Typography.body,
        color: Colors.text.primary,
        flex: 1,
    },
    badgeNameIncomplete: {
        color: Colors.text.secondary,
    },
    startButton: {
        backgroundColor: Colors.secondary.teal,
        paddingVertical: 4,
        paddingHorizontal: Spacing.sm,
        borderRadius: BorderRadius.sm,
    },
    startButtonText: {
        ...Typography.caption,
        color: Colors.text.inverse,
    },
    verificationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: Spacing.sm,
        borderBottomWidth: 1,
        borderBottomColor: Colors.neutral.stone,
    },
    verificationIcon: {
        fontSize: 20,
        marginRight: Spacing.sm,
    },
    verificationText: {
        ...Typography.body,
        color: Colors.text.primary,
    },
    actions: {
        marginTop: Spacing.xl,
        marginBottom: Spacing.xxl,
    },
});
