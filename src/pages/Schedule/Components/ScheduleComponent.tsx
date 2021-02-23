import { IonList ,IonItem,IonButton, IonSpinner,IonModal, IonHeader,IonIcon} from '@ionic/react';
import React, { useEffect,useState } from 'react';
import { getSchedules } from '../../Helper/api';
import { Schedule } from '../Model/Schedule';
import DocViewer from "react-doc-viewer";


const ScheduleComponent=()=>{

const [schedules,setSchedules]=useState<Schedule[]>([])
const [loading,setLoading] = useState(true);


useEffect(()=>{
    getSchedules()
    .then((data)=>{
        setSchedules(data);
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
                        {
                            schedules ?
                            (
                                schedules.map((s,i)=>!s.status&&(
                                    <div>
                                    <IonButton  expand="block"  target="_blank" href={s.schedule}>
                                        {s.name}
                                    </IonButton>
                                    <br/>
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
                )
            }                   
        
        </div>
        
    )
}
export default ScheduleComponent;