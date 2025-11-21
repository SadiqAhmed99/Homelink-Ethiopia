/**
 * Mock OCR Service
 * Simulates ID text extraction for testing purposes
 * Replace with actual OCR service (Google Cloud Vision, Tesseract, etc.) in production
 */

export interface OCRResult {
    success: boolean;
    confidence: number;
    data?: {
        fullName: string;
        idNumber: string;
        dateOfBirth: string;
        gender: string;
        region: string;
        issueDate: string;
        expiryDate: string;
    };
    error?: string;
}

/**
 * Simulates OCR processing of an Ethiopian National ID
 * @param imageUri - URI of the captured ID image
 * @returns Promise with OCR results
 */
export const processIDImage = async (imageUri: string): Promise<OCRResult> => {
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock successful extraction (90% of the time)
    if (Math.random() > 0.1) {
        return {
            success: true,
            confidence: Math.floor(Math.random() * 20) + 80, // 80-100% confidence
            data: {
                fullName: 'Abeba Tesfaye',
                idNumber: 'ET-' + Math.random().toString(36).substring(2, 11).toUpperCase(),
                dateOfBirth: '1995-03-15',
                gender: 'Female',
                region: 'Addis Ababa',
                issueDate: '2020-01-10',
                expiryDate: '2030-01-10',
            },
        };
    } else {
        // Mock failed extraction (10% of the time)
        return {
            success: false,
            confidence: Math.floor(Math.random() * 30) + 40, // 40-70% confidence
            error: 'Could not read ID clearly. Please try again with better lighting.',
        };
    }
};

/**
 * Validates if a person is 18 or older
 * @param dateOfBirth - Date of birth string in YYYY-MM-DD format
 * @returns boolean indicating if person is 18+
 */
export const validateAge = (dateOfBirth: string): boolean => {
    const dob = new Date(dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        return age - 1 >= 18;
    }

    return age >= 18;
};

/**
 * Calculates age from date of birth
 * @param dateOfBirth - Date of birth string in YYYY-MM-DD format
 * @returns age in years
 */
export const calculateAge = (dateOfBirth: string): number => {
    const dob = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    return age;
};

/**
 * Verifies emergency contact region matches worker's home region
 * @param workerRegion - Worker's home region
 * @param contactRegion - Emergency contact's region from ID
 * @returns boolean indicating if regions match
 */
export const verifyEmergencyContactRegion = (
    workerRegion: string,
    contactRegion: string
): boolean => {
    // Simple string comparison (in production, use more sophisticated matching)
    return workerRegion.toLowerCase().trim() === contactRegion.toLowerCase().trim();
};
