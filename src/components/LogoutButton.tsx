import { IonIcon, IonButton, useIonLoading, useIonRouter } from '@ionic/react';
import { logOut } from 'ionicons/icons';

import { useAuth } from '../context/AuthContext';


const LogoutButton: React.FC = () => {
	const { logout } = useAuth();
	const router = useIonRouter();
	const [present, dismiss] = useIonLoading();

	const handleLogOut = () => {
		present('Logout...');
		setTimeout(async () => {
			dismiss();
			logout();
			window.location.reload();
			router.push('/', 'root');
		}, 1500);
	};

    return (
        <IonButton expand="full" onClick={handleLogOut}>
            Logout 
            <IonIcon slot="start" icon={logOut} />
        </IonButton>
    );
};


export default LogoutButton;