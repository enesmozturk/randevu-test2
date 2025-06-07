import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.7>:3000', // local yerine IP kullan, örn: 192.168.1.25
});

export default api;
