import React from "react";
import classes from "./cleaningInfo.module.css"
import CleaningInfoItem from "./cleaningInfoItem";
import CleaningIngoItem2 from "./cleaningInfoItem2";
import CleaningInfoItem3 from "./cleaningInfoItem3";

const CleaningInfo = () => {
    return(
        <section class={classes.wrapper}>

        <div className={classes.wrapper_full}>
        <h1 className={classes.service_title}>Что входит в уборку помещения</h1>
        <p className={classes.service_title2}>Экипаж приедет в удобное для вас время,<br /> создаст чистоту и уют в Вашем доме</p>
 
            <div className={classes.tottori__all}>

                <CleaningInfoItem />
                <CleaningIngoItem2 />
                <CleaningInfoItem3 />
            </div> 
            
        </div>
    </section>
    )
}

export default CleaningInfo;