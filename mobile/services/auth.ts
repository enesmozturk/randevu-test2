import api from './api';

export const login = async (phone: string, password: string) => {
  const response = await api.post('/auth/login', { phone, password });
  return response.data;
};

export const getMe = async (token: string) => {
  const response = await api.get('/users/me', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
