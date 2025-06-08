// mobile/src/api/user.ts
import api from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getMe = async () => {
  const token = await AsyncStorage.getItem('access_token');
  const response = await api.get('/users/me', {

    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
