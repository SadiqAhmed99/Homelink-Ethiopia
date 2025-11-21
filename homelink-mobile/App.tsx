import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useTranslation } from 'react-i18next';
import { initI18n } from './locales/i18n';

export default function App() {
  const [isReady, setIsReady] = React.useState(false);

  useEffect(() => {
    const initialize = async () => {
      try {
        await initI18n();
        setIsReady(true);
      } catch (error) {
        console.error('Failed to initialize app:', error);
        setIsReady(true); // Continue anyway
      }
    };

    initialize();
  }, []);

  if (!isReady) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#D4691E" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* App content will be rendered by Expo Router */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F1E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
