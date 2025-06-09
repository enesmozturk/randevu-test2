import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  ReservationForm: undefined;
  venueId: undefined;
};

export default function VenueDetailScreen() {
  const route = useRoute();
  const { venueId } = route.params as { venueId: string };
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Mock data, gerçek projede API ile alınacak
  const venue = {
    id: venueId,
    name: venueId === '1' ? 'Bahçe Meydanı' : venueId === '2' ? 'Yüzme Havuzu' : 'Toplantı Salonu',
    address:
      venueId === '1' ? 'Atatürk Mah. 45' :
      venueId === '2' ? 'Cumhuriyet Cad. 12' :
      'Park Sok. 8',
    description: 'Bu mekan toplu yaşam alanlarının en güzel yerlerinden biridir. Rezervasyon yapabilirsiniz.',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{venue.name}</Text>
      <Text style={styles.address}>{venue.address}</Text>
      <Text style={styles.description}>{venue.description}</Text>

      <Button title="Rezervasyon Yap" onPress={() => navigation.navigate('ReservationForm', { venueId })} />
      <View style={{ height: 10 }} />
      <Button title="Geri" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 26, fontWeight: '700', marginBottom: 10 },
  address: { fontSize: 16, color: '#666', marginBottom: 15 },
  description: { fontSize: 16, marginBottom: 30 },
});
