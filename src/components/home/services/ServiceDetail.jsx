import React from "react";
import {Services_data} from './data';
import { useParams } from "react-router-dom";
import classes from './Services.module.css'

const ServiceDetail = () => {

  const {id} = useParams(); 

    return(
      Services_data.filter(services => services.id === id ).map((services) => (
          
     <div className={classes.serviceDetail_wrapper}>
            
      <div className={classes.serviceDetail_container}>
        <div className={classes.serviceDetail_main__info}> 
          <h1></h1>
          <div className={classes.serviceDetail_photo}><img src={services.backImg} alt="nature"  />
          </div>

          <h3 className={classes.serviceDetail_subtitle}>{services.title}</h3>
          <p className={classes.serviceDetail_text}> {services.text}</p> 
          <p className={classes.serviceDetail_text} >{services.p1}</p>
          <p className={classes.serviceDetail_text} >{services.p2}</p>
          <p className={classes.serviceDetail_text} >{services.p3}</p>

          <h3 className={classes.serviceDetail_subtitle}>{services.subtitle}</h3>
          <p className={classes.serviceDetail_text2}>{services.task1}</p>
          <p className={classes.serviceDetail_text2} >{services.task2}</p>
          <p className={classes.serviceDetail_text2} >{services.task3}</p>
          <p className={classes.serviceDetail_text2} >{services.task4}</p>
          <p className={classes.serviceDetail_text2} >{services.task5}</p>
          <p className={classes.serviceDetail_text2} >{services.task6}</p>
          <p className={classes.serviceDetail_text2} >{services.task7}</p>
          <p className={classes.serviceDetail_text2} >{services.task8}</p>
          <p className={classes.serviceDetail_text2} >{services.task9}</p>
          <p className={classes.serviceDetail_text2} >{services.task10}</p>
          <p className={classes.serviceDetail_text2} >{services.task11}</p>
          <p className={classes.serviceDetail_text2} >{services.task12}</p>
          <p className={classes.serviceDetail_text2} >{services.task13}</p>
          <p className={classes.serviceDetail_text2} >{services.task14}</p>
       </div>  
      </div> 
    

        </div>
    ))

        )
}

export default ServiceDetail;