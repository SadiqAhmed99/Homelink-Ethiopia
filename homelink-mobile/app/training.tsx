import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    ProgressBarAndroid,
    Platform,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'expo-router';
import { Card, Badge, Button } from '../components/ui';
import { Colors } from '../constants/Colors';
import { Typography } from '../constants/Typography';
import { Spacing, BorderRadius } from '../constants/Spacing';

interface TrainingModule {
    id: string;
    name: string;
    category: string;
    duration: number;
    required: boolean;
    completed: boolean;
    progress: number;
    description: string;
}

export default function TrainingScreen() {
    const { t } = useTranslation();
    const router = useRouter();

    const [modules, setModules] = useState<TrainingModule[]>([
        {
            id: '1',
            name: 'House Safety & Emergency Procedures',
            category: 'Safety',
            duration: 30,
            required: true,
            completed: true,
            progress: 100,
            description: 'Learn essential safety protocols and emergency response procedures.',
        },
        {
            id: '2',
            name: 'Professional Etiquette & Communication',
            category: 'Professional Skills',
            duration: 45,
            required: true,
            completed: true,
            progress: 100,
            description: 'Master professional communication and workplace etiquette.',
        },
        {
            id: '3',
            name: 'Childcare Basics',
            category: 'Specialized Skills',
            duration: 60,
            required: false,
            completed: true,
            progress: 100,
            description: 'Essential childcare skills and safety guidelines.',
        },
        {
            id: '4',
            name: 'Food Safety & Hygiene',
            category: 'Safety',
            duration: 40,
            required: true,
            completed: false,
            progress: 60,
            description: 'Food handling, storage, and kitchen hygiene best practices.',
        },
        {
            id: '5',
            name: 'Elderly Care Basics',
            category: 'Specialized Skills',
            duration: 50,
            required: false,
            completed: false,
            progress: 0,
            description: 'Caring for elderly individuals with compassion and professionalism.',
        },
        {
            id: '6',
            name: 'Rights & Responsibilities',
            category: 'Compliance',
            duration: 35,
            required: true,
            completed: false,
            progress: 0,
            description: 'Understanding your rights as a worker and your responsibilities.',
        },
    ]);

    const completedModules = modules.filter(m => m.completed).length;
    const totalModules = modules.length;
    const overallProgress = (completedModules / totalModules) * 100;

    const requiredModules = modules.filter(m => m.required);
    const completedRequired = requiredModules.filter(m => m.completed).length;

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.backButton}>← Back</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Training Modules</Text>
            </View>

            {/* Progress Overview */}
            <Card style={styles.progressCard}>
                <Text style={styles.progressTitle}>Overall Progress</Text>
                <View style={styles.progressStats}>
                    <Text style={styles.progressValue}>{completedModules}/{totalModules}</Text>
                    <Text style={styles.progressLabel}>Modules Completed</Text>
                </View>
                <View style={styles.progressBarContainer}>
                    <View style={[styles.progressBar, { width: `${overallProgress}%` }]} />
                </View>
                <Text style={styles.progressPercentage}>{Math.round(overallProgress)}% Complete</Text>

                {completedRequired < requiredModules.length && (
                    <View style={styles.requiredNotice}>
                        <Text style={styles.requiredText}>
                            ⚠️ {requiredModules.length - completedRequired} required modules remaining
                        </Text>
                    </View>
                )}
            </Card>

            {/* Module List */}
            <Text style={styles.sectionTitle}>Available Modules</Text>
            {modules.map((module) => (
                <Card key={module.id} style={styles.moduleCard}>
                    <View style={styles.moduleHeader}>
                        <View style={styles.moduleTitleContainer}>
                            <Text style={styles.moduleName}>{module.name}</Text>
                            <View style={styles.moduleMeta}>
                                <Badge
                                    variant={module.required ? 'error' : 'secondary'}
                                    size="small"
                                >
                                    {module.required ? 'Required' : 'Optional'}
                                </Badge>
                                <Text style={styles.moduleDuration}>⏱️ {module.duration} min</Text>
                            </View>
                        </View>
                        {module.completed && (
                            <Text style={styles.completedIcon}>✅</Text>
                        )}
                    </View>

                    <Text style={styles.moduleCategory}>📚 {module.category}</Text>
                    <Text style={styles.moduleDescription}>{module.description}</Text>

                    {!module.completed && module.progress > 0 && (
                        <View style={styles.moduleProgressContainer}>
                            <View style={styles.moduleProgressBar}>
                                <View style={[styles.moduleProgress, { width: `${module.progress}%` }]} />
                            </View>
                            <Text style={styles.moduleProgressText}>{module.progress}% complete</Text>
                        </View>
                    )}

                    <View style={styles.moduleActions}>
                        {module.completed ? (
                            <>
                                <Button
                                    title="Review"
                                    variant="secondary"
                                    size="small"
                                    onPress={() => {/* Review module */ }}
                                />
                                <Button
                                    title="Download Certificate"
                                    variant="ghost"
                                    size="small"
                                    onPress={() => {/* Download certificate */ }}
                                />
                            </>
                        ) : (
                            <Button
                                title={module.progress > 0 ? 'Continue' : 'Start Module'}
                                variant="primary"
                                size="small"
                                fullWidth
                                onPress={() => {/* Start/continue module */ }}
                            />
                        )}
                    </View>
                </Card>
            ))}

            {/* Completion Reward */}
            {overallProgress === 100 && (
                <Card style={styles.rewardCard}>
                    <Text style={styles.rewardIcon}>🎉</Text>
                    <Text style={styles.rewardTitle}>Congratulations!</Text>
                    <Text style={styles.rewardText}>
                        You've completed all training modules! Your Trust Score has been increased.
                    </Text>
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
    progressCard: {
        marginBottom: Spacing.lg,
        alignItems: 'center',
    },
    progressTitle: {
        ...Typography.h3,
        color: Colors.text.primary,
        marginBottom: Spacing.md,
    },
    progressStats: {
        alignItems: 'center',
        marginBottom: Spacing.md,
    },
    progressValue: {
        ...Typography.h1,
        color: Colors.primary.ochre,
    },
    progressLabel: {
        ...Typography.caption,
        color: Colors.text.secondary,
    },
    progressBarContainer: {
        width: '100%',
        height: 12,
        backgroundColor: Colors.neutral.stone,
        borderRadius: BorderRadius.full,
        overflow: 'hidden',
        marginBottom: Spacing.sm,
    },
    progressBar: {
        height: '100%',
        backgroundColor: Colors.success.main,
    },
    progressPercentage: {
        ...Typography.label,
        color: Colors.text.secondary,
    },
    requiredNotice: {
        marginTop: Spacing.md,
        padding: Spacing.sm,
        backgroundColor: Colors.warning.light,
        borderRadius: BorderRadius.sm,
    },
    requiredText: {
        ...Typography.caption,
        color: Colors.warning.dark,
        textAlign: 'center',
    },
    sectionTitle: {
        ...Typography.h3,
        color: Colors.text.primary,
        marginBottom: Spacing.md,
    },
    moduleCard: {
        marginBottom: Spacing.md,
    },
    moduleHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: Spacing.sm,
    },
    moduleTitleContainer: {
        flex: 1,
    },
    moduleName: {
        ...Typography.h4,
        color: Colors.text.primary,
        marginBottom: Spacing.xs,
    },
    moduleMeta: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.sm,
    },
    moduleDuration: {
        ...Typography.caption,
        color: Colors.text.secondary,
    },
    completedIcon: {
        fontSize: 24,
    },
    moduleCategory: {
        ...Typography.caption,
        color: Colors.text.secondary,
        marginBottom: Spacing.xs,
    },
    moduleDescription: {
        ...Typography.body,
        color: Colors.text.secondary,
        marginBottom: Spacing.md,
    },
    moduleProgressContainer: {
        marginBottom: Spacing.md,
    },
    moduleProgressBar: {
        width: '100%',
        height: 8,
        backgroundColor: Colors.neutral.stone,
        borderRadius: BorderRadius.full,
        overflow: 'hidden',
        marginBottom: 4,
    },
    moduleProgress: {
        height: '100%',
        backgroundColor: Colors.secondary.teal,
    },
    moduleProgressText: {
        ...Typography.caption,
        color: Colors.text.secondary,
    },
    moduleActions: {
        flexDirection: 'row',
        gap: Spacing.sm,
    },
    rewardCard: {
        backgroundColor: Colors.success.light,
        alignItems: 'center',
        marginTop: Spacing.lg,
    },
    rewardIcon: {
        fontSize: 48,
        marginBottom: Spacing.sm,
    },
    rewardTitle: {
        ...Typography.h3,
        color: Colors.text.primary,
        marginBottom: Spacing.sm,
    },
    rewardText: {
        ...Typography.body,
        color: Colors.text.secondary,
        textAlign: 'center',
    },
});
