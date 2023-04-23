import React, { useEffect } from "react";
import ChooseUsItem from "./ChooseUsItem";
import {chooseUsData} from "./data"
import classes from "./ChooseUs.module.css"

const ChooseUs = () => { 
  return (
    
     <section className={classes.chooseUs}>
        <div className={classes.wrapper}>
            <h2 className={classes.chooseUs_title}>ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
            <div className={classes.chooseUs_cards}>

                { 
                    chooseUsData.map((chooseUs) => (
                  <ChooseUsItem  chooseUs = {chooseUs}/>
                      
                    ))
                }

            </div>
        </div>
    </section>
      
)

}

export default ChooseUs;