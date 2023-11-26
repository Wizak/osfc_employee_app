import React from 'react';
import { Route, Redirect } from 'react-router';

import { IonSplitPane, IonPage, IonRouterOutlet } from '@ionic/react';
import { qrCode, list, map, person, images, apps, document } from 'ionicons/icons';

// import Tab from '../components/Tab';
import Page from '../components/Page';
import AppMenu from '../components/AppMenu';

import Barcode from './Barcode';
import Geolocation from './Geolocation';
import Photos from './Photos';
import Profile from './Profile';
import Order, { OrderComponent } from './Order';
// import Documents from './Documents';


export const pagesConfigData = {
    "profile": { 
        "title": 'Profile', 
        "url": '/app/profile', 
        "icon": person, 
        "Component": Profile,
    },
    "order": { 
        "title": 'Task', 
        "url": '/app/order', 
        "icon": list, 
        "Component": OrderComponent, 
        // "tabs": [ 
        //     { 
        //         "name": 'order', 
        //         "title": 'Order',
        //         "url": '/app/order', 
        //         "icon": apps, 
        //         "Component": Order,
        //     },
        //     { 
        //         "name": 'documents', 
        //         "title": 'Documents', 
        //         "url": '/app/documents', 
        //         "icon": document, 
        //         "Component": Documents,
        //     },
        // ],
    },
    "photos": { 
        "title": 'Photos', 
        "url": '/app/photos', 
        "icon": images, 
        "Component": Photos,
    },
    "geolocation": { 
        "title": 'Geolocation', 
        "url": '/app/geolocation', 
        "icon": map, 
        "Component": Geolocation,
    },
    "barcode": { 
        "title": 'Barcode', 
        "url": '/app/barcode', 
        "icon": qrCode, 
        "Component": Barcode,
    },
};


const Menu: React.FC = () => (
    <IonPage>
        <IonSplitPane contentId="main">
            <AppMenu pagesConfigData={pagesConfigData} />
            <IonRouterOutlet id="main">
                <Route exact path="/app">
                    <Redirect to="/app/profile" />
                </Route>
                <Route path="/app/:page">
                    <Page pagesConfigData={pagesConfigData} />
                </Route>
            </IonRouterOutlet>
        </IonSplitPane>
    </IonPage>
);


export default Menu;
