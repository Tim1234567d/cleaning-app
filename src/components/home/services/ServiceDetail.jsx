import React, { useEffect, useState } from "react";
import {Services_data} from './data';
import { useParams } from "react-router-dom";
import classes from './Services.module.css'

const ServiceDetail = () => {

  const {id} = useParams(); 

    return(
      Services_data.filter(services => services.id === id ).map((services) => (
          
     <div className={classes.serviceDetail_wrapper}>
            
      <div className={classes.serviceDetail_container}>
        <div className={classes.serviceDetail_main__info}> 
          <h1></h1>
          <div className={classes.serviceDetail_photo}><img src={services.backImg} alt="nature"  />
          </div>
          <h3>{services.title}</h3>
          <p className={classes.serviceDetail_text}> 
         {services.text}
            <br />
            <br />
          {services.p1}
          <br />
          <br />
          {services.p2}
          <br />
          <br />
          {services.p3}
          </p> 

          <br/>
          <br/>
 
          <h3>{services.subtitle}</h3>
          <p className={classes.serviceDetail_text}>-Удалим пыль со стен, потолка с помощью мопа с насадками<br/>-Протрем подоконники, батареи и радиаторы<br/>-Почистим и протрем люстры (кроме хрустальных),торшеры, бра<br/>-Помоем зеркала и стеклянные поверхности<br/>-Удалим пыль с бытовой техники<br/>-Заменим постельное белье (по желанию)<br/>-Удалим пыль с горизонтальных и вертикальных поверхностей мебели<br/>-Удалим пыль с предметов интерьера<br/>-Почистим мягкую мебель пылесосом со специальной насадкой для мягкой мебели<br/>-Протрем кожаную мебель<br/>-Пропылесосим ковры и ковровые покрытия<br/>-Почистим выключатели и розетки<br/>-Протрем межкомнатные двери, наличники, дверные ручки<br/>-Помоем полы , плинтусы</p>
        </div>


        <div className={classes.serviceDetail_sidebar}>
      

        </div>
       
      </div> 
    

        </div>
    ))

        )
}

export default ServiceDetail;