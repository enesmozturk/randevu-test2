import React from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios'; // axios instance
import { getRefreshToken, clearTokens } from '../auth/TokenStorage';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const refreshToken = getRefreshToken();
    try {
      if (refreshToken) {
        await api.post('/auth/logout', { refreshToken });
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      clearTokens(); // tokenları temizle
      navigate('/login'); // login sayfasına yönlendir
    }
  };

  return (
    <button onClick={handleLogout} className="btn-logout">
      Çıkış Yap
    </button>
  );
};

export default LogoutButton;
