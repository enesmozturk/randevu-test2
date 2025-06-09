import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function ReservationFormScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { venueId } = route.params as { venueId: string };

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = () => {
    if (!date || !time) {
      Alert.alert('Hata', 'Lütfen tarih ve saat girin.');
      return;
    }

    // Mock rezervasyon kaydı
    Alert.alert('Başarılı', `Rezervasyon yapıldı: ${date} - ${time}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rezervasyon Yap</Text>
      <Text style={styles.subtitle}>Mekan ID: {venueId}</Text>

      <TextInput
        placeholder="Tarih (örn. 2025-06-15)"
        style={styles.input}
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        placeholder="Saat (örn. 14:00)"
        style={styles.input}
        value={time}
        onChangeText={setTime}
      />

      <Button title="Rezervasyon Onayla" onPress={handleSubmit} />
      <View style={{ height: 10 }} />
      <Button title="İptal" color="gray" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 15, textAlign: 'center' },
  subtitle: { fontSize: 16, marginBottom: 20, textAlign: 'center' },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
});
