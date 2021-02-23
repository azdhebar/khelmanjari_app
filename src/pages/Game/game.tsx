import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import GameComponent from './Components/GameComponent';


const Game=()=>{
    return(
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Games</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Games</IonTitle>
            </IonToolbar>
          </IonHeader>
         <div style={{margin:"2%"}}>
          <GameComponent/>
         </div>
        </IonContent>
      </IonPage>
    
    )
}

export default Game;