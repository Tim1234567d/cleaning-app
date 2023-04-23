import React from "react";
import classes from "./ChooseUs.module.css"

const ChooseUsItem = ({chooseUs}) => {
    return(
        <div>
        <div className={classes.chooseUs_img_wrapper}>
            <img src={chooseUs.img} alt="choose us img" className={classes.chooseUs_img}/>
        </div>
        <h3 className={classes.chooseUs_card_title}>{chooseUs.title}</h3>
        <p className={classes.chooseUs_card_des}>
             {chooseUs.text}
        </p>
       
    </div>
    ) 
} 

export default ChooseUsItem;