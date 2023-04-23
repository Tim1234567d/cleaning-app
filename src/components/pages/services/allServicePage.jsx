import React, { useEffect } from "react";
import CleaningInfo from "./cleaningInfo";
import Services from "./services";
import classes from './services.module.css'

 
const AllServices = () => {
    return (
        <section className={classes.services_section}>
        <div className={classes.wrapper}>

          <div>
             <img className={classes.mainImg} src="https://www.pccsindia.com/wp-content/uploads/2022/02/8GKjllLOqVMMmsFYVvTuKuOxKCHCIO9Y1608670141.jpg" alt="11"/>
          </div>

          <Services />
          <CleaningInfo />
        </div> 
        
      </section> 
    )
}

export default AllServices;
