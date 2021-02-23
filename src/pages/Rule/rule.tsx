import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import RuleComponent from './Components/RuleComponent'

const Rule=()=>{
    return(
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Rules</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Rules</IonTitle>
            </IonToolbar>
          </IonHeader>
          <div style={{margin:"2%"}}>
          <RuleComponent/>
          </div>

        </IonContent>
      </IonPage>
    
    )
}

export default Rule;