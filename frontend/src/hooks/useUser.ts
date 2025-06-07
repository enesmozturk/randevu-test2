import { useState, useEffect } from 'react';
import apiClient from '../api/apiClient';

interface User {
  id: string;
  name: string;
  surname: string;
  phone: string;
  email?: string;
}

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await apiClient.get<User>('/users/me');
        setUser(response.data);
      } catch (err: any) {
        setError(err.message || 'Kullanıcı bilgisi alınamadı');
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  return { user, loading, error };
}
