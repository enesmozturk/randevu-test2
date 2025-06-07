import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',  // Backend adresinize göre değiştirin
});

// AccessToken'ı localStorage'dan veya uygun yerden alıp header ekle
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
