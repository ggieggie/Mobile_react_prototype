import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonButton,
  IonModal,
  IonInput
  } from '@ionic/react';
import { book, build, colorFill, grid } from 'ionicons/icons';
import React, { useState }  from 'react';
import './Home_Tab.css';

const Home_Tab: React.FunctionComponent = () => {
  const [showAnime, setShowAnime] = useState(true);
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>ホーム</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <img src="/assets/tamachi.png" alt=""/>
          <IonCardHeader>
            <IonCardSubtitle>クリニックフォアID</IonCardSubtitle>
            <IonCardTitle>0001234567</IonCardTitle>
            <IonCardSubtitle>田町院の診察番号</IonCardSubtitle>
            <IonCardTitle>00１-1234567</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.
            </p>
          </IonCardContent>
        </IonCard>

        <IonModal animated={showAnime} isOpen={showModal} >
          <IonHeader>
              <IonToolbar>
                  <IonTitle>CF mobile app test</IonTitle>
              </IonToolbar>
          </IonHeader> 
          <div className="ion-text-center">
              <img src="/assets/free-hospital.jpg" alt="" width="30%" />
          </div>
          <h1 className="ion-text-center conduit-title">仮ログイン画面</h1>   
          <IonCardContent>
            <p>
              Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.
            </p>
          </IonCardContent>  
        　<form action="">
            <IonItem>   
                <IonInput type="text" placeholder="Username"></IonInput>
            </IonItem>
            <IonItem>
                <IonInput type="password" placeholder="Password"></IonInput>      
            </IonItem>
        　</form>      
        　<IonButton expand="full" onClick={() => setShowModal(false) } color="danger">ログイン </IonButton>
        </IonModal>

        <IonList lines="none">
          <IonListHeader>
            <IonLabel>お知らせ＆イベント情報</IonLabel>
          </IonListHeader>
          <IonItem href="https://ionicframework.com/docs/" target="_blank">
            <IonIcon slot="start" color="medium" icon={book} />
            <IonLabel>あああああ</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
            <IonIcon slot="start" color="medium" icon={build} />
            <IonLabel>いいいいい</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/layout/structure" target="_blank">
            <IonIcon slot="start" color="medium" icon={grid} />
            <IonLabel>ううううう</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/theming/basics" target="_blank">
            <IonIcon slot="start" color="medium" icon={colorFill} />
            <IonLabel>えええええ</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
};

export default Home_Tab;
