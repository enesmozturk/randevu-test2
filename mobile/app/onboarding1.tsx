import React from 'react';
import OnboardingTemplate from '../components/OnboardingTemplate';
import { useRouter } from 'expo-router';

const Onboarding1 = () => {
  const router = useRouter();

  return (
    <OnboardingTemplate
      image={require('../../assets/images/onboardin1.png')}
      title="Hoşgeldiniz!"
      description="Toplu yaşam alanınızdaki ortak alanları kolayca rezerve edin ve planlamanızı rahatça yapın."
      buttonLabel="Devam Et"
      onNext={() => router.push('/onboarding2')}
    />
  );
};

export default Onboarding1;
