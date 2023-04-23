import React from "react";
import { Link } from "react-router-dom";
// import './Services.css'
import classes from "./Services.module.css"

const OneService = ({services}) => {      

    return (  
       
      <div  key={services.id}> 
      <Link to={`/ServiceDetail/${services.id}`} >  
      <div className={classes.service__card}>
       <img className= {classes.service_backImg} src={services.backImg} alt="" /> 
       <div className={classes.service_title_wrapper}>
          <h3 className={classes.service_title}>{services.title}</h3>
        </div>
         
        </div>
        </Link>

        </div>
         
  )
    
}

export default OneService;


