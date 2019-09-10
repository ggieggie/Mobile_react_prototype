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
  IonTabs,
  // side menu
  IonSplitPane
} from '@ionic/react';
// add sidemenu
import { AppPage } from './declarations';
import Menu from './components/Menu';
import List from './pages/List';
// add login
import Login from './pages/Login';
import Modal from './pages/Modal';
// add tabs
import { IonReactRouter } from '@ionic/react-router';
import { home, clock, medkit, clipboard, logOut, list } from 'ionicons/icons';
import Home_Tab from './pages/Home_Tab';
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

//sidemenuのルーティングセットを用意
const appPages: AppPage[] = [
  {
    title: 'ホーム',
    url: '/home_tab',
    icon: home
  },
  {
    title: '予約',
    url: '/reservation_tab',
    icon: clock
  },
  {
    title: 'クリニック',
    url: '/clinic_tab',
    icon: medkit
  },   
  {
    title: '明細',
    url: '/details_tab',
    icon: clipboard
  },   {
    title: 'ログアウト',
    url: '/Login',
    icon: logOut
  },   {
    title: 'List(test)',
    url: '/home_tab/list',
    icon: list
  },  
];

const App: React.FunctionComponent = () => (
  <IonApp>
    <IonReactRouter>
    <IonSplitPane contentId="main">
        <Menu appPages={appPages} />
        <IonPage id="main">
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/" render={() => <Redirect to="/Home_tab" />} />
              <Route path="/login" component={Login} exact={true} />
              <Route path="/blog" component={Modal} exact={true} />
              <Route path="/:tab(home_tab)" component={Home_Tab} exact={true} />
              <Route path="/:tab(reservation_tab)" component={Reservation_Tab} exact={true} />
              <Route path="/:tab(reservation_tab)/Details" component={Details} />
              <Route path="/:tab(clinic_tab)" component={Clinic_Tab} />
              <Route path="/:tab(details_tab)" component={Details_Tab} />
              <Route path="/:tab(home_tab)/list" component={List} exact={true} />
              <Route path="/:tab(reservation_tab)/list" component={List} exact={true} />
              <Route path="/:tab(clinic_tab)/list" component={List} exact={true} />
              <Route path="/:tab(details_tab)/list" component={List} exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="Home_tab" href="/Home_tab">
                <IonIcon icon={home} />
                <IonLabel>ホーム</IonLabel>
              </IonTabButton>
              <IonTabButton tab="Reservation_tab" href="/Reservation_tab">
                <IonIcon icon={clock} />
                <IonLabel>予約</IonLabel>
              </IonTabButton>
              <IonTabButton tab="Clinic_tab" href="/Clinic_tab">
                <IonIcon icon={medkit} />
                <IonLabel>クリニック</IonLabel>
              </IonTabButton>
              <IonTabButton tab="Details_tab" href="/Details_tab">
                <IonIcon icon={clipboard} />
                <IonLabel>詳細</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonPage>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
