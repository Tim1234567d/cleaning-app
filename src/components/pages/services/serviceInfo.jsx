import React from "react";
import { Link } from "react-router-dom";
import classes from './services.module.css'

const ServiceInfo = ({services}) => {      

    return (  
       
      <div  key={services.id}> 
      <Link to={`/serviceDetail/${services.id}`} >  
      <div className={classes.top__card}>
       <img className={classes.backImg} src={services.backImg} alt="service img" /> 
       <div className={classes.block}>
          <h3 className={classes.service_title}>{services.title}</h3>
        
        </div>
         
        </div>
        </Link>

        </div>
         
  )
    
}

export default ServiceInfo;


