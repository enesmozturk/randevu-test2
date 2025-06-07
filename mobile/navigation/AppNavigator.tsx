// mobile/navigation/AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import VenuesScreen from '../screens/VenuesScreen';
import { useAuth } from '../contexts/AuthContext';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { token } = useAuth();

  return (
    <Stack.Navigator>
      {token ? (
        <Stack.Screen name="Venues" component={VenuesScreen} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      )}
    </Stack.Navigator>
  );
}
