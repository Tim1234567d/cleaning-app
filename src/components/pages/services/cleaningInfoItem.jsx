import React from "react";
import classes from './cleaningInfo.module.css'

const CleaningInfoItem = () => {
    return (
        <>
          <div className={classes.tottori__cards}> 
    
             <div className={classes.tottor_card-1}> 
            <img src="https://static.tildacdn.com/tild3963-3865-4263-a434-613339646466/download.jpg" alt="tottori" className={classes.cleaningImg}/>
             </div>   
        </div>

        <div className={classes.tottori__cards}>

             <div className={classes.tottori_text-1}>

            <div className={classes.title_1}> <h2 className={classes.title-1-1}>Жилые комнаты</h2></div>
 
            <div className={classes.subtitle-1}><p className={classes.subtitle-1-1}>-Помыть пол <br/>-Почистить ковер<br/> -Помыть окна<br/> -Помыть окна на балконе<br/> -Убрать балкон <br/>-Почистить мебель <br/>-Протереть пыль<br/>-Погладить вещи (до 30 минут)<br/>-Помыть зеркала<br/>-Помыть люстру<br/>-Застелить постель<br/>-Сложить вещи<br/>-Вынести бытовой мусор до 30 литров<br/>-Убраться в гардеробной<br/>-Убраться внутри шкафов<br/>-Протереть стены </p></div>

             </div>
        </div>
        
        </>
    )
}

export default CleaningInfoItem;