import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import am from './am.json';
import { languagePreference } from '../services/storage';

// Initialize i18n
const initI18n = async () => {
    const savedLanguage = await languagePreference.get();

    i18n
        .use(initReactI18next)
        .init({
            resources: {
                en: { translation: en },
                am: { translation: am },
            },
            lng: savedLanguage,
            fallbackLng: 'en',
            interpolation: {
                escapeValue: false,
            },
            compatibilityJSON: 'v3',
        });
};

export { initI18n };
export default i18n;
