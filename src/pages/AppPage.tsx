import React from 'react';
import { Route, Redirect } from 'react-router';

import { IonSplitPane, IonPage, IonRouterOutlet } from '@ionic/react';
import { qrCode, list, map, person, images, document, apps } from 'ionicons/icons';

import Tab from '../components/Tab';
import Page from '../components/Page';
import AppMenu from '../components/AppMenu';

import Order from './Order';
import Documents from './Documents';
import Barcode from './Barcode';
import Geolocation from './Geolocation';
import Photos from './Photos';
import Profile from './Profile';


const pagesConfigData = {
    "profile": { 
        "title": 'Profile', 
        "url": '/app/profile', 
        "icon": person, 
        "Component": Profile,
    },
    "task": { 
        "title": 'Task', 
        "url": '/app/task', 
        "icon": list, 
        "Component": Tab, 
        "tabs": [ 
            { 
                "name": 'order', 
                "title": 'Order',
                "url": '/app/task/order', 
                "icon": apps, 
                "Component": Order, 
            },
            { 
                "name": 'documents', 
                "title": 'Documents', 
                "url": '/app/task/documents', 
                "icon": document, 
                "Component": Documents, 
            },
        ],
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
                <Route exact path="/app/:page">
                    <Page pagesConfigData={pagesConfigData} />
                </Route>
                <Route exact path="/app/task">
                    <Redirect to="/app/task/order" />
                </Route>
                <Route exact path="/app/:page/:tab">
                    <Page pagesConfigData={pagesConfigData} />
                </Route>
            </IonRouterOutlet>
        </IonSplitPane>
    </IonPage>
);


export default Menu;
