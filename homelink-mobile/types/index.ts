export interface Worker {
    workerId?: string;
    fullName: string;
    nationalIdNumber?: string;
    dateOfBirth?: string;
    age?: number;
    gender?: string;
    phone: string;
    region: string;
    profileStatus: 'draft' | 'pending' | 'approved' | 'hired' | 'inactive';
    trustScore?: number;
    cvFilePath?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface EmergencyContact {
    contactId?: string;
    workerId?: string;
    name: string;
    phone: string;
    nationalIdNumber?: string;
    region?: string;
    relationshipType?: string;
    verified?: boolean;
}

export interface Skill {
    skillId?: string;
    name: string;
    experienceLevel: 'none' | '1-2' | '3-5' | '5+';
    certified?: boolean;
}

export interface WorkerProfile extends Worker {
    emergencyContact: EmergencyContact;
    skills: Skill[];
    workPreferences: WorkPreferences;
    verificationStatus: VerificationStatus;
}

export interface WorkPreferences {
    workType: 'live-in' | 'live-out' | 'no-preference';
    preferredLocation?: string;
    availability: 'immediate' | '1-month' | '2-months' | 'flexible';
    willingToWorkAbroad?: boolean;
    hasPassport?: boolean;
}

export interface VerificationStatus {
    idVerified: boolean;
    ageVerified: boolean;
    emergencyContactVerified: boolean;
    phoneVerified: boolean;
    verificationLevel: 1 | 2 | 3;
}

export interface RegistrationDraft {
    step: 'personal-info' | 'emergency-contact' | 'skills' | 'preferences' | 'payment';
    method: 'ocr' | 'voice' | 'manual';
    data: Partial<WorkerProfile>;
    lastUpdated: string;
}

export interface PaymentInfo {
    transactionId?: string;
    amount: number;
    method: 'telebirr' | 'telecom' | 'dashen';
    status: 'pending' | 'completed' | 'failed';
    timestamp?: string;
}
