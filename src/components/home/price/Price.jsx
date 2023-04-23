import React from "react";
import classes from "./Price.module.css"
import PriceItem from "./PriceItem";
import {priceData} from "./data"
const Price = () => {

    return (
        <section className={classes.price_wrapper}>
    <div className={classes.wrapper}> 
        <h2 className={classes.title}>
            Стоимость уборки помещений 
        </h2>
        <p className={classes.subtitle}>Цена зависит от площади помещения</p>
        <h3 className={classes.price_subtitle}>Для квартир</h3>
        <div className= {classes.top__cards}>

        { 
            priceData.map((priceData) => (
                <PriceItem priceData={priceData} />
            ))
        }


        </div>

        <h3 className={classes.price_subtitle}>Для дома </h3>

        <div className= {classes.top__cards}> 
       {
            priceData.map((priceData) => (
                <PriceItem priceData={priceData} />
            ))
        } </div>
        <h3 className={classes.price_subtitle}>Для Бизнеса <i className={classes.underLine}></i> </h3>

        <div className= {classes.top__cards}> 
       {
            priceData.map((priceData) => (
                <PriceItem priceData={priceData} />
            ))
        } </div>

        
       
    </div> 
</section>
    )
}

export default Price;