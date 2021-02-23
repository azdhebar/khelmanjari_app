import { IonSlide, IonSlides, IonSpinner } from '@ionic/react';
import React,{useEffect,useState} from 'react';
import 'react-awesome-slider/dist/styles.css';
import { getSliders } from '../../Helper/api';
import { Slider } from '../Model/Slider';

export interface ImageObj{
   url:string
}


const SliderComponent = ()=>{

    const slideOpts = {
        initialSlide: 1,
        speed: 400
      };

    const [sliders,setSliders]  = useState<Slider[]>([]);
   const [loading,setLoading] = useState(true);
  
   useEffect(()=>{
        getSliders()
        .then((data:Slider[])=>{
        setSliders(data)
        console.log(sliders)
        
        setLoading(false);
       
        })
   },[])
    return(
     <div>
     {!loading? <IonSlides pager={true} options={slideOpts}>
      
     {sliders.map((s,i)=>(
          <IonSlide key={i}>
              <img className="rounded" src={s.image}/>
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

export default SliderComponent;