// src/pages/LoginPage.tsx

import React, { useState, useEffect } from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonLabel, IonGrid, IonRow, IonCol, useIonToast } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [present] = useIonToast();

  const handleLogin = React.useCallback(async () => {
    if (email.trim() === '' || password.trim() === '') {
      present({
        message: "Password or email is Empty",
        duration: 500,
        position: 'middle',
      });
      return;
    }

    login(email, password).then(res => {
      if (res.success) {
        history.push('/');
      } else {
        present({
          message: res.message,
          duration: 500,
          position: 'middle',
        });
      };
    });
  }, [ email, password, present, history ]);

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow className="ion-justify-content-center ion-align-items-center" style={{ height: '100%' }}>
            <IonCol size="12" sizeMd="6" className="ion-text-center">
              <h1>Login</h1>
              <IonLabel position="stacked">Username</IonLabel>
              <IonInput autocomplete="off" type="text" value={email} onIonChange={(e) => setEmail(e.detail.value!)} />
              <IonLabel position="stacked">Password</IonLabel>
              <IonInput autocomplete="off" type="password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} />
              <IonButton expand="full" onClick={handleLogin}>
                Log In
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
