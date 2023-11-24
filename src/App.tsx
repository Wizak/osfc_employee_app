// Import necessary dependencies and components
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import LoginPage from './pages/Login'; // Assuming you have a LoginPage component
import Menu from './pages/Menu';
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
          <IonRouterOutlet>
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/" render={() => <Redirect to="/app" />}/>
              <PrivateRoute path="/app" component={Menu} />
          </IonRouterOutlet>
      </IonReactRouter>
    </AuthProvider>
  </IonApp>
);

const PrivateRoute: React.FC<{ path: string; component: React.ComponentType<any> }> = (props) => {
  const { getPermissions } = useAuth();
  const permissions = getPermissions();
  return permissions ? <Route {...props} /> : <Redirect to="/login" />;
};

export default App;
