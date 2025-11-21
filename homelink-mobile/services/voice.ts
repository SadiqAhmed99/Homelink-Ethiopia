/**
 * Mock Voice/Speech-to-Text Service
 * Simulates voice transcription for testing purposes
 * Replace with actual service (Google Cloud Speech-to-Text, Whisper, etc.) in production
 */

export interface VoiceTranscriptionResult {
    success: boolean;
    confidence: number;
    transcription?: string;
    extractedData?: {
        fullName?: string;
        age?: string;
        region?: string;
        emergencyContactName?: string;
        emergencyContactPhone?: string;
    };
    error?: string;
}

/**
 * Simulates voice recording transcription
 * @param audioUri - URI of the recorded audio file
 * @param language - Language code ('en' or 'am')
 * @returns Promise with transcription results
 */
export const transcribeAudio = async (
    audioUri: string,
    language: 'en' | 'am' = 'en'
): Promise<VoiceTranscriptionResult> => {
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Mock successful transcription (85% of the time)
    if (Math.random() > 0.15) {
        const mockTranscriptions = {
            en: "My name is Abeba Tesfaye. I am 28 years old from Addis Ababa. My emergency contact is my mother, Almaz Tesfaye, and her phone number is 0911234567.",
            am: "ስሜ አበባ ተስፋዬ ነው። እድሜዬ 28 ዓመት ነው እና ከአዲስ አበባ ነኝ። የድንገተኛ ጊዜ ግንኙነቴ እናቴ አልማዝ ተስፋዬ ናት እና ስልክ ቁጥሯ 0911234567 ነው።",
        };

        const transcription = mockTranscriptions[language];
        const extractedData = extractDataFromTranscription(transcription, language);

        return {
            success: true,
            confidence: Math.floor(Math.random() * 15) + 85, // 85-100% confidence
            transcription,
            extractedData,
        };
    } else {
        // Mock failed transcription (15% of the time)
        return {
            success: false,
            confidence: Math.floor(Math.random() * 30) + 50, // 50-80% confidence
            error: 'Could not understand audio clearly. Please try again in a quieter environment.',
        };
    }
};

/**
 * Extracts structured data from transcribed text using simple pattern matching
 * In production, use NLP/AI for better extraction
 */
const extractDataFromTranscription = (
    transcription: string,
    language: 'en' | 'am'
): VoiceTranscriptionResult['extractedData'] => {
    const data: VoiceTranscriptionResult['extractedData'] = {};

    if (language === 'en') {
        // Extract name
        const nameMatch = transcription.match(/name is ([A-Za-z\s]+)/i);
        if (nameMatch) data.fullName = nameMatch[1].trim();

        // Extract age
        const ageMatch = transcription.match(/(\d+)\s*years?\s*old/i);
        if (ageMatch) data.age = ageMatch[1];

        // Extract region
        const regionMatch = transcription.match(/from ([A-Za-z\s]+)/i);
        if (regionMatch) data.region = regionMatch[1].trim();

        // Extract emergency contact name
        const contactNameMatch = transcription.match(/contact is (?:my )?(?:mother|father|sister|brother|)?,?\s*([A-Za-z\s]+),/i);
        if (contactNameMatch) data.emergencyContactName = contactNameMatch[1].trim();

        // Extract phone number
        const phoneMatch = transcription.match(/(\d{10})/);
        if (phoneMatch) data.emergencyContactPhone = phoneMatch[1];
    } else {
        // Amharic extraction (simplified - in production use proper Amharic NLP)
        data.fullName = 'አበባ ተስፋዬ';
        data.age = '28';
        data.region = 'አዲስ አበባ';
        data.emergencyContactName = 'አልማዝ ተስፋዬ';
        data.emergencyContactPhone = '0911234567';
    }

    return data;
};

/**
 * Checks if the device supports voice recording
 */
export const checkVoiceSupport = async (): Promise<boolean> => {
    // In production, check actual device capabilities
    return true;
};
