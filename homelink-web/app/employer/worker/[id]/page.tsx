'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { mockWorkers } from '@/lib/mock-data/workers';
import { Badge, SkillTag } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function WorkerProfilePage() {
    const params = useParams();
    const router = useRouter();
    const worker = mockWorkers.find(w => w.id === params.id);

    if (!worker) {
        return (
            <div className="min-h-screen bg-[var(--color-bg-secondary)] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Worker Not Found</h1>
                    <Button onClick={() => router.back()}>Go Back</Button>
                </div>
            </div>
        );
    }

    const trustScoreColor = worker.trustScore >= 80 ? 'text-green-600' : worker.trustScore >= 60 ? 'text-yellow-600' : 'text-gray-600';

    return (
        <div className="min-h-screen bg-[var(--color-bg-secondary)]">
            {/* Header */}
            <header className="bg-[var(--color-primary-ochre)] text-white py-6 shadow-md">
                <div className="container-custom flex items-center gap-4">
                    <Button variant="ghost" onClick={() => router.back()} className="text-white hover:bg-white/20">
                        ← Back
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold">{worker.fullName}</h1>
                        <p className="text-sm opacity-90">Worker ID: {worker.id}</p>
                    </div>
                </div>
            </header>

            <div className="container-custom py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Photo and Basic Info */}
                        <Card>
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="relative">
                                    <div className="w-48 h-48 rounded-lg bg-gray-200 flex items-center justify-center overflow-hidden">
                                        <span className="text-8xl">👤</span>
                                    </div>
                                    {worker.idVerified && (
                                        <div className="absolute -bottom-2 -right-2">
                                            <Badge variant="success" className="text-sm px-3 py-1">
                                                ✓ Verified
                                            </Badge>
                                        </div>
                                    )}
                                </div>

                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold mb-2">{worker.fullName}</h2>

                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <p className="text-sm text-[var(--color-text-secondary)]">Age</p>
                                            <p className="font-semibold">{worker.age} years</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-[var(--color-text-secondary)]">Gender</p>
                                            <p className="font-semibold">{worker.gender}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-[var(--color-text-secondary)]">Regional Origin</p>
                                            <p className="font-semibold">{worker.region}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-[var(--color-text-secondary)]">Status</p>
                                            <Badge variant="success">{worker.status}</Badge>
                                        </div>
                                    </div>

                                    {/* Trust Score */}
                                    <div className="mb-4">
                                        <p className="text-sm text-[var(--color-text-secondary)] mb-1">Trust Score</p>
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i} className={`text-2xl ${i < Math.floor(worker.trustScore / 20) ? 'text-yellow-500' : 'text-gray-300'}`}>
                                                        ★
                                                    </span>
                                                ))}
                                            </div>
                                            <span className={`text-2xl font-bold ${trustScoreColor}`}>
                                                {worker.trustScore}%
                                            </span>
                                        </div>
                                    </div>

                                    {/* Verification Badges */}
                                    <div className="flex flex-wrap gap-2">
                                        {worker.idVerified && <Badge variant="success" icon={<span>✓</span>}>ID Verified</Badge>}
                                        {worker.ageVerified && <Badge variant="success" icon={<span>✓</span>}>Age Verified</Badge>}
                                        {worker.emergencyContactVerified && <Badge variant="success" icon={<span>✓</span>}>Emergency Contact</Badge>}
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Skills & Experience */}
                        <Card>
                            <h3 className="text-xl font-bold mb-4">Skills & Experience</h3>
                            <div className="space-y-4">
                                {worker.skills.map((skill, index) => (
                                    <div key={index} className="flex items-center justify-between pb-3 border-b border-[var(--color-border-light)] last:border-0">
                                        <div>
                                            <p className="font-semibold">{skill.name}</p>
                                            <p className="text-sm text-[var(--color-text-secondary)]">Experience: {skill.experienceLevel}</p>
                                        </div>
                                        <SkillTag skill={skill.name} experience={skill.experienceLevel} />
                                    </div>
                                ))}
                            </div>
                        </Card>

                        {/* Work Preferences */}
                        <Card>
                            <h3 className="text-xl font-bold mb-4">Work Preferences</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-[var(--color-text-secondary)] mb-1">Work Type</p>
                                    <p className="font-semibold">{worker.workType}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-[var(--color-text-secondary)] mb-1">Availability</p>
                                    <p className="font-semibold">{worker.availability}</p>
                                </div>
                                {worker.preferredLocation && (
                                    <div>
                                        <p className="text-sm text-[var(--color-text-secondary)] mb-1">Preferred Location</p>
                                        <p className="font-semibold">{worker.preferredLocation}</p>
                                    </div>
                                )}
                            </div>
                        </Card>

                        {/* International Status */}
                        <Card>
                            <h3 className="text-xl font-bold mb-4">International Work Status</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-[var(--color-text-secondary)] mb-1">Passport</p>
                                    <Badge variant={worker.hasPassport ? 'success' : 'default'}>
                                        {worker.hasPassport ? 'Has Passport' : 'No Passport'}
                                    </Badge>
                                </div>
                                <div>
                                    <p className="text-sm text-[var(--color-text-secondary)] mb-1">Willing to Work Abroad</p>
                                    <Badge variant={worker.willingToWorkAbroad ? 'success' : 'default'}>
                                        {worker.willingToWorkAbroad ? 'Yes' : 'No'}
                                    </Badge>
                                </div>
                                <div>
                                    <p className="text-sm text-[var(--color-text-secondary)] mb-1">Travel Readiness</p>
                                    <p className="font-semibold">{worker.travelReadiness}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-[var(--color-text-secondary)] mb-1">Languages</p>
                                    <div className="flex flex-wrap gap-2">
                                        {worker.languages.map(lang => (
                                            <Badge key={lang} variant="info">{lang}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Previous Placements & Reviews */}
                        {worker.previousPlacements && worker.reviews && (
                            <Card>
                                <h3 className="text-xl font-bold mb-4">Previous Placements & Reviews</h3>
                                <div className="mb-4">
                                    <p className="text-lg">
                                        <span className="font-bold">{worker.previousPlacements}</span> previous placement{worker.previousPlacements > 1 ? 's' : ''}
                                    </p>
                                    <p className="text-sm text-[var(--color-text-secondary)]">
                                        Average rating: <span className="font-semibold text-yellow-600">{worker.averageRating?.toFixed(1)} ★</span>
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {worker.reviews.map((review, index) => (
                                        <div key={index} className="p-4 bg-[var(--color-bg-secondary)] rounded">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="flex">
                                                    {[...Array(5)].map((_, i) => (
                                                        <span key={i} className={i < Math.floor(review.rating) ? 'text-yellow-500' : 'text-gray-300'}>★</span>
                                                    ))}
                                                </div>
                                                <span className="text-sm text-[var(--color-text-secondary)]">{review.date}</span>
                                            </div>
                                            <p className="text-sm">{review.comment}</p>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Actions */}
                        <Card>
                            <h3 className="text-lg font-bold mb-4">Actions</h3>
                            <div className="space-y-3">
                                <Button variant="primary" fullWidth>
                                    Request Interview
                                </Button>
                                <Button variant="secondary" fullWidth>
                                    Hire This Worker
                                </Button>
                                <Button variant="tertiary" fullWidth>
                                    Save to Favorites
                                </Button>
                                <Button variant="ghost" fullWidth>
                                    Share Profile
                                </Button>
                            </div>
                        </Card>

                        {/* Guarantee */}
                        <Card className="bg-[var(--color-success-light)] border-[var(--color-success-border)]">
                            <div className="text-center">
                                <div className="text-4xl mb-2">🛡️</div>
                                <h3 className="font-bold mb-2">30-Day Guarantee</h3>
                                <p className="text-sm text-[var(--color-success-dark)]">
                                    Free replacement within 30 days if you're not satisfied with this worker's performance.
                                </p>
                            </div>
                        </Card>

                        {/* Contact Info */}
                        <Card>
                            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
                            <p className="text-sm text-[var(--color-text-secondary)] mb-2">
                                Phone number and full contact details will be available after interview request is approved.
                            </p>
                            <Button variant="tertiary" fullWidth>
                                Request Contact Info
                            </Button>
                        </Card>

                        {/* Report */}
                        <Card>
                            <Button variant="ghost" fullWidth className="text-[var(--color-error)]">
                                Report Issue
                            </Button>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
