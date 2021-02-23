import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CoordinatorComponent from './Components/CoordinatorCommponent';

const Coordinator=()=>{
    return(
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Coordinators</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Coordinators</IonTitle>
            </IonToolbar>
          </IonHeader>
          <div style={{margin:"2%"}}>
            <CoordinatorComponent/>
          </div>
        </IonContent>
      </IonPage>
    
    )
}

export default Coordinator;