import { IonList ,IonItem,IonButton, IonSpinner,IonContent,IonAlert,IonModal,IonRow,IonCard,IonText,IonCardHeader, IonHeader,IonIcon, IonGrid,IonThumbnail,IonImg, IonCardContent} from '@ionic/react';
import React, { useEffect,useState } from 'react';
import { getCoordinators, getGames, getOnTheSpot, getResults, getRules, getSchedules } from '../../Helper/api';
import { Coordinator } from '../Model/Coordinator';

import parse from 'html-react-parser';


const CoordinatorComponent=()=>{

const [coordinators,setCoordinators]=useState<Coordinator[]>([])
const [loading,setLoading] = useState(true);
const [showModal,setShowModal]=useState(false)
const [content,setContent] = useState("");
const [coordinator,setCoordinator]=useState("");




useEffect(()=>{
    getCoordinators()
    .then((data)=>{
        setCoordinators(data);
        setLoading(false)
    })
},[])
    return(
        <div>
                  <IonContent>
            <IonAlert
          isOpen={showModal}
          onDidDismiss={() => setShowModal(false)}
          cssClass='my-custom-class'
          header={coordinator}
          message={content}
          buttons={['OK']}
        />
      <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
    </IonContent>
            <br/>
            {
                loading?(
                    <div className="ion-text-center">
                        <IonSpinner/>
                    </div>  
                ):(
                    <div>
                        <div className="container">
                        <div className="row imagetiles">
 
                        
                        {
                            coordinators ?
                            (
                                coordinators.map((s,i)=>!s.status &&(
                                   
                                    
                                    <div style={{paddingLeft:'0',paddingRight:'0'}} className="col-6 col-lg-4 col-md-4 col-sm-6 col-xs-6 shadow-4-strong">
                                     
                                    <button  style={{opacity:"0px",backgroundColor:'transparent'}} className="button mb-2 " onClick={(e)=>{
                                       setContent(s.coordinators)

                                        setCoordinator(s.coordinator)
                                       setShowModal(true)}}>
                                     <img  src={s.Game.image}  width={window.screen.width} className="rounded " style={{height:"120px",objectFit:"cover",overflow:'hidden'}}/>
                                 
                                    </button>
                                </div>
                                  
                                  
                                    
                                ))
                               
                            )
                            
                            :(
                                <div className="ion-text-center">
                                Data Not Found
                                </div>
                            )
                        }
                        </div>
                        </div>
                        </div>
                )
            }                   
        
        </div>
        
    )
}
export default CoordinatorComponent;