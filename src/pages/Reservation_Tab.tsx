import React from 'react';
import { RouteComponentProps } from 'react-router';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar, IonMenuButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';

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
        <IonCard className="welcome-card">
          <img src="/assets/tamachi.png" alt=""/>
          <IonCardHeader>
          <IonCardSubtitle>保険適応</IonCardSubtitle>
            <IonCardTitle>頭痛診療</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              診療メニュー説明：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
            <p>
              予約： 1234円
            </p>
          </IonCardContent>
        </IonCard>
        <IonCard className="welcome-card">
          <img src="/assets/tamachi.png" alt=""/>
          <IonCardHeader>
            <IonCardSubtitle>保険適応</IonCardSubtitle>
            <IonCardTitle>頭痛診療</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              診療メニュー説明：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
            <p>
              予約： 1234円
            </p>
          </IonCardContent>
        </IonCard>
        <IonCard className="welcome-card">
          <img src="/assets/tamachi.png" alt=""/>
          <IonCardHeader>
          <IonCardSubtitle>保険適応</IonCardSubtitle>
            <IonCardTitle>頭痛診療</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              診療メニュー説明：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
            <p>
              予約： 1234円
            </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </>
  );
};

export default Resevation_Tab;