import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { apps, flash, send, card, clock, medkit, clipboard } from 'ionicons/icons';
import Insurance_Tab from './pages/Insurance_Tab';
import Reservation_Tab from './pages/Reservation_Tab';
import Clinic_Tab from './pages/Clinic_Tab';
import Details_Tab from './pages/Details_Tab';
import Details from './pages/Details';

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

const App: React.FunctionComponent = () => (
  <IonApp>
    <IonReactRouter>
      <IonPage id="main">
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/:tab(insurance_tab)" component={Insurance_Tab} exact={true} />
            <Route path="/:tab(reservation_tab)" component={Reservation_Tab} exact={true} />
            <Route path="/:tab(reservation_tab)/Details" component={Details} />
            <Route path="/:tab(clinic_tab)" component={Clinic_Tab} />
            <Route path="/:tab(details_tab)" component={Details_Tab} />
            <Route exact path="/" render={() => <Redirect to="/Insurance_tab" />} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="Insurance_tab" href="/Insurance_tab">
              <IonIcon icon={card} />
              <IonLabel>保険</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Reservation_tab" href="/Reservation_tab">
              <IonIcon icon={clock} />
              <IonLabel>予約</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Clinic_tab" href="/Clinic_tab">
              <IonIcon icon={medkit} />
              <IonLabel>病院</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Details_tab" href="/Details_tab">
              <IonIcon icon={clipboard} />
              <IonLabel>詳細</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonPage>
    </IonReactRouter>
  </IonApp>
);

export default App;
