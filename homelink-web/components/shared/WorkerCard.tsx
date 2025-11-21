import React from 'react';
import Link from 'next/link';
import { Worker } from '@/lib/mock-data/workers';
import { Badge, SkillTag } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

interface WorkerCardProps {
    worker: Worker;
    variant?: 'employer' | 'agency';
    onSelect?: (workerId: string) => void;
    selected?: boolean;
}

export function WorkerCard({ worker, variant = 'employer', onSelect, selected }: WorkerCardProps) {
    const trustScoreColor = worker.trustScore >= 80 ? 'text-green-600' : worker.trustScore >= 60 ? 'text-yellow-600' : 'text-gray-600';

    return (
        <Card hover className="relative">
            {variant === 'agency' && onSelect && (
                <div className="absolute top-4 right-4">
                    <input
                        type="checkbox"
                        checked={selected}
                        onChange={() => onSelect(worker.id)}
                        className="w-5 h-5 rounded border-2 border-[var(--color-border-medium)] text-[var(--color-secondary-teal)] focus:ring-2 focus:ring-[var(--color-secondary-teal)]"
                    />
                </div>
            )}

            <div className="flex flex-col gap-4">
                {/* Worker Photo and Basic Info */}
                <div className="flex items-start gap-4">
                    <div className="relative">
                        <div className="w-24 h-24 rounded-lg bg-gray-200 flex items-center justify-center overflow-hidden">
                            <span className="text-4xl">👤</span>
                        </div>
                        {worker.idVerified && (
                            <div className="absolute -bottom-1 -right-1">
                                <Badge variant="success" className="text-xs">
                                    ✓
                                </Badge>
                            </div>
                        )}
                    </div>

                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                            {worker.fullName}
                        </h3>
                        <p className="text-sm text-[var(--color-text-secondary)] mb-2">
                            {worker.age} years • {worker.region}
                        </p>

                        {/* Trust Score */}
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={i < Math.floor(worker.trustScore / 20) ? 'text-yellow-500' : 'text-gray-300'}>
                                        ★
                                    </span>
                                ))}
                            </div>
                            <span className={`text-sm font-semibold ${trustScoreColor}`}>
                                {worker.trustScore}%
                            </span>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                    {worker.skills.slice(0, 3).map((skill, index) => (
                        <SkillTag key={index} skill={skill.name} experience={skill.experienceLevel} />
                    ))}
                    {worker.skills.length > 3 && (
                        <span className="text-sm text-[var(--color-text-secondary)] self-center">
                            +{worker.skills.length - 3} more
                        </span>
                    )}
                </div>

                {/* International Indicators (for agency view) */}
                {variant === 'agency' && (
                    <div className="flex flex-wrap gap-2">
                        {worker.hasPassport && <Badge variant="info">Has Passport</Badge>}
                        {worker.willingToWorkAbroad && <Badge variant="success">Willing to Work Abroad</Badge>}
                        <Badge variant="default">{worker.travelReadiness}</Badge>
                    </div>
                )}

                {/* Verification Badges */}
                <div className="flex flex-wrap gap-2">
                    {worker.idVerified && <Badge variant="success" icon={<span>✓</span>}>ID Verified</Badge>}
                    {worker.ageVerified && <Badge variant="success" icon={<span>✓</span>}>Age Verified</Badge>}
                    {worker.emergencyContactVerified && <Badge variant="success" icon={<span>✓</span>}>Emergency Contact</Badge>}
                </div>

                {/* Previous Placements */}
                {worker.previousPlacements && worker.averageRating && (
                    <div className="text-sm text-[var(--color-text-secondary)]">
                        {worker.previousPlacements} previous placement{worker.previousPlacements > 1 ? 's' : ''} •
                        {' '}{worker.averageRating.toFixed(1)} ★ average rating
                    </div>
                )}

                {/* Actions */}
                <div className="flex gap-2 mt-2">
                    <Link href={`/employer/worker/${worker.id}`} className="flex-1">
                        <Button variant="primary" fullWidth>
                            View Profile
                        </Button>
                    </Link>
                    {variant === 'employer' && (
                        <Button variant="secondary" className="flex-1">
                            Request Interview
                        </Button>
                    )}
                </div>
            </div>
        </Card>
    );
}
