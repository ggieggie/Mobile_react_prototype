import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton } from '@ionic/react';

const Clinic_TabPage: React.FunctionComponent = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>病院</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent />
    </>
  );
};

export default Clinic_TabPage;
