import { createContext, useState, useEffect } from 'react';

export const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [location, setLocation] = useState(null);
  const [deliveryAvailable, setDeliveryAvailable] = useState(false);
  const [deliveryTime, setDeliveryTime] = useState('30-40 mins');

  useEffect(() => {
    // Mock geolocation for demo
    setTimeout(() => {
      setLocation({
        lat: 28.6139,
        lng: 77.2090,
        address: "Connaught Place, New Delhi"
      });
      setDeliveryAvailable(true);
    }, 1000);
  }, []);

  return (
    <LocationContext.Provider value={{ 
      location, 
      setLocation,
      deliveryAvailable,
      deliveryTime
    }}>
      {children}
    </LocationContext.Provider>
  );
}