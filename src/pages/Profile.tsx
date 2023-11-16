import React from 'react';

import { IonRow, IonGrid, IonLabel, IonFab, IonFabButton, IonIcon, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { logOut } from 'ionicons/icons';

import { useAuth } from '../context/AuthContext';

import './Profile.css';

const Profile: React.FC = () => {
  const { logout, getPermissions } = useAuth();
  const permissions = getPermissions();

  const handleLogOut = () => {
    logout();
    window.location.reload();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{permissions.fullName}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonGrid>
          <IonRow>
              <IonLabel>Email: {permissions.email}</IonLabel>
          </IonRow>
          <IonRow>
            <IonLabel>Role: {permissions.role}</IonLabel>
          </IonRow>
          <IonRow>
            <IonLabel>Locale: {permissions.locale}</IonLabel>
          </IonRow>
        </IonGrid>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
					<IonFabButton onClick={handleLogOut}>
						<IonIcon icon={logOut}></IonIcon>
					</IonFabButton>
				</IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
