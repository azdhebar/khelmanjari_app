import { IonSpinner ,IonSlide,IonSlides, IonCard, IonCardHeader, IonCardContent, IonText,IonRow,IonCol} from '@ionic/react';
import React,{useState,useEffect} from 'react';
import { getLiveScore } from '../../Helper/api';
import { LiveScore } from '../Model/LiveScore';

const LiveScoreComponent =()=>{
    const [liveScore,setLiveScore]=useState<LiveScore[]>([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        getLiveScore()
        .then((data:LiveScore[])=>{
           
            setLiveScore(data);
            console.log(`LIVE `);
            console.log(data);
            console.log(liveScore);
            setLoading(false)
        })
    },[loading])
    const slideOpts = {
        initialSlide: 1,
        speed: 400
      };
    return(
        <div>

            <h3 style={{marginLeft:"2%"}}>Live Scores</h3>
            <br/>
            {!loading? <IonSlides pager={true} options={slideOpts}>
      
      {liveScore.map((l,i)=>!l.status&&(
           <IonSlide key={i} className="rounded">
           <IonCard style={{width:"100%"}}>
               <IonCardHeader>
                   {l.Game.name}
               </IonCardHeader>
               <IonCardContent>     
                <label style={{marginRight:"2%"}}><strong>{l.team1}</strong></label> vs <label style={{marginLeft:"2%"}}><strong>{l.team2}</strong></label>  
                <br/>
                <label style={{marginRight:"2%"}}><strong>{l.team1}:</strong></label>
                <label>{l.team1_score}</label>
                <br/>
                <label style={{marginRight:"2%"}}><strong>{l.team2}:</strong></label>
                <label>{l.team2_score}</label>
                <br/>
                <p style={{marginRight:"2%"}}><strong>{l.toss_status}:</strong></p>
                <br/>
                
                
                </IonCardContent>
           </IonCard>
           </IonSlide>
        ))}
       </IonSlides>
       :
     <div className="ion-text-center">
       <IonSpinner />
       </div>
    }
            
        </div>
    )
}

export default LiveScoreComponent