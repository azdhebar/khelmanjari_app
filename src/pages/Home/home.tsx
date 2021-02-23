import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import SliderComponent from './Components/Slider';

import LiveScoreComponent from './Components/LiveScore';


const Home=()=>{
    return(
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Home</IonTitle>
            </IonToolbar>
          </IonHeader>
          <div style={{margin:"2%"}}>
          <SliderComponent/>
          <div style={{marginBottom:"5%"}}></div>
          <LiveScoreComponent/>
          </div>
        </IonContent>
      </IonPage>
    
    )
}

export default Home;