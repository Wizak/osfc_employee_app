import React from 'react';
import { useIonRouter, useIonLoading, IonIcon, IonCard, IonCardContent, IonContent, IonPage, IonInput, IonButton, IonLabel, IonGrid, IonRow, IonCol, useIonToast, IonItem } from '@ionic/react';
import { useAuth } from '../context/AuthContext';
import { logInOutline } from 'ionicons/icons';
import OSFCLOGO from '../assets/osfc-logo.jpg';
import { useForm } from "react-hook-form";

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const router = useIonRouter();
  const [present, dismiss] = useIonLoading();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const registerOptions = {
    email: { 
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "invalid email address"
      }
    },
    password: { required: "Password is required" },
  };

  const onSubmit = (data) => {
    login(data.email, data.password).then(res => {
      if (res.success) {
        present('Logging in...');
        setTimeout(async () => {
          dismiss();
          router.push('/app', 'root');
        }, 2000);
      } else {
        present(res.message);
        setTimeout(async () => {
          dismiss();
        }, 750);
      };
    });
  };

  return (
    <IonPage>
      <IonContent scrollY={false} className="ion-padding">
        <IonGrid fixed>
          <IonRow class="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
              <div className="ion-text-center ion-padding">
                <img src={OSFCLOGO} alt="FCC Logo" width={'50%'} />
              </div>
            </IonCol>
          </IonRow>

          <IonRow class="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
              <IonCard>
                <IonCardContent>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <IonInput {...register('email', registerOptions.email)} autocomplete='off' name="email" mode="md" fill="outline" labelPlacement="floating" label="Email" type="email" />
                    <small className="text-danger">
                      {errors?.email && errors.email.message}
                    </small>
                    <IonInput {...register('password', registerOptions.password)} autocomplete='off' name="password" mode="md" className="ion-margin-top" fill="outline" labelPlacement="floating" label="Password" type="password" />
                    <small className="text-danger">
                      {errors?.password && errors.password.message}
                    </small>
                    <IonButton expand="block" className="ion-margin-top" type="submit">
                      Login
                      <IonIcon icon={logInOutline} slot="end" />
                    </IonButton>
                  </form>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
