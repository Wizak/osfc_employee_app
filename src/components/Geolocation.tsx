import { useEffect } from 'react';
import { Geolocation } from '@capacitor/geolocation';

const GeolocationExample: React.FC = () => {
  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        // Do something with the coordinates, like updating the UI or sending to a server.
      },
      (error) => {
        console.error('Error getting geolocation:', error);
      },
      { enableHighAccuracy: true, maximumAge: 30000, timeout: 27000 }
    );

    // Clean up the watchPosition when the component is unmounted
    return () => {
      Geolocation.clearWatch({ id: watchId });
    };
  }, []);

  return (
    <div>
      {/* Your component content goes here */}
    </div>
  );
};

export default GeolocationExample;
