/**
 * Mock Worker Database
 * Realistic Ethiopian worker profiles for demonstration
 */

export interface Worker {
    id: string;
    fullName: string;
    age: number;
    gender: 'Male' | 'Female';
    region: string;
    phone: string;
    photo: string;

    // Skills
    skills: Array<{
        name: string;
        experienceLevel: 'None' | '1-2 years' | '3-5 years' | '5+ years';
    }>;

    // Work Preferences
    workType: 'Live-in' | 'Live-out' | 'No preference';
    preferredLocation?: string;
    availability: 'Immediate' | '1 month' | '2 months' | 'Flexible';

    // International
    hasPassport: boolean;
    willingToWorkAbroad: boolean;
    travelReadiness: 'Ready Now' | '1-3 months' | '3-6 months' | 'Flexible';
    languages: string[];

    // Verification
    idVerified: boolean;
    ageVerified: boolean;
    emergencyContactVerified: boolean;
    trustScore: number;

    // Status
    status: 'Available' | 'Hired (Domestic)' | 'Hired (International)' | 'Pending Review';

    // Feedback
    previousPlacements?: number;
    averageRating?: number;
    reviews?: Array<{
        rating: number;
        comment: string;
        date: string;
    }>;
}

const ethiopianNames = [
    'Abeba Tesfaye', 'Almaz Bekele', 'Tigist Haile', 'Hanna Mulugeta', 'Marta Gebre',
    'Selam Tadesse', 'Bethlehem Assefa', 'Rahel Yohannes', 'Sara Kebede', 'Meseret Alemu',
    'Kidist Girma', 'Yeshi Negash', 'Tsehay Demissie', 'Aster Wolde', 'Seble Desta',
    'Frehiwot Amare', 'Beza Tekle', 'Senait Mekonnen', 'Genet Getachew', 'Mahlet Abate',
    'Eyerusalem Desta', 'Meron Tadesse', 'Hirut Bekele', 'Sosina Tesfaye', 'Yordanos Haile',
    'Addis Mulugeta', 'Chaltu Gebre', 'Desta Assefa', 'Emebet Yohannes', 'Fikirte Kebede',
    'Gelila Alemu', 'Hiwot Girma', 'Lem Negash', 'Meheret Demissie', 'Netsanet Wolde',
    'Selamawit Desta', 'Tadelech Amare', 'Worknesh Tekle', 'Yetnayet Mekonnen', 'Zenebech Getachew',
    'Aberash Abate', 'Birtukan Desta', 'Chaltu Tadesse', 'Dinknesh Bekele', 'Elfinesh Tesfaye',
    'Fantu Haile', 'Gete Mulugeta', 'Haregwa Gebre', 'Ityopis Assefa', 'Kokeb Yohannes',
];

const regions = [
    'Addis Ababa', 'Oromia', 'Amhara', 'Tigray', 'Southern Nations',
    'Sidama', 'Afar', 'Somali', 'Benishangul-Gumuz', 'Gambela', 'Harari', 'Dire Dawa'
];

const skillsList = [
    'Childcare', 'Cooking', 'Cleaning', 'Laundry', 'Elderly Care', 'Ironing', 'Shopping'
];

const experienceLevels: Array<'None' | '1-2 years' | '3-5 years' | '5+ years'> = [
    'None', '1-2 years', '3-5 years', '5+ years'
];

const languages = ['Amharic', 'English', 'Oromo', 'Tigrinya', 'Arabic', 'Somali'];

function generateWorker(index: number): Worker {
    const name = ethiopianNames[index % ethiopianNames.length];
    const age = 20 + Math.floor(Math.random() * 35); // 20-54 years old
    const region = regions[Math.floor(Math.random() * regions.length)];

    // Generate 2-4 skills
    const numSkills = 2 + Math.floor(Math.random() * 3);
    const workerSkills = [];
    const selectedSkills = new Set<string>();

    while (workerSkills.length < numSkills) {
        const skill = skillsList[Math.floor(Math.random() * skillsList.length)];
        if (!selectedSkills.has(skill)) {
            selectedSkills.add(skill);
            workerSkills.push({
                name: skill,
                experienceLevel: experienceLevels[Math.floor(Math.random() * experienceLevels.length)]
            });
        }
    }

    // Generate 1-3 languages
    const numLanguages = 1 + Math.floor(Math.random() * 3);
    const workerLanguages = ['Amharic']; // Everyone speaks Amharic
    while (workerLanguages.length < numLanguages) {
        const lang = languages[Math.floor(Math.random() * languages.length)];
        if (!workerLanguages.includes(lang)) {
            workerLanguages.push(lang);
        }
    }

    const hasPassport = Math.random() > 0.6;
    const willingToWorkAbroad = hasPassport && Math.random() > 0.3;
    const trustScore = 60 + Math.floor(Math.random() * 40); // 60-100

    const hasPreviousPlacements = Math.random() > 0.5;
    const previousPlacements = hasPreviousPlacements ? 1 + Math.floor(Math.random() * 5) : undefined;
    const averageRating = hasPreviousPlacements ? 3.5 + Math.random() * 1.5 : undefined;

    return {
        id: `W-${String(index + 1).padStart(4, '0')}`,
        fullName: name,
        age,
        gender: 'Female',
        region,
        phone: `+251 91${Math.floor(Math.random() * 10000000).toString().padStart(7, '0')}`,
        photo: `/workers/worker-${(index % 10) + 1}.jpg`, // Placeholder images

        skills: workerSkills,

        workType: ['Live-in', 'Live-out', 'No preference'][Math.floor(Math.random() * 3)] as any,
        preferredLocation: Math.random() > 0.5 ? ['Bole', 'Piassa', 'Kazanchis', 'Megenagna'][Math.floor(Math.random() * 4)] : undefined,
        availability: ['Immediate', '1 month', '2 months', 'Flexible'][Math.floor(Math.random() * 4)] as any,

        hasPassport,
        willingToWorkAbroad,
        travelReadiness: ['Ready Now', '1-3 months', '3-6 months', 'Flexible'][Math.floor(Math.random() * 4)] as any,
        languages: workerLanguages,

        idVerified: true,
        ageVerified: true,
        emergencyContactVerified: true,
        trustScore,

        status: 'Available',

        previousPlacements,
        averageRating,
        reviews: hasPreviousPlacements ? [
            {
                rating: 4 + Math.random(),
                comment: 'Excellent worker, very reliable and professional.',
                date: '2024-10-15'
            }
        ] : undefined,
    };
}

// Generate 60 mock workers
export const mockWorkers: Worker[] = Array.from({ length: 60 }, (_, i) => generateWorker(i));

// Helper functions for filtering
export function filterWorkers(
    workers: Worker[],
    filters: {
        gender?: string;
        minAge?: number;
        maxAge?: number;
        skills?: string[];
        experienceLevel?: string;
        workType?: string;
        minTrustScore?: number;
        hasPassport?: boolean;
        willingToWorkAbroad?: boolean;
        travelReadiness?: string;
        languages?: string[];
        searchQuery?: string;
    }
): Worker[] {
    return workers.filter(worker => {
        // Gender filter
        if (filters.gender && filters.gender !== 'No preference' && worker.gender !== filters.gender) {
            return false;
        }

        // Age filter
        if (filters.minAge && worker.age < filters.minAge) return false;
        if (filters.maxAge && worker.age > filters.maxAge) return false;

        // Skills filter
        if (filters.skills && filters.skills.length > 0) {
            const workerSkillNames = worker.skills.map(s => s.name);
            const hasAllSkills = filters.skills.every(skill => workerSkillNames.includes(skill));
            if (!hasAllSkills) return false;
        }

        // Experience level filter
        if (filters.experienceLevel && filters.experienceLevel !== 'Any') {
            const hasRequiredExperience = worker.skills.some(s => s.experienceLevel === filters.experienceLevel);
            if (!hasRequiredExperience) return false;
        }

        // Work type filter
        if (filters.workType && filters.workType !== 'Any' && worker.workType !== filters.workType && worker.workType !== 'No preference') {
            return false;
        }

        // Trust score filter
        if (filters.minTrustScore && worker.trustScore < filters.minTrustScore) {
            return false;
        }

        // Passport filter
        if (filters.hasPassport !== undefined && worker.hasPassport !== filters.hasPassport) {
            return false;
        }

        // Willing to work abroad filter
        if (filters.willingToWorkAbroad !== undefined && worker.willingToWorkAbroad !== filters.willingToWorkAbroad) {
            return false;
        }

        // Travel readiness filter
        if (filters.travelReadiness && worker.travelReadiness !== filters.travelReadiness) {
            return false;
        }

        // Languages filter
        if (filters.languages && filters.languages.length > 0) {
            const hasAllLanguages = filters.languages.every(lang => worker.languages.includes(lang));
            if (!hasAllLanguages) return false;
        }

        // Search query filter
        if (filters.searchQuery) {
            const query = filters.searchQuery.toLowerCase();
            const matchesName = worker.fullName.toLowerCase().includes(query);
            const matchesSkills = worker.skills.some(s => s.name.toLowerCase().includes(query));
            const matchesRegion = worker.region.toLowerCase().includes(query);
            if (!matchesName && !matchesSkills && !matchesRegion) return false;
        }

        return true;
    });
}

// Sort workers
export function sortWorkers(workers: Worker[], sortBy: 'relevance' | 'trustScore' | 'recent'): Worker[] {
    const sorted = [...workers];

    switch (sortBy) {
        case 'trustScore':
            return sorted.sort((a, b) => b.trustScore - a.trustScore);
        case 'recent':
            return sorted.sort((a, b) => b.id.localeCompare(a.id));
        case 'relevance':
        default:
            return sorted;
    }
}
