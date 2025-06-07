import React from 'react';
import { useVenues } from '../hooks/useVenues';

const VenuesPage = () => {
  const { venues, loading, error } = useVenues();

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;

  return (
    <div>
      <h2>Mekan Listesi</h2>
      <ul>
        {venues.map(venue => (
          <li key={venue.id}>
            <strong>{venue.name}</strong><br />
            <small>{venue.type}</small><br />
            <small>{venue.address}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VenuesPage;
