import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ScheduleComponent from './Components/ScheduleComponent';


const Schedule=()=>{
    return(
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Schedules</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Schedules</IonTitle>
            </IonToolbar>
          </IonHeader>
          <div style={{margin:"2%"}}>
          <ScheduleComponent/>
          </div>
        </IonContent>
      </IonPage>
    
    )
}

export default Schedule;