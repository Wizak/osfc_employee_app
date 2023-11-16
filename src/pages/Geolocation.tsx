import React, { useEffect, useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonFabButton,
  IonFab
} from '@ionic/react';
import { Geolocation, GeolocationPosition } from '@capacitor/geolocation';
import { format } from 'date-fns';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { locate } from 'ionicons/icons';

import './Geolocation.css';


const GeolocationTracking: React.FC = () => {
	const [location, setLocation] = useState<GeolocationPosition | null>(null);
  const [address, setAddress] = useState<string>('');

	useEffect(() => {
		const watchId = Geolocation.watchPosition(
			{ enableHighAccuracy: true, maximumAge: 30000, timeout: 27000 },
			(position) => {
				setLocation(position);
        getAddressFromCoordinates(position.coords.latitude, position.coords.longitude);
			}
		);

		// Clean up the watchPosition when the component is unmounted
		return () => {
			Geolocation.clearWatch({ id: watchId });
		};
	}, []);

  const getAddressFromCoordinates = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}`
      );

      if (response.ok) {
        const data = await response.json();
        setAddress(data.results[0].formatted_address);
      } else {
        console.error('Error getting address:', response.statusText);
      }
    } catch (error) {
      console.error('Error getting address:', error);
    }
  };

  const loadLocation = async () => {
    try {
      const currentPosition = await Geolocation.getCurrentPosition();
      setLocation(currentPosition);
      getAddressFromCoordinates(currentPosition.coords.latitude, currentPosition.coords.longitude);
    } catch (error) {
      console.error('Error getting geolocation:', error);
    }
  };

  useEffect(() => {
    loadLocation();
  }, []); 

	return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Geolocation Tracking</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ion-text-center">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonLabel>Latitude: </IonLabel>
              <IonLabel>{location?.coords.latitude || 'Not available'}</IonLabel>
            </IonCol>
            <IonCol>
              <IonLabel>Longitude: </IonLabel>
              <IonLabel>{location?.coords.longitude || 'Not available'}</IonLabel>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonLabel>Time: </IonLabel>
              <IonLabel>{location ? format(new Date(location.timestamp), 'yyyy-MM-dd HH:mm:ss') : 'Not available'}</IonLabel>
            </IonCol>
            <IonCol>
              <IonLabel>Time Zone: </IonLabel>
              <IonLabel>{Intl.DateTimeFormat().resolvedOptions().timeZone}</IonLabel>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonLabel>Address:</IonLabel>
              <IonLabel>{address || 'Not available'}</IonLabel>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
        {/* Google Maps */}
        {location && (
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={{ height: '300px', width: '100%', margin: '20px auto' }}
              center={{ lat: location.coords.latitude, lng: location.coords.longitude }}
              zoom={15}
            >
              <Marker position={{ lat: location.coords.latitude, lng: location.coords.longitude }} />
            </GoogleMap>
          </LoadScript>
        )}
        </IonGrid>

				<IonFab vertical="bottom" horizontal="center" slot="fixed">
					<IonFabButton onClick={loadLocation}>
            <IonIcon icon={locate} />
					</IonFabButton>
				</IonFab>
      </IonContent>
    </IonPage>
	);
};


export default GeolocationTracking;
