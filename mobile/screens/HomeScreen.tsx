// mobile/src/screens/HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getMe } from '../services/user';
import { logout } from '../services/logout';
import { useAuth } from '../contexts/AuthContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  VenuesScreen: undefined;
};

export default function HomeScreen() {
  const [userName, setUserName] = useState<string | null>(null);
  const { setToken } = useAuth(); // ✅ önemli
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const me = await getMe();
        setUserName(me.fullName || me.name || me.email); // Kullanıcı modeline göre
      } catch (error) {
        console.error('Kullanıcı bilgisi alınamadı', error);
      }
    };

    fetchUser();
  }, []);


const handleLogout = async () => {
  await setToken(null); // token sil
  // AuthContext güncellendiği için otomatik Login ekranına geçecek
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hoşgeldiniz, {userName ?? '...'}</Text>

      <Button title="Mekanlar" onPress={() => navigation.navigate('VenuesScreen')} />
      <View style={{ height: 10 }} />
      <Button title="Çıkış Yap" color="red" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
});
