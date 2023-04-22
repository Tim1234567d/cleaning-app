import React from "react";
import { useState } from "react";
import { Link} from "react-router-dom";
import {FaTimes} from "react-icons/fa"
import classes from "./Header.module.css"



const Header = () => { 

  const [click, setClick] = useState(false);
  const [closeToggle, setCloseToggle] = useState(false)

  const handleClick = () => {
    setClick(!click);
    setCloseToggle(!click)
  } 

  const closeMobileMenu = () => {
    setClick(false);
    setCloseToggle(false)
  } 
  
  return ( 
    <header>
      <nav className={classes.navbar}>

        <Link to='/home' className={classes.navbar_logo} onClick={closeMobileMenu}>
          logo
        </Link>

        <div className={classes.menu_icon} onClick={handleClick}>
          <i className={click ? classes.fa_times : classes.fa_bars} />
        </div>
        <ul className={click ? classes.nav_menu_active : classes.nav_menu}>
          <li className={classes.nav_item }>
            <Link to='/home' className= {classes.nav_links } onClick={closeMobileMenu}>
              Главная
            </Link> 
          </li>
         
          <li className={classes.nav_item }>
            <Link
              to='/services'
              className={classes.nav_links} 
              onClick={closeMobileMenu}>
              Услуги
            </Link>
          </li>

          <li className={classes.nav_item}>
            <Link
              to='/aboutCompany'
              className={classes.nav_links}
              onClick={closeMobileMenu}>
              О нас
            </Link> 
          </li>
         
          <li className={classes.nav_item}>
            <a className= {classes.whatsapp_link} href="https://wa.me/996709919582">
              <i>
                <img src="https://www.svgrepo.com/show/176768/whatsapp-social-media.svg" className={classes.whatsappIcon} alt="whatsappIcon" />
              </i> Связаться с нами
            </a>
          </li>

        </ul>

        <button className={closeToggle ? classes.nav_btn_active : classes.nav_btn}  onClick={closeMobileMenu}>
              <FaTimes/>
        </button>        
  
      </nav>
      </header>
  );
     
}

export default Header;