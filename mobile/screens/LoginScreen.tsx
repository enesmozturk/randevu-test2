// mobile/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

export default function LoginScreen() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const { setToken } = useAuth();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://192.168.1.7:3000/auth/login', {
        phone,
        password,
      });

      setToken(res.data.accessToken);
    } catch (err) {
      console.error(err);
      Alert.alert('Giriş Başarısız', 'Telefon numarası ya da şifre hatalı olabilir.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Telefon ve Şifre ile Giriş</Text>
      <TextInput
        placeholder="Telefon Numarası"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        style={styles.input}
      />
      <TextInput
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
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
