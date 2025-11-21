import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { initI18n } from '../locales/i18n';

export default function RootLayout() {
    useEffect(() => {
        initI18n();
    }, []);

    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#D4691E',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    title: 'HomeLink Addis',
                }}
            />
            <Stack.Screen
                name="registration/welcome"
                options={{
                    title: 'Worker Registration',
                }}
            />
            <Stack.Screen
                name="registration/manual-entry"
                options={{
                    title: 'Personal Information',
                }}
            />
        </Stack>
    );
}
