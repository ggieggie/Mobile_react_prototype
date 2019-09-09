import React from 'react';
import { RouteComponentProps } from 'react-router';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar, IonMenuButton, IonButtons } from '@ionic/react';

const Resevation_Tab: React.FunctionComponent<RouteComponentProps> = ({ history }) => {

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>予約</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem href="/Reservation_tab/details">
            <IonLabel>
              <h2>Go to detail</h2>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
};

export default Resevation_Tab;