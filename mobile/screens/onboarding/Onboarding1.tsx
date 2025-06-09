import React from 'react';
import OnboardingTemplate from '../../components/OnboardingTemplate';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/navigationTypes';

type Onboarding1NavProp = NativeStackNavigationProp<RootStackParamList, 'Onboarding1'>;

const Onboarding1 = () => {
  const navigation = useNavigation<Onboarding1NavProp>();

  return (
    <OnboardingTemplate
      image={require('../../assets/images/onboarding1.jpg')}
      title="Hoşgeldiniz!"
      description="Toplu yaşam alanınızdaki ortak alanları kolayca rezerve edin ve planlamanızı rahatça yapın."
      buttonLabel="Devam Et"
      onNext={() => navigation.navigate('Onboarding2')}
      totalSteps={5}       // Toplam onboarding sayısı
      currentStep={1}      // Bu ekran kaçıncı
    />
  );
};

export default Onboarding1;
