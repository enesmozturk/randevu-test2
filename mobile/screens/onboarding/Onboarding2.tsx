import React from 'react';
import OnboardingTemplate from '../../components/OnboardingTemplate';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/navigationTypes';

type Onboarding2NavProp = NativeStackNavigationProp<RootStackParamList, 'Onboarding2'>;

const Onboarding2 = () => {
  const navigation = useNavigation<Onboarding2NavProp>();


  return (
    <OnboardingTemplate
      image={require('../../assets/images/onboarding2.jpg')}
      title="Hızlı ve Kolay Rezervasyon"
      description="Ortak alanları seçin, uygun tarih ve saat için hızlıca rezervasyon yapın."
      buttonLabel="Devam Et"
      onNext={() => navigation.navigate('Onboarding3')}
      totalSteps={5}       // Toplam onboarding sayısı
      currentStep={2}      // Bu ekran kaçıncı
    />
  );
};

export default Onboarding2;
