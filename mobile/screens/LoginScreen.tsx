// mobile/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

export default function LoginScreen() {
  const [phone, setPhone] = useState('');
  const { setToken } = useAuth();

  const handleLogin = async () => {
    try {
      // 1. doğrulama kodu gönder
      await axios.post('http://localhost:3000/auth/request-code', { phone });

      // (demo amaçlı) doğrudan 0000 koduyla giriş yapalım
      const res = await axios.post('http://localhost:3000/auth/verify-code', {
        phone,
        code: '0000', // backend test ortamında bu kodla çalışıyor
      });

      setToken(res.data.accessToken);
    } catch (err) {
      console.error(err);
      Alert.alert('Giriş Başarısız', 'Telefon numarası ya da kod hatalı olabilir.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Telefon ile Giriş</Text>
      <TextInput
        placeholder="Telefon Numarası"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        style={styles.input}
      />
      <Button title="Giriş Yap" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, padding: 10, marginBottom: 20, borderRadius: 8 },
});
