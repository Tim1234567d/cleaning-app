import React from "react";
import classes from './companyInfo.module.css'
import CompanyHistory from "./CompanyHistory";
import CompanyMission from "./CompanyMission";

const CompanyInfo = () => { 
    return(

        <section className={classes.wrapper}>
            <div class={classes.tottori__all}> 
                <CompanyHistory/>
                <CompanyMission/>     
            </div>
       </section>
       

    )
}

export default CompanyInfo;