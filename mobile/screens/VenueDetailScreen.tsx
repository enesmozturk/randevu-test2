// mobile/screens/VenueDetailScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';

export default function VenueDetailScreen() {
  const route = useRoute();
  const { token } = useAuth();
  const [venue, setVenue] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const { venueId } = route.params as { venueId: string };

  useEffect(() => {
    const fetchVenue = async () => {
      try {
        const res = await api.get(`/venues/${venueId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setVenue(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchVenue();
  }, []);

  if (loading) return <ActivityIndicator />;

  if (!venue) return <Text>Venue not found</Text>;

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{venue.name}</Text>
      <Text>{venue.type}</Text>
      <Text>{venue.address}</Text>
    </View>
  );
}
