import React, { useState } from "react";
import CompanyInfo from "./companyInfo/CompanyInfo";
import EmployeeInfo from "./employeeInfo/EmployeeInfo";
import classes from './companyInfo/companyInfo.module.css'

const AboutUs = () => {

    return( 
    
      <div className={classes.wrapper}>

      <div className={classes.mainBlock} ><img className={classes.mainImg} src="https://deepcleaning.ie/wp-content/uploads/2021/06/After-Builders-Cleaning-3-1.jpeg" alt="main img"/>
      </div>
          <CompanyInfo/>
          <EmployeeInfo/>
      </div>

 
    )
}

export default AboutUs;