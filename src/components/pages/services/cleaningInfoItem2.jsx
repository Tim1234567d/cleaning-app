import React from "react";
import classes from './cleaningInfo.module.css'

const CleaningIngoItem2 = () => {
    return (
        <>
        <div class={classes.tottori__cards}>
    
            <div class={classes.tottori_text-2}>

          <div class={classes.title-2}><h2 class={classes.title-2-2}>Кухна и столовая</h2></div>

          <div class={classes.subtitle-2}>  <p class={classes.subtitle-2-2}>Кухня и столовая<br/>-Помыть раковину<br/>-Помыть столешницу<br/>-Помыть плиту<br/>-Помыть обеденный стол-Помыть посуду<br/>-Помыть микроволновку<br/>-Помыть шкафы на кухне<br/>-Помыть холодильник<br/>-Помыть духовку<br/>-Помыть вытяжку </p></div>

            </div>
        </div>

        <div class={classes.tottori__cards}>

          <div class={classes.tottori_card-2}>
          <img src="https://static.tildacdn.com/tild6563-3262-4737-a264-373264373932/download.jpg" alt="tottori" className={classes.cleaningImg}/>
         </div> 
        </div>
        </>
    )
}

export default CleaningIngoItem2