'use client';

import React from 'react';
import Link from 'next/link';
import { mockWorkers } from '@/lib/mock-data/workers';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function AgencyDashboard() {
    // Mock data for agency dashboard
    const stats = {
        totalShortlists: 4,
        totalCandidates: 45,
        placements: 12,
        pendingRequests: 6,
    };

    const shortlists = [
        { name: 'Saudi Arabia Candidates', count: 15, destination: 'Saudi Arabia', status: 'Active' },
        { name: 'UAE Candidates', count: 12, destination: 'UAE', status: 'Active' },
        { name: 'Qatar Candidates', count: 10, destination: 'Qatar', status: 'In Progress' },
        { name: 'Kuwait Candidates', count: 8, destination: 'Kuwait', status: 'Draft' },
    ];

    const recentPlacements = mockWorkers.slice(0, 3).map(w => ({
        ...w,
        destination: ['Saudi Arabia', 'UAE', 'Qatar'][Math.floor(Math.random() * 3)],
        placementDate: '2025-11-15',
        status: 'Placed',
    }));

    const recentActivity = [
        { type: 'export', action: 'Exported 15 CVs for Saudi Arabia', date: '2025-11-21' },
        { type: 'shortlist', action: 'Added 3 workers to UAE Candidates', date: '2025-11-21' },
        { type: 'placement', action: 'Placed Abeba Tesfaye in Qatar', date: '2025-11-20' },
        { type: 'request', action: 'Requested full profile for 5 workers', date: '2025-11-20' },
    ];

    return (
        <div className="min-h-screen bg-[var(--color-bg-secondary)]">
            {/* Header */}
            <header className="bg-[var(--color-secondary-teal)] text-white py-6 shadow-md">
                <div className="container-custom">
                    <h1 className="text-3xl font-bold">Agency Dashboard</h1>
                    <p className="text-sm opacity-90 mt-1">Manage your shortlists and track placements</p>
                </div>
            </header>

            <div className="container-custom py-8">
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <Card className="text-center">
                        <div className="text-4xl font-bold text-[var(--color-secondary-teal)] mb-2">
                            {stats.totalShortlists}
                        </div>
                        <p className="text-sm text-[var(--color-text-secondary)]">Active Shortlists</p>
                    </Card>

                    <Card className="text-center">
                        <div className="text-4xl font-bold text-[var(--color-primary-ochre)] mb-2">
                            {stats.totalCandidates}
                        </div>
                        <p className="text-sm text-[var(--color-text-secondary)]">Total Candidates</p>
                    </Card>

                    <Card className="text-center">
                        <div className="text-4xl font-bold text-[var(--color-success)] mb-2">
                            {stats.placements}
                        </div>
                        <p className="text-sm text-[var(--color-text-secondary)]">Successful Placements</p>
                    </Card>

                    <Card className="text-center">
                        <div className="text-4xl font-bold text-[var(--color-warning)] mb-2">
                            {stats.pendingRequests}
                        </div>
                        <p className="text-sm text-[var(--color-text-secondary)]">Pending Requests</p>
                    </Card>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Shortlists Overview */}
                        <Card>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold">My Shortlists</h2>
                                <Link href="/agency/shortlists">
                                    <Button variant="ghost" size="small">Manage All</Button>
                                </Link>
                            </div>

                            <div className="space-y-3">
                                {shortlists.map((shortlist, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 bg-[var(--color-bg-secondary)] rounded">
                                        <div className="flex-1">
                                            <h3 className="font-semibold">{shortlist.name}</h3>
                                            <p className="text-sm text-[var(--color-text-secondary)]">
                                                {shortlist.count} candidates • Destination: {shortlist.destination}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Badge variant={
                                                shortlist.status === 'Active' ? 'success' :
                                                    shortlist.status === 'In Progress' ? 'warning' : 'default'
                                            }>
                                                {shortlist.status}
                                            </Badge>
                                            <Button variant="tertiary" size="small">Export</Button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Button variant="secondary" fullWidth className="mt-4">
                                + Create New Shortlist
                            </Button>
                        </Card>

                        {/* Recent Placements */}
                        <Card>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold">Recent Placements</h2>
                                <Link href="/agency/placements">
                                    <Button variant="ghost" size="small">View All</Button>
                                </Link>
                            </div>

                            {recentPlacements.length > 0 ? (
                                <div className="space-y-4">
                                    {recentPlacements.map(worker => (
                                        <div key={worker.id} className="flex items-center gap-4 p-4 border border-[var(--color-border-light)] rounded">
                                            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl">
                                                👤
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold">{worker.fullName}</h3>
                                                <p className="text-sm text-[var(--color-text-secondary)]">
                                                    Placed in {worker.destination} • {worker.placementDate}
                                                </p>
                                                <div className="flex gap-2 mt-2">
                                                    {worker.skills.slice(0, 2).map((skill, i) => (
                                                        <Badge key={i} variant="default" className="text-xs">{skill.name}</Badge>
                                                    ))}
                                                </div>
                                            </div>
                                            <Badge variant="success">Placed</Badge>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-center text-[var(--color-text-secondary)] py-8">
                                    No recent placements.
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
                                            {activity.type === 'export' && '📦'}
                                            {activity.type === 'shortlist' && '📁'}
                                            {activity.type === 'placement' && '✓'}
                                            {activity.type === 'request' && '📋'}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm">{activity.action}</p>
                                            <p className="text-xs text-[var(--color-text-secondary)]">{activity.date}</p>
                                        </div>
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
                                <Link href="/agency/search">
                                    <Button variant="primary" fullWidth>
                                        🔍 Search Candidates
                                    </Button>
                                </Link>
                                <Button variant="secondary" fullWidth>
                                    📁 Manage Shortlists
                                </Button>
                                <Button variant="tertiary" fullWidth>
                                    📊 View Analytics
                                </Button>
                                <Button variant="ghost" fullWidth>
                                    📧 Request Full Profiles
                                </Button>
                            </div>
                        </Card>

                        {/* Export Options */}
                        <Card className="bg-[var(--color-info-light)] border-[var(--color-info-border)]">
                            <div className="text-center">
                                <div className="text-3xl mb-2">📦</div>
                                <h3 className="font-bold mb-2">Bulk Export</h3>
                                <p className="text-sm text-[var(--color-info-dark)] mb-3">
                                    Export CVs from all your shortlists as a single ZIP file.
                                </p>
                                <Button variant="secondary" size="small" fullWidth>
                                    Export All Shortlists
                                </Button>
                            </div>
                        </Card>

                        {/* Performance Stats */}
                        <Card>
                            <h3 className="text-lg font-bold mb-4">This Month</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-sm text-[var(--color-text-secondary)]">Candidates Shortlisted</span>
                                    <span className="font-semibold">18</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-[var(--color-text-secondary)]">CVs Exported</span>
                                    <span className="font-semibold">45</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-[var(--color-text-secondary)]">Placements Made</span>
                                    <span className="font-semibold text-[var(--color-success)]">5</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-[var(--color-text-secondary)]">Success Rate</span>
                                    <span className="font-semibold text-[var(--color-success)]">92%</span>
                                </div>
                            </div>
                        </Card>

                        {/* Support */}
                        <Card>
                            <h3 className="text-lg font-bold mb-4">Need Help?</h3>
                            <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                                Contact our agency support team for assistance.
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
                    </div>
                </div>
            </div>
        </div>
    );
}
