import React from 'react';
import OnboardingTemplate from '../components/OnboardingTemplate';
import { useRouter } from 'expo-router';

const Onboarding3 = () => {
  const router = useRouter();

  return (
    <OnboardingTemplate
      image={require('../../assets/images/onboardin3.png')}
      title="Üyelik gerekmeden rezervasyon yapabilirsiniz!"
      description="Bazı mekanlarda rezervasyon yapmak için üye olmanız gerekmez. Ancak bu, mekan yöneticisinin ayarlarına bağlıdır."
      buttonLabel="Devam Et"
      onNext={() => router.push('/onboarding4')}
    />
  );
};

export default Onboarding3;
