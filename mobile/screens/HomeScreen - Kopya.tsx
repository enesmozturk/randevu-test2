// mobile/src/screens/HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getMe } from '../services/user';
import { useAuth } from '../contexts/AuthContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  VenuesScreen: undefined;
  Reservations: undefined;
  Profile: undefined;
};

export default function HomeScreen() {
  const [userName, setUserName] = useState<string | null>(null);
  const { setToken } = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const me = await getMe();
        setUserName(me.fullName || me.name || me.email);
      } catch (error) {
        console.error('Kullanıcı bilgisi alınamadı', error);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await setToken(null);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />
      <Text style={styles.greeting}>Hoşgeldiniz,</Text>
      <Text style={styles.userName}>{userName ?? '...'}</Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('VenuesScreen')}
      >
        <Text style={styles.buttonText}>Mekanlar</Text>
      </TouchableOpacity>

      <Button title="Rezervasyonlar" onPress={() => navigation.navigate('Reservations')} />
      <View style={{ height: 10 }} />
      <Button title="Profil" onPress={() => navigation.navigate('Profile')} />
      <View style={{ height: 20 }} />

      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        activeOpacity={0.7}
        onPress={handleLogout}
      >
        <Text style={[styles.buttonText, styles.logoutButtonText]}>Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 20,
    color: '#2563EB',
    fontWeight: '500',
  },
  userName: {
    fontSize: 32,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#3B82F6',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 12,
    marginVertical: 10,
    width: '70%',
    alignItems: 'center',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: '#EF4444',
    shadowColor: '#B91C1C',
  },
  logoutButtonText: {
    fontWeight: '700',
  },
});
