import React from "react";
import { Link } from "react-router-dom";
import './Services.css'

const OneService = ({services}) => {      

    return (  
       
      <div  key={services.id}> 
      <Link to={`/ServiceDetail/${services.id}`} >  
      <div className="service__card">
       <img className="service_backImg" src={services.backImg} alt="" /> 
       <div className="service_title_wrapper">
          <h3 className="servicesTitle">{services.title}</h3>
        </div>
         
        </div>
        </Link>

        </div>
         
  )
    
}

export default OneService;


