import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton } from '@ionic/react';

const Details_Tab: React.FunctionComponent = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          < IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>詳細</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent />
    </>
  );
};

export default Details_Tab;
