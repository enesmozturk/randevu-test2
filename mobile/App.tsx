// App.tsx
import React, { useEffect, useCallback, useState } from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthProvider } from './contexts/AuthContext';
import AppNavigator from './navigation/AppNavigator';

// Splash ekranın otomatik kapanmasını engelle
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isAppReady, setAppReady] = useState(false);
  const [initialRoute, setInitialRoute] = useState<'Onboarding1' | 'Homepage'>('Onboarding1');

  useEffect(() => {
    const prepareApp = async () => {
      try {
        // Onboarding daha önce gösterildi mi?
        const hasSeenOnboarding = await AsyncStorage.getItem('hasSeenOnboarding');
        if (hasSeenOnboarding === 'true') {
          setInitialRoute('Homepage');
        } else {
          setInitialRoute('Onboarding1');
        }

        await new Promise(resolve => setTimeout(resolve, 2000)); // 2 saniye bekle


      } catch (e) {
        console.warn(e);
      } finally {
        setAppReady(true);
        await SplashScreen.hideAsync();
      }
    };

    prepareApp();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (isAppReady) {
      SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  if (!isAppReady) {
    return null; // splash ekran gösterilmeye devam eder
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <AuthProvider>
        <AppNavigator initialRouteName={initialRoute} />
      </AuthProvider>
    </View>
  );
}
