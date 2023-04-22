import React from "react";
import s from './companyInfo.module.css'
import CompanyHistory from "./CompanyHistory";
import CompanyMission from "./CompanyMission";

const CompanyInfo = () => { 
    return(

        <section className="wrapper">
            <div class={s.tottori__all}> 
                <CompanyHistory/>
                <CompanyMission/>     
            </div>
       </section>
       

    )
}

export default CompanyInfo;