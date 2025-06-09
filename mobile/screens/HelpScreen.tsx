import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function HelpScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Yardım</Text>
      <Text style={styles.text}>
        Bu uygulama ile toplu yaşam alanlarınızın ortak mekanları için randevu alabilirsiniz. 
        Ana sayfadan mekanları görüntüleyip, detaylarına bakabilir ve rezervasyon yapabilirsiniz.
      </Text>
      <Text style={styles.text}>
        Rezervasyonlarınızı "Rezervasyonlarım" sayfasından takip edebilirsiniz.
      </Text>
      <Text style={styles.text}>
        Profil bilgilerinizi "Profil" sayfasından düzenleyebilir, çıkış yapabilirsiniz.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 15, lineHeight: 22 },
});
