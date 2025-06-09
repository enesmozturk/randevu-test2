import React from 'react';
import OnboardingTemplate from '../../components/OnboardingTemplate';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/navigationTypes';

type Onboarding3NavProp = NativeStackNavigationProp<RootStackParamList, 'Onboarding3'>;

const Onboarding3 = () => {
  const navigation = useNavigation<Onboarding3NavProp>();


  return (
    <OnboardingTemplate
      image={require('../../assets/images/onboarding3.jpg')}
      title="Üyelik gerekmeden rezervasyon yapabilirsiniz!"
      description="Bazı mekanlarda rezervasyon yapmak için üye olmanız gerekmez. Ancak bu, mekan yöneticisinin ayarlarına bağlıdır."
      buttonLabel="Devam Et"
      onNext={() => navigation.navigate('Onboarding4')}
      totalSteps={5}       // Toplam onboarding sayısı
      currentStep={3}      // Bu ekran kaçıncı
    />
  );
};

export default Onboarding3;
