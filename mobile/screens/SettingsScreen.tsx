import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ayarlar</Text>
      <Button title="Hakkında" onPress={() => alert('Toplu Yaşam Randevu Uygulaması v1.0')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 20, textAlign: 'center' },
});
