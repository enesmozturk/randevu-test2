import { useState, useEffect } from 'react';
import apiClient from '../api/apiClient';

interface Venue {
  id: string;
  name: string;
  type: string;
  address?: string;
  // diğer alanlar varsa ekleyebilirsin
}

export function useVenues() {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchVenues() {
      try {
        const response = await apiClient.get<Venue[]>('/venues');
        setVenues(response.data);
      } catch (err: any) {
        setError(err.message || 'Mekanlar alınamadı');
      } finally {
        setLoading(false);
      }
    }
    fetchVenues();
  }, []);

  return { venues, loading, error };
}
