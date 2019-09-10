import React from 'react';
import { IonToolbar,  IonContent, IonHeader, IonTitle, IonItem, IonInput, IonButton } from '@ionic/react';

const Login: React.FunctionComponent = () => {
    return (
      <>
        <IonHeader>
          <IonToolbar>
            <IonTitle>ログイン</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        <form action="">
            <IonItem>
                <IonInput type="text" placeholder="Username"></IonInput>
            </IonItem>
            
            <IonItem>
                <IonInput type="password" placeholder="Password"></IonInput>      
            </IonItem>
        </form>
        <IonButton ></IonButton>     
        </IonContent>
      </>
    );
  };
  
  export default Login;