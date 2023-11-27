import { useLocation } from 'react-router-dom';

import { 
    IonContent, IonIcon, IonItem, IonLabel, 
    IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote,
} from '@ionic/react';

import { useAuth } from '../context/AuthContext';

import LogoutButton from './LogoutButton';
import './AppMenu.css';


const Menu: React.FC = ({ appMenuConfig }) => {
    const location = useLocation();
    const { getPermissions } = useAuth();
    const permissions = getPermissions();
    const pagesList = Object.values(appMenuConfig);

    return (
        <IonMenu contentId="main" type="overlay">
            <IonContent>
                <IonList id="inbox-list">
                    <IonListHeader>{permissions.fullName}</IonListHeader>
                    <IonNote>{permissions.email}</IonNote>
                    {pagesList.map((appPage, index) => (
                        <IonMenuToggle key={index} autoHide={false}>
                            <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} 
                                        routerDirection="none" lines="none" detail={false}>
                            <IonIcon aria-hidden="true" slot="start" icon={appPage.icon} />
                                <IonLabel>{appPage.title}</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                    ))}
                </IonList>
                <IonList id="labels-list">
                    <IonMenuToggle autoHide={false}>
                        <LogoutButton />
                    </IonMenuToggle>
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
