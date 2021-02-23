import { IonList ,IonItem,IonButton, IonSpinner,IonModal,IonContent,IonAlert,IonRow,IonCard,IonText,IonCardHeader, IonHeader,IonIcon, IonGrid,IonThumbnail,IonImg, IonCardContent} from '@ionic/react';
import React, { useEffect,useState } from 'react';
import { getGames, getOnTheSpot, getResults, getRules, getSchedules } from '../../Helper/api';
import { Rule } from '../Model/Rule';

import parse from 'html-react-parser';


const RuleComponent=()=>{

const [rules,setRules]=useState<Rule[]>([])
const [loading,setLoading] = useState(true);
const [showModal,setShowModal]=useState(false)
const [content,setContent] = useState("");
const [rule,setRule]=useState("");




useEffect(()=>{
    getRules()
    .then((data)=>{
        setRules(data);
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
          header={rule}
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
                            rules ?
                            (
                                rules.map((s,i)=>!s.status &&(
                                   
                                    
                                    <div style={{paddingLeft:'0',paddingRight:'0'}} className="col-6 col-lg-4 col-md-4 col-sm-6 col-xs-6 shadow-4-strong">
                                     
                                    <button  style={{opacity:"0px",backgroundColor:'transparent'}} className="button mb-2 " onClick={(e)=>{
                                       setContent(s.descriptions)

                                        setRule(s.Game.name)
                                       setShowModal(true)}}>
                                     <img  src={s.Game.image}  className="rounded " width={window.screen.width} style={{height:"120px",objectFit:"cover",overflow:'hidden'}}/>
                                 
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
export default RuleComponent;