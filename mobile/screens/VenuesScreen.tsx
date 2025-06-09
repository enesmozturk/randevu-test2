import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  VenuesScreen: undefined;
  Reservations: undefined;
  VenueDetail: undefined;
};

const venuesMock = [
  { id: '1', name: 'Bahçe Meydanı', address: 'Atatürk Mah. 45' },
  { id: '2', name: 'Yüzme Havuzu', address: 'Cumhuriyet Cad. 12' },
  { id: '3', name: 'Toplantı Salonu', address: 'Park Sok. 8' },
];

export default function VenuesScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  

  const renderItem = ({ item }: { item: typeof venuesMock[0] }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('VenueDetail', { venueId: item.id })}
    >
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.address}>{item.address}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={venuesMock}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>Mekan bulunamadı.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#ddd', backgroundColor: '#fafafa' },
  title: { fontSize: 18, fontWeight: '600' },
  address: { color: '#555' },
});
