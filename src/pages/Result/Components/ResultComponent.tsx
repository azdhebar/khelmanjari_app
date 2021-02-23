import { IonList ,IonItem,IonButton, IonSpinner,IonModal,IonRow, IonHeader,IonIcon, IonGrid,IonThumbnail,IonImg} from '@ionic/react';
import React, { useEffect,useState } from 'react';
import { getResults, getSchedules } from '../../Helper/api';
import { Result } from '../Model/Result';


const ResultComponent=()=>{

const [results,setResults]=useState<Result[]>([])
const [loading,setLoading] = useState(true);


useEffect(()=>{
    getResults()
    .then((data)=>{
        setResults(data);
        setLoading(false)
    })
},[])
    return(
        <div>
        
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
                            results ?
                            (
                                results.map((s,i)=>!s.status&&(
                                   
                                    <div style={{paddingLeft:'0',paddingRight:'0'}} className="col-6 col-lg-4 col-md-4 col-sm-6 col-xs-6 shadow-4-strong">
                                     
                                    <a  style={{opacity:"0px",backgroundColor:'transparent'}} className="button mb-2 " target="_blank" href={s.result} >
                                     <img  src={s.Game.image}  className="rounded " width={window.screen.width} style={{height:"120px",objectFit:"cover",overflow:'hidden'}}/>
                                 
                                    </a>
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
export default ResultComponent;