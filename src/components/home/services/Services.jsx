import React from "react"
import OneService from "./OneService";
import {Services_data} from "./data";
import classes from "./Services.module.css"
 
const Services = () => {

return (
      <section className={classes.services}>
      <div className={classes.wrapper}>
        <h2 className={classes.services_title}>НАШИ УСЛУГИ  </h2>
       
        <div className={classes.service__cards}> 


          {Services_data.map( (services) => 
        <OneService services = {services} />

          )} 
        </div>
      </div>
      </section>
   
    )

}

export default Services;