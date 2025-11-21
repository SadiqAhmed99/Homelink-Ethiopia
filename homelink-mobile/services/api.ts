/**
 * API Service
 * Handles all API requests to the backend
 */

const API_BASE_URL = 'https://api.homelink-addis.com'; // Replace with actual API URL

export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}

/**
 * Generic API request handler
 */
const apiRequest = async <T = any>(
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
    body?: any,
    headers?: Record<string, string>
): Promise<ApiResponse<T>> => {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            body: body ? JSON.stringify(body) : undefined,
        });

        const data = await response.json();

        if (!response.ok) {
            return {
                success: false,
                error: data.message || 'An error occurred',
            };
        }

        return {
            success: true,
            data,
        };
    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Network error',
        };
    }
};

/**
 * Worker Registration API
 */
export const workerApi = {
    /**
     * Submit worker registration
     */
    register: async (workerData: any): Promise<ApiResponse> => {
        // Mock implementation - replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        return {
            success: true,
            data: {
                workerId: 'W-' + Math.random().toString(36).substring(2, 11).toUpperCase(),
                status: 'pending_review',
            },
            message: 'Registration submitted successfully',
        };
    },

    /**
     * Upload ID image
     */
    uploadIDImage: async (imageUri: string): Promise<ApiResponse> => {
        // Mock implementation
        await new Promise(resolve => setTimeout(resolve, 1500));
        return {
            success: true,
            data: {
                imageUrl: imageUri,
            },
        };
    },

    /**
     * Get worker profile
     */
    getProfile: async (workerId: string): Promise<ApiResponse> => {
        // Mock implementation
        await new Promise(resolve => setTimeout(resolve, 500));
        return {
            success: true,
            data: {
                workerId,
                fullName: 'Abeba Tesfaye',
                status: 'approved',
                trustScore: 85,
            },
        };
    },
};

/**
 * Payment API
 */
export const paymentApi = {
    /**
     * Process payment
     */
    processPayment: async (
        amount: number,
        method: 'telebirr' | 'telecom' | 'dashen'
    ): Promise<ApiResponse> => {
        // Mock implementation
        await new Promise(resolve => setTimeout(resolve, 2000));
        return {
            success: true,
            data: {
                transactionId: 'TXN-' + Math.random().toString(36).substring(2, 11).toUpperCase(),
                amount,
                method,
                status: 'completed',
            },
            message: 'Payment processed successfully',
        };
    },
};
