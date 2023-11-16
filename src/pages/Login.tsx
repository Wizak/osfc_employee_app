// src/pages/LoginPage.tsx

import React, { useState, useEffect } from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonLabel, IonGrid, IonRow, IonCol } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage: React.FC = () => {
  const { login, isAuthenticated } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Please enter both username and password');
      return;
    }

    login(username, password);
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated, history]);

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow className="ion-justify-content-center ion-align-items-center" style={{ height: '100%' }}>
            <IonCol size="12" sizeMd="6" className="ion-text-center">
              <h1>Login</h1>
              <IonLabel position="stacked">Username</IonLabel>
              <IonInput type="text" value={username} onIonChange={(e) => setUsername(e.detail.value!)} />
              <IonLabel position="stacked">Password</IonLabel>
              <IonInput type="password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} />
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
