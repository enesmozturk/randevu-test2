import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.7:3000', // kendi IP adresinle değiştir
});

export default api;