import React from 'react';
import OnboardingTemplate from '../components/OnboardingTemplate';
import { useRouter } from 'expo-router';

const Onboarding4 = () => {
  const router = useRouter();

  return (
    <OnboardingTemplate
      image={require('../../assets/images/onboardin4.png')}
      title="Gizliliğinize Saygı Duyuyoruz"
      description="Telefon numaranız sadece doğrulama için kullanılır, uygulama içinde asla paylaşılmaz. Dilerseniz takma ad ile kendinizi ifade edebilirsiniz."
      buttonLabel="Devam Et"
      onNext={() => router.push('/onboarding5')}
    />
  );
};

export default Onboarding4;
