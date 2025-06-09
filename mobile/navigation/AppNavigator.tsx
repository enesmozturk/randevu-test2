// src/navigation/AppNavigator.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import VenuesScreen from '../screens/VenuesScreen';
import VenueDetailScreen from '../screens/VenueDetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ReservationListScreen from '../screens/ReservationListScreen';
import HelpScreen from '../screens/HelpScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="VenuesScreen" component={VenuesScreen} />
      <Stack.Screen name="VenueDetail" component={VenueDetailScreen} options={{ title: 'Mekan Detayı' }} />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profil' }} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} options={{ title: 'Bildirimler' }} />
          <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Ayarlar' }} />
          <Stack.Screen name="ReservationList" component={ReservationListScreen} options={{ title: 'Rezervasyonlarım' }} />
          <Stack.Screen name="Help" component={HelpScreen} options={{ title: 'Yardım' }} />
    </Stack.Navigator>
  );
}
