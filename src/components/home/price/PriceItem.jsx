import React from "react";
import classes from './Price.module.css'

const PriceItem = ({priceData}) => {

    return ( 
        <div className={classes.top__card}>

        <h3 className={classes.priceDes}>{priceData.title}</h3>
        <p className={classes.price}>  {priceData.price}</p>
        <h3>Что входит в уборку?</h3>
        <p className={classes.aboutPrice}>
           <p>{priceData.text1}</p> 
           <p>{priceData.text2}</p>
           <p>{priceData.text3}</p>
           <p>{priceData.text4}</p>
           <p>{priceData.text5}</p>
           <p>{priceData.text6}</p>
           <p>{priceData.text7}</p>
           <p>{priceData.text8}</p>
           <p>{priceData.text9}</p>
           <p>{priceData.text10}</p>
           <p>{priceData.text11}</p>
           <p>{priceData.text12}</p>
           <p>{priceData.text13}</p>
           <p>{priceData.text14}</p>
           <p>{priceData.text15}</p>
           <p>{priceData.text16}</p>
           <p>{priceData.text17}</p>
            
        </p>
       
        <button className={classes.price_btn}> <a href="https://wa.me/996709919582">Заказать уборку</a> </button>
    </div>
    )
}

export default PriceItem;