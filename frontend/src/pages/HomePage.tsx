import LogoutButton from '../components/LogoutButton';
import React from 'react';
import { useUser } from '../hooks/useUser';

const HomePage = () => {
  const { user, loading, error } = useUser();

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;

  return (
    <div>
      <h1>Hoşgeldiniz, {user?.name}!</h1>
      <LogoutButton />
    </div>
  );
};

export default HomePage;
