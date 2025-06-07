import api from './axios';
import { clearTokens } from '../auth/TokenStorage';

export const logout = async (refreshToken: string) => {
  try {
    await api.post('/auth/logout', { refreshToken });
    clearTokens();
    window.location.href = '/login';
  } catch (error) {
    console.error('Logout failed', error);
    // Hata durumunda da tokenları temizleyip login sayfasına yönlendirebiliriz
    clearTokens();
    window.location.href = '/login';
  }
};
