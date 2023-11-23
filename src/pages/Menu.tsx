import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonPage, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import { Route, Redirect } from 'react-router';

import { map, person, images } from 'ionicons/icons';
import Geolocation from './Geolocation';
import Photos from './Photos';
import Profile from './Profile';


const Menu: React.FC = () => {
  return (
    <IonReactRouter>
        <IonTabs>
            <IonRouterOutlet id="main">
                <Route path="/app/location" component={Geolocation} />
                <Route path="/app/gallery" component={Photos} />
                <Route path="/app/profile" component={Profile} />
                <Route exact path="/app">
                    <Redirect to="/app/profile" />
                </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="location" href="/app/location">
                <IonIcon icon={map} />
                <IonLabel>Geolocation</IonLabel>
                </IonTabButton>
                <IonTabButton tab="gallery" href="/app/gallery">
                <IonIcon icon={images} />
                <IonLabel>Photos</IonLabel> 
                </IonTabButton>
                <IonTabButton tab="profile" href="/app/profile">
                <IonIcon icon={person} />
                <IonLabel>Profile</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    </IonReactRouter>
  );
};

export default Menu;
