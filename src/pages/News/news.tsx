import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import NewsComponent from './Components/NewsComponent';


const News=()=>{
    return(
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>News</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">News</IonTitle>
            </IonToolbar>
          </IonHeader>
         <div style={{margin:"2%"}}>
        <NewsComponent/>
         </div>
        </IonContent>
      </IonPage>
    
    )
}

export default News;