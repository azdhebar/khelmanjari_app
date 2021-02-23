import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ResultComponent from './Components/ResultComponent'

const Result=()=>{
    return(
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Result</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Result</IonTitle>
            </IonToolbar>
          </IonHeader>
         <div style={{margin:"2%"}}>
        <ResultComponent/>
         </div>
        </IonContent>
      </IonPage>
    
    )
}

export default Result;