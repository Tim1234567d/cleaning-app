import React, { useState } from "react";
import CompanyInfo from "./companyInfo/CompanyInfo";
import EmployeeInfo from "./employeeInfo/EmployeeInfo";
import s from './companyInfo/companyInfo.module.css'

// import TeamInfo from "./teamInfo/teamInfo";


const AboutUs = () => {

    return( 
    
      <div className="wrapper">

      <div className={s.mainBlock} ><img className={s.mainImg} src="https://deepcleaning.ie/wp-content/uploads/2021/06/After-Builders-Cleaning-3-1.jpeg" alt=""/>
      </div>
          <CompanyInfo/>
          <EmployeeInfo/>
      </div>

 
    )
}

export default AboutUs;