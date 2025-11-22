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
import { Card, Badge } from '../components/ui';
import { Colors } from '../constants/Colors';
import { Typography } from '../constants/Typography';
import { Spacing, BorderRadius } from '../constants/Spacing';

interface Message {
    id: string;
    from: string;
    fromType: 'admin' | 'employer' | 'agency';
    subject: string;
    preview: string;
    timestamp: string;
    read: boolean;
}

export default function MessagesScreen() {
    const { t } = useTranslation();
    const router = useRouter();

    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            from: 'HomeLink Admin',
            fromType: 'admin',
            subject: 'Profile Approved',
            preview: 'Congratulations! Your profile has been approved and is now visible to employers.',
            timestamp: '2 hours ago',
            read: false,
        },
        {
            id: '2',
            from: 'Family Employer',
            fromType: 'employer',
            subject: 'Interview Request',
            preview: 'We would like to schedule an interview with you for a live-in position...',
            timestamp: '1 day ago',
            read: false,
        },
        {
            id: '3',
            from: 'HomeLink Admin',
            fromType: 'admin',
            subject: 'Complete Your Training',
            preview: 'You have 3 training modules remaining. Complete them to increase your Trust Score.',
            timestamp: '3 days ago',
            read: true,
        },
        {
            id: '4',
            from: 'International Agency',
            fromType: 'agency',
            subject: 'Opportunity in Dubai',
            preview: 'We have reviewed your profile and would like to discuss an international placement...',
            timestamp: '5 days ago',
            read: true,
        },
    ]);

    const unreadCount = messages.filter(m => !m.read).length;

    const markAsRead = (id: string) => {
        setMessages(messages.map(m =>
            m.id === id ? { ...m, read: true } : m
        ));
    };

    const getFromIcon = (type: string) => {
        switch (type) {
            case 'admin': return '🏢';
            case 'employer': return '👨‍👩‍👧';
            case 'agency': return '🌍';
            default: return '📧';
        }
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.backButton}>← Back</Text>
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Messages</Text>
                    {unreadCount > 0 && (
                        <Badge variant="error" size="small">
                            {unreadCount} new
                        </Badge>
                    )}
                </View>
            </View>

            {/* Messages List */}
            {messages.length === 0 ? (
                <Card style={styles.emptyState}>
                    <Text style={styles.emptyIcon}>📭</Text>
                    <Text style={styles.emptyTitle}>No Messages</Text>
                    <Text style={styles.emptyText}>
                        You don't have any messages yet. Check back later!
                    </Text>
                </Card>
            ) : (
                messages.map((message) => (
                    <TouchableOpacity
                        key={message.id}
                        onPress={() => markAsRead(message.id)}
                    >
                        <Card style={[
                            styles.messageCard,
                            !message.read && styles.unreadCard
                        ]}>
                            <View style={styles.messageHeader}>
                                <View style={styles.fromContainer}>
                                    <Text style={styles.fromIcon}>
                                        {getFromIcon(message.fromType)}
                                    </Text>
                                    <View>
                                        <Text style={styles.fromName}>{message.from}</Text>
                                        <Text style={styles.timestamp}>{message.timestamp}</Text>
                                    </View>
                                </View>
                                {!message.read && (
                                    <View style={styles.unreadDot} />
                                )}
                            </View>
                            <Text style={styles.subject}>{message.subject}</Text>
                            <Text style={styles.preview}>{message.preview}</Text>
                        </Card>
                    </TouchableOpacity>
                ))
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
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.sm,
    },
    title: {
        ...Typography.h1,
        color: Colors.text.primary,
    },
    emptyState: {
        alignItems: 'center',
        paddingVertical: Spacing.xxl,
    },
    emptyIcon: {
        fontSize: 64,
        marginBottom: Spacing.md,
    },
    emptyTitle: {
        ...Typography.h3,
        color: Colors.text.primary,
        marginBottom: Spacing.sm,
    },
    emptyText: {
        ...Typography.body,
        color: Colors.text.secondary,
        textAlign: 'center',
    },
    messageCard: {
        marginBottom: Spacing.md,
    },
    unreadCard: {
        borderLeftWidth: 4,
        borderLeftColor: Colors.primary.ochre,
        backgroundColor: Colors.neutral.offWhite,
    },
    messageHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: Spacing.sm,
    },
    fromContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.sm,
    },
    fromIcon: {
        fontSize: 24,
    },
    fromName: {
        ...Typography.label,
        color: Colors.text.primary,
    },
    timestamp: {
        ...Typography.caption,
        color: Colors.text.secondary,
    },
    unreadDot: {
        width: 10,
        height: 10,
        borderRadius: BorderRadius.full,
        backgroundColor: Colors.primary.ochre,
    },
    subject: {
        ...Typography.h4,
        color: Colors.text.primary,
        marginBottom: Spacing.xs,
    },
    preview: {
        ...Typography.body,
        color: Colors.text.secondary,
        numberOfLines: 2,
    },
});
