// screens/VenuesScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { fetchVenues } from '../services/venue';
import { useAuth } from '../contexts/AuthContext';

export default function VenuesScreen() {
  const { token } = useAuth();
  const [venues, setVenues] = useState<any[]>([]);

  useEffect(() => {
    if (token) {
      fetchVenues(token)
        .then(setVenues)
        .catch((err) => console.error('Venue fetch error:', err));
    }
  }, [token]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mekanlar</Text>
      <FlatList
        data={venues}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.type}</Text>
            <Text style={styles.address}>{item.address}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  card: {
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
  name: { fontSize: 16, fontWeight: '600' },
  address: { fontSize: 12, color: '#555' },
});
