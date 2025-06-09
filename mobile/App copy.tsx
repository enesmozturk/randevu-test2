// mobile/App.tsx
import React, { useEffect, useCallback, useState } from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { AuthProvider } from './contexts/AuthContext';
import RootNavigator from './navigation/RootNavigator';

// Splash ekranın otomatik kapanmasını engelle
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isAppReady, setAppReady] = useState(false);

  useEffect(() => {
    const prepareApp = async () => {
      try {
        // Buraya dilediğin hazırlık kodlarını ekleyebilirsin (örn. token kontrolü vs.)
        await new Promise(resolve => setTimeout(resolve, 2000)); // 2 saniye bekle
      } catch (e) {
        console.warn(e);
      } finally {
        setAppReady(true);
        await SplashScreen.hideAsync(); // splash ekranı gizle
      }
    };

    prepareApp();
  }, []);

  const onLayoutRootView = useCallback(() => {
    // Splash sadece ilk render'da etkili
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
        <RootNavigator />
      </AuthProvider>
    </View>
  );
}
