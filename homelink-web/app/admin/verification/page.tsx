'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { mockWorkers } from '@/lib/mock-data/workers';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function AdminVerificationPage() {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [verificationStatus, setVerificationStatus] = useState<'Verified' | 'Needs Review' | 'Rejected'>('Verified');
    const [staffNotes, setStaffNotes] = useState('');
    const [filter, setFilter] = useState<'pending' | 'needs-review' | 'approved'>('pending');

    // Mock verification queue
    const pendingWorkers = mockWorkers.filter(w => w.status === 'Available').slice(0, 15);
    const needsReviewWorkers = mockWorkers.slice(15, 18);
    const approvedWorkers = mockWorkers.slice(18);

    const getFilteredWorkers = () => {
        switch (filter) {
            case 'pending': return pendingWorkers;
            case 'needs-review': return needsReviewWorkers;
            case 'approved': return approvedWorkers;
            default: return pendingWorkers;
        }
    };

    const filteredWorkers = getFilteredWorkers();
    const currentWorker = filteredWorkers[currentIndex];

    const handleNext = () => {
        if (currentIndex < filteredWorkers.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setStaffNotes('');
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setStaffNotes('');
        }
    };

    const handleApprove = () => {
        alert(`Worker ${currentWorker.fullName} approved and published!`);
        handleNext();
    };

    const handleRequestInfo = () => {
        alert(`Requested more information from ${currentWorker.fullName}`);
        handleNext();
    };

    const handleReject = () => {
        if (confirm(`Are you sure you want to reject ${currentWorker.fullName}?`)) {
            alert(`Worker ${currentWorker.fullName} rejected.`);
            handleNext();
        }
    };

    const handleFlag = () => {
        alert(`Worker ${currentWorker.fullName} flagged for manual review.`);
        handleNext();
    };

    if (!currentWorker) {
        return (
            <div className="min-h-screen bg-[var(--color-bg-secondary)] flex items-center justify-center">
                <Card className="text-center p-8">
                    <h2 className="text-2xl font-bold mb-4">No Workers in Queue</h2>
                    <p className="text-[var(--color-text-secondary)] mb-4">
                        All workers in this category have been processed.
                    </p>
                    <Button onClick={() => setFilter('pending')}>View Pending</Button>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[var(--color-bg-secondary)]">
            {/* Header */}
            <header className="bg-[var(--color-neutral-charcoal)] text-white py-6 shadow-md">
                <div className="container-custom">
                    <h1 className="text-3xl font-bold">Worker Verification Queue</h1>
                    <p className="text-sm opacity-90 mt-1">Review and approve worker profiles</p>
                </div>
            </header>

            <div className="container-custom py-8">
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Verification Queue Sidebar */}
                    <aside className="lg:col-span-1">
                        <Card>
                            <h2 className="text-lg font-bold mb-4">Verification Queue</h2>

                            <div className="space-y-2">
                                <button
                                    onClick={() => { setFilter('pending'); setCurrentIndex(0); }}
                                    className={`w-full text-left p-3 rounded transition ${filter === 'pending'
                                            ? 'bg-[var(--color-warning-light)] border-2 border-[var(--color-warning)]'
                                            : 'bg-[var(--color-bg-secondary)] hover:bg-[var(--color-neutral-light-gray)]'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold">Pending Review</span>
                                        <Badge variant="warning">{pendingWorkers.length}</Badge>
                                    </div>
                                    <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                                        Awaiting verification
                                    </p>
                                </button>

                                <button
                                    onClick={() => { setFilter('needs-review'); setCurrentIndex(0); }}
                                    className={`w-full text-left p-3 rounded transition ${filter === 'needs-review'
                                            ? 'bg-[var(--color-error-light)] border-2 border-[var(--color-error)]'
                                            : 'bg-[var(--color-bg-secondary)] hover:bg-[var(--color-neutral-light-gray)]'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold">Needs Review</span>
                                        <Badge variant="error">{needsReviewWorkers.length}</Badge>
                                    </div>
                                    <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                                        Flagged for review
                                    </p>
                                </button>

                                <button
                                    onClick={() => { setFilter('approved'); setCurrentIndex(0); }}
                                    className={`w-full text-left p-3 rounded transition ${filter === 'approved'
                                            ? 'bg-[var(--color-success-light)] border-2 border-[var(--color-success)]'
                                            : 'bg-[var(--color-bg-secondary)] hover:bg-[var(--color-neutral-light-gray)]'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold">Approved</span>
                                        <Badge variant="success">{approvedWorkers.length}</Badge>
                                    </div>
                                    <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                                        Published workers
                                    </p>
                                </button>
                            </div>

                            <div className="mt-6 pt-6 border-t border-[var(--color-border-light)]">
                                <p className="text-sm text-[var(--color-text-secondary)] mb-2">
                                    Viewing: <span className="font-semibold">{currentIndex + 1} of {filteredWorkers.length}</span>
                                </p>
                                <div className="flex gap-2">
                                    <Button
                                        variant="ghost"
                                        size="small"
                                        onClick={handlePrevious}
                                        disabled={currentIndex === 0}
                                        fullWidth
                                    >
                                        ← Previous
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="small"
                                        onClick={handleNext}
                                        disabled={currentIndex === filteredWorkers.length - 1}
                                        fullWidth
                                    >
                                        Next →
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-6">
                        {/* Worker Profile Card */}
                        <Card>
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold">{currentWorker.fullName}</h2>
                                    <p className="text-sm text-[var(--color-text-secondary)]">
                                        Worker ID: {currentWorker.id} • Submitted: Nov 20, 2025
                                    </p>
                                </div>
                                <Badge variant={
                                    filter === 'approved' ? 'success' :
                                        filter === 'needs-review' ? 'error' : 'warning'
                                }>
                                    {filter === 'approved' ? 'Approved' :
                                        filter === 'needs-review' ? 'Needs Review' : 'Pending'}
                                </Badge>
                            </div>

                            {/* Basic Information */}
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h3 className="font-semibold mb-3">Basic Information</h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-[var(--color-text-secondary)]">Age:</span>
                                            <span className="font-semibold">{currentWorker.age} years</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-[var(--color-text-secondary)]">Gender:</span>
                                            <span className="font-semibold">{currentWorker.gender}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-[var(--color-text-secondary)]">Region:</span>
                                            <span className="font-semibold">{currentWorker.region}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-[var(--color-text-secondary)]">Phone:</span>
                                            <span className="font-semibold">{currentWorker.phone}</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-3">Verification Status</h3>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">ID Verification:</span>
                                            <select
                                                value={verificationStatus}
                                                onChange={(e) => setVerificationStatus(e.target.value as any)}
                                                className="px-3 py-1 border border-[var(--color-border-light)] rounded text-sm"
                                            >
                                                <option>Verified</option>
                                                <option>Needs Review</option>
                                                <option>Rejected</option>
                                            </select>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">Age Verification:</span>
                                            <Badge variant={currentWorker.ageVerified ? 'success' : 'error'}>
                                                {currentWorker.ageVerified ? 'Verified' : 'Not Verified'}
                                            </Badge>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">Emergency Contact:</span>
                                            <Badge variant={currentWorker.emergencyContactVerified ? 'success' : 'error'}>
                                                {currentWorker.emergencyContactVerified ? 'Verified' : 'Not Verified'}
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Verification Images */}
                            <div className="mb-6">
                                <h3 className="font-semibold mb-3">Verification Images</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-[var(--color-text-secondary)] mb-2">National ID</p>
                                        <div className="aspect-video bg-gray-200 rounded flex items-center justify-center">
                                            <span className="text-6xl">🪪</span>
                                        </div>
                                        <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                                            Uploaded: Nov 20, 2025
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-[var(--color-text-secondary)] mb-2">Emergency Contact ID</p>
                                        <div className="aspect-video bg-gray-200 rounded flex items-center justify-center">
                                            <span className="text-6xl">🪪</span>
                                        </div>
                                        <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                                            Uploaded: Nov 20, 2025
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="mb-6">
                                <h3 className="font-semibold mb-3">Skills & Experience</h3>
                                <div className="flex flex-wrap gap-2">
                                    {currentWorker.skills.map((skill, index) => (
                                        <Badge key={index} variant="default">
                                            {skill.name} - {skill.experienceLevel}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            {/* Staff Notes */}
                            <div className="mb-6">
                                <h3 className="font-semibold mb-3">Staff Notes (Internal)</h3>
                                <textarea
                                    value={staffNotes}
                                    onChange={(e) => setStaffNotes(e.target.value)}
                                    placeholder="Add internal notes about this verification..."
                                    className="w-full px-4 py-3 border border-[var(--color-border-light)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary-teal)] min-h-[100px]"
                                />
                                <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                                    These notes are only visible to HomeLink staff
                                </p>
                            </div>

                            {/* Audit Trail */}
                            <div className="p-4 bg-[var(--color-bg-secondary)] rounded">
                                <h4 className="font-semibold text-sm mb-2">Audit Trail</h4>
                                <div className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                                    <p>• Profile created: Nov 20, 2025 at 10:30 AM</p>
                                    <p>• Payment verified: Nov 20, 2025 at 10:35 AM</p>
                                    <p>• Assigned to queue: Nov 20, 2025 at 10:36 AM</p>
                                    <p>• Last viewed by: Admin User (You) - Just now</p>
                                </div>
                            </div>
                        </Card>

                        {/* Action Buttons */}
                        <Card>
                            <h3 className="font-semibold mb-4">Verification Actions</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Button
                                    variant="primary"
                                    fullWidth
                                    onClick={handleApprove}
                                    className="bg-[var(--color-success)] hover:bg-[var(--color-success-dark)]"
                                >
                                    ✓ Approve & Publish
                                </Button>
                                <Button
                                    variant="secondary"
                                    fullWidth
                                    onClick={handleRequestInfo}
                                    className="bg-[var(--color-warning)] hover:bg-[var(--color-warning-dark)]"
                                >
                                    📋 Request More Info
                                </Button>
                                <Button
                                    variant="tertiary"
                                    fullWidth
                                    onClick={handleReject}
                                    className="border-[var(--color-error)] text-[var(--color-error)] hover:bg-[var(--color-error)] hover:text-white"
                                >
                                    ✗ Reject
                                </Button>
                                <Button
                                    variant="ghost"
                                    fullWidth
                                    onClick={handleFlag}
                                >
                                    🚩 Flag for Manual Review
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
