import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingTemplate from '../../components/OnboardingTemplate';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/navigationTypes';

type Onboarding5NavProp = NativeStackNavigationProp<RootStackParamList, 'Onboarding5'>;

const Onboarding5 = () => {
  const navigation = useNavigation<Onboarding5NavProp>();

  const handleFinish = async () => {
    await AsyncStorage.setItem('hasSeenOnboarding', 'true');
    navigation.navigate('Homepage'); // Ana ekrana yönlendir
  };

  return (
    <OnboardingTemplate
      image={require('../../assets/images/onboarding5.jpg')}
      title="Mekanını Oluştur, Rezervasyonları Kolaylaştır"
      description="Sorumlusu olduğun mekan için rezervasyon kuralları belirle. Kullanıcılara QR kodla kolay erişim sağla. Duyurularla bilgilendir, karmaşaya son ver."
      buttonLabel="Başla"
      onNext={handleFinish}
      totalSteps={5}       // Toplam onboarding sayısı
      currentStep={5}      // Bu ekran kaçıncı
    />
  );
};

export default Onboarding5;
