// services/venue.ts
import api from './api';

export async function fetchVenues(token: string) {
  const res = await api.get('/venues', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}
