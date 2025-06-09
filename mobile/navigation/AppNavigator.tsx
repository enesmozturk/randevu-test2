// src/navigation/AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import Onboarding1 from '../screens/onboarding/Onboarding1';
import Onboarding2 from '../screens/onboarding/Onboarding2';
import Onboarding3 from '../screens/onboarding/Onboarding3';
import Onboarding4 from '../screens/onboarding/Onboarding4';
import Onboarding5 from '../screens/onboarding/Onboarding5';
import VenuesScreen from '../screens/VenuesScreen';
import VenueDetailScreen from '../screens/VenueDetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ReservationListScreen from '../screens/ReservationListScreen';
import HelpScreen from '../screens/HelpScreen';

import { RootStackParamList } from './navigationTypes';  // <-- Tip import edildi


type Props = {
  initialRouteName: keyof RootStackParamList;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator({ initialRouteName }: Props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} />
        <Stack.Screen name="Onboarding4" component={Onboarding4} />
        <Stack.Screen name="Onboarding5" component={Onboarding5} />
        <Stack.Screen name="Homepage" component={HomeScreen} />
        <Stack.Screen name="VenuesScreen" component={VenuesScreen} />
        <Stack.Screen name="VenueDetail" component={VenueDetailScreen} options={{ title: 'Mekan Detayı' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profil' }} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} options={{ title: 'Bildirimler' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Ayarlar' }} />
        <Stack.Screen name="ReservationList" component={ReservationListScreen} options={{ title: 'Rezervasyonlarım' }} />
        <Stack.Screen name="Help" component={HelpScreen} options={{ title: 'Yardım' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
