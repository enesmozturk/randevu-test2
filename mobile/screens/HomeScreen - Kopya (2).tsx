// Öncelikle gerekli bağımlılıkları yükleyin:
// npm install react-native-safe-area-context react-native-vector-icons

import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
  StatusBar,
  Animated,
} from 'react-native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';



const slogans = [
  'Toplu Yaşam Alanlarında Kolay Randevu',
  'Zamanı Planla, Alanı Kullan',
  'Rezervasyon Artık Çok Kolay',
  'Kuyruk Yok, Stres Yok!',
  'Boş Alanı Yakala, Hemen Ayır',
];

function RotatingSlogan() {
  const [index, setIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      // Önce opacity 0'a düşür, sonra tekrar 1 yap ve sloganı değiştir
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();

      setIndex((prev) => (prev + 1) % slogans.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Animated.View style={[styles.sloganContainer, { opacity: fadeAnim }]}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon name="star-outline" size={20} color="#0066FF" style={{ marginRight: 8 }} />
        <Text style={styles.sloganText}>{slogans[index]}</Text>
      </View>
    </Animated.View>
  );
}

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        translucent={false}
      />

      {/* Marka logosu */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/homelogo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Hoşgeldiniz yazısı */}
      <Text style={styles.welcomeText}>Hoş geldiniz, Misafir</Text>

      {/* Slogan */}
      <RotatingSlogan />

      {/* Arama ve Filtre */}
      <View style={styles.searchSection}>
        <View style={styles.searchRow}>
          <TextInput
            style={styles.searchInput}
            placeholder="Mekan adı ara..."
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.filterButton}>
            <Icon name="options-outline" size={24} color="#0066FF" />
            <Text style={styles.filterButtonText}>Filtre</Text>
          </TouchableOpacity>
        </View>

        {/* Mekan Ara Butonu */}
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Mekan Ara</Text>
        </TouchableOpacity>
      </View>

      {/* QR Kod */}
      <View style={styles.qrContainerWrapper}>
        <TouchableOpacity style={styles.qrContainer}>
          <Icon name="qr-code-outline" size={48} color="#0066FF" />
          <Text style={styles.qrText}>QR Kod ile Mekanı Bul</Text>
        </TouchableOpacity>
      </View>

      {/* Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="home-outline" size={28} color="#0066FF" />
          <Text style={styles.tabText}>Ana Sayfa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="list-outline" size={28} color="#666" />
          <Text style={styles.tabTextInactive}>Mekan Listesi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="videocam-outline" size={28} color="#666" />
          <Text style={styles.tabTextInactive}>Tanıtım</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="star-outline" size={28} color="#666" />
          <Text style={styles.tabTextInactive}>Favori</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="person-outline" size={28} color="#666" />
          <Text style={styles.tabTextInactive}>Profil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 12,
  },
  logo: {
    width: 120,
    height: 40,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111111',
    alignSelf: 'center',
    marginBottom: 76,
  },
  sloganContainer: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginBottom: 24,
    marginHorizontal: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sloganText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#0066FF',
    textAlign: 'center',
    flexShrink: 1,
  },
  searchSection: {
    flex: 1,
    justifyContent: 'center',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    color: '#111',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#0066FF',
    backgroundColor: '#e6f0ff',
  },
  filterButtonText: {
    color: '#0066FF',
    marginLeft: 6,
    fontWeight: '600',
  },
  searchButton: {
    backgroundColor: '#0066FF',
    borderRadius: 8,
    paddingVertical: 12,
    marginBottom: 24,
  },
  searchButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
  qrContainerWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 48,
  },
  qrContainer: {
    alignItems: 'center',
  },
  qrText: {
    color: '#0066FF',
    marginTop: 8,
    fontWeight: '600',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  tabItem: {
    alignItems: 'center',
  },
  tabText: {
    color: '#0066FF',
    fontWeight: '700',
    fontSize: 12,
    marginTop: 4,
  },
  tabTextInactive: {
    color: '#666',
    fontSize: 12,
    marginTop: 4,
  },
});
