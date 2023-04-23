import React from "react";
import SocialList from "./SocialList";
import classes from "./Footer.module.css"
import {footer_icon} from "./data"

const Footer = () => {

return ( 
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.logo}>Logo</div>

        <SocialList  social={footer_icon}/>

        <div className={classes.footer_cantacts}>
          <div>+996 709 91 95 82</div>
          <div>ул.Ak-cholmok 115/1</div>
          <div>cleaningBishkek@gmail.com</div>
        </div>
      </div>
    </footer>
)
}

export default Footer;