import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function ReservationListScreen() {
  const [reservations, setReservations] = useState([
    { id: 'r1', venueName: 'Bahçe Meydanı', date: '2025-06-15', time: '14:00', status: 'Onaylandı' },
    { id: 'r2', venueName: 'Yüzme Havuzu', date: '2025-06-17', time: '16:00', status: 'Beklemede' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rezervasyonlarım</Text>
      <FlatList
        data={reservations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.venue}>{item.venueName}</Text>
            <Text>{item.date} - {item.time}</Text>
            <Text style={{ color: item.status === 'Onaylandı' ? 'green' : 'orange' }}>{item.status}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text>Henüz rezervasyonunuz yok</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 15 },
  item: { padding: 15, borderBottomWidth: 1, borderColor: '#ccc' },
  venue: { fontWeight: '700', fontSize: 16 },
});
