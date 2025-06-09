import React from 'react';
import OnboardingTemplate from '../components/OnboardingTemplate';
import { useRouter } from 'expo-router';

const Onboarding2 = () => {
  const router = useRouter();

  return (
    <OnboardingTemplate
      image={require('../../assets/images/onboardin2.png')}
      title="Hızlı ve Kolay Rezervasyon"
      description="Ortak alanları seçin, uygun tarih ve saat için hızlıca rezervasyon yapın."
      buttonLabel="Devam Et"
      onNext={() => router.push('/onboarding3')}
    />
  );
};

export default Onboarding2;
