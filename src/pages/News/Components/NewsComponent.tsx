import { IonList ,IonItem,IonButton, IonSpinner,IonModal, IonHeader,IonIcon} from '@ionic/react';
import React, { useEffect,useState } from 'react';
import { getNews, getSchedules } from '../../Helper/api';
import { News } from '../Model/News';
import DocViewer from "react-doc-viewer";


const NewsComponent=()=>{

const [news,setNews]=useState<News[]>([])
const [loading,setLoading] = useState(true);


useEffect(()=>{
    getNews()
    .then((data)=>{
        setNews(data);
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
                            news ?
                            (
                                news.map((s,i)=>!s.status&&(
                                    <div>
                                    <IonButton expand="full" target="_blank" href={s.description}>
                                        {s.title}
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
export default NewsComponent;