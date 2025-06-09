// mobile/src/screens/VenuesScreen.tsx
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { fetchVenues } from '../services/venue';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Venue = {
  id: string;
  name: string;
  address: string;
};

type RootStackParamList = {
  Venues: undefined;
  VenueDetail: { venueId: string };
};

export default function VenuesScreen() {
  const { token } = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [venues, setVenues] = useState<Venue[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVenues = async () => {
      if (!token) return;
      try {
        const data = await fetchVenues(token);
        setVenues(data);
      } catch (err) {
        console.error('Venue fetch error', err);
      } finally {
        setLoading(false);
      }
    };
    loadVenues();
  }, [token]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#3B82F6" />
      </View>
    );
  }

  const renderItem = ({ item }: { item: Venue }) => (
    <TouchableOpacity
      style={styles.venueItem}
      activeOpacity={0.7}
      onPress={() => navigation.navigate('VenueDetail', { venueId: item.id })}
    >
      <Text style={styles.venueName}>{item.name}</Text>
      <Text style={styles.venueAddress}>{item.address}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {venues.length === 0 ? (
        <Text style={styles.emptyText}>Mekan bulunamadı.</Text>
      ) : (
        <FlatList
          data={venues}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: 10 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  venueItem: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 6,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  venueName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },
  venueAddress: {
    marginTop: 6,
    fontSize: 14,
    color: '#6B7280',
  },
  emptyText: {
    marginTop: 30,
    fontSize: 16,
    color: '#9CA3AF',
    textAlign: 'center',
  },
});
