import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { login } from '../services/auth';

export default function LoginScreen({ navigation }: any) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const data = await login(phone, password);
      navigation.navigate('Home', { token: data.accessToken });
    } catch (error) {
      Alert.alert('Login failed', 'Invalid phone or password');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Phone</Text>
      <TextInput value={phone} onChangeText={setPhone} keyboardType="phone-pad" style={{ borderBottomWidth: 1, marginBottom: 10 }} />
      <Text>Password</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry style={{ borderBottomWidth: 1, marginBottom: 20 }} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}