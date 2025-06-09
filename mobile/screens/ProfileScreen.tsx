import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getMe } from '../services/user';
import { useAuth } from '../contexts/AuthContext';

export default function ProfileScreen() {
  const [user, setUser] = useState<any>(null);
  const { setToken } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const me = await getMe();
        setUser(me);
      } catch (error) {
        console.error('Kullanıcı bilgisi alınamadı', error);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await setToken(null);
  };

  if (!user) return <Text>Yükleniyor...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil Bilgileri</Text>
      <Text>Ad Soyad: {user.fullName || user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Telefon: {user.phone || '-'}</Text>

      <View style={{ marginTop: 20 }}>
        <Button title="Çıkış Yap" color="red" onPress={handleLogout} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 15 },
});
