import React from "react";
import { useState } from "react";
import './Header.css' 
import { Link} from "react-router-dom";
import {FaTimes} from "react-icons/fa"



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
      <nav className='navbar'>

        <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
          logo
        </Link>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item' >
            <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
              Главная
            </Link> 
          </li>
         
          <li className='nav-item'>
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}>
              Услуги
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/aboutUs'
              className='nav-links'
              onClick={closeMobileMenu}>
              О нас
            </Link> 
          </li>
         
          <li className='nav-item'>
            <a className='nav-links nav-links_contact' href="https://wa.me/996709919582">
              <i>
                <img src="https://www.svgrepo.com/show/176768/whatsapp-social-media.svg" className="whatsappIcon" alt="whatsappIcon" />
              </i> Связаться с нами
            </a>
          </li>

        </ul>

        <button className={closeToggle ? "nav-btn active" : "nav-btn"}  onClick={closeMobileMenu}>
              <FaTimes/>
        </button>        
  
      </nav>
      </header>
  );
     
}

export default Header;