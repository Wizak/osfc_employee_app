// Import necessary dependencies and components
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { map, square, images } from 'ionicons/icons';
import Geolocation from './pages/Geolocation';
import Photos from './pages/Photos';
import Profile from './pages/Profile';
import LoginPage from './pages/Login'; // Assuming you have a LoginPage component
import { AuthProvider, useAuth } from './context/AuthContext';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

// Initialize Ionic React
setupIonicReact();

// Main App component
const App: React.FC = () => (
  <IonApp>
    <AuthProvider>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/login" component={LoginPage} />
            <PrivateRoute exact path="/tab1" component={Geolocation} />
            <PrivateRoute exact path="/tab2" component={Photos} />
            <PrivateRoute exact path="/tab3" component={Profile} />
            <PrivateRoute exact path="/" component={RedirectPage} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon aria-hidden="true" icon={map} />
              <IonLabel>Geolocation</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon icon={images} />
              <IonLabel>Photos</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon aria-hidden="true" icon={square} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </AuthProvider>
  </IonApp>
);

const RedirectPage: React.FC = () => <Redirect to="/tab1" />

const PrivateRoute: React.FC<{ path: string; component: React.ComponentType<any> }> = ({ path, component, ...props }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Route path={path} component={component} {...props} /> : <Redirect to="/login" />;
};

export default App;
