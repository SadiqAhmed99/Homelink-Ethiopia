'use client';

import React, { useState } from 'react';
import { mockWorkers, filterWorkers, sortWorkers } from '@/lib/mock-data/workers';
import { WorkerCard } from '@/components/shared/WorkerCard';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function AgencySearchPage() {
    const [filters, setFilters] = useState({
        gender: 'No preference',
        minAge: 18,
        maxAge: 60,
        skills: [] as string[],
        experienceLevel: 'Any',
        workType: 'Any',
        minTrustScore: 0,
        hasPassport: undefined as boolean | undefined,
        willingToWorkAbroad: undefined as boolean | undefined,
        travelReadiness: undefined as string | undefined,
        languages: [] as string[],
        searchQuery: '',
    });

    const [sortBy, setSortBy] = useState<'relevance' | 'trustScore' | 'recent'>('relevance');
    const [selectedWorkers, setSelectedWorkers] = useState<Set<string>>(new Set());
    const [shortlists, setShortlists] = useState<Array<{ name: string; workers: string[] }>>([
        { name: 'Saudi Arabia Candidates', workers: [] },
        { name: 'UAE Candidates', workers: [] },
    ]);

    const filteredWorkers = sortWorkers(filterWorkers(mockWorkers, filters), sortBy);

    const skillsList = ['Childcare', 'Cooking', 'Cleaning', 'Laundry', 'Elderly Care', 'Ironing'];
    const languagesList = ['English', 'Arabic', 'Amharic', 'Oromo'];

    const toggleSkill = (skill: string) => {
        setFilters(prev => ({
            ...prev,
            skills: prev.skills.includes(skill)
                ? prev.skills.filter(s => s !== skill)
                : [...prev.skills, skill]
        }));
    };

    const toggleLanguage = (language: string) => {
        setFilters(prev => ({
            ...prev,
            languages: prev.languages.includes(language)
                ? prev.languages.filter(l => l !== language)
                : [...prev.languages, language]
        }));
    };

    const toggleWorkerSelection = (workerId: string) => {
        setSelectedWorkers(prev => {
            const newSet = new Set(prev);
            if (newSet.has(workerId)) {
                newSet.delete(workerId);
            } else {
                newSet.add(workerId);
            }
            return newSet;
        });
    };

    const addToShortlist = (shortlistName: string) => {
        setShortlists(prev => prev.map(list =>
            list.name === shortlistName
                ? { ...list, workers: [...new Set([...list.workers, ...Array.from(selectedWorkers)])] }
                : list
        ));
        setSelectedWorkers(new Set());
    };

    const exportSelected = () => {
        alert(`Exporting ${selectedWorkers.size} worker CVs as ZIP file...`);
    };

    return (
        <div className="min-h-screen bg-[var(--color-bg-secondary)]">
            {/* Header */}
            <header className="bg-[var(--color-secondary-teal)] text-white py-6 shadow-md">
                <div className="container-custom">
                    <h1 className="text-3xl font-bold">Find International Candidates</h1>
                    <p className="text-sm opacity-90 mt-1">Advanced search with international placement filters</p>
                </div>
            </header>

            <div className="container-custom py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <aside className="lg:w-80 flex-shrink-0">
                        <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                            <h2 className="text-xl font-bold mb-4">Advanced Filters</h2>

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

                            {/* International Filters */}
                            <div className="mb-6 p-4 bg-[var(--color-info-light)] rounded">
                                <h3 className="font-semibold mb-3 text-[var(--color-info-dark)]">International Requirements</h3>

                                <div className="space-y-3">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={filters.hasPassport === true}
                                            onChange={(e) => setFilters({ ...filters, hasPassport: e.target.checked ? true : undefined })}
                                            className="w-4 h-4 rounded border-2 text-[var(--color-secondary-teal)]"
                                        />
                                        <span className="text-sm">Has Passport</span>
                                    </label>

                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={filters.willingToWorkAbroad === true}
                                            onChange={(e) => setFilters({ ...filters, willingToWorkAbroad: e.target.checked ? true : undefined })}
                                            className="w-4 h-4 rounded border-2 text-[var(--color-secondary-teal)]"
                                        />
                                        <span className="text-sm">Willing to Work Abroad</span>
                                    </label>
                                </div>

                                <div className="mt-3">
                                    <label className="block text-sm font-semibold mb-2">Travel Readiness</label>
                                    <select
                                        value={filters.travelReadiness || ''}
                                        onChange={(e) => setFilters({ ...filters, travelReadiness: e.target.value || undefined })}
                                        className="w-full px-3 py-2 border border-[var(--color-border-light)] rounded text-sm"
                                    >
                                        <option value="">Any</option>
                                        <option>Ready Now</option>
                                        <option>1-3 months</option>
                                        <option>3-6 months</option>
                                        <option>Flexible</option>
                                    </select>
                                </div>
                            </div>

                            {/* Languages */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold mb-2">Languages</label>
                                <div className="space-y-2">
                                    {languagesList.map(language => (
                                        <label key={language} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={filters.languages.includes(language)}
                                                onChange={() => toggleLanguage(language)}
                                                className="w-4 h-4 rounded border-2 text-[var(--color-secondary-teal)]"
                                            />
                                            <span className="text-sm">{language}</span>
                                        </label>
                                    ))}
                                </div>
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
                                    hasPassport: undefined,
                                    willingToWorkAbroad: undefined,
                                    travelReadiness: undefined,
                                    languages: [],
                                    searchQuery: '',
                                })}
                            >
                                Clear All Filters
                            </Button>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1">
                        {/* Bulk Actions Bar */}
                        {selectedWorkers.size > 0 && (
                            <div className="bg-[var(--color-secondary-teal)] text-white p-4 rounded-lg mb-6 flex items-center justify-between">
                                <span className="font-semibold">
                                    {selectedWorkers.size} worker{selectedWorkers.size !== 1 ? 's' : ''} selected
                                </span>
                                <div className="flex gap-2">
                                    <select
                                        onChange={(e) => {
                                            if (e.target.value) {
                                                addToShortlist(e.target.value);
                                                e.target.value = '';
                                            }
                                        }}
                                        className="px-4 py-2 bg-white text-[var(--color-text-primary)] rounded"
                                    >
                                        <option value="">Add to Shortlist...</option>
                                        {shortlists.map(list => (
                                            <option key={list.name} value={list.name}>{list.name}</option>
                                        ))}
                                    </select>
                                    <Button variant="secondary" onClick={exportSelected}>
                                        Export as ZIP
                                    </Button>
                                    <Button variant="ghost" onClick={() => setSelectedWorkers(new Set())}>
                                        Clear Selection
                                    </Button>
                                </div>
                            </div>
                        )}

                        {/* Results Header */}
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-semibold">
                                Showing {filteredWorkers.length} candidate{filteredWorkers.length !== 1 ? 's' : ''}
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
                                    <WorkerCard
                                        key={worker.id}
                                        worker={worker}
                                        variant="agency"
                                        onSelect={toggleWorkerSelection}
                                        selected={selectedWorkers.has(worker.id)}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-lg text-[var(--color-text-secondary)]">
                                    No candidates match your criteria. Try adjusting your filters.
                                </p>
                            </div>
                        )}
                    </main>

                    {/* Shortlist Sidebar */}
                    <aside className="lg:w-80 flex-shrink-0">
                        <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                            <h2 className="text-xl font-bold mb-4">My Shortlists</h2>

                            {shortlists.map(list => (
                                <div key={list.name} className="mb-4 p-4 bg-[var(--color-bg-secondary)] rounded">
                                    <h3 className="font-semibold mb-2">{list.name}</h3>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-[var(--color-text-secondary)]">
                                            {list.workers.length} worker{list.workers.length !== 1 ? 's' : ''}
                                        </span>
                                        {list.workers.length > 0 && (
                                            <Button variant="tertiary" size="small">
                                                Export
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            ))}

                            <Button variant="secondary" fullWidth className="mt-4">
                                + Create New Shortlist
                            </Button>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
