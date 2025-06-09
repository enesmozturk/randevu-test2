import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingTemplate from '../components/OnboardingTemplate';
import { useRouter } from 'expo-router';

const Onboarding5 = () => {
  const router = useRouter();

  const handleFinish = async () => {
    await AsyncStorage.setItem('hasSeenOnboarding', 'true');
    router.replace('/(tabs)/home'); // Ana ekrana yönlendir
  };

  return (
    <OnboardingTemplate
      image={require('../../assets/images/onboardin5.png')}
      title="Mekanını Oluştur, Rezervasyonları Kolaylaştır"
      description="Sorumlusu olduğun mekan için rezervasyon kuralları belirle. Kullanıcılara QR kodla kolay erişim sağla. Duyurularla bilgilendir, karmaşaya son ver."
      buttonLabel="Başla"
      onNext={handleFinish}
    />
  );
};

export default Onboarding5;
