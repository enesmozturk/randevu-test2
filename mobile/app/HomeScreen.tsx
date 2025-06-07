import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getMe } from '../services/auth';

export default function HomeScreen({ route }: any) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getMe(route.params.token);
      setUser(data);
    };
    fetchUser();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text>Welcome, {user?.phone}</Text>
    </View>
  );
}