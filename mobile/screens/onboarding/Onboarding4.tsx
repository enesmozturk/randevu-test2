import React from 'react';
import OnboardingTemplate from '../../components/OnboardingTemplate';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/navigationTypes';

type Onboarding4NavProp = NativeStackNavigationProp<RootStackParamList, 'Onboarding4'>;

const Onboarding4 = () => {
  const navigation = useNavigation<Onboarding4NavProp>();

  return (
    <OnboardingTemplate
      image={require('../../assets/images/onboarding4.jpg')}
      title="Gizliliğinize Saygı Duyuyoruz"
      description="Telefon numaranız sadece doğrulama için kullanılır, uygulama içinde asla paylaşılmaz. Dilerseniz takma ad ile kendinizi ifade edebilirsiniz."
      buttonLabel="Devam Et"
      onNext={() => navigation.navigate('Onboarding5')}
      totalSteps={5}       // Toplam onboarding sayısı
      currentStep={4}      // Bu ekran kaçıncı
    />
  );
};

export default Onboarding4;
