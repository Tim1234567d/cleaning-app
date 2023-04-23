import React from "react";
import classes from './cleaningInfo.module.css'

const CleaningInfoItem3 = () => {
    return (
        <>
        <div className={classes .tottori__cards}>
 
           <div className={classes .tottor_card-1}>
          <img src="https://www.firstchoicewarehouse.com.au/fcwp/wp-content/uploads/Main-Image-1024x785.jpg" alt="tottori" className={classes.cleaningImg}/>
           </div>   
      </div>

      <div className={classes .tottori__cards}>

           <div className={classes .tottori_text-1}>

          <div className={classes .title-1}> <h2 className={classes.title-1-1}>Ванна и туалет</h2></div>

          <div className={classes .subtitle-1}><p className={classes.subtitle-1-1}>-Помыть ванную или душевую кабину <br/>-Помыть раковину<br/>-Помыть унитаз<br/>-Помыть биде<br/>-Помыть лоток<br/>-Помыть настенную плитку<br/>-Помыть стиральную машину</p></div>

          {/* <div><a href="#" className="card-link">VIEW PREFECTURE</a></div> */}
           </div>
      </div>
      
      </>
    )
}

export default CleaningInfoItem3;