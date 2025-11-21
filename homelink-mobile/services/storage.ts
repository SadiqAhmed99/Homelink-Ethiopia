import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Storage Service
 * Handles local data persistence using AsyncStorage
 */

const STORAGE_KEYS = {
    USER_DATA: '@homelink:user_data',
    REGISTRATION_DRAFT: '@homelink:registration_draft',
    LANGUAGE: '@homelink:language',
    THEME: '@homelink:theme',
    AUTH_TOKEN: '@homelink:auth_token',
};

/**
 * Save data to storage
 */
export const saveData = async <T = any>(key: string, value: T): Promise<boolean> => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
        return true;
    } catch (error) {
        console.error('Error saving data:', error);
        return false;
    }
};

/**
 * Get data from storage
 */
export const getData = async <T = any>(key: string): Promise<T | null> => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
        console.error('Error getting data:', error);
        return null;
    }
};

/**
 * Remove data from storage
 */
export const removeData = async (key: string): Promise<boolean> => {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    } catch (error) {
        console.error('Error removing data:', error);
        return false;
    }
};

/**
 * Clear all storage
 */
export const clearAll = async (): Promise<boolean> => {
    try {
        await AsyncStorage.clear();
        return true;
    } catch (error) {
        console.error('Error clearing storage:', error);
        return false;
    }
};

/**
 * Registration Draft Management
 */
export const registrationDraft = {
    save: async (data: any) => saveData(STORAGE_KEYS.REGISTRATION_DRAFT, data),
    get: async () => getData(STORAGE_KEYS.REGISTRATION_DRAFT),
    clear: async () => removeData(STORAGE_KEYS.REGISTRATION_DRAFT),
};

/**
 * User Data Management
 */
export const userData = {
    save: async (data: any) => saveData(STORAGE_KEYS.USER_DATA, data),
    get: async () => getData(STORAGE_KEYS.USER_DATA),
    clear: async () => removeData(STORAGE_KEYS.USER_DATA),
};

/**
 * Language Preference
 */
export const languagePreference = {
    save: async (language: 'en' | 'am') => saveData(STORAGE_KEYS.LANGUAGE, language),
    get: async (): Promise<'en' | 'am'> => {
        const lang = await getData<'en' | 'am'>(STORAGE_KEYS.LANGUAGE);
        return lang || 'en';
    },
};

/**
 * Auth Token Management
 */
export const authToken = {
    save: async (token: string) => saveData(STORAGE_KEYS.AUTH_TOKEN, token),
    get: async () => getData<string>(STORAGE_KEYS.AUTH_TOKEN),
    clear: async () => removeData(STORAGE_KEYS.AUTH_TOKEN),
};
