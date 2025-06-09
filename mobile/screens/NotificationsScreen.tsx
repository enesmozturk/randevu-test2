import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState([
    { id: '1', message: 'Yeni rezervasyon yapıldı.' },
    { id: '2', message: 'Mekan adresi güncellendi.' },
    { id: '3', message: 'Rezervasyonunuz onaylandı.' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bildirimler</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <Text>{item.message}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>Bildirim yok</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 15 },
  notificationItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});
