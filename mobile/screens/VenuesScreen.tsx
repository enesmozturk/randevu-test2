import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { fetchVenues } from '../services/venue';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Venues: undefined;
  VenueDetail: { venueId: string };
};

export default function VenuesScreen() {
  const { token } = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [venues, setVenues] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVenues = async () => {
      if (!token) return;                // ← burası eklendi
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
    return <ActivityIndicator size="large" style={{ marginTop: 20 }} />;
  }

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={{
        padding: 16,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#f9f9f9',
      }}
      onPress={() => navigation.navigate('VenueDetail', { venueId: item.id })}
    >
      <Text style={{ fontSize: 18, fontWeight: '600' }}>{item.name}</Text>
      <Text style={{ color: '#666' }}>{item.address}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      {venues.length === 0 ? (
        <Text style={{ textAlign: 'center', marginTop: 20 }}>Mekan bulunamadı.</Text>
      ) : (
        <FlatList
          data={venues}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}
