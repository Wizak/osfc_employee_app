import React from 'react';
import { Route, Redirect } from 'react-router';

import { IonSplitPane, IonPage, IonRouterOutlet } from '@ionic/react';
import { qrCode, list, map, person, images} from 'ionicons/icons';

import AppMenu from '../components/AppMenu';

import Task from './Task';
import Barcode from './Barcode';
import Geolocation from './Geolocation';
import Photos from './Photos';
import Profile from './Profile';


export const appMenuConfig = {
    "profile": { 
        "title": 'Profile', 
        "url": '/app/profile', 
        "icon": person, 
    },
    "task": { 
        "title": 'Task', 
        "url": '/app/task', 
        "icon": list, 
    },
    "photos": { 
        "title": 'Photos', 
        "url": '/app/photos', 
        "icon": images, 
    },
    "geolocation": { 
        "title": 'Geolocation', 
        "url": '/app/geolocation', 
        "icon": map, 
    },
    "barcode": { 
        "title": 'Barcode', 
        "url": '/app/barcode', 
        "icon": qrCode, 
    },
};


const Menu: React.FC = () => (
    <IonPage>
        <IonSplitPane contentId="main">
            <AppMenu appMenuConfig={appMenuConfig} />
            <IonRouterOutlet id="main">
                <Route exact path="/app">
                    <Redirect to="/app/profile" />
                </Route>
                <Route exact path="/app/profile" component={Profile}/>
                <Route exact path="/app/photos" component={Photos} />
                <Route exact path="/app/geolocation" component={Geolocation} />
                <Route exact path="/app/barcode" component={Barcode} />
                <Route path="/app/task" component={Task} />
            </IonRouterOutlet>
        </IonSplitPane>
    </IonPage>
);


export default Menu;
