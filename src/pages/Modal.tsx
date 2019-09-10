import React, { useState } from 'react';
import { IonModal, IonButton, IonContent, IonHeader, IonToolbar, IonTitle, IonInput, IonItem } from '@ionic/react';

export const Modal: React.FunctionComponent = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonContent>
      <IonModal isOpen={showModal}>
        <IonHeader>
            <IonToolbar>
                <IonTitle>CF mobile app test</IonTitle>
            </IonToolbar>
        </IonHeader> 
            <div className="ion-text-center">
                <img src="/assets/free-hospital.jpg" alt="" width="30%" />
            </div>
            <h1 className="ion-text-center conduit-title">仮ログイン画面</h1>      
        <form action="">
            <IonItem>   
                <IonInput type="text" placeholder="Username"></IonInput>
            </IonItem>
            <IonItem>
                <IonInput type="password" placeholder="Password"></IonInput>      
            </IonItem>
        </form>      
        <IonButton expand="full" onClick={() => setShowModal(false)} color="danger">ログイン </IonButton>
      </IonModal>
      <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
    </IonContent>
  );
};

export default Modal;