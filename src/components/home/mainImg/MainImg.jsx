import React from "react";
import  classes from "./MainImg.module.css"
 
const MainImg = () => {

    return (
        <> 
        <div  className={classes.intro}> 
        <div className={classes.wrapper}>
            <h1 className={classes.intro__title}>ЧИСТОТА И ПОРЯДОК В ВАШЕМ ДОМЕ</h1>
            <p className={classes.intro__subtitle}>
            Уборка квартир, домов и офисов в Бишкеке<br/>
            <div className={classes.hey}> <a  className={classes.intro_num} href="tel:+996709919582"> <i><img src="https://pngset.com/images/background-white-phone-icon-clipart-call-icon-white-texture-white-board-clothing-apparel-transparent-png-767470.png" className={classes.phoneIcon} alt="phoneIcon" /></i> 0709 91 95 82 </a>
            
            <a className={classes.intro_num2} href="https://api.whatsapp.com/send?phone=+996709919582"> <i><img src="https://www.svgrepo.com/show/176768/whatsapp-social-media.svg" className={classes.whatsapp_icon} alt="" /></i> 0709 91 95 82 </a></div>

            </p>    

            </div> 
            </div>
        </>

       
       
    )
}
export default MainImg;