'use client';

import React from 'react';
import Link from 'next/link';
import { mockWorkers } from '@/lib/mock-data/workers';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function EmployerDashboard() {
    // Mock data for dashboard
    const stats = {
        activeHires: 2,
        totalHires: 5,
        pendingInterviews: 3,
        savedWorkers: 8,
    };

    const recentActivity = [
        { type: 'hire', worker: 'Abeba Tesfaye', date: '2025-11-20', status: 'Active' },
        { type: 'interview', worker: 'Almaz Bekele', date: '2025-11-21', status: 'Scheduled' },
        { type: 'save', worker: 'Tigist Haile', date: '2025-11-21', status: 'Saved' },
    ];

    const activeHires = mockWorkers.slice(0, 2).map(w => ({ ...w, hireDate: '2025-11-01', endDate: '2026-11-01' }));
    const upcomingInterviews = mockWorkers.slice(2, 5).map(w => ({ ...w, interviewDate: '2025-11-25', time: '10:00 AM' }));

    return (
        <div className="min-h-screen bg-[var(--color-bg-secondary)]">
            {/* Header */}
            <header className="bg-[var(--color-primary-ochre)] text-white py-6 shadow-md">
                <div className="container-custom">
                    <h1 className="text-3xl font-bold">Employer Dashboard</h1>
                    <p className="text-sm opacity-90 mt-1">Manage your hires and track your activity</p>
                </div>
            </header>

            <div className="container-custom py-8">
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <Card className="text-center">
                        <div className="text-4xl font-bold text-[var(--color-primary-ochre)] mb-2">
                            {stats.activeHires}
                        </div>
                        <p className="text-sm text-[var(--color-text-secondary)]">Active Hires</p>
                    </Card>

                    <Card className="text-center">
                        <div className="text-4xl font-bold text-[var(--color-secondary-teal)] mb-2">
                            {stats.totalHires}
                        </div>
                        <p className="text-sm text-[var(--color-text-secondary)]">Total Hires</p>
                    </Card>

                    <Card className="text-center">
                        <div className="text-4xl font-bold text-[var(--color-warning)] mb-2">
                            {stats.pendingInterviews}
                        </div>
                        <p className="text-sm text-[var(--color-text-secondary)]">Pending Interviews</p>
                    </Card>

                    <Card className="text-center">
                        <div className="text-4xl font-bold text-[var(--color-tertiary-wheat)] mb-2">
                            {stats.savedWorkers}
                        </div>
                        <p className="text-sm text-[var(--color-text-secondary)]">Saved Workers</p>
                    </Card>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Active Hires */}
                        <Card>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold">Active Hires</h2>
                                <Link href="/employer/hires">
                                    <Button variant="ghost" size="small">View All</Button>
                                </Link>
                            </div>

                            {activeHires.length > 0 ? (
                                <div className="space-y-4">
                                    {activeHires.map(worker => (
                                        <div key={worker.id} className="flex items-center gap-4 p-4 bg-[var(--color-bg-secondary)] rounded">
                                            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl">
                                                👤
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold">{worker.fullName}</h3>
                                                <p className="text-sm text-[var(--color-text-secondary)]">
                                                    Hired: {worker.hireDate} • Contract until: {worker.endDate}
                                                </p>
                                                <div className="flex gap-2 mt-2">
                                                    {worker.skills.slice(0, 2).map((skill, i) => (
                                                        <Badge key={i} variant="default" className="text-xs">{skill.name}</Badge>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <Badge variant="success">Active</Badge>
                                                <Button variant="tertiary" size="small">View Details</Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-center text-[var(--color-text-secondary)] py-8">
                                    No active hires. <Link href="/employer/search" className="text-[var(--color-secondary-teal)] underline">Start searching</Link>
                                </p>
                            )}
                        </Card>

                        {/* Upcoming Interviews */}
                        <Card>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold">Upcoming Interviews</h2>
                                <Button variant="ghost" size="small">View All</Button>
                            </div>

                            {upcomingInterviews.length > 0 ? (
                                <div className="space-y-3">
                                    {upcomingInterviews.map(worker => (
                                        <div key={worker.id} className="flex items-center justify-between p-3 border border-[var(--color-border-light)] rounded">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl">
                                                    👤
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold">{worker.fullName}</h4>
                                                    <p className="text-sm text-[var(--color-text-secondary)]">
                                                        {worker.interviewDate} at {worker.time}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <Button variant="secondary" size="small">Join</Button>
                                                <Button variant="ghost" size="small">Reschedule</Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-center text-[var(--color-text-secondary)] py-8">
                                    No upcoming interviews scheduled.
                                </p>
                            )}
                        </Card>

                        {/* Recent Activity */}
                        <Card>
                            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                            <div className="space-y-3">
                                {recentActivity.map((activity, index) => (
                                    <div key={index} className="flex items-center gap-3 pb-3 border-b border-[var(--color-border-light)] last:border-0">
                                        <div className="w-10 h-10 rounded-full bg-[var(--color-bg-secondary)] flex items-center justify-center">
                                            {activity.type === 'hire' && '✓'}
                                            {activity.type === 'interview' && '📅'}
                                            {activity.type === 'save' && '⭐'}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm">
                                                {activity.type === 'hire' && `Hired ${activity.worker}`}
                                                {activity.type === 'interview' && `Interview scheduled with ${activity.worker}`}
                                                {activity.type === 'save' && `Saved ${activity.worker} to favorites`}
                                            </p>
                                            <p className="text-xs text-[var(--color-text-secondary)]">{activity.date}</p>
                                        </div>
                                        <Badge variant={
                                            activity.status === 'Active' ? 'success' :
                                                activity.status === 'Scheduled' ? 'warning' : 'default'
                                        }>
                                            {activity.status}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Quick Actions */}
                        <Card>
                            <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
                            <div className="space-y-3">
                                <Link href="/employer/search">
                                    <Button variant="primary" fullWidth>
                                        🔍 Search Workers
                                    </Button>
                                </Link>
                                <Button variant="secondary" fullWidth>
                                    📋 View Saved Workers
                                </Button>
                                <Button variant="tertiary" fullWidth>
                                    📊 View Reports
                                </Button>
                            </div>
                        </Card>

                        {/* Replacement Guarantee */}
                        <Card className="bg-[var(--color-info-light)] border-[var(--color-info-border)]">
                            <div className="text-center">
                                <div className="text-3xl mb-2">🛡️</div>
                                <h3 className="font-bold mb-2">30-Day Guarantee</h3>
                                <p className="text-sm text-[var(--color-info-dark)] mb-3">
                                    Not satisfied? Request a free replacement within 30 days of hiring.
                                </p>
                                <Button variant="tertiary" size="small" fullWidth>
                                    Learn More
                                </Button>
                            </div>
                        </Card>

                        {/* Support */}
                        <Card>
                            <h3 className="text-lg font-bold mb-4">Need Help?</h3>
                            <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                                Our support team is available 24/7 to assist you.
                            </p>
                            <div className="space-y-2">
                                <Button variant="secondary" fullWidth size="small">
                                    💬 Live Chat
                                </Button>
                                <Button variant="ghost" fullWidth size="small">
                                    📧 Email Support
                                </Button>
                            </div>
                        </Card>

                        {/* Tips */}
                        <Card className="bg-[var(--color-success-light)] border-[var(--color-success-border)]">
                            <h3 className="font-bold mb-2">💡 Tip of the Day</h3>
                            <p className="text-sm text-[var(--color-success-dark)]">
                                Workers with trust scores above 80% have a 95% satisfaction rate. Filter by trust score when searching!
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
