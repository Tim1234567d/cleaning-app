import React from "react"
import ServiceInfo from "./serviceInfo";
import classes from './services.module.css'
import {services_data} from "./data"
 
const Services = () => {

return (
    <section className={classes.section_tours}>
      <div className={classes.wrapper}>

        <h2 className={classes.top__title }>НАШИ УСЛУГИ</h2>

        <div className={classes.top__cards}> 

          {services_data.map( (services) => 
        <ServiceInfo services = {services} />)}

        </div> 
      </div>
    </section> 
    )
 
}

export default Services;