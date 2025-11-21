'use client';

import React, { useState } from 'react';
import { mockWorkers, filterWorkers, sortWorkers } from '@/lib/mock-data/workers';
import { WorkerCard } from '@/components/shared/WorkerCard';
import { Button } from '@/components/ui/Button';

export default function EmployerSearchPage() {
    const [filters, setFilters] = useState({
        gender: 'No preference',
        minAge: 18,
        maxAge: 60,
        skills: [] as string[],
        experienceLevel: 'Any',
        workType: 'Any',
        minTrustScore: 0,
        searchQuery: '',
    });

    const [sortBy, setSortBy] = useState<'relevance' | 'trustScore' | 'recent'>('relevance');

    const filteredWorkers = sortWorkers(filterWorkers(mockWorkers, filters), sortBy);

    const skillsList = ['Childcare', 'Cooking', 'Cleaning', 'Laundry', 'Elderly Care', 'Ironing'];

    const toggleSkill = (skill: string) => {
        setFilters(prev => ({
            ...prev,
            skills: prev.skills.includes(skill)
                ? prev.skills.filter(s => s !== skill)
                : [...prev.skills, skill]
        }));
    };

    return (
        <div className="min-h-screen bg-[var(--color-bg-secondary)]">
            {/* Header */}
            <header className="bg-[var(--color-primary-ochre)] text-white py-6 shadow-md">
                <div className="container-custom">
                    <h1 className="text-3xl font-bold">Find Your Perfect Worker</h1>
                    <p className="text-sm opacity-90 mt-1">Search and filter from our verified worker database</p>
                </div>
            </header>

            <div className="container-custom py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <aside className="lg:w-80 flex-shrink-0">
                        <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                            <h2 className="text-xl font-bold mb-4">Filters</h2>

                            {/* Search */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold mb-2">Search</label>
                                <input
                                    type="text"
                                    placeholder="Search by name or skills..."
                                    value={filters.searchQuery}
                                    onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
                                    className="w-full px-4 py-2 border border-[var(--color-border-light)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary-teal)]"
                                />
                            </div>

                            {/* Gender */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold mb-2">Gender</label>
                                <select
                                    value={filters.gender}
                                    onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
                                    className="w-full px-4 py-2 border border-[var(--color-border-light)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary-teal)]"
                                >
                                    <option>No preference</option>
                                    <option>Female</option>
                                    <option>Male</option>
                                </select>
                            </div>

                            {/* Age Range */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold mb-2">
                                    Age Range: {filters.minAge} - {filters.maxAge}
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="number"
                                        min="18"
                                        max="60"
                                        value={filters.minAge}
                                        onChange={(e) => setFilters({ ...filters, minAge: parseInt(e.target.value) })}
                                        className="w-1/2 px-3 py-2 border border-[var(--color-border-light)] rounded"
                                    />
                                    <input
                                        type="number"
                                        min="18"
                                        max="60"
                                        value={filters.maxAge}
                                        onChange={(e) => setFilters({ ...filters, maxAge: parseInt(e.target.value) })}
                                        className="w-1/2 px-3 py-2 border border-[var(--color-border-light)] rounded"
                                    />
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold mb-2">Skills</label>
                                <div className="space-y-2">
                                    {skillsList.map(skill => (
                                        <label key={skill} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={filters.skills.includes(skill)}
                                                onChange={() => toggleSkill(skill)}
                                                className="w-4 h-4 rounded border-2 text-[var(--color-secondary-teal)]"
                                            />
                                            <span className="text-sm">{skill}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Experience Level */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold mb-2">Experience Level</label>
                                <select
                                    value={filters.experienceLevel}
                                    onChange={(e) => setFilters({ ...filters, experienceLevel: e.target.value })}
                                    className="w-full px-4 py-2 border border-[var(--color-border-light)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary-teal)]"
                                >
                                    <option>Any</option>
                                    <option>1-2 years</option>
                                    <option>3-5 years</option>
                                    <option>5+ years</option>
                                </select>
                            </div>

                            {/* Work Type */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold mb-2">Work Type</label>
                                <div className="space-y-2">
                                    {['Any', 'Live-in', 'Live-out'].map(type => (
                                        <label key={type} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="workType"
                                                checked={filters.workType === type}
                                                onChange={() => setFilters({ ...filters, workType: type })}
                                                className="w-4 h-4 text-[var(--color-primary-ochre)]"
                                            />
                                            <span className="text-sm">{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Trust Score */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold mb-2">
                                    Minimum Trust Score: {filters.minTrustScore}%
                                </label>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="10"
                                    value={filters.minTrustScore}
                                    onChange={(e) => setFilters({ ...filters, minTrustScore: parseInt(e.target.value) })}
                                    className="w-full"
                                />
                            </div>

                            {/* Clear Filters */}
                            <Button
                                variant="ghost"
                                fullWidth
                                onClick={() => setFilters({
                                    gender: 'No preference',
                                    minAge: 18,
                                    maxAge: 60,
                                    skills: [],
                                    experienceLevel: 'Any',
                                    workType: 'Any',
                                    minTrustScore: 0,
                                    searchQuery: '',
                                })}
                            >
                                Clear All Filters
                            </Button>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1">
                        {/* Results Header */}
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-semibold">
                                Showing {filteredWorkers.length} worker{filteredWorkers.length !== 1 ? 's' : ''}
                            </h2>

                            <div className="flex items-center gap-2">
                                <label className="text-sm font-semibold">Sort by:</label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as any)}
                                    className="px-4 py-2 border border-[var(--color-border-light)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary-teal)]"
                                >
                                    <option value="relevance">Relevance</option>
                                    <option value="trustScore">Trust Score</option>
                                    <option value="recent">Recently Approved</option>
                                </select>
                            </div>
                        </div>

                        {/* Worker Cards Grid */}
                        {filteredWorkers.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredWorkers.map(worker => (
                                    <WorkerCard key={worker.id} worker={worker} variant="employer" />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-lg text-[var(--color-text-secondary)]">
                                    No workers match your criteria. Try adjusting your filters.
                                </p>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}
