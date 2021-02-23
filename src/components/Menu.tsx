import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonToggle,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, documentAttachOutline, documentAttachSharp, documentOutline, documentSharp, gameControllerOutline, gameControllerSharp, handRightOutline, handRightSharp, heartOutline, heartSharp, homeOutline, homeSharp, mailOutline, mailSharp, moonOutline, paperPlaneOutline, paperPlaneSharp, peopleOutline, peopleSharp, timeOutline, timeSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/home',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Schedules',
    url: '/schedule',
    iosIcon: timeOutline,
    mdIcon: timeSharp
  },
  {
    title: 'Results',
    url: '/result',
    iosIcon: documentOutline,
    mdIcon: documentSharp
  },
  {
    title: 'News',
    url: '/news',
    iosIcon: documentAttachOutline,
    mdIcon: documentAttachSharp
  },
  {
    title: 'Games',
    url: '/games',
    iosIcon: gameControllerOutline,
    mdIcon: gameControllerSharp
  },
  
  {
    title: 'Rules',
    url: '/rules',
    iosIcon: handRightOutline,
    mdIcon: handRightSharp
  },
  {
    title: 'Coordinators',
    url: '/coordinators',
    iosIcon: peopleOutline,
    mdIcon: peopleSharp
  },

];


const Menu: React.FC = () => {
 
  
  
  
  
  const toggleDarkModeHandler=()=>{
    document.body.classList.toggle('dark');
  }
  
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Khelmanjari</IonListHeader>
        <IonItem>
          <IonIcon slot="start" icon={moonOutline} />
            <IonLabel>Dark Mode</IonLabel>
            
            <IonToggle
              slot="end"
              name="darkMode"
              onIonChange={toggleDarkModeHandler}
            />
            </IonItem>
          <IonNote></IonNote>
          {appPages.map((appPage, index) => {
            return (
              
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

     </IonContent>
    </IonMenu>
  );
};

export default Menu;
